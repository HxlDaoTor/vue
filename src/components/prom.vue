<!-- 模板 -->
<template>
   <div class="by">
         <div class="top">
               {{ $t('message.make.ran') }} 
               <span @click='$router.go(-1)'>×</span>  
         </div>
         <div class="imgs">
              <img :src="toppUrl" alt="">
         </div>
          <div class="describe">
                 <p>{{ $t('message.make.tyxt') }}</p>
          </div>
         <div class="connt">
  
              <div class="condata">

        <p v-for='(item,index) in uselist' :class='{"reward": index <= 2}'><span :class="{'top1':index == 0,'top2':index == 1,'top3':index == 2 }">{{ index + 1 }}</span>{{ item.tgusername }}</p>
              </div>       
         </div>
        
   </div>
</template>

<script>
import { serveip,interfaceUrl,interfaceUrl_a  } from '../assets/js/config.js' 
import {setCookie,getCookie} from '../assets/js/cookes.js' 
export default {

  name: 'Hello',
  data () {         //关联dom上的数据
    return {
      isload:false,
      loadTxt:'',
      istip:false,
      tip:'',
     uselist:[],
     toppUrl:'/static/img/toph.jpg'
    }
  },
    components: {

  },
  mounted: function () {  //钩子函数 加载完后执行

   this.getUserlist();

  },
  methods:{  //计算属性  用来绑定事件

           getUserlist(){   //推广排行榜
              let url = interfaceUrl();
              let token1 = getCookie('token1');
              let token2 = getCookie('token2');
              let data = { 
                            'token1':token1,
                             'token2':token2
                          };   
              this.$http.post(url + '/v1/user/gettgph.ashx',data,{emulateJSON: true}).then((res)=>{

             //  console.log(res)
                if( res.body.code == 200){

                  this.uselist = res.body.data;

                }else{

                  this.istip = true; 
                  this.tip  = res.body.message;    
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
.by{
  height: 100%;
  background: #2e2278;
} 
.by .top{
  background: #fff;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #eee;
  color:#1f1f1f;
  position: relative;
}

.by .top span{
  color:#666;
  font-size: 30px;
  top: 25px;
  right: 20px;
  position: absolute;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  text-align: center;
  line-height: 20px;
}
.by .describe{
  color:#8176ff;
  font-size: 14px;
  margin:-20px 20px 0;
  text-align: left;
/*  background: #fcf216;*/
  border-radius: 8px;
  position: relative;
  z-index: 1;
  border:1px solid rgba(102,89,255,0.6);
  padding:6px 0;
  box-shadow:0px 2px 10px rgba(102,89,255,0.6);
}
.by .describe::before{
    content: '';
  position:absolute;
  bottom:-10px;
  left: 60px;
  border-left: 10px solid transparent;
  border-top:10px solid rgba(102,89,255,0.6);
  border-right:10px solid transparent;
}
.by .describe::after{
    content: '';
  position:absolute;
  bottom:-9px;
  left: 60px;
  border-left: 10px solid transparent;
  border-top:10px solid #2e2278;
  border-right:10px solid transparent;
}
.by .describe p{
 padding:0 10px;
 line-height:22px;
}
.by .imgs img{
  width: 100%;
  vertical-align: middle;
}
.connt{

  padding:10px;
/*margin-top: 10px;*/
background: #2e2278;
position: relative;

}
.connt .condata{
  background: #3b1777;
  border-radius: 6px;
/*  height: 400px;*/
 padding:10px 10px 30px;
/* margin-top: -30px;*/

}
.connt .condata p{
  height: 30px;
  color:#fff;
  line-height: 50px;
  height: 50px;
  text-align: left;
  background: #6bbdec;
  margin-bottom:8px;
  border-radius: 6px;
  padding-left: 15px;
}
.connt .condata p span{
  background: #2082ef;
  width: 22px;
  height: 22px;
  line-height: 22px;
  display: inline-block;
  border-radius: 50%;
  text-align: center;
  margin-right: 10px;
  font-size: 12px;

}
.connt .condata p.reward{
  background: #ef5b7f;
  color:#ffe0cd;
    display: flex;
  align-items: center;
}
.connt .condata p.reward span.top1{
background: url(/static/img/top1.jpg) center no-repeat;
background-size: 100%;
border-radius:0;
  width: 30px;
  height: 30px;
  color: rgba(0,0,0,0);
}
.connt .condata p.reward span.top2{
background: url(/static/img/top2.jpg) center no-repeat;
background-size: 100%;
border-radius:0;
width: 30px;
height: 30px;
color: rgba(0,0,0,0);
}
.connt .condata p.reward span.top3{
background: url(/static/img/top3.jpg) center no-repeat;
background-size: 100%;
border-radius:0;
width: 30px;
height: 30px;
color: rgba(0,0,0,0);

}
</style>