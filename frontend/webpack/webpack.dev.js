const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin")

module.exports =merge(common,{
    mode:"development",
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    plugins:[
        new HtmlWebPackPlugin()
    ],
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
});