module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://bahb.cn1.utools.club",
                //target: "http://digital_library.com/",
                changeOrigin: true
                /*pathRewrite: {
                  "^/api": ""
                }*/
            }
        }
    },
}
