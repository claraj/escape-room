import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import gameData from './gameData.js'
import userProgress from './userProgress.js'


export default new Vuex.Store({
    modules: {
        gameData,
        userProgress
    }
})