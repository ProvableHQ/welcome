---
id: mining_process
title: The Mining Process
sidebar_label: The Mining Process
---

We specify a mining algorithm for the PoSW consensus protocol that is based on modular exponentiation
over some group `G`. We denote by `R` the relation representing the PoSW circuit,
and set a NIZK tuple `(G, P, V)` to generate the
common reference string `CRS = G(R)`. We are interested in defining an
algorithm for `P` with a size `S` precomputation string that minimizes the number of multiplications
performed in `G`.

## Modular Multiexponentiation

Since the PoW process reduces to the hardness of exponentiation,
we work in a model where we need to compute `q` instances of exponentiating
`k` random indices `x_{i,j}` in `Z_p`, `(i,j)` in `[q] x [k]` for prime `p` of
size `n = log(p)` by some random bases `G_i` in `G`:
```
MultiExp({G_1, ..., G_k}, {x_1, ..., x_q}) = (∏_{i = 1..k} G_i^{x_{1,i}}, ..., ∏_{i = 1..k} G_i^{x_{q,i}})
```

The algorithm `A = (A_1, A_2)` proceeds in two stages:
first `A_1` precomputes a string of `S` group elements in `G` from the
common reference string `CRS = {G_1, ..., G_k}`. `A_2` then takes this as
input along with `q` sets of `k` elements in `Z_p` and produces `q` outputs `{π_1, ..., π_q}`. 

For each of the bases `G_i`, compute `S/k` exponents and store them as part of the precomputation string.
These exponents will be the radix decomposition bases for `Z_p` at the maximal permissible depth `c`.
On average, for each index we require at most `n/(3 + log(S) - log(k)- log(n))` multiplications
for a total of `q * k * n/(log(S) - log(k) - log(n))`.
This means that the size of the precomputation string `S` grows exponentially with a linear improvement in proving time.

## Security \& Miner Size

For a precomputation table of `S = k * (n/c) * (2^c - 1)` group elements,
each exponentiation can be performed in `n/c` multiplications on average.
However, at some point a maximal `c^*` is obtained that balances the communication cost of sending
more precomputed elements with the cost of performing additional multiplications.
We can thus operate under the assumption that miners work at around that level, and look at the security it implies.

We investigate proof generation times for various values of `c` in `N_+`.
At constant block frequency, these can be used to project what the minimal table size `S` is for
a predicate involving `k` exponentiations to achieve sufficiently low quantization error and collision probability.

<!--
We provide results below for $1$ minute blocks, $64$ byte group elements and a circuit with $k \approx 2^{13}$ exponentiations per proof.
Miner size corresponds to the size of its precomputed exponentiation table.

|  Size (GB) | Proof Generation Time (s) | Quantization Error (\%) | Collision Probability |                    
| -----------|------------------------------|-------------| -----------|
| 0.6              |   4.65                       | 3.82            | 0.0387
| 2              |                              |             |
| 4              |                              |             |
| 8              |                              |             |

-->

### Security Implications of Hardware Acceleration

Since hardware-accelerated miners would be able to provide order-of-magnitude improvements to the proof generation times for a given table size,
the development of faster miners will correspond to a proportional decrease of both the quantization error and collision probabilities felt by the system.
This means that incentives are aligned so that as the system grows it provides higher security.
