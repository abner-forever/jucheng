<template>
    <div class="login-container">
        <header class="login-header">
            <div class="header-wrap">
                <div class="left">
                    <a @click='back' class="fa fa-angle-left fa-2x"></a>
                </div>
                <div class="right">
                    <a href="">注册</a>
                </div>
            </div>
        </header>
        <main>
            <login-form></login-form>
        </main>
    </div>
</template>


<style lang='scss'>
.login-container{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.header-wrap{
    width: 100%;
    height: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left, .right{
        width: 1.226667rem;
        display: flex;
        justify-content: center;
    }
}
</style>


<script>
import LoginForm from '@components/common/app-login/login-form.vue'
export default {
    methods : {
        back(){
            window.history.go(-1)
        }
    },
    components:{
       LoginForm 
    }
}
</script>
