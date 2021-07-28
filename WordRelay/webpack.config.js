const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    mode: 'development',
    devtool: 'eval',  // 배포 단계에서는 hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js'],
    },

    entry: {
        app: './client',
    },

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env', {targets: { browsers: ['> 5% in KR', 'last 2 chrome versions'],},debug: true,}], '@babel/preset-react'],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel'
                ],
            },
        }],
    },
    
    plugins:[
        new RefreshWebpackPlugin(), new webpack.LoaderOptionsPlugin( {debug: true} )
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist',
    },
    devServer:{
        publicPath: '/dist',
        hot: true,
        port: 5500
    },
};