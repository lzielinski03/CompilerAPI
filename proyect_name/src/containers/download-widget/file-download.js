import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './actions'


class FileDownload extends Component {
	construct() {

	}
	static propTypes = {
		actionPath: React.PropTypes.string.isRequired,
		method: React.PropTypes.string,
		onDownloadComplete: React.PropTypes.func.isRequired,
		queryParams: React.PropTypes.object
	}

	static defaultProps = {
		method: 'GET'
	}

	componentDidMount() {
		//ReactDOM.findDOMNode(this).submit()
		console.log('mounted')
	}

	render(){
		const {actionPath, method} = this.props
		return (
			<form
				action={actionPath}
				className="hidden"
				method={method}>
				{actionPath}
			</form>
		)
	}
}

const mapStateToProps = ({layerReducer}) => {
	return {}
}

const mapDispatchToProps = dispatch => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FileDownload)