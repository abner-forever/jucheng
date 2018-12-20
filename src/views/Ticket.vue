<template>
    <div class="ticket">
        <header class="navbar">
            <div class="nav-inner">
                <div class="left" @click="back">
                    <i class="fa fa-angle-left fa-2x"></i>
                </div>
                <div class="center">
                    选择票价
                </div>
            </div>
        </header>
        <div class="spot-select">
            <p class="title">选择场次</p>
            <div class="item-spot">
                <div class="item">
                    <span class="s-date">2018.11.18</span>
                    <span class="s-time">周日 10:30</span>
                </div>
                <div class="item">
                    <span class="s-date">2018.11.18</span>
                    <span class="s-time">周日 10:30</span>
                </div>
            </div>
        </div>
        <div class="spot-select">
            <p class="title">票价选择</p>
            <div class="item-spot">
                <div class="ticket-item"
                    v-for="item in ticketPrice"
                    :key="item.id"
                >
                    <ticket-item :info='item'></ticket-item>
                </div>
            </div>
        </div>
        <div class="select-footer">
            <div class="sele-tickets">
                <div class="row" v-for="item in cart.tickets" :key='item.id'>
                    <span class="price">{{item.price}}</span>
                    <div class="operate">
                        <i class="fa fa-minus"></i>
                        <span>1</span>
                        <i class="fa fa-plus"></i>
                        <i class="fa fa-trash-o fa-2x"></i>
                    </div>
                </div>
            </div>
            <div class="sele-action">
                <div class="action-left">
                    <div class="sele-num">
                        <i class="fa fa-caret-square-o-down"></i>
                        <!-- <span>{{totalNum}}</span> -->
                    </div>
                    <div class="sele-price">
                        <span>¥300 </span>
                    </div>
                </div>
                <div class="sele-confirm">确定</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.ticket{
    .navbar{
        width: 100%;
        height: 1.16rem;
        background-color: #fff;
        .nav-inner{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left{
                position: absolute;
                width: 1.6rem;
                padding-left: .533333rem;
                box-sizing: border-box;
            }
            .center{
                display: flex;
                justify-content: center;
                flex: 1;
                align-items: center;
                font-size: .453333rem;
            }
        }
    }
    .spot-select{
        width: 9.466667rem;
        margin-top: .266667rem;
        padding: .466667rem .266667rem .4rem;
        background-color: #fff;
        .title{
            font-size: .373333rem;
            color: #666;
        }
        .item-spot{
            display: flex;
            flex-wrap:wrap;
        }
        
    }
    .select-footer{
        width: 100%;
        height: 1.466667rem;
        position: fixed;
        bottom: 0;
        background-color: #fff;
        box-shadow: 4px 29px 65px #333;
        .sele-tickets{
            position: absolute;
            bottom: 1.333333rem;
            width: 100%;
            background-color: #fff;
            display: flex;
            flex-direction: column-reverse;
            .row{
                width: 100%;
                height: 1.333333rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 .8rem;
                box-sizing: border-box;
                .operate{
                    span{
                        padding: .4rem;
                    }
                }
                .fa{
                    padding: .24rem;
                    color: #666;
                }
                .fa-minus, .fa-plus{
                    border: .013333rem solid #ccc;
                    border-radius: .066667rem;
                }
                .fa-trash-o{
                    margin-left: .266667rem;
                }
            }
        }
        .sele-action{
            width: 100%;
            height: 100%;
            display: flex;
            .action-left{
                flex: 1;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .sele-num, .sele-price{
                    .fa{
                        padding-right: .266667rem; 
                    }
                    padding:  0 .266667rem;
                    font-size: .453333rem;
                    color: #666;
                }
                .sele-price{
                    color: #ff7919;
                }
            }
            .sele-confirm{
                width: 4rem;
                height: 1.466667rem;
                background-color: #ff7919;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                font-size: .453333rem;
            }
        }
    }
}
</style>

<script>
import TicketItem from '@components/common/app-ticket/TicketItem'
import { mapState, mapGetters } from 'vuex'
export default {
    props:['info'],
    data(){
        return {
            ticketPrice:[
                {id:1,price:100},
                {id:2,price:200},
                {id:3,price:300},
                {id:4,price:400},
                {id:5,price:500},
                {id:6,price:600},
            ],
            
        }
    },
    beforeCreate(){
        // this.$store.dispatch('/cart/initialCartTickets')
    },
    computed : {
        ...mapState(['cart']),
        ...mapGetters(['totalNum'])
        
    },
    mounted(){
        console.log(this.totalNum);
        
    },
    methods:{
        back(){
            window.history.go(-1)
        },
    },
    components:{
        TicketItem
    }
}
</script>
