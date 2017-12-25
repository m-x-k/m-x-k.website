---
layout: single
title:  "Getting started with OpenShift"
date:   2017-12-25 11:40:00 +0000
categories:
  - OpenShift
  - MiniShift
  - Docker
tags:
  - OpenShift
  - MiniShift
  - Docker
---

## OpenShift

>
OpenShift provides a convenient abstraction over the concept of containers in the form of a PaaS (Platform as an application Service). At its core it utilises familiar container concepts provided by the likes of Docker and Kubernetes. This typically consists of an Orchestration Framework which can be used to scale applications on-demand based on usage but it also incorporates internal routing and firewall control via the use of application configuration files.

As part of this blog entry we will provide a quick overview of the OpenShift features and how to get this up and running on your own development machine using the Open Sourced MiniShift implementation.

## MiniShift

>
The open sourced organisation `OpenShift origin` have provided a simple setup in the form of `MiniShift`. They have detailed instructions on [how to install MiniShift](https://docs.openshift.org/latest/minishift/getting-started/installing.html) but in an attempt to stream line this I will be focusing on the MacOS installation guide.

## MacOS Installation quick guide

### Prerequisites:

* OS X 10.10.3 Yosemite or later
* Homebrew - convenient package installer for MacOS
* [VirtualBox](https://www.virtualbox.org/wiki/Downloads) - choose the latest `OS X host` under VirtualBox platform packages. This should download the latest DMG binary to your machine where you can install it.
* [xhyve](https://github.com/mist64/xhyve) - a hypervisor required to start the virtual machine.

### Setup:

At the time of writing you can install and setup MiniShift with all the requirements on MacOS for the first time using a basic script like the following:

{% gist 77b238f94b158944db4ceb66bec0fc9e %}

### Start MiniShift:

```
  minishift start
  minishift ip                # Get the MiniShift IP Address
  oc login -u system:admin    # Login as admin
```

### OC:

Interaction with OpenShift is with the command line tool oc. To configure and set this up execute the following:

```
  eval $(minishift oc-env)    # Setup the
```

### Sample application:

```
  oc new-app https://github.com/openshift/nodejs-ex -l name=myapp     # Deploy a sample app
  oc expose svc/nodejs-ex                                             # Expose a route to the service
  minishift openshift service nodejs-ex --in-browser                  # Open the app in your browser
```

### Stop MiniShift:

When your finished playing with MiniShift you can stop it easily with the following command:

```
  minishift stop
```

## Ok so whats next?

Ok so installing a sample app is fairly straightforward but what do we do if we want to take our applications and use a real OpenShift instance in the Cloud. Well luckily cloud providers have started to provide convenient guides on how to set all this up. For instance [AWS provides a quick overview on their technical blog covering this very topic](https://aws.amazon.com/about-aws/whats-new/2017/09/red-hat-openshift-container-platform-on-the-aws-cloud-quick-start-reference-deployment/).

## Additional links:

* [OpenShift](https://www.openshift.com/)
* [OpenShift Origin](https://www.openshift.org/)
* [Installing MiniShift](https://docs.openshift.org/latest/minishift/getting-started/installing.html)
