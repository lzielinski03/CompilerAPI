import React from 'react'
import { DragSource } from 'react-dnd'

//const BoxLayer = ({ name, connectDragSource, fit = false, children, column = false }) => {
const BoxLayer = (props) => {
	const flexProps = ['flex', 'flexGrow', 'flexShrink', 'flexBasis']
	const styleProps = ['backgroundColor', 'color', 'width', 'height']
	let classList = []
	const styles = {}

	if (props.column)
		styles.flexDirection = 'column'

	if(props.fit){
		styles.height = '100%'
		styles.width = '100%'
	}

	if (props.default) {
		styles.height = '100px'
		styles.width = '100px'
		if (!props.selected)
			styles.backgroundColor = '#252620'
		styles.margin = '10px'
	}

	if (props.selected)
		classList.push('selected')

	flexProps.forEach( prop => {
		if (props.hasOwnProperty(prop))
			styles[prop] = props[prop]
	})

	styleProps.forEach( prop => {
		if (props.hasOwnProperty(prop))
			styles[prop] = props[prop]
	})

	const handleClick = (e) => {
		props.handleClick(props.id, 'box')
		e.stopPropagation()
	}

	return props.connectDragSource(
		<div style={ {...styles} } className={ "react-layout-components--box " + [...classList] } onClick={ handleClick }>
			{props.children}
		</div>
	)
}

const boxSource = {
	beginDrag(props) {
		return { name: props.name}
	}
}

const collect = (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
}


export default DragSource('box', boxSource, collect)(BoxLayer)