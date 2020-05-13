## Admin-bro-dev

parcel watch ./src/frontend/app.jsx --out-dir ./src/frontend/assets/scripts --out-file app.bundle.js --no-hmr

This is a wrapper repo for the entire AdminBro core with a couple of plugins. If you are a developer and you want to work on the AdminBro infrastructure - this is the right repository.

## OpenSource SoftwareBrothers community

- [Join the community](https://join.slack.com/t/adminbro/shared_invite/zt-djsqxxpz-_YCS8UMtQ9Ade6DPuLR7Zw) to get help and be inspired.
- subscribe to our [newsletter](https://www.getrevue.co/profile/adminbro)

## Setting up

All AdminBro plugins are embedded as git submodules. To clone the entire repo with all the dependencies simply run:

```bash
git clone --recurse-submodules https://github.com/SoftwareBrothers/admin-bro-dev
```

First of all you need databases. If you have already running MySQL, PostgreSQL and MongoDB on your host machine then skip this step. Otherwise we made it easier for you with docker-compose. Enter the `./infrastructure` directory and run docker:

```
cd infrastructure
docker-compose up
```

After this enter the admin-bro directory:
```
>> cd admin-bro
```

and run there following commands:

```
>> yarn install && yarn link && NODE_ENV=development yarn bundle:globals && yarn dev
```

And finally on the other tab of console enter the directory of our example app:

```
>> cd admin-bro-example-app
```

and run following commands:

```
>> yarn install && yarn link admin-bro && yarn dev
```

That's all. You can now open admin panel on your browser: http://localhost:8080/admin

## Note about the git

As mentioned before, this repo contains other repositories as git submodules. You can change their branches, modify the content and commit changes to them separately. Committing to this repo won't affect any submodule.

## Note about yarn linking

Since we are using local versions of the packages (via git submodules) we 
have to inform npm/yarn about that. It is done via `yarn link` command (you can also use `npm link`). Take a look at the [dockerfile](infrastructure/Dockerfile) to see how it's used if you want to do the same thing without the docker.

## Documentation

Repo also contains documentation of the project. To regenerate it just run

```
yarn run docs
```

Documentation uses jsdoc along with the better-docs documentation template. Better-docs is included inside this repo as a submodule.

You can enter the `better-docs` folder and develop documentation with live reload

```bash
yarn install
cd better-docs
yarn install

DOCS=../admin-bro/src/**/*,../docs-src/**/*,../admin-bro-mongoose/**/*,../admin-bro-hapijs/**/*,../admin-bro-expressjs/**/*,../admin-bro-sequelizejs/**/* gulp
```

## License

AdminBro is Copyright © 2019 SoftwareBrothers.co. It is free software, and may be redistributed under the terms specified in the [LICENSE](LICENSE) file.

## About SoftwareBrothers.co

<img src="https://softwarebrothers.co/assets/images/software-brothers-logo-full.svg" width=240>


We’re an open, friendly team that helps clients from all over the world to transform their businesses and create astonishing products.

* We are available for [hire](https://softwarebrothers.co/contact).
* If you want to work for us - check out the [career page](https://softwarebrothers.co/career).
