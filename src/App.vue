<template>
  <div id="app">
       <router-view></router-view>
  </div>
</template>
<style lang="scss">

</style>

<script>

import Home from './views/Home'
import Show from './views/Show'
export default {
    name:'app',
    components:{
      Home,
      Show
    },
    data(){
      return {
        id: ''
      }
    },
    methods:{
      getId(id){
        console.log(22);
        
        this.id = id
      }
    }
}
</script>

