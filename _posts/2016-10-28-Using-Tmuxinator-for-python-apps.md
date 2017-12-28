---
layout: single
title:  "Using Tmuxinator for Python Apps"
date:   2016-10-28 11:00:00 +0000
categories:
  - Tmux
tags:
  - Tmux
  - Tmuxinator
  - Python
---

## Using Tmuxinator for Python Apps

With the dawn of Microservices its becoming more common to have to run and maintain multiple applications in your development environments.

Recently I found myself having to do this with a number of Python Flask applications. Each morning I would login and find myself creating multiple terminal sessions, initiating virtual environments and finally starting up my applications.

For flexibility and debugging it's useful to startup these applications independently from background OS services. Therefore the ideal setup for me had to be an automated process.

### [Tmux](https://github.com/tmux/tmux/wiki)

In the past I had used `Tmux` to split a terminal window into multiple sessions but the process itself wasn't automated and the command line shortcuts where often difficult to remember.

`Tumx` is a [terminal multiplexer](https://en.wikipedia.org/wiki/Terminal_multiplexer) that can be used to access multiple separate login sessions inside a single terminal window, or detach and reattach sessions from a terminal.

### [Tmuxinator](https://github.com/tmuxinator/tmuxinator)

Tmuxinator is a command line tool that helps to automate your tmux setup. The tool can create stored sessions by name and has a simple system for defining how things get positioned.

It comes packaged as a Ruby Gem so the installation is:
```sh
gem install tmuxinator
```

<img src="/assets/images/animation/python-flask-tmux.gif"/>

### Installing Tmuxinator on MacOS

To install `Tmuxinator` run the following in a terminal:

```sh
brew install tmux
sudo gem install tmuxinator
tmuxinator doctor
```

As an example on how to use `Tmuxinator` here is a simple yml file which will open a split screen window with `top` to display active processes and `ls` to show the current director contents.

```yml
# ~/.tmuxinator/basic.yml

name: basic
root: ~/

windows:
  - editor:
      layout: main-vertical
      panes:
        - top
        - ls -al
```

If you create this file under the path `~/.tmuxinator/basic.yml` you should be able to execute it by running:
```sh
tmuxinator start basic
```

In this case `basic` matches the configuration file name.

### Summary

`Tmuxinator` is a useful command line tool for automation within a development environment. It doesn't take a lot of time to setup and with the use of bash aliases you can make it even easier to execute and setup your local development environment. There are quite a few alternatives out there if you look around but I've found `Tmuxinator` to be ideal for my needs.

## Additional links

* [Tmux](https://github.com/tmux/tmux/wiki)
* [The Tao of tmux](https://leanpub.com/the-tao-of-tmux/read)
* [Tmuxinator](https://github.com/tmuxinator/tmuxinator)
