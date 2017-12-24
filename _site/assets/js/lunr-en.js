var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Building a responsive photo gallery",
      excerpt: "Recently I needed to build a photo gallery for a website built with ReactJS. I came across a convenient react...",
      categories: ["Javascript"],
      tags: ["Javascript","ReactJS"],
      id: 0
    });
    
  
    idx.add({
      title: "Rapid prototyping with code templates",
      excerpt: "Over the last few years I have been using Python quite a lot to build rapid prototypes. By far the...",
      categories: ["Python","Cookiecutter"],
      tags: ["Python","Cookiecutter"],
      id: 1
    });
    
  
    idx.add({
      title: "Creating a Gists Webpage With ReactJS",
      excerpt: "I decided to build a simple ReactJS webpage to render my personal Gists from GitHub as an basic kata. However...",
      categories: ["Javascript","ReactJS"],
      tags: ["Javascript","ReactJS"],
      id: 2
    });
    
  
    idx.add({
      title: "Useful List Of Python Resources",
      excerpt: "\n\n",
      categories: ["Python"],
      tags: ["Python"],
      id: 3
    });
    
  
    idx.add({
      title: "Presentation slides with Reveal.js",
      excerpt: "Using the reveal javascript library its possible to build intricate presentation slides for the browser. While its possible to create...",
      categories: ["Javascript","RevealJS"],
      tags: ["Javascript","RevealJS"],
      id: 4
    });
    
  
    idx.add({
      title: "Creating a Blog with Jekyll and GitHub pages",
      excerpt: "Steps to create a sample blog created using Jekyll and hosted on GitHub. Setup If you want to create a...",
      categories: ["Jekyll"],
      tags: ["Jekyll","GitHub"],
      id: 5
    });
    
  
    idx.add({
      title: "Python PIP Setup with artifactory",
      excerpt: "Installing a local artifactory instance: docker pull docker.bintray.io/jfrog/artifactory-oss:latest docker run --name artifactory -d -p 8081:8081 docker.bintray.io/jfrog/artifactory-oss In browser open http://localhost:8081...",
      categories: ["python"],
      tags: ["python","artifactory","pypi"],
      id: 6
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Building a responsive photo gallery",
        "url": "http://localhost:4000/javascript/Building-a-responsive-photo-gallery/",
        "excerpt": "Recently I needed to build a photo gallery for a website built with ReactJS. I came across a convenient react...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Rapid prototyping with code templates",
        "url": "http://localhost:4000/python/cookiecutter/Rapid-prototyping-with-code-templates/",
        "excerpt": "Over the last few years I have been using Python quite a lot to build rapid prototypes. By far the...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Creating a Gists Webpage With ReactJS",
        "url": "http://localhost:4000/javascript/reactjs/Creating-a-Gists-Webpage-With-ReactJS/",
        "excerpt": "I decided to build a simple ReactJS webpage to render my personal Gists from GitHub as an basic kata. However...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Useful List Of Python Resources",
        "url": "http://localhost:4000/python/Useful-List-Of-Python-Resources/",
        "excerpt": "\n\n",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Presentation slides with Reveal.js",
        "url": "http://localhost:4000/javascript/revealjs/Presentation-slides-with-Reveal/",
        "excerpt": "Using the reveal javascript library its possible to build intricate presentation slides for the browser. While its possible to create...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Creating a Blog with Jekyll and GitHub pages",
        "url": "http://localhost:4000/jekyll/creating-blog-with-github-pages-and-jekyll/",
        "excerpt": "Steps to create a sample blog created using Jekyll and hosted on GitHub. Setup If you want to create a...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Python PIP Setup with artifactory",
        "url": "http://localhost:4000/python/python-pip-setup-with-artifactory/",
        "excerpt": "Installing a local artifactory instance: docker pull docker.bintray.io/jfrog/artifactory-oss:latest docker run --name artifactory -d -p 8081:8081 docker.bintray.io/jfrog/artifactory-oss In browser open http://localhost:8081...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
