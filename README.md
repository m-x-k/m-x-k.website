# MXK Solutions Ltd Blog

[https://m-x-k.github.io](https://m-x-k.github.io)

This blog has been created with Jekyll and hosted on GitHub pages.

### Development

#### Requirements

* Ruby
* Jekyll

#### Development testing

  bundle exec jekyll server

#### Publishing

This project uses two branches, `source` and `master`. The `master` branch contains raw site content which is built using the `source` branch. To commit new changes make sure you are using the `source` branch and run the following script:

```
./publish.sh <COMMIT_MESSAGE>
```

>
This is based on the solution to using unsupported jekyll plugins with GitHub pages provided by [Drew Silcock](https://drewsilcock.co.uk/custom-jekyll-plugins) on his blog.
