<template>
    <div class="app-home">
        <app-header></app-header>
        <main>
            <slide-show></slide-show>
        </main>

        <!-- 分类 -->
        <Category></Category>
        <sec-kill></sec-kill>
        <!-- 底部 -->
        <app-footer></app-footer>
    </div>
</template>
<style lang="sass">
 
</style>

<script>
import AppHeader from '@components/layout/AppHeader'
import SlideShow from '@components/common/app-home/SlideShow'
import Category from '@components/common/app-home/Category'
import SecKill from '@components/common/app-home/SecKill'


import AppFooter from '@components/layout/AppFooter'
export default {
    components: {
        SlideShow,
        AppHeader,
        AppFooter,
        Category,
        SecKill
    }
}
</script>
