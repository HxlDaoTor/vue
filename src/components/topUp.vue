<!-- 模板 -->
<template>


<div style='height: 100%;'>

   <div class="wallte">
           <div class="top_tab">
             <div  @click='ctock(0)' :class="{ 'on': currentTab === 0 }">ETH</div> 
             <div  @click='ctock(1)' :class="{ 'on': currentTab === 1}">BTC</div> 
           </div>
          <!--  <router-view v-on:listenTochad="listenTochad"></router-view> -->
   </div>

   <swiper :options="swiperOption" ref="mySwiper" @transitionStart = 'onTransitionStart'>

   <!-- ETH -->    
     <swiper-slide>
          <div class="slod">
              <div class="tip">
                 <p class="ethP">
                    {{ $t('message.topup.tip') }}
                 </p>
              </div>
              <div class="copyUrl">
                  <input type="text" v-model='ethRess' disabled>
              <button v-clipboard:copy="ethRess"  v-clipboard:success="copyurl">{{ $t('message.topup.copy') }}</button>
              </div>
          </div>


          <div class="toplist" v-if='isethShow'>
              <div class="chir" v-for='item in ethTopList'>
                     <div><p><strong>{{ $t('message.topup.dep') }}:</strong>{{ item.amount }}<span>{{ item.status }}</span></p><span>{{ new Date(parseInt(item.time1)*1000).toLocaleString() }}</span></div>
                     <div><strong>TxHash:</strong>{{ item.txid }}</div>     
              </div>
          </div>
          <div class="czrecord" v-else-if='isethShow === false'><i  class="iconfont icon-Null-data" ></i>
            {{ $t('message.topup.node') }}
          </div>

     </swiper-slide>
 <!-- BTC -->
     <swiper-slide>
          <div class="slod">
              <div class="tip">
                 <p class="btcP">
                    {{ $t('message.topup.tip1') }}
                 </p>
              </div>
              <div class="copyUrl">
                  <input type="text" v-model='btcRess' disabled>
              <button v-clipboard:copy="btcRess"  v-clipboard:success="copyurl">{{ $t('message.topup.copy') }}</button>
              </div>    
          </div>

          <div class="toplist" v-if="isbtcShow">
              <div class="chir" v-for='item in btcTopList'>
                     <div><p><strong>{{ $t('message.topup.dep') }}:</strong>{{ item.amount }}<span>{{ item.status }}</span></p><span>{{ new Date(parseInt(item.time1)).toLocaleString() }}</span></div>
<!--                      <p><strong>来自：</strong>{{ item.amount }}</p> -->
                     <div><strong>TxHash:</strong>{{ item.txid }}</div>     
              </div>
          </div>
          <div class="czrecord" v-else-if = 'isbtcShow === false'><i  class="iconfont icon-Null-data" ></i>
          {{ $t('message.topup.node') }}</div>

     </swiper-slide>
 


     <!-- Optional controls -->
    <!--  <div class="swiper-pagination"  slot="pagination"></div> -->
    <!--  <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->


