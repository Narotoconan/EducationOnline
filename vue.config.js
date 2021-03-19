
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://39.97.185.232:25565",
                //target: "http://bahb.cn1.utools.club",
                changeOrigin: true
                /*pathRewrite: {
                  "^/api": ""
                }*/
            }
        }
    },
}
