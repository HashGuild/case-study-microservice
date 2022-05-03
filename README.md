# Artworks Microservice

The microservice for all things regarding the artworks displayed and tradable on hashguild.xyz

## Features:

### Typescript & Express

The base technologies used by this microservice are NodeJS, Express and Typescript. To learn more about this technologies give this resources a try:

- https://nodejs.org/en/about/
- https://www.typescriptlang.org/docs/handbook/2/basic-types.html
- https://expressjs.com/de/starter/hello-world.html
- https://expressjs.com/de/4x/api.html
- https://youtu.be/zQnBQ4tB3ZA
- https://youtu.be/ENrzD9HAZK4
- https://youtu.be/-MTSQjw5DrM?t=153

### Full Docker support

Running this microservice as a docker container in development is highly recommended. Just start the container and your full development environment is up and running in no time. Docker will keep all development environments consistent and as close as possible to production. This will help a lot when it comes to bug fixing and compatibility issues.

Using docker is very easy and how to start a dev environment is described late on in this readme. But some basic understanding of containers and docker can be helpful. Therefore here a quick introduction to all the basics: https://youtu.be/gAkwW2tuIqE
More detailed information in a tutorial playlist here: https://www.youtube.com/watch?v=jPdIRX6q4jA&list=PLy7NrYWoggjzfAHlUusx2wuDwfCrmJYcs

All of this only works if you have docker installed so here are the steps for windows, linux and macos

- Mac: https://docs.docker.com/desktop/mac/install/
- Windows: https://docs.docker.com/desktop/windows/install/
- Linux: https://docs.docker.com/engine/install/ubuntu/

You will also need to have docker-compose installed. Check if it is installed by using this command: `docker-compose --version` if it returns a version string you are good to go if not use this tutorial to install it on your os: https://docs.docker.com/compose/install/

### Nodemon Hot reload

With nodemon we get hotreload for our microservice. Every time you change something in the code nodemon will notice that and trigger a recompile of the code running in the dev docker container.
This allows for faster development and will show you instantly if the code is valid or not.

You can see the logs created by typescript when trying to compile your code by using this command:

```bash
docker logs -f <container-name>
```

Using the docker dashboard UI for that is highly recommended: https://docs.docker.com/desktop/dashboard/

## Run in development:

Docker makes it extremely easy to get started with development.
If you are starting the development environment for the first time, run this command first:

```bash
npm i
```

Setting up your dev environment is just one command:

```bash
docker-compose up -d
```

Your app will be ready at http://localhost:8080 and the Apollo GraphQL Api at http://localhost:8080/api/nfts/graphql

To get your first **Hello World!** print visit: http://localhost:8080/api/nfts/helloworld

### Important things:

If you install new dependencies the volumes used by docker to cache your node_modules need to be deleted and the images need to be rebuild before restarting everything.
This can be done by the following:

```bash
docker-compose down
docker system prune --volumes
docker-compose up -d --build
```

After that your project should again be up and running with your new packages installed.

Additionally Nodemons hotreload is only listening for changes in the folders "src", "public" and "prisma" if you want to change something in other directories the changes will not trigger a hotreload and might not even be changed in the running container. To make shure the changes get into the container restart the containers like this:

```bash
docker-compose down
docker-compose up -d --build
```

## Visualstudio Code Debugger

Writing Code without a propper debugger is crazy anoying so this service implements a debugger connection from visualstudio code into the docker container. To use this you only need to open the debugging tab in VisualStudioCode and hit the green play button while selecting attach next to it. 
![grafik](https://user-images.githubusercontent.com/74773202/166214778-38e502e4-7536-40ca-b632-548ef59c25cd.png)

This will attach visualstudiocode to the debugger and allows you to set brakpoints, stop running code, debug vaiables etc. 

