import apis from '../../requests/apis/userApi'
export default {
    state: {
    },
    mutations: {

    },
    actions: {
        getUserMg(context,payload) {
            return apis.userMessage(payload)
        }
    },
    getters: {
        getMessage(){
            let userMessage = localStorage.getItem('userMessage')
            return JSON.parse(userMessage)
        },
        getUser(){
            let userMessage = localStorage.getItem('user')
            return JSON.parse(userMessage)
        }
    },
}
