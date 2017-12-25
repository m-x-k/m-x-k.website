---
layout: single
title:  "Presentation slides with Reveal.js"
date:   2017-11-21 20:20:41 +0000
categories:
  - Javascript
  - RevealJS
tags:
  - Javascript
  - RevealJS
---

Using the reveal javascript library its possible to build intricate presentation slides for the browser. While its possible to create a sample using a web client over at <a href="https://slides.com/">https://slides.com/</a> I personally prefer to download the latest version directly from the github account <a href="https://github.com/hakimel/reveal.js/releases/latest">Latest release</a> in order to generate your slide presentation by hand.

Steps to get it all up and running:

<ol>
	<li>Create a new folder and extract the latest reveal.js code into a sub-folder called "reveal.js"</li>
	<li>In the root of your project copy the following html code into a file named index.html</li>
	<li>Open the index.html file with your browser of choice (note: chrome seems to be the preferred option)</li>
</ol>
{% gist fd6d40367b49bd811d6f99a9065f919a %}

The above sample is just a quick setup to get you going but there are many features in this library that you can take advantage of:
<ul>
	<li>Markdown support using "<<span class="pl-ent">section</span> <span class="pl-e">data-markdown> ..."</span></li>
	<li>PDF support by going to "?print-pdf" in chrome. The sample above provides support for this using a small javascript tag which makes use of some inbuilt javascript libraries.</li>
	<li>Hidden notes support using "<section data-separator-notes=...>"</li>
	<li>Slide data transitions such as "fading" in and out, zooming as well as controlling the speed</li>
</ul>
There are many more features that you can play about with including embedded videos, images and other multimedia. One feature that particularly interests me is embedding external markdown files. In terms of project development teams would be able to provide customer demos along side your versioned code base. It's also possible to override the existing css but you may find this to be difficult when using the markdown content due to the way that this is converted by reveal.js on the fly.

For a quick introduction on other features in the current version 3 release have a look at the following slideshare from the author of Reveal.js Hakim El Hattab:

<iframe src="//www.slideshare.net/slideshow/embed_code/key/e3ACCuYrg0rSiG" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/hakimel/revealjs-300" title="reveal.js 3.0.0" target="_blank">reveal.js 3.0.0</a> </strong> from <strong><a href="https://www.slideshare.net/hakimel" target="_blank">Hakim El Hattab</a></strong> </div>
