<!-- 模板 -->
<template>


<div style='height: 100%;'>

   <div class="wallte">
           <div class="top_tab">
             <div  @click='ctock(0)' :class="{ 'on': currentTab === 0 }">ETH</div> 
             <div  @click='ctock(1)' :class="{ 'on': currentTab === 1}">BTC</div> 
<!--              <div  @click='ctock(2)' :class="{ 'on': currentTab === 2}">HSL</div>  -->
           </div>
          <!--  <router-view v-on:listenTochad="listenTochad"></router-view> -->
   </div>

   <swiper :options="swiperOption" ref="mySwiper" @transitionStart = 'onTransitionStart'>



  <!-- ETH -->    
     <swiper-slide>
          <div class="slod">

             <div class="withdra">
                    <span @click="txList('ETH')"><i  class="iconfont icon-jiaoyijilu3"></i></span>
                    <p class="titl">{{ parseFloat(ystList.eth).toFixed(4) }}</p>
                    <p>ETH {{ $t('message.wthdr.surp') }}</p>
             </div>

             <div class="inpt">
                  <p class="tipp">{{ $t('message.wthdr.tinum') }}</p>
                  <div class="inopo"><i class="iconfont icon-yitaifang"></i>:<input type="number" v-model='ethNum'></div>
                  <div class="tpp">
                        <p>{{ $t('message.wthdr.titxt') }}<span  @click="allTopup('ETH')"> {{ $t('message.wthdr.tiall') }}</span></p>
                        <router-link to="/My/myWallet/posts">{{ xgEthRess }} {{ $t('message.wthdr.address') }}</router-link>
                  </div>
                  <p class="qbress"><input type="text" v-model='ethRess' disabled></p>
                  <button class="okbtn" @click="okSub('ETH')">{{ $t('message.wthdr.con') }}</button>
             </div>
<!--              <div class="record">
                    暂无提现记录
             </div> -->
        </div>
     </swiper-slide>
       
 <!-- BTC -->
     <swiper-slide>
          <div class="slod">

             <div class="withdra">
                    <span @click="txList('BTC')"><i  class="iconfont icon-jiaoyijilu3"></i></span>
                    <p class="titl">{{ parseFloat(ystList.btc).toFixed(4) }}</p>
                    <p>BTC {{ $t('message.wthdr.surp') }}</p>
             </div>

             <div class="inpt">
                  <p class="tipp">{{ $t('message.wthdr.tinum') }}</p>
                  <div class="inopo"><i class="iconfont icon-bitebi"></i>:<input type="number" v-model='btcNum'></div>
                  <div class="tpp">
                       <p>{{ $t('message.wthdr.titxt') }}<span @click="allTopup('BTC')"> {{ $t('message.wthdr.tiall') }}</span></p>
                       <router-link to="/My/myWallet/profile">{{ xgRess }} {{ $t('message.wthdr.address') }}</router-link>
                  </div>
                  <p class="qbress"><input type="text" v-model='btcRess' disabled></p>
                  <button class="okbtn" @click="okSub('BTC')">{{ $t('message.wthdr.con') }}</button>
             </div>
<!--              <div class="record">
                    暂无提现记录
             </div> -->
        </div>
     </swiper-slide>

     <!-- HSL -->     
