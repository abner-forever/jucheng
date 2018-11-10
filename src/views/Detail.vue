<template>
   <div class="detail-container">
        <header class="nav-header">
            <div class="left">
                <a class="fa fa-angle-left fa-2x"></a>
            </div>
            <div class="right">
                <a  class="fa fa-ellipsis-h fa-2x"></a>
            </div>
        </header>
        <div class="detail-wrapper">
            <div class="sectioin-wrapper">
                <div class="poster">
                    <div class="img-box">
                        <img :src="'http://image.juooo.com/'+item.pic" alt="">
                        <div class="logo-i"></div>
                    </div>
                    <div class="poster-bg-shaow"> </div>
                    <div class="poster-bg-wrapper"> 
                        <div class="poster-fg"></div>
                    </div>
                    <a class="round-num">103场巡演</a>
                </div>
                <article class="txt-desc">
                    <h3 class="title">{{item.schedular_name}}</h3>
                    <div class="row">
                        时间：<span class="time">{{item.show_time}}</span>
                    </div>
                    <a class="row venue" href="javascript:;">
                        <span class="fl">场馆：</span><span class="place fl js-venue">{{item.v_name}}</span>
                        <i class="fa fa-location-arrow"></i>
                    </a>
                    <div class="row price">¥<span class="num"> {{item.min_price}}-{{item.max_price}}</span> </div>
                    <div class="support" href="javascript:;">
                        <div>
                            支持：<span class="sup-item">橙PLUS卡免邮</span>
                                <span class="sup-item">电子票</span>
                                <span class="sup-item">橙PLUS卡双倍积分</span>
                        </div>
                    </div>
                    <div class="vipcard">
                        <a class="row js-vipcard clearfix">
                            <div class=" clearfix fl">
                                <div class="fl txt3">欢聚橙卡：</div>
                                <div class="sup fl cleafix card-sup">
                                    <div class="sup-wrap clearfix">
                                                                <p class="sup-item fl clearfix">
                                            <span class="txt1 fl">小橙堡体验卡</span>
                                        </p>
                                                                <p class="sup-item fl clearfix">
                                            <span class="txt1 fl">小橙堡欢乐家庭卡</span>
                                        </p>
                                                                <p class="sup-item fl clearfix">
                                            <span class="txt1 fl">欢乐家庭卡PLUS</span>
                                        </p>
                                                                <p class="sup-item fl clearfix">
                                            <span class="txt1 fl">橙PLUS会员卡</span>
                                        </p>
                                                            </div>
                                </div>
                            </div>
                            <div class="fr">
                                <i class="fa  fa-ellipsis-h fa-2x"></i>
                            </div>
                        </a>
                    </div>
                </article>
                    <div class="discount">
                        <a class="row js-promotion" style="">
                            <div class="fl">
                                <div class="fl txt3">促销：</div>
                                <div class="sup fl cleafix js-discount-activity-list"><p class="sup-item fl"><span class="txt1 fl">折扣</span><span class="txt2 fl">开学季专享，9-12月儿童剧5折优惠，限时5折</span></p></div>
                            </div>
                            <div class="fl">
                                <i class="fa fa-ellipsis-h fa-2x"></i>
                            </div>
                        </a>
                    </div>
            </div>
        </div>
        <div class="dt-action">
            <div class="service-btn">
                <i class="fa fa-user-circle"></i>
                <span>客服</span>
            </div>
            <div class="buy-now">立即购票</div>
            <div class="seat-line">在线选座</div>
        </div>
   </div>
</template>

