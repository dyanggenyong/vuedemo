var webpack = require('webpack')  //引入文件
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports={
    entry:'./src/main.js', //配置入口
    output:{  //配置输出选项
        path: path.resolve(__dirname, 'dist'),//输出路径为，当前路径下
        filename:'assets/js/main.js'
        // ,//输出后的文件名称
        // publicPath: '/'
    },
    resolve: {//其他的配置选项
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue': 'vue/dist/vue.js',//vue文件地址配置
            '@':path.resolve(__dirname, 'src')
        }
    },
    module:{
        loaders:[//loader配置，需要解析啥东西就用相关的loader
            {
                test: /\.css$/,
                use: [ 'style-loader','css-loader' ]
            },
            {test:/\.vue$/, loader:'vue-loader'},
            {test:/\.js$/, loader:'babel-loader', exclude:/node_modules/},//设置node_modules里的js文件不用解析
            {
                test: /\.(ttf|woff|woff2|eot|svg)$/,
                use: [ {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/fonts/[name]_[hash:8].[ext]'
                    }
                } ]
            },{
                test: /\.(jpg|gif|png|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'assets/img/[name]_[hash:8].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [//这个是2.x中加的，各种loader的配置选项
        new webpack.LoaderOptionsPlugin({
            options: {
                babel:{
                    presets:['es2015'],
                    plugins:['transform-runtime']
                }
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new CleanWebpackPlugin(['dist'])
    ],
    devServer: {
        open: true,
        port: 9000,
        contentBase: './src',
        publicPath: '/'
    }
};