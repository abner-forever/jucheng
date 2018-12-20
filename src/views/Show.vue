<template>
    <div class="app-show">
    <main>
        <header class="search-top">
            <div class="search-bar">
                <router-link to="/city" class="left">
                    <span class="city">{{currentcity.cityName}}</span>
                    <span class="fa fa-angle-down"></span>
                </router-link>
                <a href="" class="center">
                    <span class="fa fa-search"></span>
                    <span >搜索演出艺人</span>
                </a>
                <a href="" class="right">
                    <span class="fa fa-filter fa-2x"></span>
                </a>
            </div>
            <div class="search-nav">
                <div class="search-nav-wrap">
                    <a class="search-nav-item"
                        v-for= "item in search_navs" :key = "item.id"
                        @click = 'getCategoryId(item.id)'
                        :class = "{active: item.id === id}"
                    >{{item.title}}</a>
                    
                </div>
            </div>
        </header>
       <show-list :id= 'id'></show-list>
    </main>
    <app-footer></app-footer>
    </div>
</template>
<style lang="scss">
.search-top {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: #ffffff;
  padding: 0 0.4rem 0;
  border-bottom: 1px solid #dfdfdf;
  box-sizing: border-box;
  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.173333rem;
    .left {
      font-size: 0.373333rem;
      line-height: 0.72rem;
      display: flex;
      align-items: center;
      .city {
        white-space: nowrap;
        margin-right: 0.106667rem;
      }
    }
    .center {
      height: 0.72rem;
      width: 6.693333rem;
      line-height: 0.72rem;
      background-color: #f5f5f5;
      border: 1px solid #ebebeb;
      border-radius: 0.23rem;
      font-size: 0.32rem;
      color: #999999;
      text-align: center;
      .fa {
        margin-right: 0.106667rem;
      }
    }
    .right {
      width: 0.88rem;
      color: #666666;
      span{
      float: right;

      }
    }
  }
  .search-nav {
    height: 0.92rem;
    line-height: 0.92rem;
    margin-right: -0.4rem;
    .search-nav-wrap {
      overflow-x: scroll;
      white-space: nowrap;
      overflow-y: hidden;
    }
    .search-nav-item {
      display: inline-block;
      padding: 0 0.373333rem;
      height: 0.8rem;
      line-height: 0.826667rem;
    }
    .active {
      font-weight: bold;
      color: #ff7919;
      border-bottom: 0.04rem solid #ff7919;
    }
  }
}
</style>

<script>
import ShowList from "@components/common/app-show/ShowList";
import AppFooter from "@components/layout/AppFooter";
import bus from "@util/bus";
import { mapState } from "vuex";

export default {
  data() {
    return {
      search_navs: [
        { id: 0, title: "全部" },
        { id: 35, title: "演唱会" },
        { id: 36, title: "音乐会" },
        { id: 37, title: "话剧歌剧" },
        { id: 38, title: "儿童亲子" },
        { id: 79, title: "音乐剧" },
        { id: 86, title: "芭蕾舞蹈" },
        { id: 91, title: "戏曲综艺" },
        { id: 99, title: "展览" }
      ],
    };
  },
  computed: {
    ...mapState(["city"]),
    currentcity() {
      return this.$store.state.city.currentcity;
    },
    id(){
      return this.$store.state.category.categoryId
    }
  },
  methods:{
    getCategoryId(id){
		this.$store.commit('category/getCategoryId',{
			id: id
		})
	},
  },
  components: {
    ShowList,
    AppFooter
  }
};
</script>
