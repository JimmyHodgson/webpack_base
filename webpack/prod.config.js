const path = require("path");
const {merge} = require("webpack-merge");
const base = require("./dev.config");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(base,{
    mode:"production",
    output:{
        filename:'bundle.min.js'
    },
    devtool:false,
    performance:{
        maxEntrypointSize:900000,
        maxAssetSize:900000
    },
    optimization:{
        minimize:true,
        minimizer:[new TerserPlugin({
            terserOptions:{
                format:{
                    comments:false
                }
            }
        })]
    }
});
