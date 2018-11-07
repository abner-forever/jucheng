<template>
  <div id="app">
     <main>
       <router-view></router-view>
     </main>
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

