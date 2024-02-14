---
id: playground
title: Leo Playground
sidebar_label: Leo Playground
---

Using [Leo Playground](https://play.leo-lang.org/) is pretty self-explanatory. You can shift through the provided examples, both basic and advanced, to better understand the functionalities of Leo and Aleo instructions.

Some developers choose to write entire programs in Leo playground - it's an ideal place to check that your programs compile and run, without your needing to download [Leo](https://developer.aleo.org/leo/installation) itself (although we highly recommend it, and if you want to execute locally on your machine, you'll need it).

You may choose to download any of the examples or programs you've written on your own in Playground and deploy them on a devnet. A tutorial to do that is provided below when you reach that step!

## 1. Tools for Deployment

- Install [Leo](https://developer.aleo.org/leo/installation)
- Install [Aleo's transaction cannon](https://github.com/AleoHQ/tx-cannon), which will help you deploy, execute, and stress test your Leo programs.
- Install [snarkOS](https://github.com/AleoHQ/snarkOS), which will help spin up a live devnet either locally or on AWS.
- Install [tmux](https://formulae.brew.sh/formula/tmux), because the devnet dashboard uses it. 

## 2. Start a local Aleo Devnet

```bash
cd snarkOS
./devnet.sh

Enter the total number of validators (default: 4): 4
Do you want to run 'cargo install --path .' to build the binary? (y/n, default: y): n
Do you want to clear the existing ledger logs? (y/n, default: n): n
```

Right when the node starts, you'll see information for node 0, copy this down! 

```bash
- 👋 Welcome to Aleo! We thank you for running a node and supporting privacy.
- 🔑 Your development private key for node 0 is <private key>
- 🪪 Your Aleo address is <address>
- 🧭 Starting a validator node on Aleo Testnet 3 Phase 3 at 0.0.0.0:4130
- 🌐 Starting the REST server at 0.0.0.0:3030
- 🔑 Your one-time JWT token is <jwt-token>
```

If you missed it because it scrolled too fast, use these `tmux` commands to scroll up:

```bash
ctrl+b+[  # enter scroll mode to scroll up
ctrl+b+w  # see all 4 validator nodes
ctrl+b+:kill-session  # kills the session
q  # exit ctrl+b mode
```

<!-- markdown-link-check-disable -->
Check that your network is running by using http://localhost:3030/testnet3/latest/height in your browser. The height should increase as a sign that your network is alive.
<!-- markdown-link-check-enable -->

## 3. Execute Your Playground Project Locally

Navigate back to your Playground project and run one of your transition functions `leo run <function>`.

What basically happens is the `<program>.leo` program (in the program folder) is compiled to `<program>.aleo` and executed locally.

## 4. Deploying your Program on Devnet

Let’s deploy the your program on the local devnet you just spun up.

<!-- markdown-link-check-disable -->
Remember you started a clean devnet running at http://localhost:3030. What we want to do now is to deploy your program to that network.

Again, make sure it's running: http://localhost:3030/testnet3/latest/height

The height number should be moving up.
<!-- markdown-link-check-enable -->

### Transaction Cannon Deployment

Use the transaction cannon to deploy your program.

```bash
cd <your-project>
tx-cannon deploy <project>/build/<project>.aleo -k <node-private-key-you-jotted-down-earlier> --fee 3 -e http://localhost:3030
```

You can check that your deployment was successful on your network using: http://localhost:3030/testnet3/transaction/`<your-txn-id>`.

## 6. Execution On-Chain using the Transaction Cannon 

Once your program has been deployed on devnet, it's easy to execute your program on-chain. Create a `.toml` file with these parameters. You can find various examples in the repository with different inputs. The example shown below is for `helloworld.aleo`.

```toml
# helloworld.aleo
[[step]]
private_keys = ["your-node-private-key"]
order = 0
program_id = "helloworld.aleo"
function = "main"
inputs = [ "5u32", "5u32" ]
fee = 3
```

The `.toml` file basically orders transactions to be executed. When we call the `tx-cannon execute` command, we ask it to look for the program we deployed on our local devnet and execute it using the provided inputs and the corresponding private key. 

```bash
tx-cannon batch-execute --test helloworld.toml -e http://localhost:3030
```

Again, check that the program executed: http://localhost:3030/testnet3/transaction/`<your-txn-id>`.

There's much more functionality to be explored in the [tx-cannon repository](https://github.com/AleoHQ/tx-cannon). You can batch deploy, execute, and transfer, so take advantage of this tool to run development tests on your application!

Congratulations, you took a project off Playground and successfully deployed it to an Aleo devnet!

## 7. Claim your Leo Contributor Badge!

Making it through this tutorial was no easy task, so because you've done it, we'd love to honor you with a Leo contributor badge on Github!

### Pushing your Leo Application to Github

1. Let's get to your project's directory, initialize, and commit your application.

```bash
cd aleo-project
git init -b main
git add .
git commit -m "first commit, new aleo app"
```

2. Create a new repository on your [github.com](https://github.com/new) account by hitting "new repository" in the top right. Set the repo to public, and don't worry about adding a README, license, or .gitignore files. You can add these files after your project has been pushed to GitHub. 

3. At the top of the page your new repository, click to copy the remote repository URL and go back to your terminal to link your local project to this repository.

![ ](https://docs.github.com/assets/cb-48149/mw-1440/images/help/repository/copy-remote-repository-url-quick-setup.webp)

```bash
git remote add origin <REMOTE_URL>
git remote -v
git push -u origin main
```

### Claim your Leo badge
1. Go to the Leo repo issues tab [here](https://github.com/AleoHQ/leo/issues/new/choose)
2. Go to 🥇 "Badge" and click "Get Started".
3. Follow the brief instructions and submit.
4. Once your issue is approved, we will add you to the [contributors section](https://github.com/AleoHQ/leo#%EF%B8%8F-contributors) of the Leo README.md file.

Congratulations on becoming a Leo contributor! 🎉

## 8. Recap & Additional Resources

1. You downloaded a project off of [Leo Playground](https://play.leo-lang.org/).

2. You installed [Leo](https://developer.aleo.org/leo/), our statically-typed programming language built for writing private applications, our [transaction cannon](https://github.com/AleoHQ/tx-cannon) for easy deployment and execution, and [snarkOS](https://github.com/AleoHQ/snarkOS), the data availability layer.

3. You started a local devnet using the snarkOS repository.

4. Using Leo, you compiled and locally executed your Leo program.

5. Using the transaction cannon, you deployed and executed your program on-chain to a local devnet. 