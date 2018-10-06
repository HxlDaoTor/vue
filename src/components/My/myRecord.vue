<!-- 交易记录页 -->
<template>
   <div class="record">
       <div class="top">
           <p>{{$t('message.myre.nuof')}} {{num}}</p>
           <p>{{$t('message.myre.tot')}} {{amount}}USD</p>
       </div>

       <div class="detailed">
         <h4>{{$t('message.myre.year')}}<span></span></h4>  
         <div class="cgbh">

             <div class="bgh" v-for='item in listBgh'>
                  <div>
                      <p>{{$t('message.myre.orn')}}:<span>{{ item.orderid }}</span></p>
                      <p>{{$t('message.myre.ora')}}:<span>{{ item.amount }}</span></p>
                      <p>{{$t('message.myre.ort')}}:<span>  {{ item.trend }}</span></p>
    <p><span>{{ new Date(parseInt(item.opentime1)*1000).toLocaleString() }}</span></p>
                  </div>  
                  <h2 :class='{on:item.profit > 0}'>
                     <span v-if='item.profit > 0'>+</span>{{ item.profit }}{{ item.currencytype}}
                  </h2>
             </div>

         </div>
       </div>

            <!--    小提示框      -->

         
   </div>
</template>

<script>
import { serveip,interfaceUrl  } from '../../assets/js/config.js' 
import {setCookie,getCookie} from '../../assets/js/cookes.js'

export default {
  name: 'myWallet',
  data () {         //关联dom上的数据
    return {
      istip:false,
      tip:'',
      isload:false,
      loadTxt:'' ,
      listBgh:[] ,
      num:0,
      amount: 0

    }
  },
  mounted: function () {  //钩子函数 加载完后执行

     this.myRecord() 
                  // let url = interfaceUrl();
                  // let token1 = getCookie('token1');
                  // let token2 = getCookie('token2'); 
                  // let data = {
                  //               'token1':token1,
                  //                'token2':token2  
                  // } 
                  // this.$http.post(url + '/v1/user/getDate.ashx',data,{emulateJSON: true}).then((res)=>{

                  //   console.log(res)
                  //   let dat = new Date(parseInt(res.body.date)*1000).toLocaleString('chinese',{hour12:false});
                  //     console.log(dat)

                  // })   
  },
  components:{

  },
  methods:{  //计算属性  用来绑定事件

       //    toColor:function() { }
  
    myRecord (){             //查询列表
                  let url = interfaceUrl();
                  let token1 = getCookie('token1');
                  let token2 = getCookie('token2');
                  let data = { 
                                 'token1':token1,
                                 'token2':token2
                  };
                  this.isload = true;
                  this.loadTxt = 'Loading...'
                  this.$http.post(url + '/v1/trade/closeorderlist.ashx',data,{emulateJSON: true}).then((res)=>{
                  this.isload = false;
                  console.log(res)
                          if( res.body.code === 200){
                             this.listBgh = res.body.list;
                             this.num = res.body.tradetimes;
                             this.amount = res.body.profit;
                          }else{

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
</script>

<!--        scoped只允许本模板内的样式        -->
<style scoped>  
.record{
  color: #666;
  padding-bottom: 20px;
}
.record .top{
  background: #fff;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
 font-weight: bold;
}
.record .detailed{
  margin-top:10px;
  padding: 0 10px;
}
.record .detailed .cgbh{
  background: #fff;
  margin-top:10px;
  padding: 15px;
}
.record .detailed .cgbh .bgh{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  padding: 4px 6px;

}
.record .detailed .cgbh .bgh:last-child{
  border:none;
}
.record .detailed .cgbh .bgh div{
  width: 60%;
}
.record .detailed .cgbh .bgh div p{
  text-align: left;
    font-size: 14px;
    padding-bottom: 4px;
    font-weight: 600;
}
.record .detailed .cgbh .bgh div p span{
  color: #999;
  font-weight:400;
}
.record .detailed .cgbh .bgh h2{
  width: 40%;
  text-align: center;
  color: rgb(4, 135, 84);
  font-size: 18px;
}
.record .detailed .cgbh .bgh h2.on{
  color:red;
}
</style>