---
id: contributing
title: Contributing
---

Thank you for helping make Leo better!

Before contributing, please view the [Contributor Code of Conduct](). 
By participating in this project - In the issues, pull requests, or Gitter channels - 
you agree to abide by the terms.

## Report an Issue

To report an issue, please use the [GitHub issues tracker](https://github.com/AleoHQ/leo/issues). When reporting issues, please mention the following details:

- Which version of Leo you are using.
- What was the source code (if applicable).
- Which platform are you running on.
- How to reproduce the issue.
- What was the result of the issue.
- What the expected behavior is.

Reducing the source code that caused the issue to a bare minimum is always very helpful and sometimes clarifies a misunderstanding.

## Make a Pull Request

Start by forking off of the `master` branch to make your changes. Commit messages should clearly explain why and what you changed.

If you need to pull in any changes from the `master` branch after making your fork (for example, to resolve potential merge conflicts), 
please avoid using git merge and instead, git rebase your branch. Rebasing will help us review your changes easily.

### Tools Required

To build Leo from source you will need the following tools:
- The latest rust stable version and nightly version.
  - Recommend that you install multiple versions using `rustup`.
- Cargo
  - Rusty Hook install via `cargo install rusty-hook`.
- Clippy
  - Via rustup, if you didn't do the default rustup install `rustup componenet add clippy`.

### Formating

Please do the following before opening a PR.
- `cargo +nightly fmt --all` will format all your code.
- `cargo clippy --all-features --examples --all --benches` 

### Tests

If your code adds new functionality, please write tests to confirm the new features function as expected. Refer to existing tests for examples of how tests are expected to be written. Please read refer to the [parser tests section](#Parser-Tests). To run the tests please use the following command `cargo test --all --features ci_skip --no-fail-fast`.

#### **Parser Tests**

In the root directory of the repository, there is a "tests" directory.
To add a parser test, look at the Example Leo files in the parser sub-directory.
Then when running the test command, make sure you have the environment variable `CLEAR_LEO_TEST_EXPECTATIONS` set to true. For example, on a UNIX environment, you could run the following command `CLEAR_LEO_TEST_EXPECTATIONS=true cargo test --all --features ci_skip --no-fail-fast`.

### Grammar

In the root directory of the repository, there exists a "grammar" directory. In that directory, there is an "abnf-grammar.txt" file that has the grammar rules in ABNF format. If your changes affect a grammar rule, we may ask you to modify it in that txt file. After you do so, make sure to go into the directory and run `cargo run > README.md`. Doing so will ensure that the README file for the grammar is up to date.

### Changelog

We will be adding a `Changelog.md` to Leo in the near future. Please add an entry if your code fixes a bug or adds a feature.

We appreciate your hard work!