const path = require("path");
var HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:{
        main:"./src/index.js"
    },
    module:{
        rules:[
            {
                test:/\.html$/,
                use:["html-loader"]
            },
            {
                test:/\.(svg|png|jpg|gif)$/,
                use:{
                    loader:"file-loader",
                    options:{
                        name:"[name].[hash].[ext]",
                        outputPath:"imgs"
                    }
                }
            },
            {
                test:/\.(js|jsx)$/,
                use:{
                    loader:'babel-loader'
                },
                exclude:/node_modules/,
            }
        ]
    }
}