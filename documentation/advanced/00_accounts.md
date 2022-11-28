---
id: accounts
title: Account Specification
sidebar_label: Accounts
---

# Account

[//]: # (```mermaid todo: not supported yet) 

[//]: # (graph TD)

[//]: # (    A&#40;Account Private Key&#41;)

[//]: # (    A --> B&#40;Account View Key&#41;)

[//]: # (    A --> C&#40;Account Compute Key&#41;)

[//]: # (    )
[//]: # (    B --> D&#40;Account Address&#41;)

[//]: # (    C --> D&#40;Account Address&#41;)

[//]: # (```)

## Account Private Key

The account private key authorizes new transactions. This should not be shared with anyone.

### Algorithm

Samples a new account private key $\mathsf{seed}$.

**function** $\textsf{PrivateKey.New}()$
1. $\mathsf{seed} \leftarrow \ScalarField$
2. $\sksig := \Hash(\mathsf{seed} \parallel \ScalarField(``\text{AleoAccountSeedSignatureSecretKey0}"))$
3. $\rsig := \Hash(\mathsf{seed} \parallel  \ScalarField(``\text{AleoAccountSeedSignatureRandomizer0_0}"))$
4. $\skvrf := \Hash(\mathsf{seed} \parallel  \ScalarField(``\text{AleoAccountSeedVRFSecretKey0}"))$
5. Output $(\mathsf{seed}, (\sksig, \rsig, \skvrf))$

When printing out the private key, we use a Base58 encoding on the $\mathsf{seed}$. Note that we do **not** output $\sksig, \rsig,$ and $\skvrf$ as they can be derived from the $\mathsf{seed}$.