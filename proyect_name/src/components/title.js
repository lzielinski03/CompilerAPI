import React from 'react'

const Title = (props) => {
	const styleProps = ['backgroundColor', 'color', 'textAlign']
	const styles = {}

	styleProps.forEach( prop => {
		if (props.hasOwnProperty(prop))
			styles[prop] = props[prop]
	})

	return (<h1 style={{ ...styles }}>{ props.value }</h1>)
}

export default Title
