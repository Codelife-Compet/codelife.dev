# Codelife.dev - Backend

## Technologies used

[![fastify](https://img.shields.io/badge/-Next.js-000000?logo=next.js&style=for-the-badge)](https://next.js.js.org)
[![prisma](https://img.shields.io/badge/-tailwindcss-06B6D4?logo=tailwindcss&logoColor=000000&style=for-the-badge)](https://tailwindcss.com/docs/installation)
[![docker](https://img.shields.io/badge/-storybook-FF4785?logo=storybook&logoColor=000000&style=for-the-badge)](https://storybook.js.org/docs/react/get-started/install/)
[![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Getting started

To get started you need to install this package using npm or others package managers like yarn or pnpn.

### Install dependencies

```shell
npm install
```

### Setting up Docker

- if you don't have docker installed in your machine, install it by entering this <a href="https://docs.docker.com/get-docker/">LINK</a>

- once you installed it, you will need to create a container reffering to this projects database. To do it, just run:

```shell
npm run docker:start
```

> if you alread have this container created in you machine, the same command works to just initialize the container

### Getting Prisma up do date

- this project uses Prisma as the database ORM. To make sure you have the mos current state of the database schema in your copy of the project, run:

```shell
npm run prisma:migrate:dev
```

### Running locally
- on the project root, run 

```shell
npm run start:dev
```
> you can run http requests in `localhost:3333`
