# React Heatmap

A very simple port of `heatmap.js` for `React`. The idea behind this component is to be able to display a heatmap over any type of content (image, div, components ...). By default, the heatmap will always take all available width and height of its container.


## Demo & Examples

Live demo: [JonathanWi.github.io/react-heatmap](http://JonathanWi.github.io/react-heatmap/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-heatmap is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-heatmap.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-heatmap --save
```


## Usage

This component is pretty straightforward and only expecting 2 simple parameters (`max` and `data`; if you're unfamiliar with these, take a look at the [`heatmap.js documentation`](http://www.patrick-wied.at/static/heatmapjs));

```
var ReactHeatmap = require('react-heatmap');

let data = [{ x: 10, y: 15, value: 5}, { x: 50, y: 50, value: 2}, ...];

<ReactHeatmap max={5} data={data} />
```

## Properties


General component description.

Props
-----
Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
max|int|5|No|Maximum value for intensity
data|array|[]|No|Heatmap array of dots
unit|string|percent|No|Can be either `percent` or `pixels`. If percent, a `x` value like `26` is considered **26% of the container from the top left**


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

[MIT License](https://en.wikipedia.org/wiki/MIT_License) Copyright (c) 2016 Jonathan Widawski.

