---
id: deploy_execute_demo
title: Aleo Deploy and Execute Demo
sidebar_label: Deploy and Execute Demo
---

These changes support the first iteration of deploying and executing programs on the Aleo network.

Bugs, usability suggestions, and feedback in general would be greatly appreciated.

## Overview

Learn how to deploy and execute a basic "hello world!" program on Aleo's network using Leo and snarkOS.

## Usage guide

### 1. Prerequisites

Make sure you have both Leo and snarkOS installed on your machine.

- To verify if you have Leo, open your terminal and type `leo`. If you don't see something like `zsh: command not found: leo`, you're good

- To verify if you have snarkOS, do the same thing you did with Leo but replace `leo` with `snarkos`

**Optional**: Install the [JSON Beautifier & Editor](https://chrome.google.com/webstore/detail/json-beautifier-editor/lpopeocbeepakdnipejhlpcmifheolpl) Chrome extension.

**Note**:

- You can find instructions to install Leo on your machine [here](https://github.com/AleoHQ/leo) and snarkOS [here](https://github.com/AleoHQ/snarkos)
- Make sure to pull the latest versions of `snarkos` and `leo` from GitHub to your local machine

### 2. Generate your test keys and wallet address

- In your favorite browser, navigate to [https://aleo.tools/](https://aleo.tools/) and click the **Generate** button
- Save your **Address**, **View Key**, and **Private Key** in a safe place, you'll need them later

### 3a. Seeding your wallet with credits

<!-- markdown-link-check-disable -->

To seed your wallet, you have two options, the preferred method is to use the Aleo Discord faucet ⛲️.

[Join the Discord](https://discord.gg/aleohq) and navigate to the `#faucet` channel. Follow the instructions provided in the pinned message to request credits.

Alternatively, if and only if you have a US phone number, you can text the SMS Aleo faucet ⛲️ at [faucet.aleo.org](https://faucet.aleo.org/) ⛲️.

<!-- markdown-link-check-enable -->

**Note**:

- It can take up to some time for the faucet to send your credits, to bide the time, concurrently move on to step 3b below.

### 3b. Create a Leo application

We'll need something to deploy, so let's create a simple test Leo application.

Open your terminal and enter the following commands consecutively:

- Create a directory to store your Leo application - feel free to use a different name for this directory or location

```
cd $HOME/Desktop
mkdir demo_deploy_Leo_app && cd demo_deploy_Leo_app
```

- ⚠️ Assign $WALLETADDRESS to the wallet address you saved

```
WALLETADDRESS=""
```

- Generate a unique application name using part of your wallet address

```
APPNAME=helloworld_"${WALLETADDRESS:4:6}"
```

- Create a new test Leo application

```
leo new "${APPNAME}"
```

- Run your Leo application to make sure things are working

```
cd "${APPNAME}" && leo run && cd -
```

- Save the path of your application - this is important later

```
PATHTOAPP=$(realpath -q $APPNAME)
```

### 4. Confirm the Aleo faucet ⛲️ has sent your wallet credits

<!-- markdown-link-check-disable -->

Before moving forward, verify that you have recieved the Aleo credits from the faucet, if you have not, you must wait for that step to complete. You can verify that your address has recieved credits by checking using an [Aleo Explorer](https://explorer.hamp.app/). Search for your address and confirm that it has a public credits balance. If you recieve a 404, then your address has not recieved any credits yet.

<!-- markdown-link-check-disable -->

### 5. Deploy your test application

Now that we have all the details required, we can deploy your first Leo application.

Open the same terminal instance as before and enter the following commands consecutively:

- Navigate to the path of your app

```
cd $PATHTOAPP && cd ..
```

- ⚠️ Assign $PRIVATEKEY to the private address you saved earlier

```
PRIVATEKEY=""
```

- Deploy your Leo application (if all your variables were assigned correctly, you should be able to copy/paste the following)

```
snarkos developer deploy "${APPNAME}.aleo" --private-key "${PRIVATEKEY}" --query "https://api.explorer.aleo.org/v1" --path "./${APPNAME}/build/" --broadcast "https://api.explorer.aleo.org/v1/testnet3/transaction/broadcast" --priority-fee 1000000
```

You should have seen a confirmation that your Aleo application was deployed in the form of a transaction ID that looks like the following `at1rkkpqu5k4rt86zzccczw6cxeyvrl7hxydvvv7dhl7zr7p9w40c8s70kwm8`. Make sure to copy this string as you'll need it for the last step.

### 6. Execute your test application

Finally, it is time to execute the application you just deployed!

First, verify the program has succesfully deployed by checking an Aleo Explorer and searching the transaction ID you copied in the previous step. If the transaction is not found, then the program has not been deployed yet. If the transaction is found, then the program has been deployed and you can move on to the next step.

Paste the following command in your terminal

```
snarkos developer execute "${APPNAME}.aleo" "main" "1u32" "2u32" --private-key "${PRIVATEKEY}" --query "https://api.explorer.aleo.org/v1" --broadcast "https://api.explorer.aleo.org/v1/testnet3/transaction/broadcast" --priority-fee 1000000
```

Awesome! You have successfully deployed and executed a Leo application to Testnet III, how exciting 🎉
