var compiler = function () {
	let stack = []

	function init(data) {
		create(data)
		return stack.join('')
	}

	function create(obj) {
		if (obj.childs.length === 0)
			addElement(obj, 'self')
		else {
			addElement(obj, 'open')      
			Array.isArray(obj.childs) ? obj.childs.map( child => create(child)) : addValue(obj.childs)
			addElement(obj, 'close')
		}
	}

	function addElement(element, type) {
		stack.push(toReactJSX(element, type))
	}

	function addValue(value) {
		stack.push(value)
	}

	function toReactJSX(element, type) {

		let classNames = function(){
			let tmp = element.props.classNames
			return tmp .length > 0 ? ' className="' + tmp.join(' ') + '"' : ''
		}()

		let styles = function(){
			let tmp = JSON.stringify(element.props.elementStyles)
			return tmp === JSON.stringify({}) ? '' : ' style={' + tmp + '}'
		}()

		switch(type) {
			case 'open':
				return '<' + element.type + classNames + styles + '>'
				break;
			case 'close':
				return '</' + element.type + '>'
				break;
			case 'self':
				return '<' + element.type + classNames + styles + '/>'
				break;
			default:
				return null;
		}
	}

	return {
		toReact : init,
	}
}

module.exports = compiler;