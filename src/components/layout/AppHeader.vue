<template>
<header class="app-header">
    <router-link to='city' class="city">
        <img class="mark" src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/index/location.png">
        <span>{{currentcity.cityName}}</span>
    </router-link>
    <a href="javascript:;" class="search-input">
            搜索演出 艺人或场馆
        </a>
</header>
</template>

<style lang="scss">
@import '../../style/modules/reset';

.app-header {
    width: 100%;
    height: 1.16rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 999;
    background-color: #FDFDFD;
    border-bottom: 1px solid #e7e7e7;

    .city {

        .mark {
            width: .386667rem;
            height: .453333rem;
            vertical-align: middle;
        }

        span {
            margin-left: .1rem;
        }

        font-size: .373333rem;
    }

    .search-input {
        width: 6.8rem;
        height: .8rem;
        display: block;
        border-radius: 0.21333rem;
        line-height: .8rem;
        color: #ccc;
        font-size: .32rem;
        // padding: .066667rem;
        padding-left: .833333rem;
        background: #F0F0F0 url('/libs/images/search.png') 10px center no-repeat;
        background-size: auto 50%;
    }
}
</style>

<script>
import { mapState } from 'vuex'
export default {
    name: "AppHeader",
    props: {
        msg: String
    },
    computed: {
        ...mapState(['city']),
        currentcity () {
            return this.$store.state.city.currentcity
        }
    },

};
</script>
