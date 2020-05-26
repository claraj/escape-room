<template>
  <div id="app">
    <!-- <game-title :title="title"></game-title> -->
    <router-view @game-start="gameStart"></router-view>

  </div>
</template>

<script>
import EscapeRoomGame from './components/EscapeRoomGame.vue'
import GameTitle from './components/GameTitle.vue'
export default {
  name: 'App',
  components: {
    EscapeRoomGame,
    GameTitle
  },
  data() { 
    return {
      title: "Welcome to the Escape Game"
    }
  },
  created() {
    window.addEventListener('beforeunload', function() {
      //localStorage.userProgress = 30
      // todo save user progresss 
      let step = this.$store.state.userProgress.currentStep
      localStorage.userProgress = step 

    })
    // console.log(this.$router.path)
    let stepFromSession = localStorage.userProgress
    if (stepFromSession) {
      this.$store.commit('changeS', stepFromSession)
    }
    // todo get user progress from session storage and nav to that page 


  },
  methods: {
    gameStart() {
      this.title = 'The Poison Garden'
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap');

#app {
  font-family: 'Chelsea Market', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
