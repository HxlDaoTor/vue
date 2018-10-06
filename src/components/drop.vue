<!-- 空投 -->
<template>
   <div class="kt">
          <div class="logoin">
            <i  class="iconfont icon-font_ZHYQ"></i>
            <span>TxHash Bet</span>
<!--             <p>数字货币期权交易平台</p> -->
          </div>
          <div class="top">
                 <h5>{{$t('message.index.emTit')}}</h5>
                <p>{{ email }}<span @click='getCode'>{{ $t('message.index.getEma') }}</span></p>
                 <input type="text" :placeholder="$t('message.index.plen')" v-model='val'>
                <button @click='ethRess'>{{$t('message.index.ok')}}</button>

          </div>
      <!--    小提示框      -->

   </div>
</template>

<script>
import {setCookie,getCookie} from '../assets/js/cookes.js' 
import { interfaceUrl,interfaceUrl_a } from '../assets/js/config.js'   

export default {
  data () {         //关联dom上的数据
    return {
       val:'',
       istip:false,
       tip:'',
       isload:false,
       loadTxt:'',
       email:''

    }
  },
  components:{

    
  },
  mounted: function () {  //钩子函数 加载完后执行
  //  console.log(this.$router.history.current.fullPath)

    this.email = getCookie('username');
    
  },
  methods:{  //计算属性  用来绑定事件
    getCode(){
                  let url = interfaceUrl();
                  let token1 = getCookie('token1');
                  let token2 = getCookie('token2');
                  let data = { 
                                 'token1':token1,
                                 'token2':token2
                              }; 
                   this.isload = true;
                   this.loadTxt = this.$t('message.index.lod');
                    this.$http.post(url + '/v1/email/sendemail.ashx',data,{emulateJSON: true}).then((res)=>{
                     // console.log(res)
                     this.isload = false;
                      if( res.body.code === 200){
                           this.istip = true;  //提示弹窗
                           this.tip  = res.body.message_en;    //弹窗提示语
                           setTimeout(function(){
                                  this.istip = false;  //提示弹窗
                           }.bind(this),1500) 

                      }else{
                            this.istip = true;  //提示弹窗
                           this.tip  = res.body.message_en;    //弹窗提示语
                           setTimeout(function(){
                                  this.istip = false;  //提示弹窗
                           }.bind(this),1500)                         
                      }
                    })
    },

  ethRess(){
         const url =  interfaceUrl();    //接口域名  
         let token1 = getCookie('token1');
         let token2 = getCookie('token2');
         let codeid = this.val;
         let data = {
                 'codeid':codeid,
                 'token1':token1,
                 'token2':token2
         }
         //console.log(data)
         if( codeid == ''){

                    this.istip = true;  //提示弹窗
                    this.tip  = this.$t('message.index.plen');    //弹窗提示语
                     setTimeout(function(){
                            this.istip = false;  //提示弹窗
                     }.bind(this),1500)
         }else{
           this.isload = true;
           this.loadTxt = this.$t('message.index.sub');
           this.$http.post(url + '/v1/email/verification.ashx',data,{emulateJSON: true}).then((res)=>{
                       console.log(res)
                       
                       this.isload = false;
                       if(res.body.code === 200){
                          this.$router.replace('/My') 

                          this.istip = true;  //提示弹窗
                          this.tip  = res.body.message_en;    //弹窗提示语
                           setTimeout(function(){
                                  this.istip = false;  //提示弹窗
                          }.bind(this),1500)
                          setCookie('isemail',1,1000*60)

                       }else{
                       // console.log(res.body.message)
              
                        this.istip = true;  //提示弹窗
                        this.tip  = res.body.message_en;    //弹窗提示语
                         setTimeout(function(){
                                this.istip = false;  //提示弹窗
                        }.bind(this),1500)


                       }


          })

         }





  }
     
  
  }

}
</script>

<!--        scoped只允许本模板内的样式        -->
<style scoped>  
.kt{
  height: 100%;
  width: 100%;
  background: url('/static/img/banner_a.jpg') no-repeat;
  background-size: 100%;
/*  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;*/
  padding-top: 10px;
}
.kt .top{
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
  padding:10px 0;
  box-sizing: border-box;
}
.kt .top h5{
  margin-bottom:40px;
  font-size: 16px;
}
.kt .top p{
  font-size:14px;
  width: 100%;
  text-align: center;
}
.kt .top p span{
  color: #fe4800;
border-radius: 4px;
  padding:4px;
  background: #fff;
  border:1px solid #fe4800;
  margin-left: 6px;
  font-size: 12px;
}
.kt .top input{
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
.kt .top ul{
  width: 80%;
  font-size: 14px;
  line-height: 20px;
  color: #afafaf;
  list-style: none;
  text-align: left;
}
.logoin{
  display: flex;
  flex-direction: column;
 /*margin-top: 10px;*/
 margin-bottom:20px;
 color: #fff;

}
.kt .top button{
  width: 80%;
  height:50px;
  border:none;
  background: -webkit-linear-gradient(right top, #4a4fe4 , #4a93f9);
   border-radius: 8px;
   color:#fff;
   font-size: 18px;
   margin-bottom: 20px;
}
.logoin i{
  font-size: 40px;

}
.logoin p{
  margin-top: 15px;
  font-weight: 800;
   font-size: 24px;

}
.logoin span{
  font-size: 18px;
  font-weight: bold;
}        
input::-webkit-input-placeholder{
  color:#afafaf;
  font-size:14px;
}

</style>