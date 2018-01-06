---
layout: single
title: Building a monitoring dashboard with React and Python
date:  2018-01-05 11:00:00 +0000
categories:
  - Javascript
  - React
  - Axios
tags:
  - React
  - Axios
  - Python
---

Recently I needed to build a custom monitoring dashboard to present some realtime system updates. The dashboard interface needed to be flexible and maintainable in order to be customised.

### Codepen.io developing

As a quick mockup I created this [codepen](https://codepen.io/mxk/pen/WdEpVd?editors=0010) using the React and ReactDOM CDN. It uses a static hashmap to represent the individual services. The content was written using `JSX` and `ES7` synatx so it also requires a `babel transpiler` to convert before rendering.

{% codepen https://codepen.io/mxk/pen/WdEpVd height=800 preview=true %}

### Recommended best practices for React development

I tried to follow some of the recommended best practices for React development. One the main points in React development is to split your components into two separate types:
* `Presentational`:
  * Are concerned with `how things look`
  * Should be written as functional components unless they need state, lifecycle hooks, or performance optimizations in which case Class is required
  * Examples: Page, Sidebar, Story, UserInfo, List
* `Container`:
  * Are concerned with `how things work`
  * Provide the data and behavior to presentational or other container components

### Benefits of This Approach

* Better separation of concerns
* Better reusability


>
Aside from that I didn't opt to use any state based frameworks such as `Redux`. To be honest I did look into this but the extra effort and complexity made this difficult to implement. I think one of the problems here is the use of different javascript syntax. As a result of recent enchancements into the core langauge from ES5, ES6, up to ES7 and combined with JSX syntax it can be very tricky to find examples to match your own. Personally I would be concerned if javascript was my core development language at the minute, the result overtime of such fragmentation in a language could make it difficult to maintain different code bases.

### Project developing

[Mini Monitoring Dashboard - GitHub Project](https://github.com/m-x-k/mini-monitoring-dashboard)

The next stage was to combine the above changes into an all-in-one server side solution. For the most part this was just a copy and paste of the core HTML, CSS and JSX elements into my server side code base.

>
I should point out that I intentionally opted for Python as my server side solution rather than use Nodejs. In hindsight it would have been more convenient to use Nodejs especially for support of Common JS modules but I knew that at some point this project was going to have to be integrated into another python code base.

### Updating JSX

With the dashboard code available in the python flask `templates` and `static` folders the next step was to provide a solution to transpile the ES7 and JSX syntax into a javascript file. If I had time I could have setup WebPack or some other javascript build tool to do this for me but since I was using Python this seemed overkill. My solution was to build the following script:

```sh
#!/bin/bash

npm install --save-dev babel-cli babel-plugin-transform-react-jsx babel-preset-es2017
babel src/static/js/app.jsx --plugins transform-react-jsx --presets es2017 --out-file src/static/js/app.js
```

### Axios

In the past for Ajax calls I would use `jQuery` but these days its a little overkill when combined with other javascript frameworks. As an alternative I decided to go with `Axios`. I created the following function to call the `/example` endpoint asynchronously and set the state attribute `services`.

```js
fetchData() {
    axios.get('/example')
    .then(({data}) => {
        this.setState(
            {services: data.services}
        );
    })
    .catch(function (error) {
        console.log(error);
    });
}
```

The next step was to periodically update the screen every 10 seconds or so. I could have just refreshed the page with `window.reload` or a html meta tag but the user experience isn't very nice. React Components can use `intervals` to periodically update content so I went with that approach:

```js
...

componentDidMount() {
    // on page load
    this.fetchData();
}

componentWillMount() {
    // updates every 10 seconds
    const id = setInterval(this.fetchData, 10000);
    this.setState({intervalId: id});
}

componentWillUnmount() {
    clearInterval(this.state.intervalId);
}

...
```

### Configuration

The project contains the file `example.json` which ca be used to update the list of services.

At this point you can only edit the following:

| Field | Description |
| --- | --- |
| `service.name` | Service Name displayed in the dashboard panel |
| `service.measurements` | An array of measurements for display under the service panel. These are typically of the form `{"Name":"Value"}` |
| `service.trends` | An array of trends for display under the service panel. These are typically of the form `{"Type": "Value"}`. The `type` here can be "UP" or "DOWN" in order to display the corresponding icon. |

#### Example json file:

```json
{
  "services": [
    {
      "name": "Service 0",
      "measurements": [
        {"Submissions": "49"},
        {"Completed": "4"}
      ],
      "trends": []
    },
    {
      "name": "Service 1",
      "measurements": [
        {"Completed": "10"}
      ],
      "trends": [
        {"UP": "30%"}
      ]
    }
  ]
}
```
