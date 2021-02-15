module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://digital_library.com",
                changeOrigin: true
                /*pathRewrite: {
                  "^/api": ""
                }*/
            }
        }
    },
}
