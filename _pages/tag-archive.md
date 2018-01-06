---
layout: archive
permalink: /tags/
title: "Posts by Tag"
author_profile: true
---

<link rel="stylesheet" href="/assets/css/custom.css">

{% include group-by-array collection=site.posts field="tags" %}

{% for tag in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ tag | slugify }}" class="archive__subtitle">
    <a href="/tags/{{ tag | downcase }}">{{ tag }}</a>
  </h2>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}
