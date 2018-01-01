---
layout: single
title:  "Java 9 Collection Literals"
date:   2017-12-30 11:40:00 +0000
categories:
  - Java
tags:
  - Java 9
  - Collection Literals
---

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

### Summary

As you can see Java 9 has introduced some useful new functions but in many cases they appear to come with them a number of technical intricacies.

While the above features do provide syntactical sugar we can only hope that in time they will improve. Perhaps they will begin to serve a foundation for future changes to the core Java language but only time will tell. For the time being they remain useful when programming in a reactive style.
