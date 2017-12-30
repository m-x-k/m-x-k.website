---
layout: single
title:  "Java 9 JShell overview"
date:   2017-12-30 11:40:00 +0000
categories:
  - Java
tags:
  - Java 9
  - JShell
---

## JShell

Originally introduced as project Kulla, JShell is a great tool for new and experienced developers.

JShell  is a read-eval-print-loop (REPL) tool which can be used to quickly interact with Java from the command line without the need to compile your code.

### MacOS setup for JShell:
{% gist 382cb9a852e4f26f86c9c7267149267d %}

---

You can start up the JShell console via a terminal window session:
```sh
$ jshell
```

From there you can execute java statements. While it is possible to combine some statements into one line such as a for loop it is preferred practice to got with a more reactive programming style such as java streams. For example:
```sh
jshell> import java.util.stream.*
jshell> IntStream.range(0, 10).map(i -> i * i).toArray()
$1 ==> int[10] { 0, 1, 4, 9, 16, 25, 36, 49, 64, 81 }
```

After executing the above you can now use `$1` in future expressions inside the current jshell session.

>
JShell is utilimately a great tool for users to explore the core Java API.

### Printing with JShell

To support printing with JShell you need to run it with the print option:
```sh
$ jshell --start DEFAULT --start PRINTING
```

With support for `print` you can now execute statements like the following:
```sh
jshell> printf("Pi is %.5f\n", Math.PI)
jshell> println( "Print me!")
```

Without the jshell `print` options you will get an error that the method doesn't exist. You can get around this by creating your own methods but it adds extra effort.

---

### Edit

Its also possible to edit JShell in a separate java editor by typing:

```sh
jshell> /edit
```

If you have recently created a method in your session history you can extend this to edit that method:
```sh
jshell> void testMe() {
jshell> System.out.println("testing");  
jshell> }
jshell> /edit 1
```

Alternatively you can switch to your favourite editor with:
```sh
jshell> /set editor /usr/bin/vim
```

---

### List

It's also possible to `list` any methods created in your current session:
```sh
jshell> /list
```

If you want to list the all of the current imports you can execute:
```sh
jshell> /imports
```

---

### Save and Open

A useful feature in jshell is the `save` and `open` commands. If you need to save a snippet source to a file you can execute:
```sh
jshell> /save <FILE>
```

By default this will save all commands and snippets currently active in your session. There are several variations that you can use with this such as `/save -all | -history | -start`. Each of these will extract a slight variation of your commands which you can find more information on through the jshell help.

Conversely if you need to `open` files back up again you can execute:
```sh
jshell> /open <FILE>
```

To be honest I which this feature was a little more intuitive. In most cases you will really want to save either methods or one liners in which case it would seem better to me to have a separate set of commands for this. Also I would really like to automatically preload methods/functions for newly created jshell sessions but so far I haven't found an ideal way to do this.

---

### Help

If you want to find out about other supported commands you can run:
```sh
jshell> /help
```

---

### Exit

The preferred way to exit a jshell session is to use:
```sh
jshell> /exit
```
