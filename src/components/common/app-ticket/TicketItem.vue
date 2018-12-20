<template>
<div class="item" @click="addTicketsHandler">
    <span  :class= "{active : isActive}" class="s-date">¥{{info.price}}</span>
</div>
</template>

<style lang="scss">
.item {
    width: 2.8rem;
    height: 1.333333rem;
    display: inline-block;
    margin: 0.266667rem 0.266667rem 0 0;
    border: 0.013333rem solid #ccc;
    border-radius: 0.133333rem;
    overflow: hidden;

    .s-date {
        font-size: 0.373333rem;
        width: 100%;
        height: 100%;
        display: inline-block;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #323232;

        &.active {
            background-color: #ff7919;
            color: #fff;
            border: 0;
        }

        &.disable {
            background-color: #fafafa;
        }
    }

    .s-time {
        font-size: 0.346667rem;
    }
}
</style>

<script>
import { mapActions } from 'vuex';
export default {
    props: ['info'],
    data() {
        return {
            isActive: false,
        }
    },
    methods: {
        ...mapActions({
            addTickets: 'cart/addTickets'
        }),
        addTicketsHandler() {
            this.isActive = true;
            // let 
            let {
                id,
                price
            } = this.info
            // this.name = JSON.parse(localStorage.getItem('info')).schedular_name
            this.addTickets({
                id,
                price,
            })
            // console.log(this.info);

        }
    }

};
</script>
