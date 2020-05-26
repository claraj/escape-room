<template>
    <div>
        <div v-if="gameData">
        <p> {{ gameData.text }}</p>
        <img v-show="!leaving" class="game-image" :src="image">
        <p>{{ gameData.question}}
        
        <input @keyup.enter="checkAnswer" v-model="userAnswer">
        <button @click="checkAnswer">Enter</button>
        
        <p v-if="showFeedback">{{ this.gameData.feedback }}</p>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Welcome',
    props: {
        // gameData: Object
    },
    data() { return {
        gameData: {},
        leaving: false,
    userAnswer: '',
    showFeedback: false
    } },
    created() {
        this.loadThisStep()
        this.leaving = false
    }
    ,
    watch: {
        $route(to, from) {
            this.loadThisStep()
             this.leaving = false
        }
    },
    beforeDestroy() {
        console.log("BYE")
        this.leaving = true
    },

    methods: {
        loadThisStep() {
            this.showFeedback = false
            this.userAnswer = ""
        // what phase? 
        let step = this.$route.query.step 
        console.log(this.$store.state.gameData)
        let data = this.$store.getters.dataForStep(step) 
        console.log(data)
        this.gameData = data
        },
        
        checkAnswer() {
            let answer = this.userAnswer.toLowerCase()
                    
            if (this.gameData.solutions.includes(answer)) {

                // where to next? 
                let idNext = this.gameData.next[answer]
                console.log("NEXT ID" + idNext)
                this.$store.commit('changeStep', idNext)
                        this.leaving = true
                this.$router.push( {name: 'game', query: {step: idNext }} )

            }
            else {
                this.showFeedback = true
            }
        }
    },
    computed: {
                image() {
            
            return  `/img/${this.gameData.image}`
        }
    }
}
</script>

<style scoped>
    .game-image {
        max-width: 90%;
        max-height: 90%;
    }

    pre {
 white-space: pre-wrap;       /* css-3 */
 white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
 white-space: -pre-wrap;      /* Opera 4-6 */
 white-space: -o-pre-wrap;    /* Opera 7 */
 word-wrap: break-word;       /* Internet Explorer 5.5+ */
}
</style>