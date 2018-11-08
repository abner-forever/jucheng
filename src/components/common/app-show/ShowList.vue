<template>
        <div class="show-list v-if='showlist.length'" >
            <div class="bscroll" ref="bscroll">
                <div class="show-wrap bscroll-container">
                    <show-item
                        v-for = '(item,i) in showlist' :key="i"
                        :info = 'item'
                    >
                    </show-item>
                </div>
            </div>
            <!-- <div class="bottom-tip">
                <div class="loading">上拉刷新</div>
            </div> -->
        </div>
        
</template>

<style lang="scss" >
    .bscroll{
    width: 100%;
    height: 81vH;
    overflow: hidden;
}
    .show-list{
    margin-top: 2.093333rem;
    padding-top: .333333rem;
    padding-bottom: 1.333333rem;
    .show-wrap{
        padding: 0 .4rem;
        margin-top: .266667rem;
        background-color: #fff;
    }
    }
</style>

<script>
import axios from "axios"
import qs from 'qs'
import scroll from '@util/scroll'
import ShowItem from '@components/common/app-show/ShowItem'
export default {
    props:['id'],
    data(){
        return {
            showlist: [],
            page: 1,
        }
    },
    watch: {
         id :{
            immediate:true,
            handler(){
                this.showlist = [],
                this.page = 1
                this.getShowList();
                console.log(this.id,this.page,9999);
                
            }
        }
    },
    // create(){
    //     this.getShowList()
    // },
    methods: {
        getShowList(){
            let that = this
            axios({
                method: 'post',
                url: '/jz/Show/getShowList',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                data: qs.stringify({
                    city_id: -1,
                    category: that.id,
                    activity_id: 0,
                    sort_type: 0,
                    page: that.page
                })
            })
            .then(function (res) {
                that.page++
                that.showlist = that.showlist.concat(res.data.data.list)
            })
            .catch(function (error) {
                console.log(error);
            });
            

        }
    },
    components:{
        ShowItem
    },
    mounted(){
        this.scroll = scroll({
            el: this.$refs.bscroll,
            handler : this.getShowList.bind(this),
        })  
    }
}
</script>
