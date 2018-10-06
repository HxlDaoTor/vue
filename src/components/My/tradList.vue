<template>
   <div class="trad">
         <div class="cent">
         <!-- new Date(parseInt(item.ctime1)).toLocaleString() -->
              <div class="border" v-for='item in list'>
                 <div class="flx"><p><strong>Number</strong> {{ item.tbnum }}<span :class='{ on:item.zt == 1 ,od:item.zt == 0}'>{{ item.status }}</span></p>{{ new Date(parseInt(item.ctime1)).toLocaleString() }}</div>
                 <p><strong>Actual arrival:</strong> {{ item.receivenum }} <span class="sxf"><strong>{{ $t('message.wthdr.sxf') }}:</strong> {{ item.sxf }}</span></p>
                 <p v-if='item.zt != -1' class=""><strong>HASH:</strong> {{ item.txid }}</p>
              </div>
         </div>

         <div class="norecord" v-show='isnorecord'>
                <i  class="iconfont icon-zanwudingdan" ></i>
                {{ $t('message.wthdr.noca') }} {{ name }} {{ $t('message.wthdr.txj') }}
         </div>

            <!--    小提示框      -->
        <com-tip v-if='istip' :tip = 'tip'></com-tip>
        <load v-if='isload' :loa ='loadTxt'></load>
         
   </div>
</template>

<script>
import { serveip,interfaceUrl  } from '../../assets/js/config.js' 
import {setCookie,getCookie} from '../../assets/js/cookes.js'
import load from './loading'
import Tip from './Tip' 
export default {
  name: 'myWallet',
  data () {         //关联dom上的数据
    return {
      istip:false,
      tip:'',
      isload:false,
      loadTxt:'' ,
      list:[] ,
      name:'',
      isnorecord:false

    }
  },
  mounted: function () {  //钩子函数 加载完后执行

    this.name = this.$route.query.gt;
   //console.log(this.name)
    this.getList();
  },
  components:{
    'load': load,
    'comTip':Tip  
  },
  methods:{  //计算属性  用来绑定事件


    getList (){             //查询列表
                  let url = interfaceUrl();
                  let token1 = getCookie('token1');
                  let token2 = getCookie('token2');
                  let data = { 
                                 'token1':token1,
                                 'token2':token2
                  };
                  this.isload = true;
                  this.loadTxt = 'Loading...'
                  this.$http.post(url + '/v1/deposit/getTixianlist.ashx',data,{emulateJSON: true}).then((res)=>{
                  this.isload = false;
                  console.log(res)
                          if( res.body.code === 200){
                            //  this.list = res.body.data;

                             if( this.$route.query.gt === 'BTC'){

                                this.list = res.body.data.filter(function(item){

                                   return  item.currencytype === 'BTC'

                                })
                                if( this.list.length <= 0){
                                  this.isnorecord = true;
                                 }

                             }else if( this.$route.query.gt === 'ETH' ){
                                 this.list = res.body.data.filter(function(item){

                                   return  item.currencytype === 'ETH'

                                })

                                if( this.list.length <= 0){
                                  this.isnorecord = true;
                                 }                             
                             }else if( this.$route.query.gt === 'HSL' ){

                                  this.list = res.body.data.filter(function(item){

                                     return  item.currencytype === 'HSL'

                                  });
                                  if( this.list.length <= 0){
                                    this.isnorecord = true;
                                   }
                             }else{
                                  this.list = res.body.data;
                                  if( this.list.length <= 0){
                                    this.isnorecord = true;
                                   }                              
                             }
                          }else{
                               this.istip = true;  //提示弹窗
                               this.tip  = (this.$i18n.locale == 'cn'? res.body.message : res.body.message_en);    //弹窗提示语
                               setTimeout(function(){
                                      this.istip = false;  //提示弹窗
                               }.bind(this),1500)

                          }


                  })

    }
     
  
  }
    

}
</script>

<!--        scoped只允许本模板内的样式        -->
<style scoped>  
.trad{
  color: #9a9a9a;
/*  padding: 10px 10px;*/
  font-size: 12px;
  height: 100%;
}
.trad .cent{
 background: #fff;
/* min-height: 200px;*/
 padding:0 10px;
 overflow: hidden;
}
.trad .cent .flx{
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 24px;
}
.trad .cent .flx span{
  background: #e8e8e8;
  padding:4px 6px 2px;
  border-radius: 4px;
  margin-left: 6px;
}
.trad .cent .flx span.on{
  background: #65cc94;
  color:#fff;
}
.trad .cent .flx span.od{
  background: #4a93f9;
  color:#fff;
}
.trad .cent div p{
/*  width: 100%;*/
  text-align: left;
  line-height: 24px;
      word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
}
.trad .cent div p span.sxf{
  margin-left: 10px;
}
.trad .cent div.border{
  border-bottom: 1px solid #f8f8f8;
  padding:6px 4px;
  margin-bottom: 10px;
}

.trad .cent div.border strong{
  font-size: 14px;
}
.norecord{
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color:#9a9a9a;
  font-size: 16px;
}
.norecord i{
   color:#ccc;
  font-size: 120px;
}
</style>