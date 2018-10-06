<template>
   <div class="my">
       <div class="top">
             <div class='walst'>
                <div class="images">
                     <i  class="iconfont icon-xiugaitouxiang" style="font-size: 28px;color:#999;vertical-align: middle;height: 100%;"></i>
                </div>
                <div class='cext'>
                     <p>
                        {{ user.username }}
                       <span v-if='user.isemail === 1'>{{$t('message.my.ver')}}</span>
                       <span v-else-if='user.isemail === 0' style='background:#d6d6dc' @click='goYanzhen'>{{$t('message.my.unver')}}</span>
                     </p>
                     <p v-show='isShow'>UID: {{ user.userid }}</p>
                </div>
             </div>
             <div></div>
       </div>

        <div class="content">
<!--             <router-link to="/My/myGameress" class="cont_fst">
               <div>
                  <i  class="iconfont icon-yitaifangETHjiacu-wyy" ></i>
                 <p>{{$t('message.my.ethg')}}</p>
                </div>              
                <i  class="dt iconfont icon-icon" ></i>
            </router-link>  -->       
            <router-link to="/My/myRecord" class="cont_fst">
               <div>
                  <i  class="iconfont icon-qianbao1" ></i>
                 <p>我的订单</p>
                </div>              
                <i  class="dt iconfont icon-icon" ></i>
            </router-link>
            <router-link to="/My/myRecord" class="cont_fst">
               <div>
                 <i  class="iconfont icon-jiaoyijilu1"></i>
                 <p>交易明细</p>
                </div>              
                <i  class="dt iconfont icon-icon" ></i>
            </router-link>
        </div>
        <div class="content">
            <router-link to="/My/myProb" class="cont_fst">
               <div>
                <i  class="iconfont icon-changjianwenti1"></i>
                <p>常见问题</p>
               </div>              
                <i  class=" dt iconfont icon-icon" ></i>
            </router-link>
            <router-link to="/My/contact" class="cont_fst">
               <div>
                 <i  class="iconfont icon-wsmp-lianxiwomen"></i>
                <p>联系我们</p>
               </div>              
                <i  class="dt iconfont icon-icon" ></i>
            </router-link>

        </div>
 
        <div class="content">
            <router-link to="/setUp" class="cont_fst">
               <div>
                <i  class="iconfont icon-shezhi1"></i>
                <p>设置</p>
               </div>              
                <i  class=" dt iconfont icon-icon" ></i>
            </router-link>

        </div>

<!--        <div class="chat" @click='Chat'>
           <i  class="dt iconfont icon-zaixianliaotian" ></i>
       </div> -->

      <foot :message='msg'></foot>
   </div>
</template>
<script>
import { serveip,interfaceUrl,interfaceUrl_a} from '../assets/js/config.js' 
import {setCookie,getCookie} from '../assets/js/cookes.js'
 import foot from './foot'

export default {
  name: 'My',
 data () {
    return {  
      msg: '1'  ,           //页面id 用来子父组件通信
      istip:false,
      tip:'',
      user:{},
      isShow:false
    }
  },
  components:{
    'foot': foot,


  },
   mounted: function () {

      // this.getUserinfor();
  },
  methods:{
    getUserinfor(){
                   let url = interfaceUrl();
                  let token1 = getCookie('token1');
                  let token2 = getCookie('token2');
                  let data = { 
                                 'token1':token1,
                                 'token2':token2
                              };            
                  this.$http.post(url + '/v1/user/getUser.ashx',data,{emulateJSON: true}).then((res)=>{

                               // console.log(res)
                                if( res.body.code === 200 ){
                                   this.isShow = true;
                                   this.user = res.body.user;

                                }else{

                                     this.istip = true;  //提示弹窗
                                     this.tip  = res.body.message;    //弹窗提示语
                                     setTimeout(function(){
                                          this.istip = false;  //提示弹窗
                                      }.bind(this),1500)

                                }

                 })     
    },
    goYanzhen(){
      this.$router.push('/drop');
    },
    Chat(){
      window.location.href="https://txhashbet.com/onlineService.html"
    }
  }
}
</script>
<style scorped>
/*.foot .tab_b{
  color:#000;
}*/
.my{

}
.my .top{
/*	height: 100px;*/
	margin-bottom: 10px;
	background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
.my .top .walst{
  width: 96%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.my .top .images{
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background: #e8e8e8;
  line-height: 70px;
}
.my .top .cext{
  margin-left: 10px;
}
.my .top .cext p{
width: 100%;
text-align: left;
height: 26px;
line-height: 26px;
font-size: 14px;
color:#9a9a9a;
}
.my .top .cext p span{
  /*width: 60px;*/
  padding:4px 6px;
  background:rgb(1,231,107);
  color:#fff;
  font-size: 12px;
  border-radius: 4px;
  margin-left: 4px;
}
.my .content{
	background: #fff;
	padding: 0 20px;
	margin-bottom: 10px;
}
.my .content .cont_fst{
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #f5f5f5;
	padding: 12px 0;

}
.my .content .cont_fst:last-child{
	border:none;
}
.my .content .cont_fst img{
	width: 20px;
	height: 20px;
	vertical-align: middle;
}
.my .content .cont_fst p{
margin-left: 5px;
  font-size: 14px;
}
.my .content .cont_fst i{
  font-size: 20px;
  color:#1f1f1f;
 vertical-align: middle;
}
.my .content .cont_fst i.icon-qianbao1{
 font-size: 18px; 
}
.my .content .cont_fst i.dt{
  color:#d4d4d4;
}
.my .content .cont_fst div{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chat{
 position: fixed;
 bottom: 75px;
 right: 15px;
 width: 50px;
 height: 50px;
line-height: 50px;
/* background: #fff;*/
transform:rotateY(180deg);
}
.chat i{
  font-size: 22px;
  color:#666;
   vertical-align: middle;
}
.chat p{
font-size: 12px;
color:#9a9a9a;
}
</style>