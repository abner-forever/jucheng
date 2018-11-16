<template>
    <li class="tour-item"  @click='goToDetail'>
        <a class="tour">
            <div class="poster-box">
                <img :src="item.pic" alt="">
            </div>
            <div class="poster-desc">
                <p class="poster-name">{{item.show_name}}</p>
                <p class="poster-time">
                    {{item.display_show_time.substr(0,11)}} <span class="poster-address">{{item.city_name}}</span>
                </p>
            </div>
        </a>
    </li>
</template>

<style lang="scss">
</style>

<script>
export default {
    props:['item'],
     methods:{
        goToDetail () {
            console.log(this.item);
            
          this.$router.push({ name: 'detail', params : {info: this.item}})
      }  
    }
};
</script>
