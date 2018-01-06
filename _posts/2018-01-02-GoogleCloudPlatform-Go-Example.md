---
layout: single
title:  "Google Cloud Platform - GoLang Example"
date:   2018-01-01 12:40:00 +0000
categories:
  - GoogleCloudPlatform
tags:
  - GoogleCloudPlatform
  - Go
  - GoLang
---

## Google Cloud Platform Hello World example with GoLang

For some time now I've been tempted to spend some time learning the Google Cloud Platform for developing my own projects. With so many cloud platform solutions out there it can be difficult to know where best to invest your free learning time. However if you can step back from trying to learn new languages and frameworks you might find that many of the Cloud Platforms out there already offer great tutorials to help you get setup quickly. In this post I will be attempting to follow the Google Cloud Platform tutorial for a simple GoLang application in an attempt to get better up to speed with developing both GoLang and the Google Cloud Platform.

### Initial setup:

After the initial Google Cloud Platform account setup you will be prompted with a tutorial to get started on the app engine. The entire process can take some time so you will probably need to make notes and come back every once in a while.

### Using the github example project

The tutorial will take you through steps where you copy and paste commands similar to the following into the Google Cloud Shell:

```sh
TUTORIALDIR=src/mywebsite-1045/go_gae_quickstart-2018-01-02-15-49
git clone https://github.com/GoogleCloudPlatform/appengine-guestbook-go.git $TUTORIALDIR
cd $TUTORIALDIR
git checkout part1-helloworld
```

>
The above example just takes the default hello world example but you can of course [fork this implementation](https://github.com/GoogleCloudPlatform/appengine-guestbook-go#fork-destination-box) and substitute the endpoints with your forked project to generate your own example. Just remember that there are different branches used here.

### Google Cloud Shell

The Google Cloud Shell is a web console which is authorised to your account. This is convenient for first time setup and tutorials but before long you will want to get your favourite terminal setup to work with the [gcloud](https://cloud.google.com/sdk/gcloud/) command.

In order to install `gcloud` locally you will need to [install and initialise the Google Cloud SDK](https://cloud.google.com/sdk/downloads). I would recommend using the interactive installer for developer machine setup just be careful to choose the correct terminal profile. The default for me was `~/.bash_profile` but I still had to source it to get it to work properly after the initiate step: `source ~/.bash_profile`. If you have set this up correctly to your Google Cloud Project and user account you should be able to start running commands like the following:

```sh
gcloud --help
gcloud projects list
gcloud app describe
gcloud app logs read
gcloud app instances list
```

### Go Hello World Example

```go
package hello
import (
    "fmt"
    "net/http"
)
func init() {
    http.HandleFunc("/", handler)
}
func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprint(w, "Hello, world!")
}
```

### Kubernetes yaml configuration:
```yaml
runtime: go
api_version: go1
handlers:
- url: /.*
  script: _go_app
```

### Execute Hello World Go Example application

#### Temporary deployment for development testing:
```sh
goapp serve app.yaml
```

#### [Google Cloud Platform Web Preview](https://cloud.google.com/shell/docs/features#web_preview)

Once you have the application up and running the tutorial prompts the use to open up the `Web Preview` which will provide temporary routing to your web application via your browser and the `Cloud Shell proxy service`. There is an implicit restriction on this proxy service to only allow HTTP requests over the port range `8080` to `8084`. Its also worth mentioning that by default the speed of access is limited unless you enable the `Boost Mode`.

#### Deployment:

You can deploy the example application via Google Shell by executing:
```sh
goapp deploy -application mywebsite-1045 -version 0
```

The tutorial will display the application url for you but you can also get it from your local machine using:
```sh
gcloud app browse
```

## Summary

The Google Cloud tutorials are very well structured for new developers. Everything is step-by-step focused to constantly build on your experience. There are some complex concepts to get up to speed on such as Kubernetes, Cloud Shell and installing and configuring the SDK tools on your local machine but the process is fairly straightforward to anyone with a bit of development or DevOps experience. However it does feel like there is a lot content that you will need to master and therefore you will need to set aside quite a bit of time to get to grips with everything.

The next tutorials I'm planning to look at should cover the `Google Cloud Datastore` and `Google Cloud Storage` which hopefully will provide some useful insights for building and deploying my own Go web based application via the Google Cloud Platform.
