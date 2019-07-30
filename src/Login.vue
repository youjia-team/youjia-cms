<template>
  <div id="login" >
  
  <el-input v-model="loginData.username" placeholder="请输入用户名"></el-input>
  <el-input v-model="loginData.password" placeholder="请输入密码"></el-input>
  <el-button @click="doLogin" type="primary" round>主要按钮</el-button>
  验证码需要后台支持或者手机号验证！
  </div>
</template>

<script>

 import utils from "./utils/utils"
export default {
  name: 'login',
   data () {
    return {
      loginData:{
        username:"",
        password:""
      }
    }
  },
  methods:{
   doLogin(){
        //原生axios写法
// this.$axios({
//                 method:'post',
//                 url:'/user/login',
//                 data:this.qs.stringify({    //这里是发送给后台的数据
//                       userId:this.userId,
//                       token:this.token,
//                 })
//             }).then((response) =>{          //这里使用了ES6的语法
//                 console.log(response)       //请求成功返回的数据
//             }).catch((error) =>{
//                 console.log(error)       //请求失败返回的数据
//             })

//封装后写法 需要import utils
alert(1)
      this.$axios.post('/user/login',
      this.loginData).then(function (resp) {
        
          alert(resp.data.message)
    })
    }
  }
}
</script>

<style>

</style>
