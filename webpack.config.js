const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
	entry: path.join(__dirname, './src/main.js'),
	module: {
		rules: [
			{test: /\.vue$/, use: 'vue-loader'}
		]
	},
	plugins: [
		new VueLoaderPlugin()
	]
}