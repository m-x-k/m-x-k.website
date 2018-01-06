---
layout: single
title: "Python PIP Setup with artifactory"
date:  2017-12-22 20:00:00 +0000
categories:
  - Python
tags:
  - Python
  - Artifactory
  - PyPI
---

## Installing a local artifactory instance:

```sh
docker pull docker.bintray.io/jfrog/artifactory-oss:latest
docker run --name artifactory -d -p 8081:8081 docker.bintray.io/jfrog/artifactory-oss
```

* In browser open http://localhost:8081
* Add new remote repository: http://localhost:8081/artifactory/webapp/#/admin/repositories/remote
  * [Setup your artifactory instance with PyPI](https://www.jfrog.com/confluence/display/RTF/PyPI+Repositories)

* Using the remote repositories that you created you should be able to setup your local environment (or container). I usually script this up with something simple like the following:

{% gist 4a6acaea415e6ff112c5980996147fc4 %}

* You can also perform `pip install` commands pointed directly if you want to test it. For example:

```sh
pip install --index-url http://localhost:8081/artifactory/api/pypi/repo-pypi-virtual/simple requests
```

* Some additional commands can be useful here such as `--disable-pip-version-check` and `--trusted-host <HOST>`
