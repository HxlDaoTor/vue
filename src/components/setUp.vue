<template>

   <div class="ktreg">
      <div class="top">
           <i  class="iconfont icon-u-arrow3-right" @click='back'></i>

      </div> 
      <div class="content">
       <button @click='exit'>{{$t('message.my.exit')}}</button>   

      </div> 


   </div>



</template>
<script>
import {setCookie,getCookie,delCookie} from '../assets/js/cookes.js'  
import { interfaceUrl } from '../assets/js/config.js'   


export default {

  name: 'Login',
  data () {        
    return {



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

  },
  methods:{  
       



    back(){

        this.$router.go(-1);//返回上一层

    },
    exit(){
      delCookie('token1');
      delCookie('token2');
      delCookie('username');
      delCookie('isemail');
      delCookie('isTutor');
      delCookie('addEth');
      this.$router.replace('/login')
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
.ktreg  .content{
  background: #fff;
  height: 60px;
  margin-top: 15px;
 border-top:1px solid #f8f8f9;
  border-bottom:1px solid #f8f8f8;
  display: flex;
  flex-direction:row-reverse;
  padding:0 20px;
  align-items: center;
}
.ktreg  .content button{
  background: #f5f5f5;
  border:1px solid #e8e8e8;
  padding:4px 15px;
  height: 30px;
  border-radius: 4px;
}
input::-webkit-input-placeholder{
      color:#afafaf;
     font-size:14px;
}
</style>