<!--     <swiper-slide>
          <div class="slod">

             <div class="withdra">
                    <span @click="txList('HSL')"><i  class="iconfont icon-jiaoyijilu3"></i></span>
                    <p class="titl">{{ parseFloat(ystList.hsl).toFixed(4) }}</p>
                    <p>HSL {{ $t('message.wthdr.surp') }}</p>
             </div>

             <div class="inpt">
                  <p class="tipp">{{ $t('message.wthdr.tinum') }}</p>
                  <div class="inopo"><i class="iconfont icon-font_ZHYQ"></i>:<input type="number" v-model='hslNum'></div>
                  <div class="tpp">
                       <p>{{ $t('message.wthdr.titxt') }}<span @click="allTopup('HSL')"> {{ $t('message.wthdr.tiall') }}</span></p>
            <router-link to="/My/myWallet/profile">{{ xgEthRess }} {{ $t('message.wthdr.address') }}</router-link>
                  </div>
                  <p class="qbress"><input type="text" v-model='ethRess' disabled></p>
                  <p class='restip'>HSL为以太坊代币，所以提现地址是所填写的ETH地址</p>
                  <button class="okbtn" @click="okSub('HSL')">{{ $t('message.wthdr.con') }}</button>
             </div>

        </div>
    </swiper-slide> -->


     <!-- Optional controls -->
    <!--  <div class="swiper-pagination"  slot="pagination"></div> -->
    <!--  <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->


</swiper>
  
<!--   <div class="bottom_flex">
       <div class="balance">
              <p>FBS余额<span>{{ parseFloat(ystList.fbs).toFixed(2) }}</span></p>
               <p>USDT余额<span>{{  parseFloat(ystList.usdt).toFixed(2) }}</span></p>
       </div>
       <router-link to='/exchang' class="btn">
          <button>去兑换USDT</button>
       </router-link>
  </div> -->


</div>
</template>

<script>
import { serveip,interfaceUrl,interfaceUrl_a  } from '../assets/js/config.js' 
import {setCookie,getCookie} from '../assets/js/cookes.js' 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')

