<!-- 模板 -->
<template>
   <div class="make">

    <foot :message='msg'></foot>
   </div>
</template>

<script>
 import foot from './foot'
 import {setCookie,getCookie} from '../assets/js/cookes.js'  
import { interfaceUrl } from '../assets/js/config.js'  

export default {
  name: 'Hello',
  data () {        
    return {
      msg: '2',
        
    }
  },
  components:{
    'foot': foot
  },
  mounted: function () {  

  },
  methods:{  


     txnpl(){   //跳转提现记录
       
        this.$router.push('/promotelist')
    
     }

   }



}
</script>

<!--        scoped只允许本模板内的样式       fcd18d -->
<style scoped>  
.make{
  width: 100%;
  min-height: 100%;
/*background: -webkit-linear-gradient(right top, #4a4fe4 , #4a93f9);*/
  color: #666;
  padding-bottom: 60px;
}
.make .top{
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:url(/static/img/banner.png) no-repeat ;
  background-size: 100%;
  padding: 0 15px;
  /*margin-bottom:10px;*/
}
.make .top div{
 width: 100%;
 display: flex;
 justify-content: space-around;
 align-items: center;
 color: #fff;
 font-size: 18px;

 padding: 10px 40px;

}
.make .top i{
  color:#fff;
  font-size: 24px;
}
.make .top div p{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; 
 padding-bottom: 30px;
}
.make .top div p span:first-child{
  padding-left: 5px;
   font-size: 14px;
   padding-bottom: 4px;
}
.make .top div p span:last-child{
  font-weight: 800;
  font-size: 18px;
  display: block;
  height: 80px;
  line-height: 80px;
  width: 80px;
  border-radius: 50%;
  border:1px solid #fff;
}
.make .top div p:first-child{

}
.make .top img{
width: 20px;
height: 20px;
vertical-align: middle;
}
.make .form{
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  margin:10px 15px 0;
 /* box-shadow: 0 0 6px #ecddc6; */
}
.make .form .children{
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  margin-bottom: 1px;
  color:#7c8df2;
}
.make .form .children div:first-child{
  width: 65%;
  background: #d8dcfd;
  height: 60px;
  line-height: 60px;
}
.make .form .children div:last-child{
  width: 35%;
  background: #d8dcfd;
  height: 60px;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.make .form .children div:last-child p.tilt{
  border-bottom: 1px solid #fff;
  width: 100%;
}
.make .form .children div:last-child p:last-child{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

}
.make .form .children div:last-child p.ntn{
  height: 60%;
}
.make .form .children div:last-child p.ntn span:first-child{
  width: 50%;
  height: 100%;
  border-right:1px solid #fff;
  line-height: 29px;
  margin-left: -10px;
}
.make .form .children div:last-child p.num{
  height: 100%;
}
.make .form .children div:last-child p.num span{
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.make .form .children div:last-child p.num span:first-child{
  border-right:1px solid #fff;
}
.make .fuzhi{
  background: #fff;
  border-radius: 6px;
  margin:0 10px 5px;
/*  box-shadow: 0 0 6px #ecddc6;  */ 
  padding:20px 20px 30px;
/*box-shadow:0px 1px 12px 0px rgba(92,87,230,0.2) inset;*/
}
.make .myData .neflx{
  display: flex;
  justify-content: space-between;
  align-items: center;

}
.make .myData .neflx .ovaDa{
  background: #f8f8f8;
  border-radius: 4px;
}
.make .myData,.make .map{
  background: #fff;
  border-radius: 6px;
  margin:0 10px 5px;
  padding:20px 20px 30px; 
/*box-shadow:0px 1px 12px 0px rgba(92,87,230,0.4) inset;*/
}
.make .myData{
  margin-top: -40px;
}
.make .map img{
  width: 100%;
  height: 104px;
}
.make .myData p{
  text-align: left;
  line-height: 20px;
}
.ovaDa .foax p span{
 color:#9a9a9a;
 font-size: 14px;
}
.make .myData p.number{
 line-height: 35px;
/* font-size: 14px;*/
}
.make .myData p.moka{
color:#1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
}
.make .myData p.moka span{
  color:#00aaee;
  font-size: 14px;
/*  padding:10px 0;*/
 position: absolute;
 top:50%;
 margin-top: -10px;
 right: 10px;
 border-bottom: 1px solid #00aaee;
 font-size: 12px;
 padding:0 2px;
}
.make .myData .ovaDa .foax{

 display: flex;
 justify-content: space-between;
 align-items: center;
/* border-bottom: 1px solid #e8e8e8;*/
 padding:12px 15px;
 font-size: 12px;
}
.make .myData .ovaDa .foax p{
  display: flex;
  flex-direction: column;
  text-align: center;
}
.make .fuzhi .copy{

}
.make .fuzhi .js{
  margin-top: 15px;
}
.make .fuzhi p{


 /* border-left: 2px solid #6d75ff;*/
  font-size: 16px;
 color: #1f1f1f;

}
.make .fuzhi .copy p span{
  background: #fff;
  width: 25%;
  display: inline-block;

}

.make .fuzhi .copy .login{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 padding:0px 0 10px;
/*  height: 45px;*/
}
.make .fuzhi .js .login{
  padding:0;
}
.make .fuzhi .copy .login input{
  border:1px solid #e8e8e8;
  background: #f5f5f5;
  width: 100%;
  height: 42px;
  padding: 0 10px;
  box-sizing: border-box;
  border-radius: 8px;
  -webkit-appearance:none; 
  color:#9a9a9a;
  font-size: 14px;
}
.make .fuzhi .copy .login button,.myData button{
  width: 74%;
  border:none;
  background: -webkit-linear-gradient(right top, #6d75ff , #2772ff);
  height: 42px;
  color: #fff;
  border-radius: 21px;
  margin-top: 10px;
  box-shadow:0px 5px 10px #8ba6fb;
}
.introduce{
  margin:0 10px 0;
/*  background: #fff;*/
 /* height: 200px;*/
 padding:15px 0 15px;
/* border:1px solid #e8e8e8;*/
 border-radius: 4px;
 position: relative;
}
.introduce img{
  width: 340px;

}
.introduce .imgs{
    background: url('/static/img/qianbao.png') no-repeat top;
  background-size: 100%;
    /*width: 340px;*/
    height: 304px;
}
.introduce .connt{
width: 100%;
height: 100%;
position: absolute;
top:0;
left: 0;
box-sizing: border-box;
padding:30px 50px 20px;
}
.introduce .connt div p{
  color:#666;
  height: 42px;
  line-height: 42px;
  border-bottom: 1px solid #e8e8e8;
  text-align: left;
  color:#9a9a9a;
  background: #fff;
  font-size: 14px;
}
.introduce .connt div p:last-child{
  border:none;
}
.introduce .connt button{
    width: 90%;
  height: 42px;
  line-height: 42px;
  border-radius: 21px;
 background: -webkit-linear-gradient(right top, #6d75ff , #2772ff);
  margin-top: 40px;
  color: #fff;
  box-shadow:0px 5px 10px #8ba6fb;
   border:none;
}
input:disabled {
    color: red;
    opacity: 1;
    -webkit-opacity: 1;
    -webkit-text-fill-color: #9a9a9a;
}
</style>