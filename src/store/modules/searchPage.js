import {search} from '../../requests/api'
//搜索页面
export default {
    state: {
        searchList: null
    },
    mutations: {
        toSearchList(state, payload) {
            state.searchList = payload
        }
    },
    actions: {
        getSearchList(context) {
            search({
                userID:'2001002'
            }).then(res => {
                context.commit('toSearchList',res)
            })
        }
    }
}
