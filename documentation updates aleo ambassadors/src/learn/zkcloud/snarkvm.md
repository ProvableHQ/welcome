# snarkVM
The snarkVM library allows users to write and execute transactions in an efficient, yet privacy-preserving manner by leveraging zero-knowledge succinct non-interactive arguments of knowledge (zk-SNARKs) and encryption.

This creates an off-chain, trustless computing environment, where programs are executed privately, securely and with unlimited runtime.

## Who uses snarkVM ?
- `Developers` - Leverage snarkVM to create aleo programs that power private dApps.
- `Users` - Gain privacy from the ability to compute zk-SNARKs and encrypt off-chain.
- `Validators` - Verify transactions submitted by users using Varuna.

## Architectural Components
- `snarkVM synthesizer` - used to translate code into circuits that are compatible with the underlying zk-SNARK cryptographic proof system (Varuna).
- `snarkVM algorithms` - the implementation and execution of the proof system and the primitives that support it
- `snarkVM ledger` - data structures and methods that enable storage and interaction with the Aleo blockchain.


### [Setup and Use SnarkVM](./snarkvm_build_guide.md)

TODO - Link to Proving System Overview (Varuna)
