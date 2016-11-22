import React from 'react'

//const Box = ({ name, connectDragSource, fit = false, children, column = false }) => {
const Box = (props) => {
	console.log(props)
	const flexProps = ['flex', 'flexGrow', 'flexShrink', 'flexBasis']
	const styleProps = ['backgroundColor', 'color', 'width', 'height']
	let classList = props.className.split(',')
	console.log(Array.isArray(classList))
	const styles = props.style

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
	const test = "react-layout-components--box " + classList.join(',')
console.log(classList.join(' '))
	return(
		<div style={ {...styles} } className={ "react-layout-components--box " + classList.join(' ') } onClick={ handleClick }>
			{props.children}
		</div>
	)
}


export default Box