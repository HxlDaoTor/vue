<template>

   <div class="ktreg">
      <div class="top">
           <i  class="iconfont icon-font_ZHYQ"></i>
           <span @click='langua("en")' v-if="locale == 'cn'">English</span>
           <span @click='langua("cn")' v-else>中文</span>

      </div> 
      <div class="content">
            <h5>登录</h5>
            <input type="text" placeholder="请输入用户名" v-model="username">
            <input type="password" placeholder="请输入密码" v-model="password">
            <button @click='login'>确定</button>
            <div class='regov'>
              <div>
                  <router-link to="/backPassword"> 忘记密码？</router-link>
              </div>
                  <router-link to="/reg" replace>注册</router-link>             
            </div>

<!--             <div>
                   <p>我的订单</p>
            </div> -->

      </div> 


   </div>



</template>
<script>
import {setCookie,getCookie} from '../assets/js/cookes.js'  
import { interfaceUrl } from '../assets/js/config.js'   

export default {

  name: 'Login',
  data () {         //关联dom上的数据
    return {

      username:'',
      password:'',
      istip:false,
      tip:'',
      isload:false,
      loadTxt:'',
      locale:''

    }
  },
  components:{

    
  },
  mounted: function () {  //钩子函数 加载完后执行

    var that = this;
//    this.locale = this.$i18n.locale;
    // if(getCookie('username')){
    //    this.$router.replace('/HelloWorld')    //replace跳转不会添加history记录  push跳转会添加history记录
    // }
  
    setTimeout(function(){

       that.$router.replace('/home')

    },1000)

  },
  methods:{  
       
     login(){
        const url =  interfaceUrl();    //接口域名    
                                                //登陆
        if(this.username == "" || this.password == ""){

            //alert("请输入用户名或密码")
            this.istip = true;
            this.tip = this.$t('message.logreg.plr');
            setTimeout(function(){
                  this.istip = false;
            }.bind(this),1500)

        }else{

            let data = {'username':this.username,'password':this.password}
            /*接口请求*/
            this.isload=true;
            this.loadTxt=this.$t('message.logreg.load');
            this.$http.post(url + '/v1/user/login.ashx',data,{emulateJSON: true}).then((res)=>{
                //console.log(res)

               if(res.body.code === 200){

                  // this.tishi = res.body.message;
                  // this.showTishi = true

                  setCookie('username',this.username,1000*60)
                  setCookie('token1',res.body.user.token1,1000*60)
                  setCookie('token2',res.body.user.token2,1000*60)
                  setCookie('isemail',res.body.user.isemail,1000*60)
                  setCookie('isTutor',res.body.user.Isjiaocheng,1000*60)
                  this.$router.replace('/HelloWorld')

                  // setTimeout(function(){
                  //     this.$router.replace('/HelloWorld')
                  // }.bind(this),800)

              }else{

                this.isload=false,
                this.istip = true;
                this.tip = (this.locale == 'cn'? res.body.message : res.body.message_en);

                setTimeout(function(){
                     this.istip = false;
                }.bind(this),1500)

              }
          })
      }
    },
    langua(ev){
       if( ev == 'cn'){

         this.$i18n.locale = 'cn';
         this.locale = 'cn';      //按钮切换
       }else if( ev == 'en' ){
         this.$i18n.locale = 'en' ;
         this.locale = 'en';       
       }
    }
  
  
  }

}
</script>
<style scoped>
.ktreg{

}
.ktreg .top{
  height: 50px;
  width: 100%;
background: -webkit-linear-gradient(right top, #4a4fe4 , #4a93f9);
background: url(/static/img/ddgd.jpg) no-repeat ;
background-size: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding:0 20px;
color: #fff;
box-sizing: border-box;
}
.ktreg .top i{
  color:#fff;
  font-size: 30px;

}
.ktreg .top span{
  color:#fff;
  font-size: 12px;
  border:1px solid #fff;
  /*padding:4px 8px;*/
  border-radius: 20px;
  width: 60px;
  height: 24px;
  line-height: 24px;
}
.ktreg .content input{
   outline:none;
  -webkit-appearance:none; 
  border-radius: 8px;
  width: 90%;
  border:1px solid #e8e8e8;
  background: #f5f5f5;
  padding: 0 10px;
  height: 45px;
  margin:0 auto 20px;
  font-size: 16px;
  box-sizing: border-box;
  font-size: 14px;
}
.ktreg .content button{
  width: 90%;
  height:45px;
  border:none;
  background: -webkit-linear-gradient(right top, #4a4fe4 , #4a93f9);
   border-radius: 8px;
   color:#fff;
   font-size: 18px;
   margin-bottom: 12px;
}
.ktreg .content{
/*  width: 80%;
  margin:0 auto;*/
  padding:10px 20px;
}
.ktreg .content h5{
  width: 80px;
  margin:5px auto 15px;
  font-size: 16px;
}
.content .regov{
 display: flex;
/* flex-direction:row-reverse;*/
 justify-content: space-between;
 width: 90%;
 margin:0 auto;
}
.content .regov div{

  font-size: 14px;
  color:#9a9a9a;

}
.content .regov a{
  font-size: 14px;
  color:#2772ff;
}
.content .regov div a{
  color:#9a9a9a;
}
input::-webkit-input-placeholder{
      color:#afafaf;
     font-size:14px;
}
</style>