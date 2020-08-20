---
id: login
title: Login to Aleo Package Manager
sidebar_label: leo login
---

To use private packages and publish to Aleo Package Manager, start by authenticating with:
```
leo login -u <username> -p <password>
```

If remote compilation is enabled, Leo will sync your workspace when
you run `leo build`, `leo test`, `leo setup` and `leo prove`, your program will run the program setup
and execution on remote machines.

### USAGE
```
leo login [FLAGS] [OPTIONS] [NAME]
```

### FLAGS
* `-d`, `--debug` - Enables debugging mode
* `-h`, `--help` - Prints help information

### OPTIONS
* `-p`, `--password` <password\> - Sets a password
* `-u`, `--user` <username\> - Sets a username

### ARGS
* `<NAME>` - Sets the authentication token for login to the package manager

<!-- This feature helps to speed up the testing cycle and helps the developer to iterate significantly faster. -->
