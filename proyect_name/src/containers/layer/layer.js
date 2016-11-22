import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import * as Actions from './actions'
import BoxLayer from './../box-layer/box-layer'

const boxTarget = {
	drop(props, monitor) {
		props.layer.add(monitor.getItem())
	}
}

const collect = (connect, monitor) => {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	}
}

const Layer = ({ childs, selected2, layer, connectDropTarget, direction }) => {
	let classList = []
	let styles = {}
	styles.flexDirection = direction

	if (selected2 && selected2.type === 'layer')
		classList.push('selected')


	const handleClick = (e) => {
		select(9999, 'layer')
		e.stopPropagation()
	} 

	const select = (id, type) => {
		layer.selectElement({id, 'type': type})
	}
	return connectDropTarget(
		<div className={ 'layer ' + [...classList] } onClick={ handleClick } style={{...styles}}>
			{ childs.map( (item, i) => {
				let isSelected = false
				if (selected2 && selected2.type === 'box' && selected2.id == i)
					isSelected = true
				return <BoxLayer key={i} id={i} selected={ isSelected } default handleClick={ select }/>
			}) }
		</div>
	)
}

const mapStateToProps = ({layerReducer}) => {
	return { childs: layerReducer.childs, selected2: layerReducer.selected2, direction: layerReducer.direction }
}

const mapDispatchToProps = dispatch => {
	return { layer: bindActionCreators(Actions, dispatch) }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DropTarget('box', boxTarget, collect)(Layer))