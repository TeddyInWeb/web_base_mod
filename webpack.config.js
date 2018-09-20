
module.exports = {
    entry: './main.js',  // 入口文件
    output: {  // 输出文件路径设置
        path: __dirname,
        filename: './dist/dist.min.js',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}  