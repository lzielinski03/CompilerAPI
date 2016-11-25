const Config: {
	fontSet: [
		{
			id: '',
			name: '',
			fontFamily: '',
			size: ''
		}
	]
	type: 'config',
}

const Layer: {
	properties: {
		shadow: ''
	},
	type: 'element',
	childs: [
		box: {}
	]
}

const Box: {
	properties: {
		fit: true,
		backgroundColor: ''
	},
	type: 'element',
	childs: [
		box: {}
	]
}

const Subtitle: {
	properties: {
		fontSetId: '',
		color: '',
		align: ''
	},
	type: 'text',
	value: ''
}

const SearchNew: {
	properties: {
		fontSetId: ''||null,
	},
	type: 'component',
	childs: [
		box: {}
	]
}


1+	copiar proyecto 							
2+	borrar contenido del source 				
3+	generar manualmente la metadata 			
4+	compilar manualmente en la carpeta source	

5-  agregar Componentes a la metadata
6-	Compilar nuevamente
7-	actualizar metadata para conveniencia del compilador
8-	

<script>
const metadata = Layer: {
	properties: {},
	type: 'element',
	childs: [
		Box: {
			properties: {
				backgroundColor: 'blue'
			},
			type: 'element',
			classNames: ['default-box'],
			childs: []
		},
		Box: {
			properties: {},
			type: 'element',
			classNames: ['default-box'],
			childs: []
		}
	]
}
</script>


return CompiledReactHtml = Compiler(metadata)


<div className="layer">
	<div className="default-box" style={{'backgroundColor': 'blue'}}></div>
	<div className="default-box"></div>
</div>