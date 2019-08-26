const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.config')

module.exports = merge(common, {
	output: {
		path: "/",
		filename: 'bundle.js'
	},
	devServer: {
		port: 8000,
		contentBase: "/",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/index.html'),
			filename: 'index.html'
		})
	]
})