<style lang="scss">
.detail-container{

    .nav-header {
        display: flex;
        justify-content: space-between;
        position: relative;
        z-index: 99;
    }
    .left, .right{
        width: 1.333333rem;
        height: 1.066667rem;
        display: flex;
        align-items: center;
        justify-content: center;
        .fa{
            color: #fff;
        }
    }
    .poster{
        width: 100%;
        height: 7.04rem;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        .img-box{
            width: 3.573333rem;
            height: 4.8rem;
            border:5px solid #fff;
            position: relative;
            img{
                
                position: absolute;
                z-index: 9;
                border: .04rem solid #fff;
            }
            .logo-i{
                width: .773333rem;
                height: .933333rem;
                position: absolute;
                right: -0.04rem;
                top: 0.026667rem;
                background: url('/libs/images/ju_cheng.png');
                z-index: 99;
            }
        }
        .poster-bg-shaow{
            position: absolute;
            top: -1.066667rem;
            left: 0;
            width: 100%;
            height: 6.933333rem;
            overflow: hidden;
            z-index: 4;
            background: #10223a;
            opacity: 0.6;
        }
        .poster-bg-wrapper{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 92%;
            overflow: hidden;
            .poster-fg{
                overflow: hidden;
                position: absolute;
                bottom: -0.4266666667rem;
                left: -25%;
                z-index: 5;
                border-top: 1px solid #ccc;
                -webkit-border-radius: 50%;
                border-radius: 50%;
                width: 150%;
                height: 1.8rem;
                background: #fff;
            }
        }
        .round-num {
            position: absolute;
            right: 0.4266666667rem;
            bottom: 2.6rem;
            border: 1px solid #dadada;
            -webkit-border-radius: 0.1706666667rem;
            border-radius: 0.1706666667rem;
            padding: 0.2133333333rem;
            color: #dadada;
            z-index: 99;
        }
    }
    .txt-desc{
        padding: 0 .4rem 0 .266667rem;
        background: #fff;
        position: relative;
        margin-top: -2px;
        .title{
            font-size: .453333rem;
            padding-top: 3px;
            margin-bottom: .333333rem;
            word-break: break-word;
            color: #212121;
            overflow: hidden;
            display: -webkit-box;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }
        .row{
            font-size: .373333rem;
        }
        .price{
            color: #ff7919;
        }
        .support{
            -webkit-box-pack: justify;
            border-top: 1px dashed #ccc;
            height: 1.053333rem;
            font-size: .346667rem;
            line-height: 1.053333rem;
            color: #999;
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -ms-flex-pack: justify;
            -webkit-justify-content: space-between;
            justify-content: space-between;
            .sup-item{
                display: inline-block;
                margin-left: .173333rem;
                border: 1px solid #ff7919;
                -webkit-border-radius: 0.064rem;
                border-radius: 0.064rem;
                padding: 0 .066667rem;
                height: .4rem;
                font-size: .266667rem;
                line-height: 0.4rem;
                color: #ff7919
            }
        }
        .fl{
            float: left;
        }
        .vipcard{
            border-top: 1px dashed #ccc;
            .row{
                display: block;
                width: 100%;
                padding-top: .266667rem;
                padding-bottom: .2rem;
                font-size: .346667rem;
                color: #999;
                background: #fff;
                
                .card-sup{
                    width: 6.933333rem;
                }
                .sup-wrap{
                    height: .5rem;
                    overflow: hidden;
                }
            }
        }
    }
    .txt1{
        display: inline-block;
        padding: 0 0.1066666667rem;
        height: .466667rem;
        font-size: .346667rem;
        text-align: center;
        line-height: .466667rem;
        color: #ff7919;
        border: 1px solid #ff7919;
        border-radius: 0.1066666667rem;
        margin-right: 0.2133333333rem;
    }
     
    .discount{
        display: block;
        margin-top: 0.2693333333rem;
        padding-right: 0.2266666667rem;
        padding-left: 0.34rem;
        font-size: 0.2546666667rem;
        color: #999;
        background: #fff;
        .txt2{
            height: .56rem;
            width: 5.8rem;
            overflow: hidden;
        }
        .js-promotion{
            display: flex;
            justify-content: space-between;
            font-size: .346667rem;
            height: 1.106667rem;
            align-items: center;
        }
        .fl{
            display: flex;
            justify-content: space-between;
        }
    }
    .dt-action{
        position: fixed;
        z-index: 999;
        bottom: 0;
        border-top: 1px solid #e7e7e7;
        height: 1.32rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        align-items: center;
        div{
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: .453333rem;
            color: #666;
        }
        .service-btn{
            width: 1.733333rem;
            border-right: 1px solid #ccc;
            display: flex;
            flex-direction: column;
            span {font-size: .266667rem;}
        }
        .buy-now{
            flex: 1;
        }
        .seat-line{
            color: #fff;
            flex: 1;
            background-color: #FF7919;
        }
    }
}
</style>

<script>
export default {
    props:['info'],
    data(){
        return {
            item:{}
        } 
    },
    mounted(){
        localStorage.setItem('info',JSON.stringify(this.item))
    },
    created(){
        this.info ?this.item=this.info: this.item=JSON.parse(localStorage.getItem('info'))
    }

};
</script>
