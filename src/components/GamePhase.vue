<template>
    <div>
        <div v-if="gameData">
        <pre id="game-text"> {{ gameData.text }}</pre>
        <img v-for="image in images" v-if="!leaving" class="game-image" :src="image">
        <p>{{ gameData.question}}
        
        <input @keyup.enter="checkAnswer" v-model="userAnswer">
        <button class="answer" @click="checkAnswer">Enter</button>
        
        <p ref="feedback" v-show="showFeedback">{{ this.gameData.feedback }}</p>

<div v-show="gameData.hint">
        <button class="hint" @click="hint">{{ hintText }}</button>
        <p v-show="showHint" ref="hint">{{this.gameData.hint}}</p>
</div>
    </div>

    <div v-else>
        There's nothing here. Press the back button, or 
        <router-link :to="{ name: 'welcome' }">return to the start</router-link>?
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
    showFeedback: false,
    showHint: false,
    hintText: 'Show hint?'
    } },
    created() {
        this.loadThisStep()
        this.leaving = false
    }
    ,
    watch: {
        $route(to, from) {
            window.scrollTo(0, 0);
            this.loadThisStep()
             this.leaving = false
             this.showHint = false 
             this.hintText = 'Show hint?'
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

                if (this.gameData.next == 'end') {
                    this.$router.push( {name: 'end'} )
                }
                else {
                // where to next? 
                let idNext = this.gameData.next[answer]
                this.$store.commit('changeStep', idNext)
                        this.leaving = true
                this.$router.push( {name: 'game', query: {step: idNext }} )
                }
            }
            else {
                this.showFeedback = true
                this.$nextTick( () => this.$refs.feedback.scrollIntoView() )
            }
        },

        hint() {33
            this.showHint = !this.showHint 
            this.hintText = this.showHint ?  'Hide hint' : 'Show hint?'
            this.$nextTick( () => this.$refs.hint.scrollIntoView() )
        }
    },
    computed: {
        images() {    
            return this.gameData.images.map( img =>  `/img/${img}` )
        },
    }
}
</script>

<style scoped>
    .game-image {
        max-width: 90%;
        max-height: 90%;
        margin: 10px;
    }



    pre {
        font-family: 'Chelsea Market', cursive;
        white-space: pre-wrap;       /* css-3 */
        white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
        white-space: -pre-wrap;      /* Opera 4-6 */
        white-space: -o-pre-wrap;    /* Opera 7 */
        word-wrap: break-word;       /* Internet Explorer 5.5+ */

        margin: 30px;
    }

    input {
        display: block;
        margin: auto;
        font-size: 1em;
        margin-top: 5px;
    }

    button.answer {
        margin-top: 5px;
        font-size: 1em;
        font-family: 'Chelsea Market', cursive;
        background: greenyellow;
    }

    button.hint {
        margin-top: 5px;
        text-align: end;
        font-size: 1em;
        font-family: 'Chelsea Market', cursive;
        background: lightgray;
    }

</style>