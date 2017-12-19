---
layout: post
title:  "Rapid prototyping with code templates"
date:   2017-11-12 20:00:10 +0000
categories: Python Cookiecutter
---

Over the last few years I have been using Python quite a lot to build rapid prototypes. By far the best command line tool I've found for this is the python 'cookiecutter' project below:

[https://github.com/audreyr/cookiecutter](https://github.com/audreyr/cookiecutter)

There are a large number of <a href="https://github.com/audreyr/cookiecutter#python">sample cookiecutter projects</a> out there but it makes sense to build and maintain your own if you want to get the latest setup.

For ease of use I have a number of linux command line aliases to create new projects from my own code template projects:

{% gist a849a8b7d2da0f54dc35c4fb9b42983d %}

In some cases these code template projects have been customised to my own preferences with IDE support etc ... but for the most part they tend to be fairly vanilla in case other people might find them useful and also to allow me to customise each new project. So for example with Java applications I tend to prefer IntelliJ with Gradle but beyond that for me it doesn't make sense to preload all of your favourite java libraries.

In some work places I have noticed a tendency to try and standardise code structure with similar code template tools (e.g. maven archetypes). In many cases this can save project setup time but I tend not to favour this approach. Ideally in agile development teams it is best to reach a group consensus based on the project requirements first and then trying to agree on code standards such as naming, structure etc ... A good place to start is often Uncle Bob's Clean coders book which is widely distributed and possibly combining this with Extreme Programming techniques such as TDD, Pair Programming or Mobbing. This combined approach often gets extremely good results allowing for a wider group consensus and shared ownership.

However in many situations the first place to start on a project is a quick prototype. It can therefore be convenient to use code templates in these situations. This actually helps to reinforce the concept that code implemented as part of the prototype is 'temporary' and therefore should be discarded and reimplemented by the team from scratch.

