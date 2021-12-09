const path = require('path')

module.exports = {
	mode: 'development',
	// devServer: {
	// 	historyApiFallback: true,
	// 	contentBase: path.resolve(__dirname, './build'),
	// 	open: true,
	// 	compress: true,
	// 	hot: true,
	// 	port: 8080,
	// },
	entry: {
		main: path.resolve(__dirname, './src/js/index.js'),
	},
	output: {
		path: path.resolve(__dirname, './build/js'),
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			// JavaScript
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	}
}