---
layout: single
title:  "Creating a Blog with Jekyll and GitHub pages"
date:   2017-12-20 08:50:20 +0000
categories:
  - Jekyll
tags:
  - Jekyll
  - GitHub
---

## Steps to create a sample blog created using Jekyll and hosted on GitHub.

### Setup

If you want to create a similar blog you can either fork this [implementation](https://github.com/m-x-k/m-x-k.github.io) or create a new one by installing:
* Ruby
* Jekyll
{% highlight bash %}
gem install jekyll
jekyll new .
{% endhighlight %}

### Development

To setup your environment with all the required plugins run the command `jekyll build`

The blog entries can be tested locally using the command `jekyll serve` and loading [http://localhost:4000](http://localhost:4000)

New blog entries can be added to the `_post` folder and follow the standard markdown syntax.

### GitHub pages

To view this blog goto: [https://github.com/USERNAME.github.io](https://github.com/USERNAME.github.io)

A number of the Jekyll plugins will not work by default with GitHub pages. I have noticed a number of issues with pagination when using custom themes. This blog for example uses the minimal [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes) plugin which requires pagination for recent posts. At the time of writing `jekyll-paginate-v2` isn't supported by GitHub pages. It is however possible to get unsupported plugins to work via a number of alternative deployment options but the majority of these are quite complex for this introduction tutorial.

Note: its also possible to use GitLab pages

### Plugins

Jekyll has many useful plugins including for example [jekyll-gist](https://github.com/jekyll/jekyll-gist) which allows you to embed gists into your blog entries.

### Additional

#### Useful links

* [Jekyll installation](https://jekyllrb.com/docs/installation/)
* [GitHub pages help](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)
* [GitHub pages error messages](https://help.github.com/articles/viewing-jekyll-build-error-messages/)
