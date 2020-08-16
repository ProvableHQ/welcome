---
id: consensus_security
title: Consensus Security
sidebar_label: Consensus Security
---

As PoSW is designed to satisfy traditional PoW guarantees,
it requires security properties that make it a time-lock puzzle.
We identify these below.

## Amortization Resistance

The most important property of any PoW system is **non-batchability**:
computation of many instances of the problem should not provide substantial speed-ups to miners through the reuse of information.

We work in the **Generic Group Model (GGM)**,
where miners have access to an oracle `O` performing a given hard computation
in the random encoding of some group `G`.
Computational difficulty is then given by the number of oracle queries that a miner
makes to `O`. In this setup, we can define the notion of `epsilon`-*amortization resistance*
as the ratio of oracle queries performed by the optimal algorithm
`A^O`_`(P, n)` computing `n = poly(n)` proofs simultaneously versus
the algorithm `A^O`_`(P, 1)`computing each `n` proof individually.
Here `n` is proof size, `Queries( A^O )` the number of queries `A^O` makes to `O` and `x_i`
the (randomly sampled) `i`-th problem instance:
```
\epsilon \leq 1 - \frac{\mathsf{Queries}(\mathcal{A}^{\mathcal{O}}_{\mathcal{P}, \ell(n)}(\{\mathbf{x_i}\}_{i = 1}^{\ell(n)}))}{\sum_{i = 1}^{\ell(n)} \mathsf{Queries}(\mathcal{A}^{\mathcal{O}}_{\mathcal{P}, 1}(\mathbf{x_i}))}.
```

Intuitively, `epsilon` is the advantage that a large miner receives due to the amortizability of the underlying puzzle.
If `epsilon = 0`, no algorithm attains speedup from batching and the puzzle is *perfectly amortizable*.

## Quantization Error & Forking Probability

Unlike other PoW schemes, the repeated underlying computation in PoSW takes substantially more time to compute
a potential solution (a single proof) than other puzzles. This is because NIZK proof generation is computationally intensive,
which can have an effect on the security of the underlying chain if it's comparable to block generation time.

### Quantization Error

In the setting where proof generation time is a significant fraction of the block time,
a slow miner who hears of a new solution before finishing their current attempt will have to discard partially-computed proofs
to begin mining on the new block. We call the proportion of work wasted due to this the *quantization error* `epsilon_Q` of the protocol,
which is equal to:
```
epsilon_Q = 1 - tau / (e^tau - 1)
```
where block time is normalized to `1` and average proof generation time is set to `tau`.

Note that `tau <- 0` implies `epsilon_Q <- 0`.
In this limit, the work discarded by miners approaches zero,
demonstrating that the ratio `r = tau_p / tau_b` between proof generation time
`tau_p` and block time `tau_b` should be minimized.

### Forking Probability

The quantum effects observed above can also increase the number of observed collisions in the protocol.
A conservative upper bound on this
can be obtained from a worst-case analysis of synchronized miners with identical proving time `tau`,
maximizing the probability of simultaneous solutions. If miners are not synchronized,
they may opt to finish their current effort after a block is found (rather than discard partial work),
but even if all miners do so this reduces to the synchronous case above.

The expected number of solutions in a mining “round” is a random variable
`X ~ Po(tau)`. We can obtain a bound on the forking probability `epsilon_F` from the ratio of rounds with multiple solutions
to rounds with any solution:
```
epsilon_F <= (1 - Poisson(1, tau)) / (1 - Poisson(0, tau))
          <= tau / 2
```
where `f(q) = Poisson(q, tau)` the PDF of `X`. 

For a fixed block time,
this means that any improvements in proving time (due to hardware acceleration and/or circuit size changes)
will proportionally decrease this error bound.
