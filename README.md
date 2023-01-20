<h1 align="center">AdminJS Dev</h1>

<p align="center">Monorepo for AdminJS and plugins</p>

## AdminJS Dev/Documentation

This is a wrapper repo for the entire AdminJS core with a couple of plugins. If you are a developer and you want to work on the AdminJS infrastructure - this is the right repository.

## OpenSource SoftwareBrothers community

[Join the community](https://join.slack.com/t/adminbro/shared_invite/zt-djsqxxpz-_YCS8UMtQ9Ade6DPuLR7Zw) to get help and be inspired.

## GitHub workflows

| Package                     | CI/CD                                                                                                                                                                                            |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| @adminjs                    | <a href="https://github.com/SoftwareBrothers/adminjs/actions"><img alt="" src="https://github.com/SoftwareBrothers/adminjs/workflows/CI/CD/badge.svg"></a>                                       |
| @adminjs/bundler            | <a href="https://github.com/SoftwareBrothers/adminjs-bundler/actions"><img alt="" src="https://github.com/SoftwareBrothers/adminjs-bundler/workflows/CI/CD/badge.svg"></a>                       |
| @adminjs/design-system      | <a href="https://github.com/SoftwareBrothers/adminjs-design-system/actions"><img alt="" src="https://github.com/SoftwareBrothers/adminjs-design-system/workflows/CI/CD/badge.svg"></a>           |
| @adminjs/example-app        | <a href="https://github.com/SoftwareBrothers/adminjs-example-app/actions"><img alt="" src="https://github.com/SoftwareBrothers/adminjs-example-app/workflows/CI/CD/badge.svg"></a>               |
| @adminjs/expressjs          | <a href="https://github.com/SoftwareBrothers/adminjs-expressjs/actions"><img alt="" src="https://github.com/SoftwareBrothers/adminjs-expressjs/workflows/CI/CD/badge.svg"></a>                   |
| @adminjs/fastify            | <a href="https://github.com/SoftwareBrothers/adminjs-fastify/actions"><img alt="" src="https://github.com/SoftwareBrothers/adminjs-fastify/workflows/CI/CD/badge.svg"></a>                       |
| @adminjs/firebase-functions | <a href="https://github.com/SoftwareBrothers/adminjs-firebase-functions/actions"><img alt="" src="https://github.com/SoftwareBrothers/adminjs-firebase-functions/workflows/CI/CD/badge.svg"></a> |
| @adminjs/hapijs             | <a href="https://github.com/SoftwareBrothers/adminjs-hapijs/actions"><img alt="" src="https://github.com/SoftwareBrothers/adminjs-hapijs/workflows/CI/CD/badge.svg"></a>                         |
| @adminjs/import             | <a href="https://github.com/SoftwareBrothers/adminjs-import-export/actions"><img alt="" src="https://github.com/SoftwareBrothers/adminjs-import-export/workflows/CI/CD/badge.svg"></a>           |
| @adminjs/logger             | <a href="https://github.com/SoftwareBrothers/adminjs-logger/actions"><img alt="" src="https://github.com/SoftwareBrothers/adminjs-logger/workflows/CI/CD/badge.svg"></a>                         |
| @adminjs/mikroorm           | <a href="https://github.com/SoftwareBrothers/adminjs-mikroorm/actions"><img alt="" src="https://github.com/SoftwareBrothers/adminjs-mikroorm/workflows/CI/CD/badge.svg"></a>                     |
| @adminjs/mongoose           | <a href="https://github.com/SoftwareBrothers/adminjs-mongoose/actions"><img alt="" src="https://github.com/SoftwareBrothers/adminjs-mongoose/workflows/CI/CD/badge.svg"></a>                     |
| @adminjs/nestjs             | <a href="https://github.com/SoftwareBrothers/adminjs-nestjs/actions"><img alt="" src="https://github.com/SoftwareBrothers/adminjs-nestjs/workflows/CI/CD/badge.svg"></a>                         |
| @adminjs/passwords          | <a href="https://github.com/SoftwareBrothers/adminjs-passwords/actions"><img alt="" src="https://github.com/SoftwareBrothers/adminjs-passwords/workflows/CI/CD/badge.svg"></a>                   |
| @adminjs/prisma             | <a href="https://github.com/SoftwareBrothers/adminjs-prisma/actions"><img alt="" src="https://github.com/SoftwareBrothers/adminjs-prisma/workflows/CI/CD/badge.svg"></a>                         |
| @adminjs/sequelizejs        | <a href="https://github.com/SoftwareBrothers/adminjs-sequelizejs/actions"><img alt="" src="https://github.com/SoftwareBrothers/adminjs-sequelizejs/workflows/CI/CD/badge.svg"></a>               |
| @adminjs/typeorm            | <a href="https://github.com/SoftwareBrothers/adminjs-typeorm/actions"><img alt="" src="https://github.com/SoftwareBrothers/adminjs-typeorm/workflows/CI/CD/badge.svg"></a>                       |
| @adminjs/upload             | <a href="https://github.com/SoftwareBrothers/adminjs-upload/actions"><img alt="" src="https://github.com/SoftwareBrothers/adminjs-upload/workflows/CI/CD/badge.svg"></a>                         |

## Setting up

### Clone

All AdminJS plugins are embedded as git submodules in `packages` with a yarn workspace structure.
To clone the entire repo with all the dependencies (`--recurse-submodules`) simply run:

```sh
$ git clone --recurse-submodules https://github.com/SoftwareBrothers/adminjs-dev
```

### Bootstrap

At the very beginning you have to bootstrap all project dependencies. Please use yarn `bootstrap` script, VSCode task or just run `bootstrap.sh` script from console.

```sh
$ yarn bootstrap
# or
$ chmod +x ./scripts/bootstrap.sh && ./scripts/bootstrap.sh
```

### Development

Your local environment should bootstrap successfully. Then to work on an example app you need databases. **If you have already run MySQL, PostgreSQL and MongoDB on your host machine then skip this step**. Otherwise, we made it easier for you with docker-compose. Enter the `./infrastructure` directory and run docker:

```sh
$ yarn docker:up
```

You will work on example app so to run it in dev mode with dev mode of AdminJS too just run:

```sh
$ yarn dev
```

or in two separate terminals

```sh
# first console
$ yarn workspace adminjs dev
# second console
$ yarn workspace example dev:watch
```

**That's all**. You can now open the admin panel on your browser: http://localhost:8080/admin. All changes you will make in AdminJS will be available after refresh page.

## Working on plugins

If you want to work on some plugins with auto re-build just modify `watch` directories in the main `package.json` (`start:example`) eg. to work on `adminjs-design-system`

```json
{
  "scripts": {
    "start:example": "yarn workspace example dev:watch --watch ../../packages/adminjs-design-system/build"
  }
}
```

or use two terminals with watch parameter of example app

```sh
# first console
$ yarn workspace @adminjs/design-system dev
# second console
$ yarn workspace example dev:watch --watch ../../packages/adminjs-design-system/build
```

## Note about workspaces

This monorepo contains packages as git submodules. If you want to run a script from package just use `yarn workspace [name] [script]` command.
To list available workspaces run `yarn workspaces info`.

For example to build AdminJS or some plugin run

```sh
# Build AdminJS
$ yarn workspace adminjs build
# Build AdminJS.Typeorm
$ yarn workspace @adminjs/design-system build
```

_You don't have to use `yarn link` anymore._

## Note about the Git

As mentioned before, this repo contains other repositories as git submodules. You can change their branches, modify the content and commit changes to them separately. Committing to this repo won't affect any submodule.

To update submodules to the latest version use

```sh
# Use git strict command
$ git submodule update --remote
# or yarn script
$ yarn update:submodules
```

## Documentation

Repo also contains documentation of the project. To regenerate it you need to make some preparation:

1. make sure you have all submodules on the master branch.
2. documentation generates previews of react components which are not well handled.
   Documentation (parcel bundler to be exact) has to have one package.json
   from which it takes all dependencies like react, react-dom etc. In submodules each package
   has its own react dependency which causes multiple react versions to be bundled and previews
   won't work.

In order to fix that:

- remove node_modules from all of the packages `rm -fR */node_modules`
- rename `adminjs/package.json` to `adminjs/package2.json` (or something else)
- do the same thing with `adminjs-design-system/package.json`

3. Run docs command

```
yarn run docs
```

The documentation uses jsdoc along with the better-docs documentation template. Better-docs is included inside this repo as a submodule.

You can enter the `better-docs` folder and develop documentation with live reload.

In case of any problems you might need to remove the .cache folder from the root repo (created
by parcel bundler)

```sh
yarn install
cd better-docs
yarn install

DOCS=../adminjs/src/**/*,../docs-src/**/*,../adminjs-mongoose/**/*,../adminjs-hapijs/**/*,../adminjs-expressjs/**/*,../adminjs-sequelizejs/**/*,../adminjs-prisma/**/* yarn gulp
```

## Publishing the documentation

Docs are published on the firebase hosting. There is a current version (sitting in `docs` folder)
and old versions (sitting in `docs-old` folder).

In order to deploy it run `firebase deploy` (after generating documentation of course) :) It will
deploy all firebase hosting targets stored in `.fireabserc`

## License

AdminJS is copyrighted © 2023 rst.software. It is a free software, and may be redistributed under the terms specified in the [LICENSE](LICENSE.md) file.

## About rst.software

<img src="https://pbs.twimg.com/profile_images/1367119173604810752/dKVlj1YY_400x400.jpg" width=150>

We’re an open, friendly team that helps clients from all over the world to transform their businesses and create astonishing products.

* We are available for [hire](https://www.rst.software/estimate-your-project).
* If you want to work for us - check out the [career page](https://www.rst.software/join-us).
