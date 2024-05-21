# Provers



### Prover在网络中扮演的角色

Prover是Aleo网络中的一个重要组成部分，它不参与到Aleo的网络共识中。Prover运行特定的算法，通过求解*CoinbasePuzzle*得到满足*ProofTarget*的*ProverSolution*，然后广播，当*ProverSolution*被验证者节点确认并被打包到区块中时，Prover可以获得相应的*CoinbaseReward*奖励。



### Prover的经济激励

从长期的角度来看，Prover能够获得的*CoinbaseReward*的奖励与它的算力在整个网络中的占比成正比。Prover的经济激励与Bitcoin中的PoW相类似，不同点在于Aleo网络中并不是赢家通吃的策略，*ProverSolution*只要满足*ProofTarget*就可以被网络接受，这样的方式使得Prover获得的奖励更加公平和稳定。值得注意的是，与Validator的*BlockReward*不同，*CoinbaseReward*会随着时间而递减，每年的产出会缩减10%，直到10年后，将不再有*CoinbaseReward*奖励。

用户可以通过[浏览器](https://testnet3.aleoscan.io)来查看CoinbaseReward、BlockReward、以及PuzzleReward。

> PuzzleReward = CoinbaseReward * 2 / 3 
>
> BlockReward = 23.8 + CoinbaseReward * 1 / 3
>
> 其中：
>
> BlockReward的奖励由Validator根据质押占比进行分配
>
> PuzzleReward的奖励由Prover提交的Solution的ProofTarget的占比进行分配



### CoinbasePuzzle

Aleo网络中每360个区块组成一个Epoch，当新的Epoch产生时，CoinbasePuzzle也会发生相应的变化，如果Prover依然在计算旧的CoinbasePuzzle，则其计算出的ProverSolution不会再被网络接收。这意味着Prover需要监听共识网络的区块变化，当新的Epoch产生时，更新当前的CoinbasePuzzle信息。

除了要求ProverSolution是合法的之外，网络还要求ProverSolution满足大于等于ProofTarget。ProofTarget是用来衡量Prover的工作量的，类似于PoW，ProofTarget越大，Prover所需要进行的计算的工作就越大。Aleo网络会根据当前参与到网络中Prover的算力来调整ProofTarget，当参与到网络中的算力增加时，网络会增大ProofTarget来保证网络中不会出现过多的ProverSolution，防止网络拥堵和大量的ProverSolution没有办法呗打包的情况。



### 如何成为Prover节点

成为Prover节点不需要质押和授权，任何人都可以启动一个Prover节点。

