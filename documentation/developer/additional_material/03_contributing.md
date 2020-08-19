---
id: contributing
title: Contributing
---

Thank you for helping make Leo better!

Before contributing, please view the [Contributor Code of Conduct](). 
By participating in this project - In the issues, pull requests, or gitter channels - 
you agree to abide by the terms.

## Report an Issue

To report an issue, please use the [GitHub issues tracker](https://github.com/AleoHQ/leo/issues). When reporting issues, please mention the following details:

- Which version of Leo you are using
- What was the source code (if applicable)
- Which platform are you running on
- How to reproduce the issue
- What was the result of the issue
- What the expected behaviour is

Reducing the source code that caused the issue to a bare minimum is always very helpful and sometimes even clarifies a misunderstanding.

## Make a Pull Request

Start by forking off of the `develop` branch to make your changes. Commit messages should clearly explain why and what you changed.

If you need to pull in any changes from develop after making your fork (for example, to resolve potential merge conflicts), 
please avoid using git merge and instead, git rebase your branch. This will help us review your change more easily.

Refer to the [style guide](./00_style.md) for basic conventions. Make sure you run `cargo fmt` to format your rust code and 
adhere to the coding style of the repository.

If your code adds new functionality, please write tests to confirm the new features function as expected. Refer to existing 
tests for examples on how tests are expected to be written.

We will be adding a `Changelog.md` to Leo in the near future. Please add an entry if your code fixes a bug or adds a feature.

We appreciate your hard work!