---
Author: [Cedric](syyanyuhui@gmail.com)
LastUpdate: 2024-05-06 
---

## Aleo的地址类型

在Aleo中存在两种地址类型，分别是用户地址和程序地址。

用户地址有唯一对应的ViewKey和PrivateKey。在Aleo网络中，我们可以创建具有隐私保护的程序，用户与程序的交互对于其他所有人都是不可见的。这里的**用户地址隐私性**是由ViewKey提供的，也就是说，谁拥有用户地址对应的ViewKey谁就拥有该地址的所有的可见性。PrivateKey是**用户地址所有权**的证明，谁拥有用户地址对应的PrivateKey谁就拥有该地址下的所有资产。Address、ViewKey、PrivateKey是根据密码学设计出来的紧密相关的一组数学对象。PrivateKey可以推导出ViewKey，ViewKey则可以推导出Address，这个过程是单向的，我们没有办法从Address反向推出ViewKey，或者根据ViewKey反向推出PrivateKey。



程序的地址由ProgramID通过安全的哈希算法而来，与用户地址不同，程序地址没有对应的ViewKey或者PrivateKey。更准确的来说，实际上存在与程序地址唯一确定的ViewKey和PrivateKey，但任何人都没有办法从程序地址推导出对应的ViewKey和PrivateKey。因为程序地址不存在PrivateKey和ViewKey，程序地址的资产完全由程序中所定义的逻辑进行控制，这对于在Aleo网络中构建去中心的Dapp，保护用户存放在Dapp中的资产非常重要。



## 如何在Aleo上存储资产？

以Aleo Credits为例，用户地址可以同时拥有Private Balance和Public Balance，这两者之间可以随意进行转换，并且都可以用来支付Aleo网络的Fee。

Private Balance是基于Record Model实现的（类似于比特币的UTXO模型），我们可以将它类比为纸币。

Public Balance类似于以太坊的Account模型，我们可以将其类比于银行卡余额。

Record Model是类似于比特币UTXO的模型，但功能更加强大，我们可以在Program中定义Record并存储在定义的数据，并且在链上以加密的形式存在，只有Record的所有者地址对应的ViewKey才查看Record的具体信息以及是否被消耗。

Record的产生完全取决于Program是如何定义的。

Record的消耗则需要满足三个条件：

- Record确实存在并且尚未被消耗
- Record消耗需要满足程序的定义规则（如Aleo Credits转账，需要消耗一个Record同时产生两个Record，两个新产生的Record的金额之和等于消耗的Record的金额）
- 需要Record的Owner进行签名授权，只有Record的Owner可以消耗Record。

[Learn more about Record Model](TODO: Add link to record model)



Public Balance以Mapping的形式存储，是公开可见的，每个地址对应一个条目。



## 支付Aleo网络费用

在Aleo网络中，用户需要使用Aleo Credits为他们的交易支付Fee。当用户发送交易时，交易由两部分组成，一部分是交易真正的负载信息，只能是Execution（调用一个Program）或者 是Deployment（部署一个Program），另一部分是Fee Transaction。Fee Transaction是特定的一个Transaction类型，不会单独存在，其中有一个参数是ExecutionID或者是DeploymentID，这个参数保证了Fee Transaction是为特定的Execution或者Deployment承担费用的，由此将Execution 和 Fee绑定起来。

```
Transaction
- Execution || Deployment
- Fee(execution_id, fee_amount)
```

