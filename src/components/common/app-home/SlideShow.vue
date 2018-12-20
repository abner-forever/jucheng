<template>
<div class="slide-show ">
    <swiper v-if="imgs.length" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="item in imgs" :key='item.id'>
            <img :src="'http://image.juooo.com/'+item.touch_image_url">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>

<style lang="scss">
.slide-show {
    width: 100%;
    height: 4.133333rem;

    img {
        width: 100%;
        height: 100%;
    }
}

.swiper-pagination-bullet {
    width: .16rem !important;
    height: .16rem !important;
    background: rgb(255, 255, 255) !important
}

//设置未选中的颜色
.swiper-pagination-bullet-active {
    background: rgb(247, 93, 93) !important
}

//设置选中的颜色
</style>

<script>
import qs from 'qs';
export default {
    data() {
        return {
            imgs: [],
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                },
                loop: true,
                autoplay: true,
            }
        }

    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    //https://m.juooo.com/index/getNationalSildeList
    async created() {

        let result = await this.$http({
            method: 'post',
            url: '/jz/index/getNationalSildeList',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: qs.stringify({
                "confType": "L",
                "isSymbol": 1,
                "limit": 6
            }),

        });
        this.imgs = result.data;
    }
}
</script>
