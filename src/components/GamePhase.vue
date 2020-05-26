<template>
    <div>
        <div v-if="gameData">
        <pre> {{ gameData.text }}</pre>
        <img v-for="image in images" v-show="!leaving" class="game-image" :src="image">
        <p>{{ gameData.question}}
        
        <input @keyup.enter="checkAnswer" v-model="userAnswer">
        <button class="answer" @click="checkAnswer">Enter</button>
        
        <p ref="feedback" v-show="showFeedback">{{ this.gameData.feedback }}</p>

<div v-show="gameData.hint">
        <button class="hint" @click="hint">{{ hintText }}</button>
        <p v-show="showHint" ref="hint">{{this.gameData.hint}}</p>
</div>
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
                this.$nextTick( () => this.$refs.feedback.scrollIntoView() )
            }
        },

        hint() {
            this.showHint = !this.showHint 
            this.hintText = this.showHint ?  'Hide hint' : 'Show hint?'
            this.$nextTick( () => this.$refs.hint.scrollIntoView() )
        }
    },
    computed: {
        images() {    
            return this.gameData.images.map( img =>  `/img/${img}` )
        },
        // text() {
        //     return this.gameData.text.replace('\t', '')
        // }
    }
}
</script>

<style scoped>
    .game-image {
        max-width: 90%;
        max-height: 90%;
    }

    pre {
        font-family: 'Chelsea Market', cursive;
        white-space: pre-wrap;       /* css-3 */
        white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
        white-space: -pre-wrap;      /* Opera 4-6 */
        white-space: -o-pre-wrap;    /* Opera 7 */
        word-wrap: break-word;       /* Internet Explorer 5.5+ */
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