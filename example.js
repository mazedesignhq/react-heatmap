require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactHeatmap = require('react-heatmap');

var App = React.createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {
		return {
			data: []
		};
	},

	componentDidMount: function componentDidMount() {

		this.setRandomData();
	},

	randFromInterval: function randFromInterval(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	},

	setRandomData: function setRandomData() {
		var data = [];
		var dotsCount = this.randFromInterval(2, 30);
		for (var i = 0; i < dotsCount; i++) {
			var x = this.randFromInterval(1, 100);
			var y = this.randFromInterval(1, 100);
			var value = this.randFromInterval(1, 5);
			data.push({ x: x, y: y, value: value });
		}
		this.setState({ data: data });
	},

	render: function render() {
		return React.createElement(
			'div',
			{ style: { width: 200, height: 200 } },
			React.createElement(ReactHeatmap, { max: 5, data: this.state.data }),
			React.createElement(
				'div',
				{ style: { marginTop: 40 } },
				React.createElement(
					'button',
					{ onClick: this.setRandomData },
					'Randomize data'
				)
			)
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

},{"react":undefined,"react-dom":undefined,"react-heatmap":undefined}]},{},[1]);
