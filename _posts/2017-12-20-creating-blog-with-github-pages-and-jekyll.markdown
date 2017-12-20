---
layout: post
title:  "Creating a Blog with Jekyll and GitHub pages"
date:   2017-12-20 08:50:20 +0000
categories: jekyll gitlab
---

Steps to create a sample blog created using Jekyll and hosted on GitHub.

### Setup

If you want to create a similar blog you can either fork this implementation or create a new one by installing:
* Ruby
* Jekyll
{% highlight bash %}
gem install jekyll
{% endhighlight %}

### Development

To setup your environment with all the required plugins run the command `jekyll build`

The blog entries can be tested locally using the command `jekyll serve` and loading [http://localhost:4000](http://localhost:4000)

New blog entries can be added to the `_post` folder and follow the standard markdown syntax.

### GitHub pages

To view this blog goto: [https://github.com/<USERNAME>.github.io](https://github.com/<USERNAME>.github.io)

Alternatively you can use GitLab pages which appears to work exactly the same.

### Plugins

Jekyll has many useful plugins including for example [jekyll-gist](https://github.com/jekyll/jekyll-gist) which allows you to embed gists into your blog entries.

### Additional

#### Useful links

* [Jekyll installation](https://jekyllrb.com/docs/installation/)

