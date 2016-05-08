var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack/hot/only-dev-server',
        "./js/index.js"
    ],
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.png$/, loader: "url?limit=8192"},
            {
                test: /\.css$/,
                loader: 'style!css?modules',
                include: /flexboxgrid/,
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', 'png']
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};