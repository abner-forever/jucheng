<template>
<div class="city">
    <div class="flex-navbar">
        <a @click='back' class="left">
            <i class="fa fa-angle-left fa-2x"></i>
        </a>
        <div class="right">
            <span>切换城市</span>
        </div>
    </div>
    <mt-index-list>
        <div class="current-city">
            <p class="area-title">当前城市</p>
            <div class="area-wrap">
                <span class="area-item">{{currentcity.cityName}}</span>
            </div>
        </div>
        <div class="hot-city">
            <p class="area-title">热门城市</p>
            <div class="area-wrap">
                <span class="area-item"
                v-for='city in hotcities'
                :key='city.id'
                @click="changeCity(city)"
                >{{city.name}}</span>
            </div>
        </div>
        <mt-index-section v-for=" city in cities" :key='city.id' :index="city.id">
            <mt-cell v-for='item in city.lists' @click.native="changeCity(item)" :key='item.id' :title="item.name"></mt-cell>
        </mt-index-section>
    </mt-index-list>
</div>
</template>

<style lang="scss">
.flex-navbar {
    width: 100%;
    height: 1.173333rem;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
        width: 1.173333rem;
        display: flex;
        justify-content: center;
    }

    .right {
        flex: 1;
        font-size: 0.426667rem;
        display: flex;
        justify-content: center;
    }
}

.current-city,
.hot-city {
    background-color: #fff;
    padding-left: .266667rem;

    .area-wrap {
        width: 100%;

        .area-item {
            display: inline-block;
            width: 2.666667rem;
            border-radius: .106667rem;
            height: 0.8rem;
            padding: 0 0.066667rem;
            margin: 0.266667rem 0.16rem .133333rem;
            background-color: #f5f5f5;
            text-align: center;
            line-height: .8rem;
            font-size: .346667rem;
            color: #212121;
            box-sizing: border-box;
        }
    }

    p.area-title {
        padding-top: 0.4rem;
    }
}

.mint-cell-text {
    font-size: .346667rem;
}

.mint-cell {
    height: .8rem;
}

.mint-indexlist-nav {
    border-left: none !important;
}

.mint-indexlist-navitem {
    font-size: .346667rem!important;
}

.mint-cell-wrapper {
    padding: 0 .266667rem !important;
}
</style>

<script>
import { mapState } from 'vuex'
import { CHANGE_CITY } from '@/store/city/mutations-types'
export default {
    data() {
        return {
            // hotcities: [
            //     // {id:0,city:'全国'},
            //     // {id:0,city:'全国'},
            //     // {id:0,city:'全国'},
            //     // {id:0,city:'全国'},
            //     // {id:0,city:'全国'},
            //     // {id:0,city:'全国'},
            //     // {id:0,city:'全国'},
            //     // {id:0,city:'全国'},
            //     // {id:0,city:'全国'},
            //     // {id:0,city:'全国'},
            //     // {id:0,city:'全国'},
            //     '全国', '深圳', '广州', '北京', '上海', '成都', '重庆', '武汉', '长沙', '南京', '石家庄', '无锡', '宁波', '昆明', '西安', '苏州', '东莞', '厦门', '泉州', '杭州', '澳门', '连云港', '香港', '宜昌'
            // ]
        }
    },
   computed:{
       ...mapState(['city']),
        cities () {
            return this.city.cities
        },
         currentcity () {
            return this.city.currentcity
        },
         hotcities () {
            return this.city.hotcities
        },
   },
    methods: {
        back() {
            window.history.go(-1)
        },
        changeCity({id:cityId,name:cityName}){
            this.$store.commit({
                type:'city/'+CHANGE_CITY,
                currentcity: {
                    cityId , 
                    cityName
                }
            })
            this.back()
        }
    }
    
};
</script>
