---
layout: single
title:  "Creating a Gists Webpage With ReactJS"
date:   2017-11-13 19:00:00 +0000
categories:
  - Javascript
  - ReactJS
tags:
  - Javascript
  - ReactJS
---

I decided to build a simple ReactJS webpage to render my personal Gists from GitHub as an basic kata.

However while the ReactJS part was fairly straightforward I was once again reminded about Cross Site Scripting (XSS) issues when trying to call API's from another domain using javascript. Thankfully JQuery jsonp still works:
<pre><code class="javascript">componentDidMount(){
    $.ajax({
      url: "https://api.github.com/users/m-x-k/gists",
      jsonp: "$jsonp"
    }).done(function(data) {
      console.log(data);
      this.setState({gists: data});
    }.bind(this));    
}</code></pre>

Obviously in a production situation this isn't what we would rely on!!!

Reverse proxies like Nginx, HAProxy or Apache are much better suited to revolve these types of issues.

Ideally we would setup a reverse proxy on "api.github.com" so that we can share a common domain for the client side requests. For example if your web page url was http://my.gists.com/index.html you might setup a reverse proxy like http://my.gists.com/api/m-x-k/gists.

<em>Note: while its possible to mitigate the problem with headers it's not an ideal solution as it depends on browser support.</em>

[https://codepen.io/mxk/pen/WEJBbg](https://codepen.io/mxk/pen/WEJBbg)
