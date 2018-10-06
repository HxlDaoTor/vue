<template>

   <div class="ktreg">
      <div class="top">
           <i  class="iconfont icon-u-arrow3-right" @click='back'></i>
           <span @click='langua("en")' v-if="locale == 'cn'">English</span>
           <span @click='langua("cn")' v-else>中文</span>

      </div> 
      <div class="content">
            <h5>{{ $t('message.logreg.rep') }}</h5>
            <input type="text" :placeholder="$t('message.logreg.pln')" v-model="emailadd">
            <div class="email">
               <input type="text" :placeholder="$t('message.logreg.ver')" v-model="verif">
               <button @click='getVerif'>{{ $t('message.index.getEma') }}</button>
            </div>
             <div class="pow">
               <input :type="password" :placeholder="$t('message.logreg.nep')" v-model="newpassword"> 
               <i  @click='isLook' class="iconfont icon-see" ></i>
             </div>
             <div class="pow">
               <input :type="password" :placeholder="$t('message.logreg.agpl')" v-model="onpassword"> 
               <i  @click='isLook' class="iconfont icon-see" ></i>
             </div>

           
            <button @click='oklogin'>{{ $t('message.logreg.ok') }}</button>
<!--             <div class='regov'>
               <div>忘记密码？<router-link to="/backPassword">找回密码</router-link> icon-see</div>
               <router-link to="/reg" replace>{{ $t('message.logreg.siu') }}</router-link>             
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

       emailadd:'',
       verif:'',
       newpassword:'',
       onpassword:'',

       istip:false,
       tip:'',
       isload:false,
       loadTxt:'',
       locale:'',
       password:'password'

    }
  },
  components:{

    
  },
  mounted: function () {  //钩子函数 加载完后执行

    
    this.locale = this.$i18n.locale;
    if(getCookie('username')){
       this.$router.replace('/HelloWorld')    //replace跳转不会添加history记录  push跳转会添加history记录
    }
  },
  methods:{ 
       
     getVerif(){
         const url =  interfaceUrl();    //接口域名  
         let email = this.emailadd ;
         let   data = {
               'ename':email
         }; 

         if( email == ''){
            this.istip = true;
            this.tip = this.$t('message.logreg.pln');
            setTimeout(function(){
                  this.istip = false;
            }.bind(this),1500)
         }else{
           this.isload=true;
           this.loadTxt=this.$t('message.logreg.load');
           this.$http.post(url + '/v1/email/sendPwdEmail.ashx',data,{emulateJSON: true}).then((res)=>{
                    this.isload=false;
                  //  console.log(res)
                if( res.body.code === 200 ){

                    this.istip = true;
                    this.tip = (this.locale == 'cn' ?  res.body.message : res.body.message_en);
                    setTimeout(function(){
                          this.istip = false;
                    }.bind(this),2000)

                  }else{

                    this.istip = true;
                    this.tip = (this.locale == 'cn' ?  res.body.message : res.body.message_en);
                    setTimeout(function(){
                          this.istip = false;
                    }.bind(this),1500) 

                  }
           


           //  console.log(res)


           })          
         }                      


    },
    oklogin(){
         const url =  interfaceUrl();    //接口域名  
         let  verif = this.verif;
         let   pwd1 = this.newpassword;
         let   pwd2 = this.onpassword;
         let   data = {
               'codeid':verif,
               'pwd1':pwd1,
               'pwd2':pwd2
         }; 
         if( verif == ''){
            this.istip = true;
            this.tip = this.$t('message.logreg.ver');
            setTimeout(function(){
                  this.istip = false;
            }.bind(this),1500)
         }else if( pwd1 == ''){
            this.istip = true;
            this.tip = this.$t('message.logreg.nep');
            setTimeout(function(){
                  this.istip = false;
            }.bind(this),1500)
         }else if( pwd2 == ''){
            this.istip = true;
            this.tip = this.$t('message.logreg.agpl');
            setTimeout(function(){
                  this.istip = false;
            }.bind(this),1500)
         }else if( pwd2 != pwd1){
            this.istip = true;
            this.tip = this.$t('message.logreg.agpow');
            setTimeout(function(){
                  this.istip = false;
            }.bind(this),1500)
         }else{
           this.isload=true;
           this.loadTxt=this.$t('message.logreg.load');
           this.$http.post(url + '/v1/email/verificationPwd.ashx',data,{emulateJSON: true}).then((res)=>{
             this.isload=false;
             console.log(res)
            if(res.body.code === 200){

                    this.istip = true;
                    this.tip = (this.locale== 'cn' ?  res.body.message : res.body.message_en);
                    setTimeout(function(){
                          this.istip = false;
                          this.$router.go(-1);
                    }.bind(this),2000)
                    

            }else{
                    this.istip = true;
                    this.tip = (this.locale== 'cn' ?  res.body.message : res.body.message_en);
                    setTimeout(function(){
                          this.istip = false;
                    }.bind(this),1500)

            }


             console.log(res)


           })          
         } 

    },
    langua(ev){
       if( ev == 'cn'){
         this.$i18n.locale = 'cn';
         this.locale = 'cn';      //按钮切换 this.$router.replace('/HelloWorld')
       }else if( ev == 'en' ){
         this.$i18n.locale = 'en' ;
         this.locale = 'en';       
       }
    },
    back(){

        this.$router.go(-1);//返回上一层
    },
    isLook(){

        if(this.password == 'password'){

          this.password = 'text'

        }else{

           this.password = 'password'
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
  font-size: 26px;

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
.ktreg .content .email,.ktreg .content .pow{
  display: flex;
  justify-content: space-between;
 align-items: center;
  width: 90%;
  margin:0 auto;
    border-bottom:1px solid #e8e8e8;
    margin:0 auto 20px;
}

.ktreg .content input{ 
   outline:none;
  -webkit-appearance:none; 
/*  border-radius: 8px;*/
  border:none;
  width: 90%;
  border-bottom:1px solid #e8e8e8;
  background: none;
  padding: 0 10px;
  height: 45px;
  margin:0 auto 20px;
  font-size: 16px;
  box-sizing: border-box;
  font-size: 14px;
}
.ktreg .content .email input,.ktreg .content .pow input{
  width: 68%;
  margin:0;
  border:none;
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
   margin-top: 10px;
}
.ktreg .content .email button{
  width: 30%;
  font-size: 12px;
  background: none;
  border:1px solid #fe4800;
  color:#fe4800;
  height: 30px;
 margin:0;
}
.ktreg .content .pow i{
font-size: 24px;
margin-right:20px;
color:#9a9a9a;
}
.ktreg .content{
/*  width: 80%;
  margin:0 auto;*/
  padding:10px 20px;
}
.ktreg .content h5{
  width: 200px;
  margin:5px auto 25px;
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
input::-webkit-input-placeholder{
      color:#afafaf;
     font-size:14px;
}
</style>