<!-- 联系我们 -->
<template>
   <div class="callme">
       <div class="top">
        <i  class="iconfont icon-u-arrow3-right" @click='$router.go(-1)'></i>
          联系我们
       </div>
       <div class="conetet">
            <div class="card">
                     <div class="imgs">
                       <img src="/static/img/car_e.jpg" alt="">
                       <i  class="iconfont icon-qq1" ></i>
                     </div>
                     <div class="txt">
                           <p class="titl">QQ联系我们</p>
                            <div class="miaos">
                              <p>反馈遇到的问题</p>
                              <p>QQ:192271988</p>
                            </div>
                           
                          
                        <button @click="jump('3')">添加</button>
                     </div>
            </div>

            <div class="card">
                     <div class="imgs">
                       <img src="/static/img/car_a.jpg" alt="">
                       <i  class="iconfont icon-youxiang" ></i>
                     </div>
                     <div class="txt">
                           <p class="titl">邮件联系我们</p>
                            <div class="miaos">
                              <p>反馈遇到的问题</p>
                              <p>txhashbet@gmail.com</p>
                            </div>
                           
                          
                        <button v-clipboard:copy="content"  v-clipboard:success="copyurl">复制</button>
                     </div>
            </div>

            <div class="card">
                      <div class="imgs">
                        <img src="/static/img/car_b.jpg" alt="">
                         <i  class="iconfont icon-navhaoyou" style='font-size: 40px;' ></i>
                      </div>
                      <div class="txt">
                           <p class="titl">加入电报频道</p>
                            <div>
                              <p>接收平台最新活动</p>
                            </div>
                           
                         
                           <button @click="jump('0')">加入</button>
                     </div>         
            </div>

            <div class="card">
                      <div class="imgs">
                          <img src="/static/img/car_d.jpg" alt="">
                          <i  class="iconfont icon-qunzuduoren" style='font-size: 40px;'></i>
                      </div>
                      <div class="txt">
                           <p class="titl">加入电报群组</p>
                            <div>
                              <p>讨论赚钱技巧</p>
                            </div>
                           
                        
                           <button @click="jump('2')">加入</button>
                     </div> 
             
            </div>

            <div class="card">
                    <div class="imgs">
                      <img src="/static/img/car_c.jpg" alt="">
                       <i  class="iconfont icon-Twitter" ></i>
                    </div>
                      
                      <div class="txt">
                           <p class="titl">关注推特</p>
                            <div>
                              <p>获得更多资讯</p>
                            </div>
                           
                           <button @click="jump('1')">关注</button>
                     </div>                
              
            </div> 
                                   
       </div>
                                      <!--    小提示框      -->

   </div>
</template>

<script>

export default {

  data () {         //关联dom上的数据
    return {
      istip:false,
      tip:'' ,
      content:'txhashbet@gmail.com'  
    }
  },
  mounted: function () {  //钩子函数 加载完后执行
     // console.log('ceshi')
  },
  components:{

  },
  methods:{  //计算属性  用来绑定事件

jump(ev){
  if(ev === '0'){
  window.location.href = 'https://t.me/txhashbet_com'
  }else if(ev === '1'){
   window.location.href = 'https://twitter.com/txhashbet'
  }else if(ev === '2'){
  window.location.href = 'https://t.me/txhashbet'
  }else if(ev === '3'){
    window.location.href="mqqwpa://im/chat?chat_type=wpa&uin=192271988&version=1&src_type=web&web_src=oicqzone.com";
    }  
  
 
},
copyurl(){
       this.istip = true;  //提示弹窗
     this.tip  = 'Copy success';    //弹窗提示语
      setTimeout(function(){
            this.istip = false;  //提示弹窗
      }.bind(this),1000)
}
     
  
 }

}
</script>

<!--        scoped只允许本模板内的样式        -->
<style scoped>  
.callme{
 height: 100%;
/* padding:15px;*/
}
.callme .top{
  height: 50px;
  background: #fff;
  line-height: 50px;
/*  display: flex;*/
/*  justify-content:space-between;*/
 /* align-items: center;*/
  border:1px solid #eee;
/*  margin-bottom: 10px;*/
    text-align: center;
    position: relative;
}
.callme .top i{
  font-size: 22px;
  position: absolute;
  top: 0;
  left: 15px;
  color:#9a9a9a;
}
.callme .top p{

}
.callme .conetet{
background: #fff;
display: flex;
flex-direction: column;
align-items: center;
padding:0 20px 30px;
}
.callme .conetet div.card{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
/*  padding:30px 40px;*/
/*  border-radius: 6px;*/
 box-shadow:4px 4px 13px rgba(102,89,255,0.2);
   background: #fff;
 /*  height: 120px;*/
}
.callme .conetet div.card .txt{
  width: 60%;
  height: 172px;
  padding:10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
/*  align-items: center;*/
  box-sizing: border-box;
}
.callme .conetet div.card .txt div{
  margin:22px 0 10px;
  color:#888;
}
.callme .conetet div.card .txt p.titl{
  color:#1f1f1f;
  font-size: 16px;
 /* margin-bottom: 30px;*/
}
.callme .conetet div.card .imgs{
  width: 40%;
  position: relative;
  height: 172px;
}
.callme .conetet div.card .imgs i{
   font-size: 34px;
  color:#fff; 
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  margin-top: -30px;
  margin-left:-30px;
  line-height: 60px;
}
.callme .conetet div.card .imgs img{
 width: 100%;
 vertical-align: middle;
 height: 100%;
}
/*.callme .conetet div i{
  font-size: 40px;
  color:#2772ff;
}*/
/*.callme .conetet div i.icon-youxiang{
  font-size: 30px;
}*/
.callme .conetet div button{
  width: 60%;
  height: 35px;
  line-height: 35px;
  border:none;
  border-radius: 20px;
  color:#fff;
  background: -webkit-linear-gradient(right top, #facc5c , #fd9647);
}
.callme .conetet div p{
  text-align: left;
  font-size: 14px;
  line-height: 22px;
  color:#666;
}
</style>