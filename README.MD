# Codelife.dev [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![pages-build-deployment](https://github.com/Codelife-Compet/codelife.dev/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Codelife-Compet/codelife.dev/actions/workflows/pages/pages-build-deployment) [![Dependency Review](https://github.com/Codelife-Compet/codelife.dev/actions/workflows/dependency-review.yml/badge.svg)](https://github.com/Codelife-Compet/codelife.dev/actions/workflows/dependency-review.yml)

The codelife.dev project is a monorepo created to develop the web site of codelife, a Brazilian open source platform to teach programming to young public.

## Technologies used

[![next.js](https://img.shields.io/badge/-Next.js-000000?logo=next.js&style=for-the-badge)](https://next.js.js.org)
[![tailwindcss](https://img.shields.io/badge/-tailwindcss-06B6D4?logo=tailwindcss&logoColor=000000&style=for-the-badge)](https://tailwindcss.com/docs/installation)
[![storybook](https://img.shields.io/badge/-storybook-FF4785?logo=storybook&logoColor=000000&style=for-the-badge)](https://storybook.js.org/docs/react/get-started/install/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/learn)
[![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Getting started

To get started you need to install this package using npm or others package managers like yarn or pnpn.

Using npm, you can install the dependencies using:

```shell
npm install @codelife.dev/react
```
## Contribution

To contribute with our repository, just clone/fork this repository, and let's colaborate wich each other! Don't forget to read the [colaboration guide](https://github.com/Codelife-Compet/codelife.dev/blob/main/.github/CONTRIBUTING.md)

### install and run Locally

This Design system is documented with [storybook](https://storybook.js.org/tutorials/design-systems-for-developers/react/en/introduction/) and you can install and run the source code following the steps below:

#### Installation

- clone the repository 

``` shell
git clone https://github.com/Codelife-Compet/codelife.dev.git
cd codelife.dev
```

- Install dependencies

```shell
npm install
```

#### Running locally
on the project root

```shell
npm run dev
```
> you can see the results in `localhost`

### Contributing
To contribute with our repository you need to do the following steps

#### Create a branch
- git checkout main from any folder in your local react.dev repository

- git pull origin main to ensure you have the latest main code

- git checkout -b the-name-of-my-branch (replacing the-name-of-my-branch with a suitable name) to create a branch

#### Make the change

- Follow the ["Running locally"](#running-locally) instructions

- Save the files and check in the browser
#### Push it

```shell
git add -A && git commit -m "My message"
git push my-fork-name the-name-of-my-branch
```
 > Replacing My message with a commit message, such as Fix header logo on Android to stage and commit your changes

- Go to the codelife.dev repo and you should see recently pushed branches.
- Follow GitHub's instructions.
- If possible, include screenshots of visual changes. A preview build is triggered after your changes are pushed to GitHub.
