<template>
    <div class="app-home">
    <main>
        <mine-content></mine-content>
    </main>
    <app-footer></app-footer>
    </div>
</template>
<style lang="sass">
 
</style>

<script>
import AppFooter from '@components/layout/AppFooter'
import MineContent from "@components/common/app-mine/MineContent"
export default {
    components: {
        AppFooter,
        MineContent
    }
}
</script>
