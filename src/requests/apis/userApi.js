import apis from '../http'

export default {
    userLogin : (loginMessage,encryptKey) => apis.passwordPost('/user/login',loginMessage,encryptKey),//用户登录
    userMessage: userId => apis.get('/user/login',userId),//获取用户信息
    userBrowsed:'',//获取用户浏览历史
    userFavorite:'',//获取用户收藏课程
    userAddFavorite:'',//添加收藏
    userDelFavorite:'',//取消收藏
}
