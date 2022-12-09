---
id: auction
title: A Private Auction on Aleo
---

## Summary

A first-price sealed-bid auction (or blind auction) is a type of auction in which each participant submits a bid without knowing the bids of the other participants.
The bidder with the highest bid wins the auction.

In this model, there are two parties: the auctioneer and the bidders.
- **Bidder**: A participant in the auction.
- **Auctioneer**: The party responsible for conducting the auction.

We make following assumptions about the auction:
- The auctioneer is honest. That is, the auctioneer will resolve **all** bids in the order they are received. The auctioneer will not tamper with the bids.
- There is no limit to the number of bids.
- The auctioneer knows the identity of all bidders, but bidders do not necessarily know the identity of other bidders.

Under this model, we require that:
- Bidders do not learn any information about the value of other bids.

### Auction Flow
The auction is conducted in a series of stages.
- **Bidding**: In the bidding stage, bidders submit bids to the auctioneer. They do so by invoking the `place_bid` function.
- **Resolution**:  In the resolution stage, the auctioneer resolves the bids in the order they were received. The auctioneer does so by invoking the `resolve` function. The resolution process produces a single winning bid.
- **Finishing**: In this stage, the auctioneer finishes the auction by invoking the `finish` function. This function returns the winning bid to the bidder, which the bidder can then use to claim the item.


## Language Features and Concepts
- `record` declarations
- `console.assert_eq`
- record ownership

## Setup

### 1. Install Leo
Follow the [**Leo Installation Instructions**](./01_installation.md)

