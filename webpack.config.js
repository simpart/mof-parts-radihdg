module.exports = {
    entry: __dirname + '/src/radihdg.js',
    output: {
        path: __dirname + '/dist',
        filename: 'radihdg.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'  ,
            query: {
                presets: ['es2015']
            }
        }]
    }
};
