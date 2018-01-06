---
layout: single
title:  "Java 9 Collection Literals"
date:   2017-12-30 11:40:00 +0000
categories:
  - Java
tags:
  - Java
---

An outline of some of the Java 9 changes to Collection literals and other areas of the core API.

## List.of and Set.of

Example:
```java
List<Integer> digits = List.of(3, 1, 4, 5, 9, 2);

Set<Integer> digits = Set.of(2, 7, 31, 127, 8191, 131871);
```

### Points to note:

#### Similarities to Java 8 Streams
>
We already came across the `of` function in Java 8 when we seen `Stream.of`.

#### Null not supported
>
It's also not allowed to insert a null value into the `of` function as this is the preferred coding-style these days.

#### Immutable object returned
>
It should also be noted here that while similar to `Arrays.asList` the objects returned by the `of` functions here are `immutable`. As a result if you try to `sort` or modify the collection you will get an `java.lang.UnsupportedOperationException`.

---

## Map.of

The new `Map.of` function is follows the api structure `static <E> List<E> of(E... elements)`.

The syntax for using the new `Map.of` function is as follows:
```java
jshell> Map.of("Jan", 1, "Feb", 2, "March", 3)
$1 ==> {Feb=2, March=3, Jan=1}
```

### Points to note:

#### Varags syntax instead of Map<K, V>
>
Since the type of `Key` or `Value` can change we need to use a flat varags structure to represent the data. This can seem odd when looking at data that is difficult to separate such as: `Map.of(1,1,2,2,3,3)`.

#### Null not supported
>
Again `null` is not supported here.

#### Maximum of 11 entries
>
Over 11 entries will produce an error. To get around this you will need to use `Map.ofEntries(Map.Entry ...)`

---

## [Optional](https://docs.oracle.com/javase/9/docs/api/java/util/Optional.html)

Java 8 introduced the concept of Optional as an operator to help prevent constantly checking for nulls. With Java 9 we now see more enhanced Optional support in the form of:
* New API methods yielding optional values:
  * `HttpClient.authenticator/cookieManager/proxy/sslParameters`
  * `ServiceLoader.findFirst()`
  * `Runtime.version().build/pre/post`
  * `ProcessHandle.of`
  * `ProcessHandle.Info.command/commandLine/arguments/startInstant/totalCpuDuration/user`
* New `Optional.or()` method:
  * If a value is present, returns an Optional describing the value, otherwise returns an Optional produced by the supplying function.
  * `Optional<T> or(Suppplier<? extends Optional<? extends T>> supplier)`
  * Example:
{% gist f646aea565927c81dbdd953c42ea6258 %}
* New `Optional.stream()` method
  * Yields a stream of length 0 or 1
  * Can be useful in place of a stream filter to drop empty results
  * Example: `Stream<User> users = people.map(Person::name).flatMap(Optional::stream)`

As a result of the above inclusions it is more common now to see code that no longer requires null checks all over the place. The idea here is to assist development teams to create and maintain cleaner code bases but as a result it is necessary to understand the core Java API better. Making better use of functional programming techniques like Java Streams will help to make the above API changes easier to use in the long run.

---

### Summary

As you can see Java 9 has introduced some useful new functions but in many cases they appear to come with them a number of technical intricacies.

While the above features do provide syntactical sugar we can only hope that in time they will improve. Perhaps they will begin to serve a foundation for future changes to the core Java language but only time will tell. For the time being they remain useful when programming in a reactive style.
