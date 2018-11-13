<template>
<div class="login-wrap">
    <h1 class="title">欢迎来到聚橙网</h1>
    <div v-if="pwdShow" class="login-form pwd">
        <div class="login-item">
            <input type="text" placeholder="请输入手机号/邮箱">
            </div>
            <div class="login-item">
                <input type="password" placeholder="请输入密码">
                <div class="visible-btn">
                    <i></i>
                </div>
            </div>
            <div class="login-toogle">
                <span class="tg-txt" @click="pwdShow=false">
                    验证码登录
                &nbsp; <i class="fa fa-angle-right"></i>
                </span>
                <a href="jacascript:;">忘记密码</a>
            </div>
            <div class="login-btn disable">登录</div>
        </div>
        <div v-else class="login-form pwd">
            <div class="login-item">
                <input type="text" v-model="phone" placeholder="请输入手机号">
            </div>
                <div class="login-item check-code">
                    <input type="text" v-model="code" placeholder="请输入验证码">
                    <div class="send-checkcode" :class="{  isSend :sendShow }  " @click="sendCode">
                        <i v-if="showTime">({{time}}s)后重新发送</i>
                        <span v-else>发送验证码</span>
                    </div>
                </div>
                <div class="login-toogle">
                    <span class="tg-txt" @click="pwdShow=true">
                    密码登录
                </span>
                </div>
                <div class="login-btn disable" @click="login">登录</div>
            </div>
        </div>
</template>

<style lang="scss">
.login-wrap {
    width: 100%;
    height: 8.76rem;
    padding: 0.933333rem 1.106667rem 0;
    box-sizing: border-box;

    .title {
        margin-bottom: 1.066667rem;
    }

    .login-item {
        width: 7.786667rem;
        height: 1.053333rem;
        border-bottom: 1px solid #ccc;
        margin-bottom: 0.533333rem;
        display: flex;
        align-items: center;

        input {
            width: 6.813333rem;
            height: 0.64rem;
            border: none;
            outline: none;
            font-size: 0.56rem;
        }
    }

    .login-toogle {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .tg-txt {
            display: flex;
            align-items: center;
            font-size: 0.373333rem;
            color: #666;
        }
    }

    .login-btn {
        width: 7.8rem;
        height: 1.2rem;
        margin: 0 auto;
        width: 7.8rem;
        height: 1.2rem;
        line-height: 1.2rem;
        border-radius: 1.2rem;
        font-size: 0.4533333333rem;
        color: #fff;
        text-align: center;
        letter-spacing: 0.6em;
        margin-top: 0.8rem;
        background: rgba(235, 165, 45, 0.8);
        background-image: linear-gradient(135deg,
            #f7bb00 2.6666666667rem,
            #f89100 6.6666666667rem);

        &.disable {
            background: rgba(255, 215, 140, 0.8);
            background-image: linear-gradient(135deg,
                #ffd88c 2.6666666667rem,
                #ffbc8c 6.6666666667rem);
        }
    }

    .check-code {
        display: flex;
        justify-content: space-between;

        input {
            width: 4.266667rem;
        }

        .send-checkcode {
            padding: 0.266667rem;
            color: #d9d9d9;

            &.isSend {
                color: #f89100;
            }
        }
    }

    i {
        font-style: normal;
    }
}
</style>

<script>
import axios from 'axios'
import qs from 'qs'
export default {
    data() {
        return {
            pwdShow: true,
            showTime: false,
            time: 6,
            sendShow: false,
            phone: '',
            code:''
        }
    },
    methods: {
        senCodeShow() {
            this.showTime = true
            this.time = 6
            let timer = setInterval(() => {
                this.time--
                if (this.time <= 0) {
                    clearInterval(timer)
                    this.showTime = false;
                }
            }, 1000)
        },
        //发送验证码
        async sendCode() {
            //https://m.juooo.com
            let result = await this.$request({
                method: 'post',
                url:'/mz/v4/api/code?__t='+Date.now(),
                data: {
                    mobile:this.phone,
                    type: "2"
                }
            })
            console.log(result);
            this.senCodeShow()
            
        },
        //登录请求
        async login() {
            //https://m.juooo.com
            let result = await this.$request({
                method: 'post',
                url:'/mz/v4/api/login?__t='+Date.now(),
                data: {
                    username:this.phone,
                    password : this.code,
                    loginType:1
                }
            })
            console.log(result);
            this.senCodeShow()
            
        },
    },
    watch: {
        phone: {
            immediate: true,
            handler(val) {
                let result = /^1[345789]\d{9}$/.test(this.phone.trim())
                this.sendShow = result
            }
        }
    },

}
</script>
