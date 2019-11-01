import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
        count: 0
    }
    /**
     * mutations 里面放置的是我们操作state对象属性的方法
     * 第一个默认为state，接下来的为自定义参数。
     */
const mutations = {
    mutationsAddCount(state, n = 0) {
        return (state.count += n)
    },
    mutationsReduceCount(state, n = 0) {
        return (state.count -= n)
    }
}

const actions = {
    actionsAddCount(context, n = 0) {
        console.log(context)
        return context.commit('mutationsAddCount', n)
    },
    actionsReduceCount({
        commit
    }, n = 0) {
        return commit('mutationsReduceCount', n)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})