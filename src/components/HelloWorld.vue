<template>
  <div class="hello">
<!--    <div class="top">
   </div> -->
   <div class="banner">
             <swiper :options="swiperOption" ref="mySwiper" >  
               <swiper-slide>
                 
                   <img :src="imgsrcA">
                 
                   

               </swiper-slide>

               <swiper-slide>
                     <img :src="imgsrcB" alt="">

               </swiper-slide>

                      
          </swiper>
          <div class="swiper-pagination"></div>      
       
   </div>
<!--    分类导航  -->
   <div class="navaclass">
          <ul>
            <li>
            <router-link to="/goodsList" class='tab_a'>
              <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-drink"></use>
              </svg>
              饮料
              </router-link>
            </li>
            <li>
              <a href="cell.html" target='_blank' class='tab_a'>
                <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-kuangquanshui2"></use>
                </svg>
                矿泉水
              </a>
            </li>
            <li>
              <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jiushui2"></use>
              </svg>
              酒水
            </li>
            <li>
              <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liangyoufushi3"></use>
              </svg>
              副食
            </li>
            <li>
              <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-rihuayongpin"></use>
              </svg>
              日化
            </li>
          </ul>
   </div>

   <!--    商品列表  -->
     <div class='goodsList'>

          <ul>
            <li>
            <router-link to="/details">
               <div>
                      <img src="http://m.360buyimg.com/mobilecms/s276x276_jfs/t19081/281/2201765030/347037/431510d3/5aead14cNbe1f9dc0.jpg!q70.jpg" alt="">
               </div>
               <div class="describe">
          <p class="name"> 佐登驰防晒衣女中长款宽松轻薄带帽学生外套2018夏季新品韩版宽松大码沙滩服长袖户外休闲运动服风衣 灰蓝色 M适合85-100斤</p>
          <p class="money">
                 ￥20.00
          </p>

                  <div class="orderBtn">
                       <span>40积分</span>  
                       <button>订购</button>         
                 </div>

               </div>

               </router-link>
            </li>
            <li @click='toRouter("1102")'>

               <div>
                      <img src="http://m.360buyimg.com/mobilecms/s276x276_jfs/t19081/281/2201765030/347037/431510d3/5aead14cNbe1f9dc0.jpg!q70.jpg" alt="">
               </div>
                <div class="describe">
          <p class="name"> 佐登驰防晒衣女中长款宽松轻薄带帽学生外套2018夏季新品韩版宽松大码沙滩服长袖户外休闲运动服风衣 灰蓝色 M适合85-100斤</p>
          <p class="money">
                 ￥20.00
          </p>
                <div class="orderBtn">
                       <span>40积分</span>  
                       <button>订购</button>         
                 </div>

               </div>
            </li>
            <li>
               <div>
                      <img src="http://m.360buyimg.com/mobilecms/s276x276_jfs/t19081/281/2201765030/347037/431510d3/5aead14cNbe1f9dc0.jpg!q70.jpg" alt="">
               </div>
               <div class="describe">
          <p class="name"> 佐登驰防晒衣女中长款宽松轻薄带帽学生外套2018夏季新品韩版宽松大码沙滩服长袖户外休闲运动服风衣 灰蓝色 M适合85-100斤</p>
          <p class="money">
                 ￥20.00
          </p>
                 <div class="orderBtn">
                       <span>40积分</span>  
                       <button>订购</button>         
                 </div>

               </div>
            </li>
            <li>
               <div>
                      <img src="http://m.360buyimg.com/mobilecms/s276x276_jfs/t19081/281/2201765030/347037/431510d3/5aead14cNbe1f9dc0.jpg!q70.jpg" alt="">
               </div>
                <div class="describe">
          <p class="name"> 佐登驰防晒衣女中长款宽松轻薄带帽学生外套2018夏季新品韩版宽松大码沙滩服长袖户外休闲运动服风衣 灰蓝色 M适合85-100斤</p>
           <p class="money">
                 ￥20.00
          </p>

                  <div class="orderBtn">
                       <span>40积分</span>  
                       <button>订购</button>         
                 </div>

               </div>
            </li>
            <li>
               <div>
                      <img src="http://m.360buyimg.com/mobilecms/s276x276_jfs/t19081/281/2201765030/347037/431510d3/5aead14cNbe1f9dc0.jpg!q70.jpg" alt="">
               </div>
                <div class="describe">
          <p class="name"> 佐登驰防晒衣女中长款宽松轻薄带帽学生外套2018夏季新品韩版宽松大码沙滩服长袖户外休闲运动服风衣 灰蓝色 M适合85-100斤</p>
         <p class="money">
                 ￥20.00
          </p>
                 <div class="orderBtn">
                       <span>40积分</span>  
                       <button>订购</button>         
                 </div>

               </div>
            </li>
            <li>
               <div>
                      <img src="http://m.360buyimg.com/mobilecms/s276x276_jfs/t19081/281/2201765030/347037/431510d3/5aead14cNbe1f9dc0.jpg!q70.jpg" alt="">
               </div>
                <div class="describe">
          <p class="name"> 佐登驰防晒衣女中长款宽松轻薄带帽学生外套2018夏季新品韩版宽松大码沙滩服长袖户外休闲运动服风衣 灰蓝色 M适合85-100斤</p>
          <p class="money">
                 ￥20.00
          </p>

                   <div class="orderBtn">
                       <span>40积分</span>  
                       <button>订购</button>         
                  </div>

               </div>
            </li>                        
          </ul>
     </div>
     <!-- 通过message实现子父组件通信 to="/hashGame" -->
     <foot :message='msg'></foot>

      <!--    小提示框      -->
