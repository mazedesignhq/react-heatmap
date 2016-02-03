var React = require('react');
var ReactDOM = require('react-dom');
var ReactHeatmap = require('react-heatmap');

var App = React.createClass({

	getInitialState() {
	  return {
	  	data: []
	  }
	},

	componentDidMount() {

		this.setRandomData();
	},

	randFromInterval(min, max) {
		return Math.floor(Math.random()*(max-min+1)+min);
	},

	setRandomData() {
		let data = [];
		let dotsCount = this.randFromInterval(2, 30);
		for(let i = 0; i < dotsCount; i++) {
			let x = this.randFromInterval(0, 200);
			let y = this.randFromInterval(0, 200);
			let value = this.randFromInterval(1, 5);
			data.push({x:x,y:y,value:value});
		}
		this.setState({data : data});
	},

	render () {
		return (
			<div style={{width: 200, height: 200}}>
				<ReactHeatmap max={5} data={this.state.data} />
				<div style={{marginTop:40}}>
					<button onClick={this.setRandomData}>Randomize data</button>
				</div>
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