### 2. Download the auction example code
Clone the source code for the auction example from [Github](https://github.com/AleoHQ/workshop/tree/master/auction).

## How to Run

### <a id="accounts"></a> Generating Accounts
The `program.json` file contains a private key and address.
This is the account that will be used to sign transactions and is checked for record ownership.
When executing programs as different parties, be sure to set the `private_key` and `address` fields in `program.json` to the appropriate values.
See `./run.sh` for an example of how to run the program as different parties.


The [Aleo SDK](https://github.com/AleoHQ/leo/tree/testnet3) provides a command line interface for generating new accounts.
To generate a new account, run
```
leo account new
```

### Using an input file.
1. Modify `inputs/auction.in` with the desired inputs.
2. Run
```bash
leo run <function_name>
```


* [Step 0: Initializing the Auction](#step0)
* [Step 1: The First Bid](#step1)
* [Step 2: The Second Bid](#step2)
* [Step 3: Select the Winner](#step3)




## <a id="step0"></a> Step 0: Initializing the Auction

You can use the provided accounts or [generate your own](#accounts)

```markdown
Bidder 1:
  Private Key  APrivateKey1zkpG9Af9z5Ha4ejVyMCqVFXRKknSm8L1ELEwcc4htk9YhVK
      Address  aleo1yzlta2q5h8t0fqe0v6dyh9mtv4aggd53fgzr068jvplqhvqsnvzq7pj2ke

Bidder 2:
  Private Key  APrivateKey1zkpAFshdsj2EqQzXh5zHceDapFWVCwR6wMCJFfkLYRKupug
      Address  aleo1esqchvevwn7n5p84e735w4dtwt2hdtu4dpguwgwy94tsxm2p7qpqmlrta4

Auctioneer:
  Private Key  APrivateKey1zkp5wvamYgK3WCAdpBQxZqQX8XnuN2u11Y6QprZTriVwZVc
      Address  aleo1fxs9s0w97lmkwlcmgn0z3nuxufdee5yck9wqrs0umevp7qs0sg9q5xxxzh
```

Swap in the private key and address of the first bidder to program.json.

```jsonld
{
    "program": "auction.aleo",
    "version": "0.0.0",
    "description": "A sealed bid auction",
    "development": {
        "private_key": "APrivateKey1zkpG9Af9z5Ha4ejVyMCqVFXRKknSm8L1ELEwcc4htk9YhVK",
        "address": "aleo1yzlta2q5h8t0fqe0v6dyh9mtv4aggd53fgzr068jvplqhvqsnvzq7pj2ke"
    },
    "license": "MIT"
}
```


## <a id="step1"></a> Step 1: The First Bid

Have the first bidder place a bid of 10.

```javascript=19
    // Returns a new bid.
    // - `bidder` : The address of the account that placed the bid.
    // - `amount` : The amount of the bid.
    // Requires that `bidder` matches the function caller.
    // The owner of the record is set to the entity responsible for running the auction (auction runner).
    // The address of the auction runner is aleo1fxs9s0w97lmkwlcmgn0z3nuxufdee5yck9wqrs0umevp7qs0sg9q5xxxzh.
    transition place_bid(bidder: address, amount: u64) -> Bid {
        // Ensure the caller is the auction bidder.
        console.assert_eq(self.caller, bidder);
        // Return a new 'Bid' record for the auction bidder.
        return Bid {
            owner: aleo1fxs9s0w97lmkwlcmgn0z3nuxufdee5yck9wqrs0umevp7qs0sg9q5xxxzh,
            gates: 0u64,
            bidder: bidder,
            amount: amount,
            is_winner: false,
        };
    }
```

Call the `place_bid` program function with bidder 1 and `10u64` arguments.

```bash
leo run place_bid aleo1yzlta2q5h8t0fqe0v6dyh9mtv4aggd53fgzr068jvplqhvqsnvzq7pj2ke 10u64
```

## <a id="step2"></a> Step 2: The Second Bid

Have the second bidder place a bid of 90.


Swap in the private key and address of the second bidder to program.json.

Call the `place_bid` program function with bidder 2 and `90u64` arguments.

```bash
leo run place_bid aleo1esqchvevwn7n5p84e735w4dtwt2hdtu4dpguwgwy94tsxm2p7qpqmlrta4 90u64
```

## <a id="step3"></a> Step 3: Select the Winner

Have the auctioneer select the winning bid.

```javascript=38
    // Returns the winning bid.
    // - `first`  : The first bid.
    // - `second` : The second bid.
    // Requires that the function caller is the auction runner.
    // Assumes that the function is invoked only after the bidding period has ended.
    // In the event of a tie, the first bid is selected.
    transition resolve(first: Bid, second: Bid) -> Bid {
        // Ensure the caller is the auctioneer.
        console.assert_eq(self.caller, aleo1fxs9s0w97lmkwlcmgn0z3nuxufdee5yck9wqrs0umevp7qs0sg9q5xxxzh);
        // Resolve the winner of the auction.
        if (first.amount >= second.amount) {
            return first;
        } else {
            return second;
        }
    }
```

Swap in the private key and address of the auctioneer to program.json.

Provide the two `Bid` records as input to the `resolve` transition function.

```bash 
leo run resolve "{
        owner: aleo1fxs9s0w97lmkwlcmgn0z3nuxufdee5yck9wqrs0umevp7qs0sg9q5xxxzh.private,
        gates: 0u64.private,
        bidder: aleo1yzlta2q5h8t0fqe0v6dyh9mtv4aggd53fgzr068jvplqhvqsnvzq7pj2ke.private,
        amount: 10u64.private,
        is_winner: false.private,
        _nonce: 4668394794828730542675887906815309351994017139223602571716627453741502624516group.public
    }" "{
        owner: aleo1fxs9s0w97lmkwlcmgn0z3nuxufdee5yck9wqrs0umevp7qs0sg9q5xxxzh.private,
        gates: 0u64.private,
        bidder: aleo1esqchvevwn7n5p84e735w4dtwt2hdtu4dpguwgwy94tsxm2p7qpqmlrta4.private,
        amount: 90u64.private,
        is_winner: false.private,
        _nonce: 5952811863753971450641238938606857357746712138665944763541786901326522216736group.public
    }"
```

## <a id="step4"></a> Step 4: Finish the Auction

Have the auctioneer finish the auction.

```javascript=55
    // Returns ownership of the bid to bidder.
    // - `bid` : The winning bid.
    // Requires that the function caller is the auction runner.
    // Assumes that the function is invoked only after all bids have been resolved.
    transition finish(bid: Bid) -> Bid {
        // Ensure the caller is the auctioneer.
        console.assert_eq(self.caller, aleo1fxs9s0w97lmkwlcmgn0z3nuxufdee5yck9wqrs0umevp7qs0sg9q5xxxzh);
        // Return 'is_winner' as 'true' in the winning 'Bid'.
        return Bid {
            owner: bid.bidder,
            gates: bid.gates,
            bidder: bid.bidder,
            amount: bid.amount,
            is_winner: true,
        };
    }
```

Swap in the private key and address of the auctioneer to program.json.

Call the `finish` transition function with the winning `Bid` record.

```bash 
leo run finish "{
        owner: aleo1fxs9s0w97lmkwlcmgn0z3nuxufdee5yck9wqrs0umevp7qs0sg9q5xxxzh.private,
        gates: 0u64.private,
        bidder: aleo1esqchvevwn7n5p84e735w4dtwt2hdtu4dpguwgwy94tsxm2p7qpqmlrta4.private,
        amount: 90u64.private,
        is_winner: false.private,
        _nonce: 5952811863753971450641238938606857357746712138665944763541786901326522216736group.public
    }"
```


