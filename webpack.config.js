var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        "./index.js"
    ],
    output: {
        path: './build',
        filename: "bundle.js",
        publicPath: '/output/'
    },
    module: {
        loaders: [
            {test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.png$/, loader: "url?limit=8192"},
            {
                test: /\.css$/,
                loader: 'style!css?modules',                               
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', 'png']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        //new webpack.optimize.CommonsChunkPlugin('common.js')

]
};