<template>
  <div class="hello">
    
    <Welcome></Welcome>
    <GamePhase></GamePhase>
     
  </div>
</template>

<script>

import Welcome from '@/components/Welcome'
export default {
  name: 'EscapeRoomGame',
  components: {
    Welcome
  },
  props: {
    msg: String
  }
}


/*



*/


</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
