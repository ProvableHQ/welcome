---
id: deploy_execute_demo
title: Aleo Deploy and Execute Demo
sidebar_label: Deploy and Execute Demo
---

These changes supports the first iteration of deploying and executing program on the network.

Bugs, usability suggestions, and feedback in general would be greatly appreciated.

## Overview

Learn how to deploy and execute a basic "hello world!" program on Aleo's network using Leo and snarkOS. 

## Usage guide

### 1. Prerequisites

Make sure you have both Leo and snarkOS installed on your machine.

* To verify if you have Leo, open your termal and type `leo`. If you don't see soemthing like `zsh: command not found: leo`, you're good

* To verify if you have snarkOS, do the same thing you did with Leo but replace `leo` with `snarkos`

**Optional**: Install the [JSON Beautifier & Editor](https://chrome.google.com/webstore/detail/json-beautifier-editor/lpopeocbeepakdnipejhlpcmifheolpl) Chrome extension.

**Note**:

* You can find instructions to install Leo on your machine [here](https://github.com/AleoHQ/leo) and snarkOS [here](https://github.com/AleoHQ/snarkos)
* Make sure to pull the latest versions of `snarkos` and `leo` from GitHub to your local machine

### 2. Generate your test keys and wallet address

* In your favorite browser, navigate to [https://aleo.tools/](https://aleo.tools/) and click the **Generate** button
* Save your **Address**, **View Key**, and **Private Key** in a safe place, you'll need them later

### 3a. Seeding your wallet with credits

To seed your wallet, you'll need to request credits from [@AleoFaucet](https://twitter.com/AleoFaucet) ⛲️. 

Your Tweet should follow the format below:

```
@AleoFaucet send 10 credits to $YOUR_WALLET_ADDRESS
```

When @AleoFaucet quote retweets your request, you are ready for the next steps.

**Note**: 

* It can take up to 5-minutes for @AleoFaucet to send your credits, to bide the time, concurrently move on to step 3b below.

### 3b. Create a Leo application

We'll need something to deploy, so let's create a simple test Leo application.

Open your terminal and enter the following commands consecutively:

* Create a directory to store your Leo application - feel free to use a different name for this directory or location

```
cd $HOME/Desktop
mkdir demo_deploy_Leo_app && cd demo_deploy_Leo_app
```

* ⚠️ Assign $WALLETADDRESS to the wallet address you saved

```
WALLETADDRESS=""
```

* Generate a unique application name using part of your wallet address

```
APPNAME=helloworld_"${WALLETADDRESS:4:6}"
```

* Create a new test Leo application

```
leo new "${APPNAME}"
```

* Run your Leo application to make sure things are working

```
cd "${APPNAME}" && leo run && cd -
```

* Save the path of your application - this is important later

```
PATHTOAPP=$(realpath -q $APPNAME)
```

### 4. Confirm @AleoFaucet ⛲️ has sent your wallet credits and obtain your ciphertext record value

By this point, [@AleoFaucet](https://twitter.com/AleoFaucet) should have retweeted your request along with a URL with a prefix of `vm.aleo.org/api/testnet3/transaction...`

* Click on the link retweeted by @AleoFaucet. You should be presented with a JSON object in a new browser window. If you haven't already, we highly reccomend you install the [JSON Beautifier & Editor](https://chrome.google.com/webstore/detail/json-beautifier-editor/lpopeocbeepakdnipejhlpcmifheolpl) Chrome extension.
* Navigate to `object.execution.transitions[0].outputs[0].value` and copy the ciphertext stored there

### 5. Obtain your records plaintext

* Navigate to [https://aleo.tools/](https://aleo.tools/) and click the **Record** button in the nav bar at the top of the page
* Place the recrod ciphertext you copied in the previous step in the `Record (Ciphertext)` field
* Place your view key in the `View Key` field
* Copy the plaintext record provided. If you do not see it, it's likely you copied the wrong ciphertext record in step 4. Consider revisting or reach out to `hello@aleo.org`.
* Save your plaintext record in the same place as you did your address, view key, and private key. You will need it later.

### 6. Deploy your test application

Now that we have all the details required, we can deploy your first Leo application.

Open the same terminal instance as before and enter the following commands consecutively:

* Navigate to the path of your app

```
cd $PATHTOAPP && cd ..
```

* ⚠️ Assign $PRIVATEKEY to the private address you saved earlier

```
PRIVATEKEY=""
```

* ⚠️ Assign $RECORD to the the plaintext record you saved earlier

```
RECORD=""
```

* Deploy your Leo application (if all your variables were assigned correctly, you should be able to copy/paste the following

```
snarkos developer deploy "${APPNAME}.aleo" --private-key "${PRIVATEKEY}" --query "https://vm.aleo.org/api" --path "./${APPNAME}/build/" --broadcast "https://vm.aleo.org/api/testnet3/transaction/broadcast" --fee 600000 --record "${RECORD}"
```

Awesome! You should have seen a confirmation that your Aleo application was deployed, how exciting 🎉