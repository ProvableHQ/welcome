---
id: transactions
title: Transactions Fees
sidebar_label: Transaction Fees
---

A **transaction fee** is a fee that is required in order to process a transaction on the Aleo network. Currently, there are three types of transaction fees that correspond to each transaction type: **transfer**, **deploy**, and **execute**.

**Consider**

* **1 Byte = 1 microcredit, 1 KB = 1 millicredit, 1 MB = 1 credit**, assuming a 1:1 USD mapping
* Transaction sizes are averages using BigO notation (on the order of)


## Types of Transactions Fees

### Transfer Transaction Fee
A fee incurred when processing a transfer on the Aleo blockchain, such as sending funds

|Part of transfer transaction|Size| Multiplier|Cost|
|:-:|:-:|:-:|:-:|
|`Transaction wrapper`|0 KB|1|0 millicredits|
|`Transition wrapper`|0 KB|1|0 millicredits|
|`Input`|1 KB|1|1 millicredit|
|`Output`|1 KB|1|1 millicredit|
|`Proof`|1 KB|1|1 millicredit|

|Total|Size|Multiplier|Total cost|
|:-:|:-:|:-:|:-:|
|`Transaction -> Transition`|3 KB|1|3 millicredits|



#### Notes
* The transfer transaction fee may increase to prevent spamming; it is currently stable between 3-5 millicredits

---

### Execute Transaction Fee
A fee incurred when executing an application on the Aleo blockchain

#### Structure (optimistic)

|Part of execute transaction|Size| Multiplier|Cost|
|:-:|:-:|:-:|:-:|
|`Transaction wrapper`|0 KB|1|0 millicredits|
|`Transition wrapper`|0 KB|1|0 millicredits|
|`Input`|1 KB|2|2 millicredits|
|`Output`|1 KB|2|2 millicredits|
|`Proof`|1 KB|1|1 millicredit|

|Total|Size|Multiplier|Total cost|
|:-:|:-:|:-:|:-:|
|`Transaction -> Transition`|5 KB|1|5 millicredits|

--

#### Structure (pessimistic)

|Part of execute transaction|Size| Multiplier|Cost|
|:-:|:-:|:-:|:-:|
|`Transaction wrapper`|1 KB|65|0 millicredits|
|`Transition wrapper`|1 MB|32|32 credits|
|`Input`|1 KB|16 * 32|512 millicredits|
|`Output`|1 KB| 16 * 32|512 millicredits|
|`Proof`|1 KB|1|1 millicredit|

|Total|Size|Multiplier|Total cost|
|:-:|:-:|:-:|:-:|
|`Transaction -> Transition`|32 MB|1|32 credits|


--

### Deploy Transaction Fee
A fee incurred when deploying an application on the Aleo blockchain

#### Structure

|Part of deploy transaction|Size| Multiplier|Cost|
|:-:|:-:|:-:|:-:|
|`Verifying key`|1 KB|2|2 millicredits|
|`Certificate`|1 MB|2|2 millicredits|
|`Program bytecode`|1 KB|1|1 millicredit|

|Total|Size|Multiplier|Total cost|
|:-:|:-:|:-:|:-:|
|`Transaction -> Transition`|5 KB|1000 *|5 credits|


#### Notes
* To prevent bad actors from spamming the network with superfluous transactions, a variable **Deploy Transaction Multiplier** will be added to all deploy transactions.



