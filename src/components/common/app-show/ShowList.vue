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
</style>

<script>
import axios from "axios";
import qs from "qs";
import scroll from "@util/scroll";
import { Indicator, Toast } from "mint-ui";

import ShowItem from "@components/common/app-show/ShowItem";
export default {
  props: ["id"],
  data() {
    return {
      showlist: [],
      page: 1,
      hasMore: true
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
  // create(){
  //     this.getShowList()
  // },
  methods: {
    async getShowList() {
      if (!this.hasMore) {
        if (this.instance) this.instance.close();
        this.instance = Toast({
          message: "没有更多了...",
          position: "bottom"
        });
        return false;
      }
      Indicator.open({
        spinnerType: "triple-bounce"
      });
      let result = await this.$http({
        method: "post",
        url: "/jz/Show/getShowList",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: qs.stringify({
          city_id: -1,
          category: this.id,
          activity_id: 0,
          sort_type: 0,
          page: this.page
        })
      });
      //判断是否还有数据
      if (result.data === "") {
        this.hasMore = false;
      } else {
        this.page++;
        this.showlist = this.showlist.concat(result.data.list);
      }
      Indicator.close();
    }
  },
  components: {
    ShowItem
  },
  mounted() {
    console.log(this.id, "showlist init");
    this.scroll = scroll({
      el: this.$refs.bscroll,
      handler: this.getShowList.bind(this)
    });
  }
};
</script>
