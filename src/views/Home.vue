<template>
    <div class="app-home">
        <app-header></app-header>
        <main class="home-container">
            <slide-show></slide-show>
            <!-- 分类 -->
           <div class="category-container">
                <ul class="category-wrap">
                    <router-link 
                        v-for= "item in categorys" :key = 'item.id'
                        :id= 'item.id'
                        :to= '{name:"show"}'
                        
                    >
                        <div class="img-box"  @click= 'giveId(item.id)'>
                            <img :src="item.img" alt="">
                        </div>
                        <p class="classfly">{{item.title}}</p>
                    </router-link>
                </ul>
                <div class="module-wrap">
                    <a v-for= "mod in modules" :key = 'mod.id'>
                        <img :src="mod.img" >
                        <p class="item-txt">{{mod.title}}</p>
                    </a>
                </div>
            </div>
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
     background-color: #fff;
     .category-wrap{
    margin: .266667rem .333333rem 0;
    padding: .36rem 0;
    display: flex;
    border-radius: 0.21333rem;
    box-shadow: 0.10667rem 0.10667rem 0.21333rem rgba(178, 178, 178, 0.1);
    justify-content: space-around;
    .classfly{
        text-align:center;
        color: #333;
        font-size: .32rem;
    }
    }
    .module-wrap{
        display: flex;
        padding: .533333rem .333333rem;
        justify-content: space-between;
        font-size: .373333rem;
        a{
            position: relative;
        }
        .item-txt{
            color: #fff;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            line-height: 1.333333rem
        }
    }

 }
</style>

<script>
import AppHeader from '@components/layout/AppHeader'
import SlideShow from '@components/common/app-home/SlideShow'
import SecKill from '@components/common/app-home/SecKill'
import TourShow from '@components/common/app-home/TourShow'
import HotShow from '@components/common/app-home/HotShow'


import AppFooter from '@components/layout/AppFooter'
export default {
    components: {
        SlideShow,
        AppHeader,
        AppFooter,
        SecKill,
        TourShow,
        HotShow
    },
    data (){
        return {
            categorys:[
                {id:35,img:'http://image.juooo.com/group1/M00/01/9B/rAoKmVvFUxWAVCq7AAA1AYjHYo4689.png',title:'演唱会'},
                {id:36,img:'http://image.juooo.com/group1/M00/02/45/rAoKNVvFUyCATRKeAAAs7TXa0as743.png',title:'音乐会'},
                {id:37,img:'http://image.juooo.com/group1/M00/02/45/rAoKNVvFUyiAJYdkAAAznnkz53A336.png',title:'舞台剧'},
                {id:79,img:'http://image.juooo.com/group1/M00/01/9B/rAoKmVvFUzCANA78AAAuNmAUVOY761.png',title:'音乐剧'},
                {id:38,img:'http://image.juooo.com/group1/M00/02/45/rAoKNVvFUzmASY4pAAAm76AQAHw370.png',title:'儿童'}
            ],
            modules:[
                {id:1,img:'http://image.juooo.com/group1/M00/02/47/rAoKNVvIIbGAD-K0AAAOH9v_NJM654.png',title:'演出日历'},
                {id:2,img:'http://image.juooo.com/group1/M00/01/9D/rAoKmVvIIb2ALd7KAAAFL7b1wtg147.png',title:'特惠区'},
                {id:3,img:'http://image.juooo.com/group1/M00/02/47/rAoKNVvIIcWAFU2WAAAJASjVCNQ181.png',title:'学生专区'},
                {id:4,img:'http://image.juooo.com/group1/M00/01/9D/rAoKmVvIIc2AR3T7AAAGkekOAEY845.png',title:'欢聚橙卡'},
            ],
            id:''
        }
    },
    methods: {
        giveId(id){
            this.id=id
            console.log('home',id);
            
            this.$emit('getId', this.id)
        }
    },
}
</script>
