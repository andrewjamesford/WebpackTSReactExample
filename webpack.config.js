module.exports = {
	entry: './app.tsx',
	output: {
		filename: 'bundle.js'
	},
	 resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },
    devtool: 'source-map', // if we want a source map 
    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    }
}