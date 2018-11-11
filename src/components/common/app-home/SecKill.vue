<template>
    <div class="seckill-wrap">
        <div class="title">现时秒杀</div>
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide
                v-for= "(item,index) in secKillInfo"
                :key= " index"
            >
                <a class="show">
                    <div class="show-img-box">
                        <img :src="'http://image.juooo.com/'+item.pic" alt="">
                    </div>
                    <div class="right">
                        <div class="show-title">{{item.schedular_name}}</div>
                        <div class="descr">
                            <div class="price">
                                <div class="now-price">
                                    ¥{{item.seckill_ticket_price}}
                                </div>
                                <div class="prev-price">
                                    ¥{{item.ticket_price}}
                                </div>
                            </div>
                            <div class="get-late">立即抢购</div>
                        </div>
                    </div>
                </a>
            </swiper-slide>
    
        </swiper>
    </div>
</template>

<style lang="scss">
.seckill-wrap{
    padding: .266667rem 0 .333333rem .4rem;
    background: #fff;
    margin-bottom: 0.42667rem;
    height: 4.8264rem;
    .swiper-slide{
        width: 9.333333rem;
        
    }
    .title{
        font-size: .48rem;
        color: #1a1a1a;
        margin-bottom: .333333rem;
        position: relative;
        font-weight: bold;
    }
    .show{
        width: 9.333333rem;
        height: 3.2rem;
        display: flex;
        .right{
            box-sizing: border-box;
           width: 6.92rem;
            padding:  .333333rem .266667rem;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .show-title{
                font-size: .373333rem;
                color: #1a1a1a;
                line-height: .52rem;
                display: -webkit-box;
                text-overflow: ellipsis;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                font-weight: bold
            }
            .price{
                width: 2.466667rem;
                height: 1.2rem;
                display: flex;
                float: left;
                align-items: center;
                font-size: .373333rem;
                .now-price{
                 color: #ff7919;
                }
                .prev-price{
                    margin-left: .2rem;
                    text-decoration: line-through;
                    color: #ccc;
                }
            }
            .get-late{
                float: right;
                width: 2.5rem;
                height: 1rem;
                background-color: #FF8B19;
                border-radius: .4rem;
                text-align: center;
                line-height: 1rem;
                font-size: .426667rem;
                color: #fff;
            }
        }
    }
    .show-img-box{
        width: 2.4rem;
        height: 3.2rem;
        overflow: hidden;
        flex-grow: 1;
        border-radius: .133333rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>

<script>
import axios from 'axios'

export default {
    data(){
        return {
        secKillInfo : [],
        swiperOption: {
            slidesPerView: 'auto',
            pagination:{
                el : '.swiper-pagination'
            },
            
        }
        }
    },
    created(){
        let that = this
        axios({
                method: 'post',
                url: '/jz/index/getNationalSeckill',
                
                })
            .then(function (res) {
                that.secKillInfo = res.data.data.secKillInfo
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    }
}
</script>
