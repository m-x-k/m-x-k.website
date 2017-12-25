---
layout: single
title:  "Primer on Docker"
date:   2017-01-10 11:00:00 +0000
categories:
  - Docker
tags:
  - Docker
---

## Docker

It's easy to get lost in all the hype behind docker and the use of containers. Over at the [Docker main website](https://www.docker.com) you can find plenty of promotional material on what Docker is but in order to truly understand what it provides I believe its necessary to actually step through the concepts in practical terms.

This blog entry is designed to provide a simple primer on docker for developers new to docker.

### Installing the Docker engine

Its best to follow the [official docker installation guide](https://docs.docker.com/engine/installation/) on this part in order to setup docker for you machine. For local machines and first time installs I recommend using the `stable CE (Community Edition)`.

You will need to create a Docker Hub account and login via either the docker command line CLI or interface in order to pull down official docker images.

### The basic concepts

#### Docker Image

A `Docker Image` is a static binary read-only copy of your application or product. In simple terms think of it like an ISO only it is comprised of a series of layers. Each layer is combined to form the complete image and can be `cached` for efficiency.

The efficiency of layers in practical terms means faster build times, uploads and downloads when using images. Images are typically uploaded to a central docker hub or registry. You can use the official docker hub or you can pull down your own and host it locally if you want.

You can pull down pre-built docker images from the official Docker Hub for example:
```
docker pull hello-world
```

#### Docker Container

The Docker engine can take the read-only layers of an image and execute them to create a runtime instance which is known as a `Docker Container`.

You can create a container with the the `docker run` command. For example:
```
docker run hello-world
```

You can view all docker containers on your system with either of the following commands:
```
docker ps           # Display all running docker containers
docker ps -a        # Display all docker containers (stopped or running)
```

Using the above you can find the container ids for docker containers. A docker container can be modified with commands such as:
```
docker stop <CONTAINER_ID>      # Stop a running docker container instance
docker start <CONTAINER_ID>     # Start a stopped docker container instance
docker restart <CONTAINER_ID>   # Restart a docker container instance
docker rm <CONTAINER_ID>        # Delete a stopped container instance
```

For more docker run commands run `docker run --help`.

#### Dockerfile

In order to build your own `Docker Images` you need to create a `Dockerfile`. This is a simple text file with name `Dockerfile` which can be used to create a Docker Image from another image which we refer to as the `base image`. An example docker file is the one below:
```
FROM scratch
COPY hello /
CMD ["/hello"]
```

If you copy the above content into a new file named `Dockerfile` you can then build your own image locally with the following `docker build` command executed from the same folder where the `Dockerfile` is contained:
```
docker build -t hello-world .
```

When you build a `Docker Image` with the above command it will be stored locally using the tag name supplied by `-t hello-world`. If you want to find all docker images on your machine you can run the command:
```
docker images
```

### Summary

Ok I've intensionally kept this quite light. There are manny more concepts to get your head around here but hopefully this has been an interesting introduction into the concepts of containers and how to use Docker. For some more tips on building your own docker images etc ... see the additional links below.

### Additional links:
* [12 Factor Apps](https://12factor.net) - guides on how to build apps that work well with the concept of docker
* [Dockerfile best practices](https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/)
* [Docker development best practices](https://docs.docker.com/develop/dev-best-practices/)
* [Docker deprecated features](https://docs.docker.com/engine/deprecated/#driver-specific-log-tags)
