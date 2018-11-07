<template>
    <div class="footer app-footer ">
		<router-link 
            class="icon-box"
            tag='a'
            v-for = 'item in tabs' :key = "item.id"
            active-class='active'
            :to= 'item.path'
            :class="item.name"
        >

        <p class="txt ">{{item.title}}</p>
		</router-link>
        
		
	</div>
</template>
<script>
export default {
    data(){
        return {
            tabs :[
                {id :1, title:'首页',name:'home_tab',path:'/home'},
                {id :2, title:'演出',name:'show_tab',path:'/show'},
                {id :3, title:'我的',name:'mine_tab',path:'/mine'}
            ]
        }
    }
}
</script>

<style lang="scss">
@import '../../style/modules/reset';
.app-footer{
    width: 100%;
    height: 1.333333rem;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #e6e6e6;
     a{
         width: .666667rem;
        height: .666667rem;
        background-size: 100%;
        position: relative;
        margin-top: .133333rem;
       color: #333;
    }
    .home_tab{
        background: url('/libs/images/home_tab.png') top center no-repeat;
    }
    .show_tab{
        background: url('/libs/images/show_tab.png') top center no-repeat;
    }
    .mine_tab{
        background: url('/libs/images/mine_tab.png') top center no-repeat;
    }
    .active{
        background-position-y: -0.66667rem;
        color: #ff7919;
    }
   .txt{
       position: absolute;
       bottom: -0.4rem;
   }
}
</style>
