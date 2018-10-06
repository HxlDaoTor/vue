<!-- 模板 -->
<template>
   <div class="ktreg">
      <div class="top">
           <i  class="iconfont icon-font_ZHYQ"></i>
            <span @click='langua("en")' v-if="locale == 'cn'">English</span>
           <span @click='langua("cn")' v-else>中文</span>
      </div> 
      <div class="content">
            <h5>{{ $t('message.logreg.siu') }}</h5>
            <input type="text" :placeholder="$t('message.logreg.pln')" v-model="email">
            <input type="password" :placeholder="$t('message.logreg.plw')" v-model="password">
            <input type="password" :placeholder="$t('message.logreg.agpl')" v-model="passwordco">
            <button @click='submit'>{{ $t('message.logreg.ok') }}</button>
            <div class='regov'>
                <router-link to="/login" replace>{{ $t('message.logreg.sig') }}</router-link>
            </div>
      </div> 


   </div>
</template>

<script>
import {setCookie,getCookie} from '../assets/js/cookes.js'  
import { interfaceUrl } from '../assets/js/config.js' 

export default {
  data () {         //关联dom上的数据
    return {
      email:'',
      password:'',
      passwordco:'',
      istip:false,
       tip:'',
       isload:false,
       loadTxt:'',
       histyId:'' ,          //带过来的地址
       locale:''

    }
  },
  components:{

    
  },
  mounted: function () {  
      //  this.locale = this.$i18n.locale;
 //    console.log(this.$router.history.current)
      let tgid = this.$router.history.current.fullPath;

      if( tgid.indexOf('?') != -1){

          this.histyId = tgid.split('?')[1];
         
      }else{

         this.histyId = '';

      }
     
//console.log(this.histyId)

  },
  methods:{  //计算属性  用来绑定事件

      submit(){
               const url =  interfaceUrl();    
              var email = this.email;
              var password = this.password;
              var oncePassword = this.passwordco;
              var addEth = getCookie('addEth') || '';
              var rtoken = getCookie('rtoken') || '';
           //   var invite = getCookie('TGID');
              let histyId  = this.histyId ;

              if( email == ''){
                    this.istip = true;  //提示弹窗
                    this.tip  = this.$t('message.logreg.pln');    
                     setTimeout(function(){
                            this.istip = false;  //提示弹窗
                     }.bind(this),1500)
              }else if( password == '' ){

                    this.istip = true;  //提示弹窗
                    this.tip  = this.$t('message.logreg.plw');    
                     setTimeout(function(){
                            this.istip = false;  //提示弹窗
                     }.bind(this),1500)

              }else if( oncePassword == ''){
                    this.istip = true;  //提示弹窗
                    this.tip  = this.$t('message.logreg.agpl');    
                     setTimeout(function(){
                            this.istip = false;  //提示弹窗
                     }.bind(this),1500)
                // return false
              }else if( oncePassword != password ){
                    this.istip = true;  //提示弹窗
                    this.tip  = this.$t('message.logreg.agpow');    
                     setTimeout(function(){
                            this.istip = false;  //提示弹窗
                     }.bind(this),1500)
              }else{   //开始提交
                   this.isload = true;
                   this.loadTxt = this.$t('message.logreg.sub');  
         
                    
                         let data = {'username':email,'password':password,'repassword':oncePassword,'invite':histyId,'address':"",'dbethaddr':addEth,'osname':"mobile",'rtoken':rtoken}
                          //console.log(data)
                        this.$http.post(url + '/v1/user/register.ashx',data,{emulateJSON: true}).then((res)=>{
                            //console.log(res)
                          this.isload = false;
                         //  alert(res.body.code)
                         //console.log(res.body.message)
                           
                          if(res.body.code === 200){   //注册成功

                            setCookie('token1',res.body.user.token1,1000*60)
                             setCookie('token2',res.body.user.token2,1000*60)
                            setCookie('username',this.email,1000*60)
                            setCookie('isemail',0,1000*60)
                            setCookie('isTutor',0,1000*60)
                            this.$router.replace('/HelloWorld')
                            
     
                          }else{
                            this.isload = false;
                            this.istip = true;  //提示弹窗
                            this.tip  = (this.locale == 'cn'? res.body.message : res.body.message_en);    //弹窗提示语
                             setTimeout(function(){
                                    this.istip = false;  //提示弹窗
                             }.bind(this),1500)
                             
                           // console.log( res.body.message_en )

                           // this.email = '',
                            this.password = '',
                            this.passwordco =''
                          }


                        })



              }       
      } ,
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

<!--        scoped只允许本模板内的样式        -->
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
flex-direction:row-reverse;
width: 90%;
margin:0 auto;
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