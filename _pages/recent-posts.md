---
layout: archive
title: "Recent Posts"
permalink: /recent-posts/
author_profile: true
pagination:
  enabled: true
---

{% for post in paginator.posts %}
  {% include archive-single.html %}
{% endfor %}

{% include paginator.html %}
