<template>
    <div class="app-home">
        <app-header></app-header>
        <main class="home-container">
            <slide-show></slide-show>
            <!-- 分类 -->
            <Category></Category>
            <!-- 限时秒杀 -->
            <sec-kill></sec-kill>
            <!-- 巡回展演 -->
            <tour-show></tour-show>
            <!-- 热门演出 -->
            <hot-show></hot-show>
        </main>

        <!-- 底部 -->
        <app-footer></app-footer>
    </div>
</template>
<style lang="scss">
 .home-container{
     padding: 1.159733rem 0 1.333067rem;
 }
</style>

<script>
import AppHeader from '@components/layout/AppHeader'
import SlideShow from '@components/common/app-home/SlideShow'
import Category from '@components/common/app-home/Category'
import SecKill from '@components/common/app-home/SecKill'
import TourShow from '@components/common/app-home/TourShow'
import HotShow from '@components/common/app-home/HotShow'


import AppFooter from '@components/layout/AppFooter'
export default {
    components: {
        SlideShow,
        AppHeader,
        AppFooter,
        Category,
        SecKill,
        TourShow,
        HotShow
    }
}
</script>
