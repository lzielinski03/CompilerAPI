import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as Actions from './actions'

import Title from './../../components/title'
import Subtitle from './../../components/subtitle'
import ToggleButton from './../../components/toggle-button'
import Label from './../../components/label'

const LayerProperties = (props) => {
	return (
		<div style={{ 'color':'white' }}>
			{props.hidden && 
			<div >
				<Title value="Properties" color="white" backgroundColor="#373B41" textAlign="center"/>
				<Subtitle value="Layout" color="white"/>

				<Label value="Direction"/>
				<ToggleButton value={props.direction} values={['row', 'column']} handleClick={props.layer.toggleDirection} />
				
			</div>}
		</div>
	)
}

const mapStateToProps = ({layerReducer}) => {
	return { hidden: layerReducer.selected, direction: layerReducer.direction }
}

const mapDispatchToProps = dispatch => {
	return { layer: bindActionCreators(Actions, dispatch) }
}

export default connect(
	mapStateToProps
	,	mapDispatchToProps
)(LayerProperties)