export default {

  data () {         //关联dom上的数据
    return {
      currentTab:0,
      btcRess:'',
      ethRess:'',
      ystList:{
        btc:0,
        eth:0,
        hsl:0
      },         //余额列表
      isload:false,
      loadTxt:'',
      istip:false,
      tip:'',
      ethNum:'',   //ETH提现数量
      btcNum:'',        //BTC提现数量
      hslNum:'',            //HSL提现数量
      swiperOption: {

       setWrapperSize :true,
       // autoHeight: true,
       // paginationType:"bullets",
       pagination : '.swiper-pagination',
       paginationClickable :true,
       // scrollbar:'.swiper-scrollbar',
       mousewheelControl : true,
       observeParents:true,
       debugger: true,       
     },
     xgRess:'Change',
     xgEthRess:'Change'

    }
  },
  components: {
   'swiper':swiper,
   'swiperSlide':swiperSlide,

  },

  computed: {
   swiper() {
     return this.$refs.mySwiper.swiper
   }
  },
  mounted: function () {  //钩子函数 加载完后执行
     //console.log('ceshi')
    // console.log(this.swiper)
    // this.swiper.slideTo(0, 1000, false)
     this.balance();   
     this.getEthRess();
     if(this.$i18n.locale === 'cn'){
          this.xgRess = this.xgEthRess = '修改'
     }
  },
  methods:{  //计算属性  用来绑定事件
          balance (ev){     //获取余额
                  this.isload=true;
                  this.loadTxt = this.$t('message.index.lod'); 
   
                  let url = interfaceUrl();
                  let token1 = getCookie('token1');
                  let token2 = getCookie('token2');
                  let data = { 
                                 'token1':token1,
                                 'token2':token2
                  };
                  //    console.log(data)
                  this.$http.post(url + '/v1/user/getuserbalance.ashx',data,{emulateJSON: true}).then((res)=>{
                         // console.log(res)
                          this.isload=false;
                          if( res.body.code === 200){

                                for( var i = 0; i < res.body.list.length; i ++){

                                       if( res.body.list[i].currencytype === 'BTC'){

                                          // this.balceName.name = this.ystList[i].currencytype;
                                           this.ystList.btc = res.body.list[i].balance;

                                           //break
                                        }else if( res.body.list[i].currencytype === 'ETH' ){

                                           this.ystList.eth = res.body.list[i].balance;

                                        }else if( res.body.list[i].currencytype === 'HSL' ){
                                      
                                           this.ystList.hsl = res.body.list[i].balance;

                                        }

                                 }
                             
                             
                          }else{

                              this.istip = true;  //提示弹窗
                              this.tip  = (this.$i18n.locale === 'cn'?res.body.message :res.body.message_en);
                               setTimeout(function(){
                                    this.istip = false;  //提示弹窗
                              }.bind(this),1500)

                         }
                  
                  })

        },
                                  
        getBtcRess (ev){                                 //获取比特币提币地址
                  let url = interfaceUrl_a();
                  let token1 = getCookie('token1');
                  let token2 = getCookie('token2');
                  let data = { 
                                 'token1':token1,
                                 'token2':token2

                  };
                  this.isload=true;
                  this.loadTxt = this.$t('message.index.lod');
                  this.$http.post(url + '/v2/withdraw/btctibiaddressadd.ashx',data,{emulateJSON: true}).then((res)=>{         //获取地址
                        // console.log(res)
                          this.isload=false;
                          if( res.body.code === 200){

                             this.btcRess = res.body.address; 

                          }else{
                            this.xgRess = this.$t('message.wthdr.add');
                            this.btcRess = (this.$i18n.locale == 'cn'? res.body.message : res.body.message_en);
                            this.istip = true;  //提示弹窗
                            this.tip  = (this.$i18n.locale == 'cn'? res.body.message : res.body.message_en);    //弹窗提示语
                               setTimeout(function(){
                                    this.istip = false;  //提示弹窗
                              }.bind(this),1500) 
                          }


                  })


        },
        getEthRess (){                                //获取ETH提币地址
                  let url = interfaceUrl_a();
                  let token1 = getCookie('token1');
                  let token2 = getCookie('token2');
                  let data = { 
                                 'token1':token1,
                                 'token2':token2

                  };
               //    console.log(data)
               //   this.isload=true;
               //  this.loadTxt = this.$t('message.index.lod');
                  this.$http.post(url + '/v2/withdraw/ethtibiaddressadd.ashx',data,{emulateJSON: true}).then((res)=>{         //获取地址
                // console.log(res)
                // this.isload=false;
                          if( res.body.code === 200){

                             this.ethRess = res.body.address;

                          }else{
                            this.xgEthRess = this.$t('message.wthdr.add');
                            this.ethRess = (this.$i18n.locale == 'cn'? res.body.message : res.body.message_en);
                            this.istip = true;  //提示弹窗
                            this.tip  = (this.$i18n.locale == 'cn'? res.body.message : res.body.message_en);    //弹窗提示语
                               setTimeout(function(){
                                    this.istip = false;  //提示弹窗
                              }.bind(this),1500)                           
                          }


                  })

        },
     
      onTransitionStart(e){        //页面切换时触发 的事件
        // console.log(this.swiper.activeIndex)
         let currentTab = this.swiper.activeIndex;
         this.currentTab = currentTab;

         if( currentTab === 0 ){          //ETH



         }else if( currentTab === 1 ){           //BTC
  

              if( this.btcRess === ''){              

                     this.getBtcRess()

             };   



         }


      },
      ctock(ev){                                //点击tab事件触发
        this.swiper.slideTo(ev, 400, false)
      }, 
      allTopup(ev){                                       //点击全部提现

                 if( ev === 'BTC' ){
               
                   this.btcNum = this.ystList.btc

                 }else if( ev === 'ETH' ){

                   this.ethNum = this.ystList.eth

                 }else if( ev === 'HSL' ){

                  this.hslNum = this.ystList.hsl

                 }


      },                                                
      okSub(ev){                             //点击提现
                  let url = interfaceUrl_a();
                  let token1 = getCookie('token1');
                  let token2 = getCookie('token2');

                  let btcsl = this.btcNum;
                  let btcaddress = this.btcRess;

                  let ethsl = this.ethNum;
                  let ethaddress = this.ethRess;

                  let hslsl = this.hslNum;
                  let hsladdress = this.ethRess;
                  if(ev === 'BTC'){          //BTC提现
                          let data = { 
                                 'token1':token1,
                                 'token2':token2,
                                 'sxf':'0.001',          //手续费
                                 'amount':btcsl,
                                 'address':btcaddress

                           };

                          if( btcsl <= 0 ){

                                            this.istip = true;  //提示弹窗
                                            this.tip  = this.$t('message.wthdr.tipa');    //弹窗提示语
                                             setTimeout(function(){
                                                  this.istip = false;  //提示弹窗
                                            }.bind(this),1500) 

                          }else if( btcsl > this.ystList.btc ){

                                            this.istip = true;  //提示弹窗
                                            this.tip  = this.$t('message.wthdr.tipb');    //弹窗提示语
                                             setTimeout(function(){
                                                  this.istip = false;  //提示弹窗
                                            }.bind(this),1500) 

                          }else{
                                this.isload=true;
                                this.loadTxt = this.$t('message.index.lod');
                                this.$http.post(url + '/v2/withdraw/btcwithdrawbyname.ashx',data,{emulateJSON: true}).then((res)=>{        
                                         //console.log(res)

                                         this.isload=false;
                                        if( res.body.code === 200){

                                             this.balance()             //刷新余额

                                        }else{

                                        this.istip = true;  
                                this.tip  = (this.$i18n.locale === 'cn'?res.body.message :res.body.message_en);   
                                             setTimeout(function(){
                                                  this.istip = false;  //提示弹窗
                                            }.bind(this),1500)                           
                                        }


                                })

                        }
                  }else if( ev === 'ETH' ){　　　　　　　//ETH提现
                          let data = { 
                                 'token1':token1,
                                 'token2':token2,
                                 'sxf':'0.001',          //手续费
                                 'amount':ethsl,
                                 'address':ethaddress

                           };
                          console.log(data)
                          if( ethsl <= 0 ){

                                            this.istip = true;  //提示弹窗
                                            this.tip  = this.$t('message.wthdr.tipa');    //弹窗提示语
                                             setTimeout(function(){
                                                  this.istip = false;  //提示弹窗
                                            }.bind(this),1500) 

                          }else if( ethsl > this.ystList.eth ){

                                            this.istip = true;  //提示弹窗
                                            this.tip  = this.$t('message.wthdr.tipb');    //弹窗提示语
                                             setTimeout(function(){
                                                  this.istip = false;  //提示弹窗
                                            }.bind(this),1500) 

                          }else{
                                          this.isload=true;
                                          this.loadTxt = this.$t('message.index.lod');
                                          this.$http.post(url + '/v2/withdraw/ethwithdrawbyname.ashx',data,{emulateJSON: true}).then((res)=>{         
                                                  console.log(res)
                                                   this.isload=false;
                                                  if( res.body.code === 200){


                                                      this.balance()             //刷新余额

                                                      this.istip = true;  
                                                      this.tip  = (this.$i18n.locale === 'cn'?res.body.message :res.body.message_en);    
                                                       setTimeout(function(){
                                                            this.istip = false;  //提示弹窗
                                                      }.bind(this),1500) 


                                                  }else{

                                                      this.istip = true;  //提示弹窗
                              this.tip  = (this.$i18n.locale === 'cn'?res.body.message :res.body.message_en);  
                                                      setTimeout(function(){
                                                            this.istip = false;  //提示弹窗
                                                      }.bind(this),1500)                           
                                                  }


                                          })

                        }




                  }else if( ev === 'HSL' ){
                          let data = { 
                                 'token1':token1,
                                 'token2':token2,
                                 'sxf':'0.001',          //手续费
                                 'amount':hslsl,
                                 'address':hsladdress

                           };
   
                          if( hslsl <= 0 ){

                                            this.istip = true;  //提示弹窗
                                            this.tip  = this.$t('message.wthdr.tipa');    //弹窗提示语
                                             setTimeout(function(){
                                                  this.istip = false;  //提示弹窗
                                            }.bind(this),1500) 

                          }else if( hslsl > this.ystList.hsl ){

                                            this.istip = true;  //提示弹窗
                                            this.tip  = this.$t('message.wthdr.tipb');    //弹窗提示语
                                             setTimeout(function(){
                                                  this.istip = false;  //提示弹窗
                                            }.bind(this),1500) 

                          }else{
                                this.isload=true;
                                this.loadTxt = this.$t('message.index.lod');
                                this.$http.post(url + '/v2/withdraw/hsltibiaddressadd.ashx',data,{emulateJSON: true}).then((res)=>{

                                                   console.log(res)
                                                   this.isload=false;
                                                  if( res.body.code === 200){

                                                      
                                                      this.balance() ;            //刷新余额
                                                      this.hslNum = '';


                                                      this.istip = true;  //提示弹窗
                                                      this.tip  = (this.$i18n.locale === 'cn'?res.body.message :res.body.message_en);    
                                                       setTimeout(function(){
                                                            this.istip = false;  //提示弹窗
                                                      }.bind(this),1500) 


                                                  }else{

                                                      this.istip = true;  //提示弹窗
                              this.tip  = (this.$i18n.locale === 'cn'?res.body.message :res.body.message_en);  
                                                      setTimeout(function(){
                                                            this.istip = false;  //提示弹窗
                                                      }.bind(this),1500)                           
                                                  }





                                })

                         }




                  }

      },
      txList(ev){

         // console.log(ev)
         this.$router.push({path:'/My/tradList',query:{gt:ev}}); 

      }

  }

}
</script>

