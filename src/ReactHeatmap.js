import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Heatmap from 'heatmapjs/build/heatmap.js'

class ReactHeatmap extends Component {

	constructor(props) {
		super(props);
		this.setData = this.setData.bind(this);
	}

	componentDidMount() {
		this.heatmap = Heatmap.create({
		  container: ReactDOM.findDOMNode(this)
		});
		this.setData(this.props.max, this.props.data);
	}

	componentWillReceiveProps(newProps) {
		this.setData(newProps.max, newProps.data);
	}

	setData(max, data) {
		this.heatmap.setData({
		  max: max,
		  data: data
		});
	}

	render () {
		return( 
			<div style={{width: '100%', height: '100%'}}></div>
		);
	}
}

ReactHeatmap.propTypes = {
	max : React.PropTypes.number,
	data : React.PropTypes.array
}

ReactHeatmap.defaultProps = {
	max: 5,
	data: []
}

export default ReactHeatmap
