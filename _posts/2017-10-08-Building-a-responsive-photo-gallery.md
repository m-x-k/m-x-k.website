---
layout: single
title:  "Building a responsive photo gallery"
date:   2017-10-08 20:00:10 +0000
categories:
  - Javascript
tags:
  - Javascript
  - ReactJS
---

Recently I needed to build a photo gallery for a website built with ReactJS. I came across a convenient react library "react-photo-gallery" which was ideal for this purpose. As a proof of concept I built a small Spring Boot app with ReactJS support:

<a href="https://github.com/m-x-k/photo-gallery">https://github.com/m-x-k/photo-gallery</a>

The application contains a few sample images which can easily be orientated to fit various devices and screen sizes for responsive behaviour.

I also needed to provide a demo to show off some of the functionality before implementing further. Luckily Heroku provides a great environment for sample demo sites. As usual Heroku can be a little slow on the first load as it builds the app on demand. You can reach the demo site below:

<a href="https://responsive-photo-gallery.herokuapp.com/">https://responsive-photo-gallery.herokuapp.com/</a>

The code implementation was straight forward to setup with the project split into two separate folders. One for the spring boot 'src' code and the other 'ui' folder for the ReactJS code. Support for Docker has been included as well as details and scripts on to upload the app and any photos to a Heroku account. The only tricky part was getting the folder permissions just right for the photos to load successfully.

At the minute I tend to favour Gradle for building Java projects. It provides a robust DSL with various plugins and support for Maven etc ... When it comes to Javascript building I tend to favour NPM/Yarn with Webpack especially for the ease of setup when it comes to ES6 transpiling. The combination allowed me to quickly setup an application structure supporting full stack builds on demand.
