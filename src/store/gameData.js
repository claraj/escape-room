// get and set user's place in game 

import gameData from '@/data'


export default  {
    state: () => ({
        gameData: gameData
    }),
    mutations: {
        //none
    },
    getters: {


        dataForStep: (state) => (stepId) => {
            console.log("STATE STEPS" , stepId,  state.gameData.steps)
            return state.gameData.steps.find( step => step.id == stepId)
        },      
    }
}