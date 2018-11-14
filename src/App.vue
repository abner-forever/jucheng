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
import {
    mapState
} from 'vuex'
export default {
    name: 'app',
    beforeCreate() {
        this.$store.dispatch({
            type: 'city/getCurrentPosition'
        })
    },
    components: {
        Home,
        Show
    },
}
</script>