<!--        scoped只允许本模板内的样式        -->
<style scoped>  
.wallte{
/*      height: 100%;*/
/*  width: 100%;*/
/*  background: url('/static/img/ttop.jpg') no-repeat;
  background-size: 100%;*/
  
/*  padding-top: 30px;*/
} 
  .wallte .top_tab{
   /* margin: 15px auto 0;*/
    height: 48px;
    line-height: 48px;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    border-radius: 4px;
   /* width: 90%;*/
    margin:0 auto;
    /*box-shadow:0px 0px 1px rgba(175,175,175,.3);*/
  }
  .wallte .top_tab div{
    display: block;
    width: 50%;
    height: 100%;
     color:#9a9a9a;
}
 .wallte .top_tab .on{
   
/*    font-weight: 800;*/
    color: #2772ff;
    position: relative;
}
.wallte .top_tab .on::before{
  content:'';
  position: absolute;
  bottom: 0;
  left: 30px;
  right:30px;
  background:#2772ff; 
  height: 2px;
}
.slod{
/*  background: #fff;*/
 /* height: 200px;*/
/*  width: 370px;*/
margin:10px 10px 60px;
/*padding:10px;*/
box-shadow:0px 0px 0.5px rgba(175,175,175,.3);
}


.bottom_flex{
  position: fixed;
  height: 54px;
/*  border-top: 1px solid #e8e8e8;*/
box-shadow:0px 0px 0.5px rgba(175,175,175,.3);
  background: #fff;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  right: 0;
  z-index: 1111;
}
.bottom_flex .balance{
  width: 60%;
  background: #fff;
  height: 100%;
  display: flex;
 justify-content: space-between;
 align-items: center;
 color:#9a9a9a;
 font-size: 14px;
}
.bottom_flex .balance p{
  width: 50%;
  /*text-align: left;*/
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.bottom_flex .balance p:first-child{
  border-right:1px solid #e8e8e8;
}
.bottom_flex .balance p span{
/*  color:#2e2e2e;*/
  font-size: 16px;
  font-weight: bold;
}
.bottom_flex .btn{ 
  width: 40%;
  height: 100%;
  display: block;
}
.bottom_flex .btn button{
     width: 100%;
  height:100%;
  border:none;
    background: #fe4800;
  /* border-radius: 4px;*/
   color:#fff;
   font-size: 14px; 
   padding:0 15px;
}
input:disabled {
    color: red;
    opacity: 1;
    -webkit-opacity: 1;
    -webkit-text-fill-color: #9a9a9a;
}
.slod .withdra{
  padding:20px;
  background:#fbfbfb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.slod .withdra span{
  position: absolute;
  top:20px;
  right: 20px;
  display: block;
/*  width: 40px;
  height: 40px;*/
/*  background: #ccc;*/
}
.slod .withdra span i{
  font-size: 20px;
  color:#9a9a9a;
}
.slod .withdra p.titl{
  font-size: 40px;
  color:#ccc;
}
.slod .withdra p:last-child{
  color:#ccc;
  font-size: 12px;
}
.slod .inpt{
text-align: left;
padding:20px 15px 40px;
background: #fff;
}
.slod .inpt p{
  font-size: 12px;
  color:#2e2e2e;
}
.slod .inpt p.tipp{
  font-size: 14px;
}
.slod .inpt div.inopo{
  margin:10px 0;
  border-bottom: 1px solid #e8e8e8;
  padding: 8px 0 8px;
}
.slod .inpt div.inopo i{
/*  color:#9a9a9a;*/
}
.slod .inpt div input{
       outline:none;
  -webkit-appearance:none; 
  border-radius: 4px;
  width: 72%;
  border:none;
/*  background: #f5f5f5;*/
  padding-left:10px;
/*  height: 45px;*/
/*  margin:0 auto 20px;*/
  font-size: 16px;
  box-sizing: border-box;
  font-size: 14px;
}
.slod .inpt div.tpp{
  color:#9a9a9a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}
.slod .inpt div.tpp p{
  color:#9a9a9a;
}
.slod .inpt div.tpp a{
  color:#9a9a9a;
}
.slod .inpt div.tpp p span{
    color:#2772ff;
}
.slod .inpt div.tpp span{

}
.slod .inpt p.qbress{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
/*  border-radius: 4px;*/
  overflow: hidden;
/*  border:1px solid #e8e8e8;*/
 /* padding:4px 0;*/
 height: 40px;
}
.slod .inpt p.restip{
  text-align: center;
  height: 30px;
  line-height: 30px;
  margin-top: 10px;
  font-size: 12px;
  color:#9a9a9a;
  background: #f1f7ff;
/*  border:1px solid #ff7978;*/
  border-radius: 2px;
  position: relative;

}
.slod .inpt p.restip::before{
  content: '';
  position:absolute;
  top:-10px;
  left: 50%;
  margin-left: -10px;
  border-left: 10px solid transparent;
  border-bottom:10px solid #f1f7ff;
  border-right:10px solid transparent;
}
.slod .inpt p.qbress input{
       outline:none;
  -webkit-appearance:none; 
   padding:0 4px;
  width: 100%;
  height: 100%;
  border:none;
  color:#9a9a9a;
  background: #f5f5f5;
  text-align: center;
 /* padding-left:10px;*/
/*  height: 45px;*/
/*  margin:0 auto 20px;*/

  box-sizing: border-box;
  font-size: 14px;  
}
.slod .inpt p.qbress button{
  width: 28%;
  height: 100%;
  border:none;
  color:#9a9a9a;
}
.slod .inpt button.okbtn{
  margin-top:10px;
  width: 100%;
  height:40px;
  border:none;
  background: -webkit-linear-gradient(right top, #4a4fe4 , #4a93f9);
  border-radius: 2px;
  color:#fff;
  font-size: 16px; 
}
.slod .record{
  min-height: 80px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 color:#ccc;
 margin-top: 5px;
 background: #fff;
 font-size: 14px;
}
</style>