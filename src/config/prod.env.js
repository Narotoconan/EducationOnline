'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"production"',
    API_ROOT: '"http://bahb.cn1.utools.club/api"'   //线上接口请求前缀
})
