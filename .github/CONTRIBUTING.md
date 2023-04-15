# Contributing to CodeLife-UI
Thank you for considering contributing to CodeLife-UI! We appreciate your interest in helping us build a better platform for developers and programmers.

## Style guidelines
In above we have some guidelines to help you to work with us as a maintainer and a contributor.

### Preferred IDE and plugins
We strongly recommends you to use [![vscode](https://img.shields.io/badge/-Visual%20Studio%20Code-007ACC?logo=visualstudiocode&style=flat-square)](https://code.visualstudio.com) as your editor, and for boost your productivity we recommends you to install the following extensions in vscode:
```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "burkeholland.simple-react-snippets",
    "unifiedjs.vscode-mdx",
    "bradlc.vscode-tailwindcss"
  ]
}
```
> You will see there on `.vscode` folder 

### Atomic commits

No specials attention is required, all you have to do is create short commits and each commit must be related to a unique change in your repository. 

### Semver

This repository use semantic versioning.
That means the version will follow MAJOR.MINOR.PATCH sintax where:

1. MAJOR version when you make incompatible API changes

2. MINOR version when you add functionality in a backwards compatible manner

3. PATCH version when you make backwards compatible bug fixes

To learn more deep about Semver, see [this article](https://semver.org/).

### Conventional commits

We use [Husky](https://typicode.github.io/husky) with [![Commitlint](https://img.shields.io/badge/-Commitlint-000000?logo=commitlint&style=flat-square)](https://commitlint.js.org) to automatically lint the commits and improve an history more comprehensive and readable. We also are [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) , that means if you have any problem to understand deep conventional commits, you can use commitizen to remind you the steps that you have follow to use this convention accordingly 

If you haven't contribute in others repositories yet, this is a guideline to teach you [how you can use conventional commits with husky and commitlint](https://dev.to/talohana/husky-and-commitlint-for-clean-git-log-44be) to improve padronization in your repositories.

### How it works in hands-on

We have to use the structure in below:
```shell
<type>[optional scope]: <description>

[optional body]

[optional(s) footer(s)]
```
Here is an example:

```shell
chore(contributing): add husky, commitlint and commitizen to improve comprehensive history in the repository  
```

`Type` is a required parameter, that have to be one of these:

- feat: To new features
- fix: To bugfixes
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (like formatting,missing semi-colons, etc)
- refactor: A code change that neither fixes a bug or adds new features
- perf: A code that improves more performance
- test: Adding missing tests
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

With commitizen we improve this more easy to you, all you have to do is use 

```shell

git commit

``` 

and all steps mentioned above will automacally prompted in terminal to help you.

To learn more about Conventional Commits see [this article](https://www.conventionalcommits.org/en/v1.0.0/).

## Ways to Contribute
There are many ways in which you can contribute to CodeLife-UI, including:

### Submitting bug reports and feature requests
* Writing code patches or documentation updates
* Participating in discussions on our forums
* Helping to translate our platform into other languages
* Submitting bug reports and feature requests
> If you've found a bug in CodeLife or would like to request a new feature, please open an issue on our GitHub repository. Before submitting an issue, please search our existing issues to make sure that it hasn't already been reported or requested.

> When submitting an issue, please provide as much detail as possible, including the steps to reproduce the issue or a clear description of the feature you'd like to see added.

### Writing code patches or documentation updates
If you'd like to contribute code or documentation to CodeLife, please follow these steps:

#### Fork our repository on GitHub
* Create a new branch for your changes
* Make your changes and commit them to your branch
* Push your branch to your forked repository on GitHub
* Submit a pull request to our repository
> When submitting a pull request, please provide a clear description of the changes you've made and why they're necessary. Also, please make sure that your code or documentation follows our style guidelines and has been tested thoroughly.

#### Participating in discussions
We encourage all members of the CodeLife community to participate in discussions on our forums. Whether you're sharing your experience with a particular technology or asking for advice on a coding problem, your contributions are valuable and appreciated.

> Please be respectful of other community members and follow our code of conduct when participating in discussions.

#### Helping to translate CodeLife 
If you're fluent in English or another language , we welcome your help in translating CodeLife. Please contact us at codelife@codelife.com to learn more about how you can help.

## Conclusion
We appreciate your interest in contributing to CodeLife, and we look forward to working with you to make our platform the best it can be for developers and programmers.
