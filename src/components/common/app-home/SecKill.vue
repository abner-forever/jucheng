<template>

    <swiper class="slide-show " :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide
    
    >
     
    </swiper-slide>
   
    
  </swiper>
</template>

<style lang="scss">
.slide-show{
    
}
</style>

<script>
import axios from 'axios'

export default {
    data(){
        return {
        seckill: {},
        swiperOption: {
            pagination:{
                el : '.swiper-pagination'
            },
            
        }
        }
    },
    created(){
        axios({
                method: 'post',
                url: '/juoo/index/getNationalSeckill',
                
                })
            .then(function (res) {
                console.log(1);
                
                console.log(res)
                // this.seckill = res
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
