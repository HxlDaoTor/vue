<!-- 模板 -->
<template>
   <div class="active">
         <div class='list' v-for='item in list'>
            <div class='cnnt'>
                <p>{{ locale == 'cn' ? item.name : item.names_en }}<span :class='{od:item.joinedcode === 1}'>+{{ item.bonus }}</span> {{ item.currencytype }}</p>
                <p >{{ locale == 'cn' ? item.subtitle : item.subtitle_en }}</p>
            </div>
            <div class="btn">
                 <button class='wanchen' v-if="item.finished === 0">{{ $t('message.tour.un') }}</button>
                 <button class='ylinqu' v-else-if="item.joinedcode === 1">{{ $t('message.tour.red') }}</button>
                <button class='wanchen' v-else-if="item.finished === -1">{{ $t('message.tour.rer') }}</button>
                 <button class='linqu' v-else @click='linqu(item.code)'>{{ $t('message.tour.rec') }}</button>
            </div>
         </div>




           
   </div>
</template>

<script>
import { serveip,interfaceUrl,interfaceUrl_a  } from '../assets/js/config.js' 
import {setCookie,getCookie} from '../assets/js/cookes.js' 

export default {
  data () {         //关联dom上的数据
    return {
      isload:false,
      loadTxt:'',
      istip:false,
      tip:'',

      list:[],
      locale:'',

    }
  },
  components: {

  },
  mounted: function () { 
   this.getList();
   this.locale = this.$i18n.locale;
  },
  methods:{  //计算属性  用来绑定事件

     getList(){

                  let url = interfaceUrl_a();
                  let token1 = getCookie('token1');
                  let token2 = getCookie('token2');
                  let data = { 
                                 'token1':token1,
                                 'token2':token2
                              };
                  this.isload=true;
                  this.loadTxt = this.$t('message.assets.load') ;               
                  this.$http.post(url + '/v2/hongbao/gethongbaoshow.ashx',data,{emulateJSON: true}).then((res)=>{

                             //  console.log(res)
                                this.isload=false;
                                if( res.body.code === 200 ){
                                     //this.ethRess = res.body.data.address;
                                       this.list = res.body.list;
                                }else{

                                     this.istip = true;  //提示弹窗
                                     this.tip  = (this.$i18n.locale === 'cn'?res.body.message : res.body.message_en );    //弹窗提示语
                                     setTimeout(function(){
                                          this.istip = false;  //提示弹窗
                                      }.bind(this),1500)

                                }

                 })
     },
     linqu(ev){
                  let url = interfaceUrl_a();
                  let token1 = getCookie('token1');
                  let token2 = getCookie('token2');
                  let eventcode = ev;
                  let data = { 
                                 'token1':token1,
                                 'token2':token2,
                                 'eventcode':eventcode
                              };

                // console.log(data)
                  this.isload=true;
                  this.loadTxt = this.$t('message.tour.recin') ;               
                  this.$http.post(url + '/v2/hongbao/lingquhongbao.ashx',data,{emulateJSON: true}).then((res)=>{

                               // console.log(res)
                                this.isload=false;
                                if( res.body.code === 200 ){
                                     this.list = res.body.list;           //更新列表
                                     this.istip = true;  //提示弹窗
                            this.tip  = (this.$i18n.locale === 'cn'?res.body.message : res.body.message_en);    //弹窗提示语
                                     setTimeout(function(){
                                          this.istip = false;  //提示弹窗
                                      }.bind(this),1500)
                                }else{

                                     this.istip = true;  //提示弹窗
                                     this.tip  = (this.$i18n.locale === 'cn'?res.body.message : res.body.message_en);    //弹窗提示语
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
.active{
  padding:10px;
}
.active .list{
  background: #fff;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:10px;
  border-radius: 4px;
}
.active .list .cnnt{
  font-size: 14px;
  color:#666;
  width: 70%;
}
.active .list .cnnt p{
 text-align: left;
/* color:#9a9a9a;*/ 
}
.active .list .cnnt p:last-child{
  font-size: 12px;
/*  margin-top: 2px;*/
  color:#9a9a9a;
}

.active .list .cnnt p span{
  margin-left: 10px;
  color:#9a9a9a;
  font-weight: bold;
}
.active .list .cnnt p:last-child span{
  margin:0;
  color:#666;
  font-size: 14px;
  line-height: 30px;
}
.active .list .cnnt p span.od{
    color:#ff5746;
}
.active .list .btn button{
    background: none;
  color:#00aaee;
/*  height: 30px;*/
/*  width: 60px;*/
  padding:4px 10px;
  /*line-height: 29px;*/
  text-align: center;
  border-radius: 15px;
  border:1px solid #00aaee;
  font-size: 14px;
  min-width: 60px;
  box-sizing: border-box;
}
.active .list .btn button.wanchen{
  border:none;
  color:#9a9a9a;
}
.active .list .btn button.ylinqu{
  background: #e8e8e8;
  border:none;
  color:#9a9a9a;
}
</style>