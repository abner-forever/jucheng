<template>
        <div class="show-list v-if='showlist.length'" >
            <div class="bscroll" ref="bscroll">
                <div class="show-wrap bscroll-container" >
                    <show-item
                        v-for = '(item,i) in showlist' :key="i"
                        :info = 'item'
                    >
                    </show-item>
                </div>
				<div v-if="nodata" class="show-nodata">
					<p>抱歉没有相关数据</p>
				</div>
            </div>
            <!-- <div class="bottom-tip">
                <div class="loading">上拉刷新</div>
            </div> -->
        </div>
        
</template>

<style lang="scss" >
.bscroll {
  width: 100%;
  height: 81vh;
  overflow: hidden;
}
.show-list {
  margin-top: 2.093333rem;
  padding-top: 0.333333rem;
  padding-bottom: 1.333333rem;
  .show-wrap {
    padding: 0 0.4rem;
    margin-top: 0.266667rem;
    background-color: #fff;
  }
}
.show-nodata{
	height: 4.9493333333rem;
    background: url(https://m.juooo.com/public/basic/Home/app/app-juooo5/images/no-data.png) no-repeat center 1.2373333333rem;
    background-size: 1.9626666667rem 1.9626666667rem;
    font-size: 0.512rem;
    color: #999999;
    line-height: 1.4933333333rem;
    padding-top: 3.2rem;
    text-align: center;
}
</style>

<script>
import axios from "axios";
import qs from "qs";
import scroll from "@util/scroll";
import { Indicator, Toast } from "mint-ui";

import ShowItem from "@components/common/app-show/ShowItem";
import {mapState} from 'vuex'
export default {
  props: ["id"],
  data() {
    return {
      showlist: [],
      page: 1,
	  hasMore: true,
	  nodata:false
    };
  },
  watch: {
    id: {
      immediate: true,
      handler() {
        this.showlist = [];
        this.hasMore = true;
        this.page = 1;
        this.getShowList();
      }
    }
  },
  computed:{
	   ...mapState(['city']),
        city_id () {
			// console.log(this.$store,99);
			return this.$store.state.city.currentcity.cityId
        }
  },
  methods: {
    async getShowList() {
		this.nodata = false;
      if (!this.hasMore) {
        if (this.instance) this.instance.close();
        this.instance = Toast({
          message: "没有更多了...",
          position: "bottom"
        });
        return false;
      }
      let result = await this.$http({
        method: "post",
        url: "/jz/Show/getShowList",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: qs.stringify({
          city_id: this.city_id,
          category: this.id,
          activity_id: 0,
          sort_type: 0,
          page: this.page
        }),
        loading:true
      });
      //判断是否还有数据
      if (result.data === "") {
		this.hasMore = false;
		this.nodata = true;
      } else {
        this.page++;
        this.showlist = this.showlist.concat(result.data.list);
      }
      
    }
  },
  components: {
    ShowItem
  },
  mounted() {
    this.scroll = scroll({
      el: this.$refs.bscroll,
      handler: this.getShowList.bind(this)
    });
  }
};
</script>
