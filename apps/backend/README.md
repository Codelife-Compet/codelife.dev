# Codelife.dev - Backend

## Technologies used

[![Fastify](https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white)](https://fastify.dev/docs/latest/Guides/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/docs)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.com/)
[![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Getting started

To get started you need to install this package using npm or others package managers like yarn or pnpn.

### Install dependencies

```shell
npm install
```

### .Env variabless

- firstly you will need to adjust your .env variables accordingly to the <b>.env.example</b>.
- to do so, just create a <b>.env</b> file in your root folder, filling up the variables shown in the <b>.env.example</b> file.


### Setting up Docker

- if you don't have docker installed in your machine, install it by entering this <a href="https://docs.docker.com/get-docker/">LINK</a>

- once you installed it, you will need to create a container reffering to this projects database. To do it, just run:

```shell
npm run docker:start
```

> if you alread have this container created in you machine, the same command works to just initialize the container

### Getting Prisma up do date

- This project uses Prisma as the database ORM. 
- To make sure you have the most recent state of the database's schema, run:

```shell
npm run prisma:migrate:dev
```

### Running locally
- on the project root, run 

```shell
npm run start:dev
```
> you can run http requests in `localhost:3333`
