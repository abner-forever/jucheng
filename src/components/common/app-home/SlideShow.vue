<template>

    <swiper class="slide-show " :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide
        v-for = "item in img"
        :key = 'item.id'
    >
    <img :src="item.img_url">
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
export default {
    data(){
        return {
            img :[
            {id:1,img_url:'http://image.juooo.com//group1/M00/01/9E/rAoKmVvJQiGAW5sAAAIGg3z4fpY143.jpg'},
            {id:2,img_url:'http://image.juooo.com//group1/M00/01/9E/rAoKmVvJUeSAIOraAADCQoyu6lc585.jpg'},
            {id:3,img_url:'http://image.juooo.com//group1/M00/02/40/rAoKNVu-6NyAdlJ8AAESTC-sHgs110.jpg'},
            {id:4,img_url:'http://image.juooo.com//group1/M00/02/4B/rAoKNVvQEuuAT89WAAHNwi_c1pw237.jpg'},
            {id:5,img_url:'http://image.juooo.com//group1/M00/02/4B/rAoKNVvQFDuAIdxHAAKPRYZ5_0c241.jpg'}
        ],
        swiperOption: {
            pagination:{
                el : '.swiper-pagination'
            },
            loop  :true,
            autoplay :true,
        }
        }

    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    //https://m.juooo.com/index/getNationalSildeList
    //  created(){
    //     axios({
    //             method: 'post',
    //             url: '/juoo/index/getNationalSildeList',
    //             data: {
    //                confType: 'L',
    //                     isSymbol: 1,
    //                     limit: 6
    //             },
    //             })
    //         .then(function (res) {
    //             console.log(1);
                
    //             console.log(res)
    //             // this.seckill = res
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // },

}
</script>
