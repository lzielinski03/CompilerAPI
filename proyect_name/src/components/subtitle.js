import React from 'react'

const Subtitle = (props) => {
	const styleProps = ['backgroundColor', 'color', 'textAlign']
	const styles = {}

	styleProps.forEach( prop => {
		if (props.hasOwnProperty(prop))
			styles[prop] = props[prop]
	})

	return (<h2 style={{ ...styles }}>{ props.children }</h2>)
}

export default Subtitle
