---
layout: archive
permalink: /categories/
title: "Posts by Category"
author_profile: true
---

{% include group-by-array collection=site.posts field="categories" %}

{% for category in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ tag | slugify }}" class="archive__subtitle">
    <a href="/categories/{{ category }}">{{ category }}</a>
  </h2>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}
