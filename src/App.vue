<template>
  <div id="app">
       <router-view></router-view>
  </div>
</template>
<style lang="scss">

</style>

<script>

import Home from './views/Home'
export default {
    name:'app',
    components:{
      Home
    }
}
</script>

