<template>
<div>
    <p></p>
    <p v-if="gameData"> 
        {{ gameData.text }}</p>
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
</style>