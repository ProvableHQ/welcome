---
id: posw
title: Overview
sidebar_label: Overview
---

Proof of Succinct Work (PoSW) is a consensus protocol that generates proofs on system validity as
a useful byprocess of performing Proof-of-Work.
The encoded predicate verifies the transactions that will be included in a given block update,
while ensuring that the underlying proof computation is still a time-lock puzzle.

PoSW is a variant of Bitcoin's SHA-based difficulty adjusting algorithm,
with the key difference being that the underlying computation is not an arbitrary hash function
but rather a proof of knowledge. This allows the PoSW solution to not only act as PoW to ensure system consensus,
but also provide verification of transaction inclusion in a given block.
We work in the asynchronous model, and presume existence of an honest majority of miners (or provers). 

Given a non-interactive zero-knowledge proof tuple `(G, P, V)`
for a given relation `R`, the PoSW algorithm consists of the following:

#### 1. Given a set of (valid) transactions `T_i` = `{ t_1, ..., t_n }` and a current `state_i`,
calculate:
```
NewState(state_i, T_i) <- (state_{i+1}, w_{i+1})
```
where:
- `state_i` is the state at the `i`-th block, and
- `w_i` is auxiliary information attesting to the validity of `state_{i+1}`.

#### 2. Sample a random nonce `n` and compute:
```
P(CRS, [n, state_{i+1}], w_{i+1}) <- π_n.
```

#### 3. If `PRF(π_n) <= d`, set `n_{i+1} = n` and `π_{i+1} = π_n`. Return to Step 2 otherwise.

The function `PRF` is a pseudorandom function used to evaluate the difficulty condition,
while `CRS` is the public output of `G`.

### Difficulty Update

The difficulty update procedure resembles that of Bitcoin and other PoW currencies,
updating `d` adaptively based on network hashrate.
It is iteratively updated based on the maximal and current targets every fixed number of blocks
and guarantees constant block time.

## Instantiation

Below we provide the design choices of the PoSW implementation that achieve the above security guarantees, alongside the relevant security parameters.

### Proof System Choice

The choice of proof system is necessary (but not sufficient) in achieving amortization resistance, for the protocol. Although a variety of proof systems can be chosen, there are specific properties that need to be satisfied. PoSW uses the Marlin architecture, which is consistent with the properties below in the non-interactive Random Oracle setting.

#### Simulation Extractability
A simulation-extractable (SE) proof system has a unique encoding for every valid instance-witness pair $\langle \phi, w\rangle.$ This implies that valid proofs cannot be rerandomized without explicit knowledge of a different witness for $\phi$. Otherwise, an adversarial prover would be able to change the encoding of a proof after computation until it satisfies difficulty, which would violate the non-amortization requirement.

#### Reduction to an Average-Case Hard Problem

A non-amortizable prover should reduce in difficulty to a problem known (or postulated) to be non-batchable (or 'hard') on average. Since the state-of-the-art proof systems are almost all built using Kate commitments, we work in this paradigm and reduce proof computation to the problem of multi-exponentiation of a set of given (random) bases $\{G_i\}_{i = 1}^m \in \mathbb{G}^m$ by a set of random indices $\{x_i\}_{i  =1}^m \in \mathbb{Z}_p^m$. In this problem, hardness is measured in the number of queries to a multiplication oracle $\mathcal{O}_m$ in the given group's encoding.

Although the above problem is *not* non-amortizable in the setting of unbounded space, it can be shown to be non-amortizable on average for miners with a fixed size precomputation string.

### Predicate Design

The choice of predicate is also crucial in ensuring the above security guarantees. Below we identify the relevant properties that the computed relation $\mathcal{R}$ should satisfy:

1. **Usefulness:** The proof is a proof of knowledge for a statement providing inherent value to the protocol. We opt for a relation that verifies the inclusion of a set of transactions in the given block.

2. **Computational Uniqueness:** An adversary cannot find a new witness $w_2$ for $\phi$ given knowledge of a valid instance-witness pair $\langle \phi, w\rangle$. This ensures that the miner cannot resample witnesses for $\phi$ to reduce computational burden.

3. **Non-Amortization:** Valid witnesses for $\mathcal{R}$ need to "look" sufficiently random to reduce to the average-case hardness of multiexponentiation. The chosen predicate achieves $\epsilon = 0$ (or perfect) non-amortization in this context.


### Error Bounds

We set the desirable error bounds for quantization and forking error to $3\%$ and $1.5\%$ respectively. For a protocol with $1$-minute block times, this implies that average proof generation times need to be upper bounded by $\tau = 1.8 \approx 2$ seconds.