</swiper>
  
  <div class="bottom_flex">
       <div class="balance">
              <p>{{ balceName.name }} {{ $t('message.topup.bal') }}: {{ balceName.val }}</p>
       </div>
       <div class="btn" @click='goRder'>
          <button>{{ $t('message.topup.got') }}</button>
       </div>
  </div>


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
      fbsRess:'',
      ystList:[],         //余额列表
      isload:false,
      loadTxt:'',
      istip:false,
      tip:'',
      balceName:{
        name:'',
        val:''
      },

      swiperOption: {
       setWrapperSize :true,
       pagination : '.swiper-pagination',
       paginationClickable :true,
       // scrollbar:'.swiper-scrollbar',
       mousewheelControl : true,
       observeParents:true,
        debugger: true,

     },
     ethTopList:[],        //充值列表
     btcTopList:[],
     isethShow:null,
     isbtcShow:null


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
     this.getTupList();
  },
  methods:{  //计算属性  用来绑定事件
          balance (ev){     //获取余额
                  this.isload=true;
                  this.loadTxt = this.$t('message.index.lod') 
                  //  console.log(ev)     
                  let url = interfaceUrl();
                  let token1 = getCookie('token1');
                  let token2 = getCookie('token2');
                  let data = { 
                                 'token1':token1,
                                 'token2':token2
                  };
                  //    console.log(data)
                  this.$http.post(url + '/v1/user/getuserbalance.ashx',data,{emulateJSON: true}).then((res)=>{
                       //   console.log(res)
                          this.isload=false;
                          if( res.body.code === 200){

                                 this.ystList = res.body.list;

                                for( var i = 0; i < this.ystList.length; i ++){
                                    if( this.ystList[i].currencytype === 'ETH'){

                                       this.balceName.name = this.ystList[i].currencytype;
                                       this.balceName.val = this.ystList[i].balance;

                                       break
                                    }

                                 }
                             
                             
                          }else{
                              this.istip = true;  //提示弹窗
                              this.tip  = (this.$i18n.locale == 'cn'? res.body.message : res.body.message_en);    //弹窗提示语
                               setTimeout(function(){
                                    this.istip = false;  //提示弹窗
                                }.bind(this),1000)


                          }

                    
                  })

        },
                                  
        topUp (ev){                                 //获取BTC充值地址

                  let url = interfaceUrl_a();
                  let token1 = getCookie('token1');
                  let token2 = getCookie('token2');
                  let data = { 
                                 'token1':token1,
                                 'token2':token2
                              };
                  this.isload=true;
                  this.loadTxt = this.$t('message.index.lod'); 
                  this.$http.post(url + '/v2/deposit/getbtcaddress.ashx',data,{emulateJSON: true}).then((res)=>{
                      this.isload=false;
                     // console.log(res)
                          if( res.body.code === 200 ){
                               this.btcRess = res.body.data.address;

                          }else{

                              this.istip = true;  //提示弹窗
                              this.tip  = (this.$i18n.locale == 'cn'? res.body.message : res.body.message_en);    //弹窗提示语
                               setTimeout(function(){
                                    this.istip = false;  //提示弹窗
                                }.bind(this),800)

                          }



                  })



        },
        getEthRess(){

             // if( this.ethRess === ''){              
                  let url = interfaceUrl_a();
                  let token1 = getCookie('token1');
                  let token2 = getCookie('token2');
                  let data = { 
                                 'token1':token1,
                                 'token2':token2
                              };
                  this.isload=true;
                  this.loadTxt = this.$t('message.index.lod') ;               
                  this.$http.post(url + '/v2/deposit/getethaddress.ashx',data,{emulateJSON: true}).then((res)=>{

                               // console.log(res)
                                this.isload=false;
                                if( res.body.code === 200 ){
                                     this.ethRess = res.body.data.address;

                                }else{

                                     this.istip = true;  //提示弹窗
                                     this.tip  = (this.$i18n.locale == 'cn'? res.body.message : res.body.message_en);    //弹窗提示语
                                     setTimeout(function(){
                                          this.istip = false;  //提示弹窗
                                      }.bind(this),800)

                                }

                 })


         //    };

        },
     
      onTransitionStart(e){        //页面切换时触发 的事件
        // console.log(this.swiper.activeIndex)
         let currentTab = this.swiper.activeIndex;
         this.currentTab = currentTab;

         if( currentTab === 1 ){          //BTC
             if( this.btcRess === ''){
                      this.topUp();    
             }

            for( var i = 0; i < this.ystList.length; i ++){

                    if( this.ystList[i].currencytype === 'BTC'){

                        this.balceName.name = this.ystList[i].currencytype;
                        this.balceName.val = this.ystList[i].balance;

                        break
                    }

             }

         }else if( currentTab === 0 ){           //ETH
  

            if( this.ethRess === ''){              

                   this.getEthRess();

             };

    
             for( var i = 0; i < this.ystList.length; i ++){
                    if( this.ystList[i].currencytype === 'ETH'){

                        this.balceName.name = this.ystList[i].currencytype;
                        this.balceName.val = this.ystList[i].balance;

                        break
                    }

             }


         }


      },
      ctock(ev){                    //点击tab事触发
        this.swiper.slideTo(ev, 400, false)
      },
      copyurl(){
         this.istip = true;  //提示弹窗
         this.tip  = this.$t('message.make.copsu');    //弹窗提示语
          setTimeout(function(){
                this.istip = false;  //提示弹窗
          }.bind(this),800)

      },
      goRder(){
        let ev = this.balceName.name;
        //this.$router.push({name:'hashGame',params:{id:ev}});  v1/deposit/getpayblist.ashx
        this.$router.push({path:'/hash',query:{id:ev}});
      },
      getTupList(){   //获取充值列表
                  let url = interfaceUrl();
                  let token1 = getCookie('token1');
                  let token2 = getCookie('token2');
                  let data = { 
                                 'token1':token1,
                                 'token2':token2
                              };             
                  this.$http.post(url + '/v1/deposit/getpayblist.ashx',data,{emulateJSON: true}).then((res)=>{

                              //console.log(res)
                                // console.log('11102')
                             //   this.isload=false;
                                if( res.body.code === 200 ){

                                    this.ethTopList = res.body.data.filter(function(item){

                                      return  item.currencytype === 'ETH';

                                     });

                                    if(this.ethTopList.length == 0){
                                       this.isethShow = false; 
                                     }else{
                                       this.isethShow = true;
                                     }


                                     this.btcTopList = res.body.data.filter(function(item){

                                      return  item.currencytype === 'BTC';

                                     });

                                    if(this.btcTopList.length == 0){
                                       this.isbtcShow = false; 
                                     }else{
                                       this.isbtcShow = true;
                                     }                                     

                                }else{

                                     this.istip = true;  //提示弹窗
                                     this.tip  = (this.$i18n.locale == 'cn'? res.body.message : res.body.message_en);    //弹窗提示语
                                     setTimeout(function(){
                                          this.istip = false;  //提示弹窗
                                      }.bind(this),800)

                                }

                 })
      }

  }

}
</script>

