<template>
    <div class="mine-content">
        <div class="main-top">
            <div class="top">
                <div class="head-img">
                    <img width="50px" src="/libs/images/logo-user.png" alt="">
                </div>
                <div class="user-info">
                    <p class="user-name">{{userinfo.mobile}}</p>
                    <p class="user-id">ID: {{userinfo.id}}</p>
                </div>
                <div class="right">
                    <i class="fa fa-angle-right"></i>
                </div>
            </div>
            <div class="card">
                <div class="card-item">
                    <div class="card-plus">
                        <img src="/libs/images/icon-cardLogo.png" alt="">
                    </div>
                    <div class="more-auth">
                        尊享多项特权
                    </div>
                </div>
                <p class="new-card">开通橙PLUS卡，限时送100元</p>
            </div>
        </div>
        <div class="wallet-wrap">
            <div class="wallet-item">
                <span class="item">10 <em>元</em></span>
                <span class="title">余额</span>
            </div>
            <div class="wallet-item">
                <span class="item">0 <em>元</em></span>
                <span class="title">余额</span>
            </div>
            <div class="wallet-item">
                <span class="item">10 <em>元</em></span>
                <span class="title">余额</span>
            </div>
            <div class="wallet-item">
                <span class="item">10 <em>元</em></span>
                <span class="title">余额</span>
            </div>
        </div>
        <div class="list">
            <a>
                <span class="icon">
                    <i class="fa fa-file-text-o fa-2x"></i>
                </span>
                <span class="title">我的订单</span>
                <div class="list-right">
                    <span>待付款0/代收款0</span>
                    <i class="fa fa-angle-right"></i>
                </div>
            </a>
        </div>
        <div class="list">
            <a>
                <span class="icon">
                    <i class="fa fa-credit-card fa-2x"></i>
                </span>
                <span class="title">我的卡包</span>

                <div class="list-right">
                    <span>了解详情</span>
                    <i class="fa fa-angle-right"></i>

                </div>
            </a>
        </div>
        <div class="list">
            <a>
                <span class="icon">
                    <i class="fa fa-user fa-2x"></i>
                </span>
                <span class="title">会员中心</span>
                <div class="list-right">
                    <i class="fa fa-angle-right"></i>
                </div>
            </a>
        </div>
        <div class="list">
            <a>
                <span class="icon">
                    <i class="fa fa-diamond fa-2x"></i>
                </span>
                <span class="title">我的关注</span>

                <div class="list-right">
                    <i class="fa fa-angle-right"></i>
                </div>
            </a>
            <a>
                <span class="icon">
                    <i class="fa fa-map-marker fa-2x"></i>
                </span>
                <span class="title">收货地址</span>

                <div class="list-right">
                    <i class="fa fa-angle-right"></i>
                </div>
            </a>
        </div>
        <div class="list">
            <a>
                <span class="icon">
                    <i class="fa fa-envelope-o fa-2x"></i>
                </span>
                <span class="title">我的消息</span>

                <div class="list-right">
                    <i class="fa fa-angle-right"></i>
                </div>
            </a>
            <a>
                <span class="icon">
                    <i class="fa fa-pencil-square-o fa-2x"></i>
                </span>
                <span class="title">意见反馈</span>

                <div class="list-right">
                    <i class="fa fa-angle-right"></i>
                </div>
            </a>
        </div>
        <div class="list">
            <a>
                <span class="icon">
                    <i class="fa fa-phone fa-2x"></i>
                </span>
                <span class="title">联系电话</span>

                <div class="list-right">
                    <i class="fa fa-angle-right"></i>
                </div>
            </a>

        </div>
        <a @click = "exit" href="javascript:;" class="online-sever">
            <span >退出登录</span>
        </a>
    </div>
</template>

<style lang="scss">
    .mine-content {
        width: 100%;
        height: 100%;

        .main-top {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            height: 5.066667rem;
            background: url(/libs/images/integral.jpg);

            .top {
                display: flex;
                justify-content: space-around;
                padding: 0.4rem 0;
                align-items: center;

                .head-img {
                    width: 1.333333rem;
                    height: 1.333333rem;
                    border-radius: 100%;
                    border: 0.026667rem solid #e6e6e6;
                    background-color: #f5f5f5;
                }

                .user-info {
                    width: 6.666667rem;
                    color: #fff;

                    .user-name {
                        font-size: 0.426667rem;
                    }

                    .user-id {
                        font-size: 0.32rem;
                    }
                }
                .right{
                    color: #fff;
                }
            }
        }

        .card {
            width: 9.2rem;
            height: 2.133333rem;
            margin: 0 auto;
            padding: 0.4rem;
            box-sizing: border-box;
            background: url(/libs/images/pic_plusCard.png) center 0 no-repeat;

            .card-item {
                display: flex;
                justify-content: space-between;

                .card-plus {
                    width: 3.626667rem;
                    height: 0.826667rem;
                }

                .more-auth {
                    background-color: rgba(255, 255, 255, 0.2);
                    border-radius: 0.266667rem;
                    height: 0.48rem;
                    line-height: 0.48rem;
                    color: #d8c9a3;
                    font-size: 0.293333rem;
                    font-weight: bold;
                    padding: 0 0.133333rem;
                }
            }

            .new-card {
                font-size: 0.32rem;
                font-weight: bold;
                color: #d8c9a3;
                padding-top: 0.128rem;
            }
        }

        .wallet-wrap {
            width: 100%;
            height: 1.106667rem;
            padding: 0.466667rem 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #fff;

            .wallet-item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 2.503333rem;
                border-right: 1px solid #ccc;

                span {
                    text-align: center;

                    em {
                        font-size: 0.266667rem;
                        font-style: normal;
                    }
                }

                .item {
                    font-size: 0.6rem;
                    color: #ff7919;
                }

                .title {
                    color: #8c8c8c;
                    font-size: 0.32rem;
                }
            }

            .wallet-item::last-of-type {
                border: none;
            }
        }

        .list {
            background-color: #fff;
            margin-top: 0.293333rem;

            .fa {
                padding: 0 0.266667rem;
            }

            a {
                display: block;
                height: 1.2rem;
                width: 100%;
                line-height: 1.2rem;
                display: flex;
                align-items: center;

                span {
                    float: left;

                    &.title {
                        width: 6rem;
                    }

                    &.icon {
                        width: 1.2rem;
                        height: 1.2rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }

                .list-right {
                    float: right;
                    width: 3.2rem;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;

                    span {
                        white-space: nowrap;
                    }
                }
            }
        }

        .online-sever {
            display: block;
            width: 6.906667rem;
            height: 1.04rem;
            margin: .4rem auto 1.92rem;
            background-color: #ffffff;
            border-radius: 0.128rem;
            border: 1px solid #e6e6e6;
            text-align: center;
            color: #ff7919;
            font-size: 0.373333rem;
            font-weight: bold;

            span {
                display: inline-block;
                line-height: 1.04rem;
                vertical-align: middle;
            }
        }
    }
</style>

<script>
    export default {
        created(){
                this.userinfo = JSON.parse(localStorage.getItem('userInfo'))
                console.log(this.userinfo);      
        },
        methods:{
            exit(){
                console.log('exit');
                localStorage.removeItem('userInfo')
                this.$router.replace({name:'login'})
            }
        }
    };
</script>