<!--     <com-tip v-if='istip' :tip = 'tip'></com-tip>
         <load v-if='isload' :loa ='loadTxt'></load> -->
  </div>
</template>
<script>
import foot from './foot'

import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
import {setCookie,getCookie} from '../assets/js/cookes.js' 
import { serveip,interfaceUrl,interfaceUrl_a } from '../assets/js/config.js'
export default {
  name: 'home',
  data () {
    return {

      msg: '0' ,                  //页面id  用来通信  
      swiperOption: {
       autoplay:{
                  delay: 3000,
                  stopOnLastSlide: false,
                  disableOnInteraction: false,
                },
       loop:true,
       setWrapperSize :true,
       pagination : {
                    el:'.swiper-pagination',
                    // bulletElement : 'li',
                    },
       paginationClickable :true,
       // scrollbar:'.swiper-scrollbar',
       mousewheelControl : true,
       observeParents:true,
       debugger: true,

     },
     imgsrcA:'/static/img/banner_a.jpg',
     imgsrcB:'/static/img/banner_b.jpg'
    }
  },
  components:{
     'swiper':swiper,
    'swiperSlide':swiperSlide,
    'foot': foot,
    
  },
  computed:{
  swiper() {
     return this.$refs.mySwiper.swiper
   }
  },
  mounted: function () {   //生命周期 钩子函数
    this.isShowTc();
    this.$tip("弹窗插件");


  },
   methods:{
      toRouter(ev){
       // this.$router.push({name:'hashGame',params:{id:ev}});        //post方式传参 
        this.$router.push({path:'/details',query:{id:ev}}); 

      },
     closeTc(){
      this.isTc = false;
     },
     openOtc(){
      this.isOtc = true;      
     },
     closOtc(){
      this.isOtc = false;
     },
     bubb(event){       
              event.cancelBubble = true;   //阻止事件冒泡
     },
     setTnt(){

      let that = this;
      let setVar =  setInterval(function () {
                
          that.getNum();

        },30000);
          that.$router.afterEach(function () {  //监听路由切换 

              clearInterval(setVar)

          })
     },
    getNum (){

    },
    getCode(){

    },

    ethRess(){






    },
    isShowTc(){
        if(getCookie('isemail')){
            let cookEm = getCookie('isemail') || [];
            if( cookEm == 0){

              this.isTc = true;
              setCookie('isemail',1,1000*60)
            }         
        }

    },
      showAddHsl(){
        
            if(getCookie('isTutor')){

              let isTutor = getCookie('isTutor') || [];
              if ( isTutor == 0){

                  this.isAddHsl = true;

              }
            }


      }


   }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon {
   width: 2em;
    height: 2em;
    padding:8px;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
  background: #f5f5f5;
  border-radius: 36%;
  font-size: 12px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

.banner{
  position: relative;
}
.banner img{
  width: 100%;
  vertical-align: middle;
}
.banner .swiper-pagination{ 
/*  分页器小点*/
bottom:10px;
width: 100%;

}
.navaclass{
  padding:10px 0;
  background: #fff;
}
.navaclass ul{
  display: flex;
  justify-content: space-around;
  align-items: center;

}
.navaclass ul li{
  display: flex;
  align-items: center;
  flex-direction:column;
  flex: 1;
  font-size: 14px;
}
.navaclass ul li i{
  font-size: 26px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: #f5f5f5;
  border-radius: 40%;
}
.goodsList{
margin-top:10px;
}
.goodsList ul{
 overflow: hidden;
}
.goodsList li{
  width: 50%;

box-sizing: border-box;
 float: left;
padding-bottom: 4px;
}
.goodsList li:nth-child(2n+1) {
    padding-right: 2px
}
.goodsList li:nth-child(2n) {
    padding-left: 2px
}
.goodsList li img{
  width: 100%;
  vertical-align: middle;
}
.goodsList li .describe{
  background: #fff;
  font-size: 14px;
  overflow: hidden;
}
.goodsList li .describe p.name{
  overflow: hidden;
  text-overflow: ellipsis;
  height: 31px;
  word-break: break-word;
  font-size: 14px;
  line-height: 16px;
  margin-top: 5px;
  margin-bottom: 3px;
  padding:0 4px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  text-align: left;
}
.goodsList li .describe p.money{
    color: #f23030;
    padding:0 5px;
    font-size: 16px;
    height: 22px;
    text-align: left;
}
.goodsList li .describe .orderBtn{
 display: flex;
 justify-content:space-between;
 align-items: center;
 padding:0 4px;
 margin-bottom: 5px;
}
.goodsList li .describe .orderBtn button{
   background: #f5f5f5;
  border:1px solid #e8e8e8;
  padding:4px 15px; 
}







.top{
/*  background: #1b82d2;*/
background: -webkit-linear-gradient(right top, #4a4fe4 , #4a93f9);
background-image: url(/static/img/ddg.jpg);
background-size:100%;
  padding:15px 0;
/*  height: 50px;*/
/*  width: 100%;*/
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;

}
.top a{
  display: flex;
  flex-direction:column;
   justify-content: center;
  color: #fff;
  line-height: 20px;
  font-size: 14px;
}
.top a i{
  width: 40px;
 /* height: 40px;*/
 line-height: 35px;
  color:#fff;
  font-size: 38px;
}
.banck{
height: 100%;
width: 100%;
background: url(/static/img/top.png) bottom no-repeat;
background-size:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position:relative;
}
.banck .positon{
  position: absolute;
  top: 20px;
  right: 20px;
  height: 40px;
/*  width: 40px;*/
  line-height: 40px;
  color:#fff;
}
.banck .positon i{
  font-size: 20px;
}
.newtop{

background: -webkit-linear-gradient(right top, #4a4fe4 , #4a93f9);


/*  padding:15px 0;*/
/*  height: 50px;*/
/*  width: 100%;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 160px;
}
.newtop .daol{
  font-size: 35px;
  margin-top: 8px;
  color:#fff;
}
.newtop .daol span{
  font-size: 16px;
}
.newtop .onmony{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  color:#fff;
  position: relative;
}
.newtop .onmony::before{
  content: '';
  position: absolute;
  top:6px;
  bottom: 6px;
  width: 1px;
  background:#72befe;
  left: 50%;
}
.newtop .onmony a{
  color:#fff; 
  position: relative;
 display: block;
 padding-top: 5px;
 /*width: 57px;*/
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: 30px;
  line-height: 30px
}
.newtop .onmony a i{
  font-size: 22px;
  vertical-align: top;
  width: 22px;
  height: 22px;
  line-height: 22px;
}
.newtop .onmony a span{
/* display: block;*/
/* height: 30px;
 line-height: 30px*/
}
.usdt,.firm{
  display: flex;
  background: #fff;
  height: 60px;
/*  margin-top: 5px;*/
   justify-content: space-between;
   align-items: center;
   padding: 10px;
   margin-top:5px;
}
.usdt{
 margin-top:0; 
}
.firm div:first-child{
 width:45%;
 text-align: left;
 padding-left: 20px;
 display: flex;
 justify-content: space-between;
 align-items: center;
}
.firm div:first-child p{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.firm div:first-child p span{
  display: block;
  width: 100%;
  text-align: left;
}
.firm div:first-child p span:first-child{
  font-weight:800;
  color: #2e2e2e;
}
.firm div:first-child p span:last-child{
  color:#808080;
  font-size: 14px;
  margin-top: 2px;
}
.firm div:first-child img{
 width: 50px;
 height: 50px;
 vertical-align: middle;
 margin: 0;
}
.usdt div:first-child{
 width: 70%;

}
.usdt div:first-child p{
  text-align: left;
  padding-left: 20px;

}
.usdt div:first-child p:last-child{
  color:#808080;
  margin-top: 2px;
  font-size: 14px;
}
.usdt div:first-child p:first-child{
  font-weight: 800;
  color:#2e2e2e;
}
.usdt div:last-child,.firm div:last-child{
  display: flex;
 /* flex-direction:row-reverse;*/
 justify-content: space-between;
 align-items: center;
 font-size: 14px;
 color: #999;
}
.firm div:last-child span{
  width: 14px;
  height: 14px;
  background: #fe4800;
  display: block;
  border-radius: 50%;
}
.usdt i,.firm i{

 /* line-height: 25px;*/
  vertical-align: middle;
  color:#d4d4d4;
  font-size: 22px;
padding-right: 8px;
}
.connt{
  display: flex;
  justify-content: space-between;
/*  height: 60px;*/ 
  align-items: center;
 /* padding:0 5px;*/
 /* margin-top: 5px;*/
  background: #fff;
  padding: 15px 10px;
  color:#2e2e2e;
/*  border-bottom: 1px solid #f8f8f8;*/
/*margin-bottom: 6px;*/
}
.connt .hongbao,.connt .tutorial{
  background: #fff;
 width: 50%;
 height: 100%; 
/* display: flex;
 align-items:center;
 justify-content:space-around;*/
color: #2e2e2e;
}
.connt .tutorial{
  position: relative;
}
.connt .tutorial span{
  position: absolute;
  top: -21px;
  right: 10px;
  color:#fff;
  font-size:12px;
  /*font-weight: 800;*/
  background: #fc3a42;
  border-radius: 10px;
  padding:1px 6px;
   z-index: 2;
}
.connt .hongbao span{
  position: absolute;
  top: -21px;
  right: 20px;
  color:#fff;
  font-size:12px;
  /*font-weight: 800;*/
  background: #fc3a42;
  border-radius: 10px;
  padding:1px 6px;
   z-index: 2;  
}
.connt .tutorial span::after,.connt .hongbao span::after{
    content: '';
  position:absolute;
  bottom:-4px;
  left: 0px;
  border-left: 0px solid #fc3a42;
  border-top:12px solid #fc3a42;
  border-right:18px solid transparent;
  z-index: -1;
}
.connt .hongbao{
  position: relative;  
/*  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;*/
/*  color:#2e2e2e;*/
}
.connt .hongbao::after{
  content: "";
  position: absolute;
  top: 5px;
  bottom: 5px;
  width: 1px;
  background: #e8e8e8;
  right: 0;
  margin-right:-1px;
      z-index: 111;
}
/*.connt div:last-child{
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  color:#2e2e2e;
}*/
.connt div i{
/*  font-size: 24px;
  font-weight: 500;
  color:#b4d4fa;
  vertical-align: middle;
  height: 28px;*/


    font-size: 18px;
  color:#2e2e2e;
 /* font-weight: 500;*/
  vertical-align: middle;
  /*height: 38px;*/
/*  background: #f0f4ff;*/
/*  border-radius: 8px;*/
  /*width: 38px;*/
  /*line-height: 36px;*/
}
.hash{
  background: #fff;
/*  padding:10px 0 0;*/
  margin-bottom:6px;
}
.hash .title{
  padding-left:30px;
  text-align: left;
  font-weight: 800;
  color: #2e2e2e;
}
.hash .title span{
  color:#9a9a9a;
  font-size: 14px;
  font-weight: 100;
  margin-left: 20px;
}
.btc,.eth{
  background: #fff;
  padding:15px 10px;
/*  height: 40px;*/
/*  margin-top:-1px;*/
border-bottom: 1px solid #f8f8f8;
display: flex;
justify-content: space-between;
align-items: center;

}
.hsl{
  background: #fff;
  padding:15px 10px;
/*  height: 40px;*/
/*  margin-top:-1px;*/
 display: flex;
 justify-content: space-between;
 align-items: center;
}
.btc .icon,.eth .icon,.hsl .icon{
 display: flex;
 /* flex-direction:row-reverse;*/
 justify-content: space-between;
 align-items: center;
 font-size: 14px;
 color: #9a9a9a;
}
.btc .icon span,.eth .icon span,.hsl .icon span{
/*  margin-right: 5px;*/

}
.btc .icon i,.eth .icon i,.hsl .icon i{
  vertical-align: middle;
  color:#d4d4d4;
  font-size: 22px;
  padding-right: 8px;
  padding-top: 1px;  
}

.btc .name,.eth .name,.hsl .name{
 padding-left: 20px;
 color:#2e2e2e;
}
.btc .name span,.eth .name span,.hsl .name span{
  font-size: 14px;
  color:#9a9a9a;
  margin-left:6px;
}
.btc .name i,.eth .name i,.hsl .name i{
  font-size: 20px;
  color:#fe4800;
}
.tcop,.oTc{
    position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.4);
  z-index: 111111;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.tcop .top{
 width: 85%;
 min-height: 50%;
 border-radius: 8px;
 background: #fff;
 box-shadow:0px 2px 10px rgba(107,132,243,.2);
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin:0 auto;
  padding:20px 0;
  box-sizing: border-box;
  position: relative;
}
.tcop .top span.close{
   position: absolute;
  top:10px;
  right: 10px;
/*  background: rgba(0,0,0,.5);*/
  color:#9a9a9a;
  display: block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  font-size: 30px; 
}
.tcop .top h5{
  margin-bottom:20px;
  font-size: 16px;
  color:#2c3e50;
}
.tcop .top p{
  font-size:14px;
  width: 100%;
  text-align: center;
  color:#9a9a9a;
}
.tcop .top p span{
  color: #fe4800;
/*  font-weight: 800;*/
  padding:4px;
  background: #fff;
  border:1px solid #fe4800;
  margin-left: 6px;
  border-radius: 4px;
  font-size: 12px;
}
.tcop .top input{
   outline:none;
  -webkit-appearance:none; 
  border-radius: 8px;
  width: 80%;
  border:1px solid #e8e8e8;
  background: #f5f5f5;
  padding: 0 10px;
  height: 50px;
  margin:20px auto;
  font-size: 12px;
  box-sizing: border-box;
}
.tcop .top button{
  width: 80%;
  height:50px;
  border:none;
  background: -webkit-linear-gradient(right top, #4a4fe4 , #4a93f9);
   border-radius: 8px;
   color:#fff;
   font-size: 18px;
   margin-bottom: 20px;
}
.tcop .top p.tipp{
  width: 80%;
  text-align: left;
  font-size: 14px;
  color:#9a9a9a;
  line-height: 22px;
}
.tcop .top p.tipp span{
  color:#fe4800;
  border:none;
  font-size: 14px;
  padding:0;
  margin-left: 2px;
  display: inline-block;
}
.oTc div{
  width: 70%;
  position: relative;
}
.oTc div img{
  width: 100%;
}
.oTc div span{
  position: absolute;
  top:-20px;
  right: -20px;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color:#fff;
  font-size: 30px;
  border-radius: 50%;
  background: rgba(0,0,0,.4);
}
.obtn{
  position: fixed;
  bottom:70px;
  right: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
/*  background: #fff;
  text-align: center;
 border:8px solid rgba(139,166,251,.4);*/
/*  box-shadow:0px 0px 10px #8ba6fb;*/

}
@keyframes warn {
    0% {
        transform: scale(0.5);
        opacity: 0.5;
    }

    100% {
        transform: scale(1);
        opacity: 0.0;
    }
}
@-webkit-keyframes "warn" {
    0% {
        -webkit-transform: scale(0.5);
        opacity: 0.5;
    }

    100% {
        -webkit-transform: scale(1);
        opacity: 0.0;
    }
}

.dot {
    position: absolute;
    width: 68%;
    height: 68%;

    left: 50%;
    top: 50%;
    margin-top: -34%;
    margin-left: -34%;
    -webkit-border-radius: 50%;
    background: #ff703f;
    border-radius: 50%;
    z-index: 2;
    box-sizing: border-box;
    color:#fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;  
    border:1px solid rgba(254, 72, 0,.2);  
    line-height: 14px;
   /* border:10px solid rgba(255, 87, 70,.8);*/

/*   padding:10px 0;*/
}
.dot span{
  font-size: 14px;
}
.dot i{
    font-size: 26px;  
}
.pulse {
    position: absolute;
    width: 100%; 
    height: 100%;
    left: 0;
    top: 0;
        box-sizing: border-box;
    border: 8px solid red;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    z-index: 1;
    opacity: 0;
    -webkit-animation: warn 2s ease-out;
    -moz-animation: warn 2s ease-out;
    animation: warn 2s ease-out;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;

}
input::-webkit-input-placeholder{
  color:#afafaf;
  font-size:14px;
}
</style>