<!--        scoped只允许本模板内的样式        -->
<style scoped>  
.wallte{
/*      height: 100%;*/
/*  width: 100%;*/
  background: url('/static/img/ttop.jpg') no-repeat;
  background-size: 100%;
  
  padding-top: 30px;
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
    width: 90%;
    margin:0 auto;
    box-shadow:0px 0px 10px rgba(175,175,175,.3);
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
  left: 42px;
  right:42px;
  background:#2772ff; 
  height: 2px;
}
.slod{
  background: #fff;
/*  height: 200px;*/
/*  width: 370px;*/
margin:10px 10px 0;
padding:10px 15px 15px;
}
.slod .tip{

  background: #f1f7ff;
  border-radius: 4px;
}
.slod .tip p{
  font-size: 12px;
  color:#9a9a9a;
  padding:6px 4px;
  text-align: left;
 position: relative;
}
.slod .tip p.ethP::before{
  content: '';
  position:absolute;
  top:-10px;
  left: 60px;
  border-left: 10px solid transparent;
  border-bottom:10px solid #f1f7ff;
  border-right:10px solid transparent;
}
.slod .tip p.btcP::before{
  content: '';
  position:absolute;
  top:-10px;
  right: 60px;
  border-left: 10px solid transparent;
  border-bottom:10px solid #f1f7ff;
  border-right:10px solid transparent;
}
.slod .copyUrl{
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
margin-top: 20px;
}
.slod .copyUrl input{
       outline:none;
  -webkit-appearance:none; 
  border-radius: 4px;
  width: 100%;
  border:1px solid #e8e8e8;
  background: #f5f5f5;
  padding: 0 10px;
  height: 45px;
/*  margin:0 auto 20px;*/
  font-size: 12px;
  box-sizing: border-box;


}
.slod .copyUrl button{
    width: 100%;
  height:40px;
  border:none;
    background: -webkit-linear-gradient(right top, #4a4fe4 , #4a93f9);
   border-radius: 2px;
   color:#fff;
   font-size: 16px;
   margin-top: 10px;
}
.czrecord{
  background: #f8f8f8;
  min-height: 80px;
/*  width: 370px;*/
margin:10px 10px 0;
padding:10px; 
color:#9a9a9a;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 14px;
}
.czrecord i{
 font-size: 32px;
 color:#ccc;
}
.toplist {
  background: #fff;  
  padding:10px;
/*    min-height: 80px;*/
margin:10px 10px 0;
}
.toplist .chir{
  padding:10px 6px;
border-bottom: 1px solid #f8f8f8;
}
.toplist .chir:last-child{
  border:none;
}
.toplist .chir div{
  text-align: left;
  width: 100%;
  font-size: 12px;
  color:#9a9a9a;
    word-wrap: break-word;
  word-break: break-all;
  overflow: hidden; 
  line-height: 22px;
}
.toplist .chir div:first-child{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toplist .chir div p span{
  margin-left: 6px;
  background: #e8e8e8;
  padding:4px 6px;
  border-radius: 4px;
}
.bottom_flex{
  position: fixed;
  height: 60px;
  border-top: 1px solid #e8e8e8;
  background: #fff;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  right: 0;
  z-index: 111;
}
.bottom_flex .balance{
  width: 60%;
  background: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    -webkit-text-fill-color: #666;
}
</style>