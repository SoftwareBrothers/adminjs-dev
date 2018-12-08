## Admin-bro-dev

This is a wrapper repo for entire AdminBro core with couple of its plugins. If you are a developer and you want to work on AdminBro - this is the right repository.

## Setting up

All AdminBro plugins are embded as a git submodules. To clone entire repo with all dependencies simply run:

```bash
git clone --recurse-submodules https://github.com/chaconinc/MainProject
```

After that enter the infrastructure directory and within it run docker:

```
docker-compose up
```

and this is it. Now you have entire dev environment set up.

## note about the git

As mentioned before this repo contains another repositories as git submodules. You can change branches in them work on them and commit changes to them separately. Commiting to this repo wont affect any submodule.

## note about npm linking

Since we are using local versions of the packages (via git submodules) we 
have to inform npm about that. It is done via `npm link` command. Take a look at the [dockerfile](infrastructure/Dockerfile) to see how its used if you want to do the same thing without the docker.

## License

AdminBro is Copyright © 2018 SoftwareBrothers.co. It is free software, and may be redistributed under the terms specified in the [LICENSE](LICENSE) file.

## About SoftwareBrothers.co

<img src="https://softwarebrothers.co/assets/images/software-brothers-logo-full.svg" width=240>


We’re an open, friendly team that helps clients from all over the world to transform their businesses and create astonishing products.

* We are available to [hire](https://softwarebrothers.co/contact).
* If you want to work for us - checkout the [career page](https://softwarebrothers.co/career).