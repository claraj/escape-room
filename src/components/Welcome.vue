<template>
<div>
    <p></p>
    <p v-if="gameData"> 
      <pre>  {{ gameData.text }}</pre><p>
        <img class="game-image" :src="image">
        
        <div>
    <button @click="start">Begin</button>
        </div>
</div>
</template>

<script>
export default {
    name: 'Welcome',
    data() { return {
        // gameData: {}
    } },
    beforeCreate() {
    
        // this.gameData = this.$store.state.gameData.gameData.start
        // console.log("START",this.$store.state.gameData.gameData.start)
        // console.log(this.gameData)

    },
    methods: {
        start() {
            // nav to first game
            this.$emit('game-start')
            this.$router.push({name: 'game', query: { step: '1'}})
        }
    },
    computed: {
        gameData() {
            return this.$store.state.gameData.gameData.start

        },
        image() {
            
            return  `/img/${this.gameData.images[0]}`
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
        font-family: 'Chelsea Market', cursive;
        white-space: pre-wrap;       /* css-3 */
        white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
        white-space: -pre-wrap;      /* Opera 4-6 */
        white-space: -o-pre-wrap;    /* Opera 7 */
        word-wrap: break-word;       /* Internet Explorer 5.5+ */
    }

        button {
        margin-top: 5px;
        font-size: 1em;
        font-family: 'Chelsea Market', cursive;
        background: greenyellow;
    }
</style>