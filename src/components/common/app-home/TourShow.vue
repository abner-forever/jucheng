<template>
    <div class="tour-wraper">
        <div class="title">巡回展演</div>
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide
                v-for= "(item,i) in tourshow" :key= 'i'
            >
                <a class="tour">
                    <img :src="item.pic" alt="">
                    <div class="tour-city">
                        <span v-for="city in item.cityItems" :key='city.city_id'
                        >{{city.city_name}} / </span>
                    </div>
                </a>
            </swiper-slide>
    
        </swiper>
    </div>
</template>

<style lang="scss">
.tour-wraper{
    touch-action: none;
    width: 9.666667rem;
    height: 4.853333rem;
    padding: .266667rem 0 .4rem .333333rem;
    background: #fff;
    margin-bottom: 0.42667rem;
    .title{
         font-size: .48rem;
        color: #1a1a1a;
        margin-bottom: .333333rem;
        position: relative;
        font-weight: bold;
    }
    .swiper-slide{
        width:3.4rem;
        height: 3.906667rem;
        margin-right: .133333rem;
        border-radius: 0.21333rem;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
        .tour{
            position: relative;
            .tour-city{
               position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                width: 100%;
                color: #fff;
                font-size: .32rem;
                z-index: 10;
                height: .72rem;
                line-height:.732rem;
                padding: 0 0.32rem;
                background: rgba(0, 0, 0, 0.5);
                overflow: hidden;
                word-break: break-all;
                text-overflow: ellipsis;
                white-space: nowrap;
                box-sizing: border-box;
            }
        }
    }
}

</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
        tourshow:[],
      swiperOption: {
        slidesPerView: "auto",
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
 
  async created() {
    let result = await this.$http({
        method: "post",
      url: "/jz/Tour/ShowList",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    this.tourshow = result.data;
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>
