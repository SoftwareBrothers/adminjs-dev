## AdminJS Dev/Documentation

parcel watch ./src/frontend/app.jsx --out-dir ./src/frontend/assets/scripts --out-file app.bundle.js --no-hmr

This is a wrapper repo for the entire AdminJS core with a couple of plugins. If you are a developer and you want to work on the AdminJS infrastructure - this is the right repository.

## OpenSource SoftwareBrothers community

- [Join the community](https://join.slack.com/t/adminbro/shared_invite/zt-djsqxxpz-_YCS8UMtQ9Ade6DPuLR7Zw) to get help and be inspired.

## Setting up

All AdminJS plugins are embedded as git submodules. To clone the entire repo with all the dependencies simply run:

```bash
git clone --recurse-submodules https://github.com/SoftwareBrothers/adminjs-dev
```

First of all you need databases. If you have already running MySQL, PostgreSQL and MongoDB on your host machine then skip this step. Otherwise we made it easier for you with docker-compose. Enter the `./infrastructure` directory and run docker:

```
cd infrastructure
docker-compose up
```

After this enter the adminjs directory:
```
>> cd adminjs
```

and run there following commands:

```
>> yarn install && yarn link && NODE_ENV=development yarn bundle:globals && yarn dev
```

And finally on the other tab of console enter the directory of our example app:

```
>> cd adminjs-example-app
```

and run following commands:

```
>> yarn install && yarn link adminjs && yarn dev
```

That's all. You can now open admin panel on your browser: http://localhost:8080/admin

## Note about the git

As mentioned before, this repo contains other repositories as git submodules. You can change their branches, modify the content and commit changes to them separately. Committing to this repo won't affect any submodule.

## Note about yarn linking

Since we are using local versions of the packages (via git submodules) we 
have to inform npm/yarn about that. It is done via `yarn link` command (you can also use `npm link`). Take a look at the [dockerfile](infrastructure/Dockerfile) to see how it's used if you want to do the same thing without the docker.

## Documentation

Repo also contains documentation of the project. To regenerate it you need to make some preparation:

1. make sure you have all submodules on the master branch.
2. documentation generates previews of react components which is not well handled.
Documentation (parcel bundler to be exact) has to have one package.json
from which it takes all dependencies like react, react-dom etc. In submodules each package
has its own react dependency which causes multiple react versions to be bundled and previews
wont work.

In order to fix that:
- remove node_modules from all of the packages `rm -fR */node_modules`
- rename `adminjs/package.json` to `adminjs/package2.json` (or something else)
- do the same thing with `adminjs-design-system/package.json`

3. Run docs command

```
yarn run docs
```

Documentation uses jsdoc along with the better-docs documentation template. Better-docs is included inside this repo as a submodule.

You can enter the `better-docs` folder and develop documentation with live reload.

In case of any problems you might need to remove the .cache folder form the root repo (created
by parcel bundler)

```bash
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

Documentation is 

## License

AdminJS is Copyright © 2021 SoftwareBrothers.co. It is free software, and may be redistributed under the terms specified in the [LICENSE](LICENSE) file.

## About SoftwareBrothers.co

<img src="https://softwarebrothers.co/assets/images/software-brothers-logo-full.svg" width=240>


We’re an open, friendly team that helps clients from all over the world to transform their businesses and create astonishing products.

* We are available for [hire](https://softwarebrothers.co/contact).
* If you want to work for us - check out the [career page](https://softwarebrothers.co/career).
