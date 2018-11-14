<template>
        <div @click='goToDetail' class="show-item">
            <div class="img-box">
                <img v-lazy="'http://image.juooo.com/'+info.pic" >
                <span v-html="info.ico">
                </span>
            </div>
            <div class="detail-box">
                <p class="title">{{info.schedular_name}} </p>
                <p class="time">{{info.show_time.substr(0,11)}} </p>
                
                <p class="place">[{{info.c_name}}]&nbsp;{{info.v_name}} </p>
                <p class="price">¥{{info.min_price}}-{{info.max_price}} </p>
            </div>
        </div>

</template>

<style lang="scss">

    .show-item{
        display: flex;
        padding: 15px 0;
        .img-box{
            width: 2.373333rem;
            height: 3.173333rem;
            position: relative;
            .logo_i{
                width: .773333rem;
                height: .933333rem;
                position: absolute;
                right: 0;
                top: 0;
                background: url('/libs/images/ju_cheng.png');
                background-size: 100%;
            }
        }
    }
    .detail-box{
        padding: .066667rem 0 0 .4rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 6.4rem;
        .title{
            width: 100%;
            min-height: 0.8533333333rem;
            max-height: 1.536rem;
            line-height:.506667rem;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: .373333rem;
            color: #262626;
            margin-bottom: .333333rem;
        }
        .time, .place{
            color: #999999;
        }
        .price{
            font-size: .426667rem;
            color: #ff7919;
        }
    }

</style>

<script>

export default {
    props:['info'],
     data(){
        return {
        }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    methods:{
        goToDetail () {
          this.$router.push({ name: 'detail', params : {info: this.info}})
      }  
    }
}
</script>
