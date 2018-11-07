<template>

    <swiper class="slide-show " :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide
        v-for = "item in imgs"
        :key = 'item.id'
        v-if= "imgs"
    >
    <img :src="'http://image.juooo.com/'+item.touch_image_url">
    </swiper-slide>
   
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<style lang="scss">
.slide-show{
    width: 100%;
    height: 4.133333rem;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>

<script>
import axios from 'axios'
import qs from 'qs';
export default {
    data(){
        return {
            imgs:[],
            swiperOption: {
                pagination:{
                    el : '.swiper-pagination'
                },
                loop: true,
                autoplay:true,
            }
        }

    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    //https://m.juooo.com/index/getNationalSildeList
    created(){
        let that = this
       axios({
                method: 'post',
                url: '/jz/index/getNationalSildeList',
                headers : {
                    'Content-Type' : 'application/x-www-form-urlencoded'
                },
                data: qs.stringify({
                    "confType": "L",
                    "isSymbol": 1,
                    "limit": 6
                }),
                })
            .then(function (res) {
                that.imgs = res.data.data
            })
            .catch(function (error) {
                console.log(error);
            });
    },

}
</script>
