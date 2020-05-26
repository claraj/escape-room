// get and set user's place in game 

export default  {
    state: () => ({
        currentStep: 0,
    }),
    mutations: {
        changeStep(state, step) {
            state.currentStep = step
        }
    },
    getters: {
        
    }
}