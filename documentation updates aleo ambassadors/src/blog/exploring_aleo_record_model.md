# Exploring Aleo's Record Model

![alt text](./images/aleo.jpeg)

## Introduction
Before we can dive into the explanation of a record, we first have to make sure that you understand what Aleo is, and why it chose a record model as its core data structure. 

Autonomous Ledger Execution Offchain (Aleo) is a layer-1 blockchain that combines general-purpose programmability with privacy by default. 

The core idea behind Aleo is ZEXE or zero-knowledge execution initially written in this [research paper](https://eprint.iacr.org/2018/962.pdf) in 2018. It first introduced the record model which extends the UTXO model from Zcash and enables storing and encrypting arbitrary data (user assets and application states), rather than just values of specific assets or tokens.


## Privacy
There are generally four different types of privacy that relate to blockchains.

Aleo fulfils the 3 of them:
- [x] Private inputs (messages)
- [x] Private outputs (state changes)
- [x] Private user
- [ ] Private function 

Initially, Aleo was aiming for function privacy as well (as detailed in the original ZEXE paper) but decided against it as it would have led to worse performance and longer proving times. 



## Comparing state storage in blockchains
There are two main state models used in blockchains - UTXO (unspent transaction output) and the account model (introduced by Ethereum). 

Aleo uses a variation of the UTXO model - the record model.


<p align="center" width="100%">
<img src="./images/account_vs_utxo.png" alt="Account vs UTXO"/>
</p>

<p align="center" width="100%">
Source: <a href="https://www.galaxy.com/insights/research/mev-how-flashboys-became-flashbots/">galaxy.com</a>
</p>
<br/>

### Account Model
In the account model as used in Ethereum, the application state can be found by referencing to a particular address. 

As such, anyone would be able to view the activities of any account, simply with the knowledge of the address.

<p align="center" width="100%">
<img src="./images/ethereum_storage.png" alt="Ethereum Storage Diagram"/>
</p>

<p align="center" width="100%">
Source: <a href="https://ethereum.org/en/develope.rs/docs/accounts/"> ethereum.org</a>
</p>
<br/>


<p align="center" width="100%">
<img src="./images/ethereum_world_state.png" alt="Ethereum World State Diagram"/>
</p>

<p align="center" width="100%">
Source: <a href="https://www.lucassaldanha.com/ethereum-yellow-paper-walkthrough-2/">Article by Lucas Saldanha</a>
</p>

<br/>


### Record Model
In the record model, the application state, along with its owner are encrypted and stored on the blockchain. 


<p align="center" width="300">
<img src="./images/record.png" alt="Aleo Records Diagram"/>
</p>

<p align="center" width="100%">
Source: <a href="https://eprint.iacr.org/2018/962.pdf"> Zexe: Enabling Decentralized Private Computation</a>
</p>

<br/>


<p align="center" width="100%">
<img src="./images/aleo_ledger.png" alt="Aleo World State Diagram"/>
</p>


<p align="center" width="100%">
Source: <a href="https://eprint.iacr.org/2018/962.pdf"> Zexe: Enabling Decentralized Private Computation</a>
</p>
<br/>


## Record Model Explained
Records are a fundamental data structure that can contain any arbitrary payload and are used for encoding user assets or application states. Records represent a fragment of the global state kept on-chain. For example, the balance of your credits in a given account is composed by the multiple credit records that have your address as the owner.


An Aleo record is serialized in the following format:

| Parameter  |             Type             | Description                                                                                         |
|------------|:----------------------------:|-----------------------------------------------------------------------------------------------------|
|     owner    |            address           |                      The address public key of the owner of the program record                      |
|    data    |    Map<Identifier, Entry>   | A data payload containing arbitrary application-dependent information                               |
|    nonce   |             group            |                            The serial number nonce of the program record                            |


An example record: 
```bash
{
  owner: aleo13ssze66adjjkt795z9u5wpq8h6kn0y2657726h4h3e3wfnez4vqsm3008q.private,
  amount: 100u64.private,
  _nonce: 5861592911433819692697358191094794940442348980903696700646555355124091569429group.public
}
```

<b>Owner</b>
<br/>
`aleo13ssze66adjjkt795z9u5wpq8h6kn0y2657726h4h3e3wfnez4vqsm3008q`

The record owner is an account address, and specifies the party who is authorized to spend the record.


<b>Data</b>
<br/>
`100u64`

The record can encode arbitrary application information. The "amount" key is the data payload that the record carries. 


<b>Nonce</b>
<br/>
`5861592911433819692697358191094794940442348980903696700646555355124091569429group`

The serial number nonce is used to create a unique identifier for each record, and is computed via a PRF evaluation of the address secret key ask of the owner and the record's serial number.

<!-- Use this if iframe is working -->
<!-- For a practical demonstration of record, see:

<iframe width="560" height="315" src="https://www.youtube.com/embed/JIgrKv_Q6Jo?si=RRLiTa9n4iYMG63z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->

For a practical demonstration of a record in Aleo, see [here](https://youtu.be/JIgrKv_Q6Jo?feature=shared).


### Updating State
In the record model, applications update their state by consuming records containing the old state, and producing new records that contain the updated state. Records that have been used will be marked as spent and cannot be used again.


<p align="center" width="500">
<img src="./images/utxo.png" alt="UTXO diagram">
</p>

<p align="center" width="100%">
Source: <a href="https://adapulse.io/the-extensive-guide-on-eutxo-utxo-and-the-accounts-based-model/"> adapulse.io</a>
</p>
<br>

The consumption and production of records is typically done in a transition function. A transaction in Aleo can contain up to 32 transitions, one of which is reserved for the transaction fee. 



<p align="center" width="100%">
<img src="./images/transaction_in_aleo.png"  alt="Transaction in Aleo"/>
</p>

## Why Record Model?

In the account-based model, an application's data is stored in a persistent location tied to the application's account, and updates are made directly to this stored data. For a typical token transfer transaction using this model, user balances would be stored in a table mapping user account addresses to their respective balances. When User A transfers money to User B, A's balance in the table is reduced, and B's balance is increased by the same amount.

If we were to try making the transactions private (hiding the amount transferred and the identities of A and B), instead of storing actual balances, the application can store commitments to these balances. Transactions would then update these commitments rather than the actual balances. However, while this approach hides transaction values, it does not hide user identities. To also hide user identities, every transaction would need to update all commitments in the table, which becomes increasingly inefficient as the number of users grows.

Although the account model is more intuitive for developers, it uses account addresses to index global state. This means that while a private account model can achieve privacy for inputs and outputs, it still compromises user privacy since account addresses cannot be encrypted. Another issue with the private account model is the lack of concurrency, as only one user can access and update the entire program state at a time.

Aleo's record model uses program IDs to uniquely identify programs instead of account addresses. This improves privacy and enables programs to have internal states. This approach is more efficient and solves the concurrency issue.

## Conclusion
Aleo is new a layer-1 blockchain that emphasizes on programmable privacy and scalability. It has chosen the record model as it's fundamental data structure because the account-based model cannot provide privacy with scalability. The record model also provides an enhancement over the UTXO model used in bitcoin, by it's ability to encode any arbitrary data, thus providing programmable privacy. 



