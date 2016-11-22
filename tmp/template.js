import 'babel-polyfill'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import BoxLayer from './../containers/box-layer/box-layer'
import Title from './../components/title'
import Subtitle from './../components/subtitle'

import Layer from './../containers/layer/layer'
import LayerProperties from './../containers/layer/layer-properties'

import Box from './../components/box'

const Page = () => {
	return (
		<div className="root">
			<remplace_here/>
		</div>
	)
}

export default DragDropContext(HTML5Backend)(Page)