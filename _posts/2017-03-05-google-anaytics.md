---
layout: single
title:  "Google Analytics with Google Tag Manager"
date:   2017-03-05 11:00:00 +0000
categories:
  - Analytics
  - GTM
tags:
  - Google Analytics
  - Google Tag Manager
---

## Google Analytics

If you want to track user behaviour on your websites Google Analytics combined with Google Tag Manager is an ideal solution with a simple setup process.

First up go to the main [Google Analytics website](https://analytics.google.com/analytics/) and signup to create yourself a new account for your website. This should provide you with a tracking id of the form `UA-XXXXXXXXX-X`.

#### Adding Google Tag Manager to your website

After setting up your Google Analytics account and logging in you should get a html snippet which you can embed into your website like:
```
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-XXXXXXXXX-X');
</script>
```

Ideally you would place the above snippet on each page in your application. If you have designed your website using layout templates you should be able to add this to the bottom of the page inside the body element.

#### Testing it all works

Before you upload your website with the new Google Tag Manager support you might like to check that it is indeed loading and registering the tag with google correctly. This is where you can use the chrome browser plugin `GA debugger`. If you install the plugin and enable it with the icon at the top right of the chrome window and refresh your website page you should be able to see output in the chrome developer tools console window which should contain the following ascii banner:
```
                         _                          _       _   _
                        | |                        | |     | | (_)
  __ _  ___   ___   __ _| | ___    __ _ _ __   __ _| |_   _| |_ _  ___ ___
 / _` |/ _ \ / _ \ / _` | |/ _ \  / _` | '_ \ / _` | | | | | __| |/ __/ __|
| (_| | (_) | (_) | (_| | |  __/ | (_| | | | | (_| | | |_| | |_| | (__\__ \
 \__, |\___/ \___/ \__, |_|\___|  \__,_|_| |_|\__,_|_|\__, |\__|_|\___|___/
  __/ |             __/ |                              __/ |
 |___/             |___/                              |___/
```

You can trigger custom Google Tag Manager events via the chrome developer tools console window by typing a command like the following:
```
dataLayer.push({'event': 'event_name'});
```

You can query the events currently submitted in the chrome developer tools console window by typing the following and examining the output:
```
dataLayer
```

The dataLayer is periodically submitted by GTM between page submissions. If you are using a single page application with javascript frameworks such as Angular or ReactJS you will need to investigate what plugins you can use in order to capture events such as clicking links etc ... Unfortunately these frameworks will use anchor tags (e.g. #) in the url in order to prevent the page from being reloaded.
