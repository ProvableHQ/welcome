---
id: finalize
title: Finalize
sidebar_label: Finalize
---

A **finalize** function is declared as `finalize {name}:` and is used to run computations on chain. One of its primary purposes is to initiate or change public on chain state within mappings. A finalize function must immediately follow a transition function, and must have the same name;
it is associated with the transition function and is executed on chain,
after the zero-knowledge proof of the execution of the associated transition is verified;
a finalize function _finalizes_ a transition function on chain.
Upon success of the finalize function, the program logic is executed.
Upon failure of the finalize function, the program logic is reverted.

Consequently, nodes on the Aleo network execute the code of the finalize function. Only code within finalize blocks, run by nodes on the Aleo Network, updates program mappings. Only a program can write into its own mapping, but all nodes on the Aleo network can read the public state.

An example of on-chain state mutation is the transfer_public_to_private transition in the finalize example updates the public account mapping (and thus a user's balance) when called.

```leo showLineNumbers
program transfer.aleo {
    // The function `transfer_public_to_private` turns a specified token amount
    // from `account` into a token record for the specified receiver.
    //
    // This function preserves privacy for the receiver's record, however
    // it publicly reveals the caller and the specified token amount.
    transition transfer_public_to_private(
        public receiver: address,
        public amount: u64
    ) -> token {
        // Produce a token record for the token receiver.
        let new: token = token {
            owner: receiver,
            amount,
        };

        // Return the receiver's record, then decrement the token amount of the caller publicly.
        return new then finalize(self.caller, amount);
    }

    finalize transfer_public_to_private(
        public sender: address,
        public amount: u64
    ) {
        // Decrements `account[sender]` by `amount`.
        // If `account[sender]` does not exist, it will be created.
        // If `account[sender] - amount` underflows, `transfer_public_to_private` is reverted.
        let current_amount: u64 = Mapping::get_or_use(account, sender, 0u64);
        Mapping::set(account, sender, current_amount - amount);
    }
}
```

If there's no need to create or alter the public on-chain state, finalize functions are not required.

[Link back to Leo language guide](./03_language.md#finalize-function)