<!-- 模板 -->
<template>
   <div class="wallte">
           <div class="top_tab">
             <router-link to="/angn/anfst" replace>一级代理{{ fstmessage }}</router-link> 
             <router-link to="/angn/ansecd" replace>二级代理{{ sedmessage }}</router-link> 
           </div>
           <router-view v-on:listenTochad="listenTochad"></router-view>

   </div>
</template>
<script>
export default {
  name: 'myWallet',
  data () {         //关联dom上的数据
    return {
      fstmessage:'',
      sedmessage:''

    }
  },
  mounted: function () {  //钩子函数 加载完后执行

  },
  methods:{      //计算属性  用来绑定事件
    
      listenTochad (ev){      //子组件向父组件通信 事件  sumfirst  sumsec
         //console.log(ev) 

        this.fstmessage = ev.sumfirst;
        this.sedmessage = ev.sumsec;
        
      }

 } 

}
</script>

<!--        scoped只允许本模板内的样式        -->
<style scoped> 
.wallte{
      height: 100%;
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
  .wallte .top_tab a{
    display: block;
    width: 50%;
    height: 100%;
     color:#9a9a9a;
}
 .wallte .top_tab .router-link-active{
   
/*    font-weight: 800;*/
    color: #2772ff;
    position: relative;
}
.wallte .top_tab .router-link-active::before{
  content:'';
  position: absolute;
  bottom: 0;
  left: 48px;
  right:42px;
  background:#2772ff; 
  height: 2px;
}
</style>