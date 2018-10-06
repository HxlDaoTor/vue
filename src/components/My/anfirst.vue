<!-- 一级 -->
<template>
   <div class="anfst">

          <div class="top">
                 <p>16 (person)</p>
                 <p>2 (person)</p>
          </div>
          <div class="list" v-for='item in lists'>
             <div>
                 <p>{{ item.procname }}<span>{{ item.transtype }}</span></p>
                 <p>{{ item.time }}</p>
             </div>
             <p style="color:#1fc472">{{ item.amount > 0 ? "+"+item.amount : item.amount }}</p>
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
  data () {         //关联dom上的数据
    return {
      lists:[], 
      istip:false,
      tip:'',
      isload:false,
      loadTxt:''       
      
    }
  },
  mounted: function () {  //钩子函数 加载完后执行
     this.addlist()
  },
  components:{
    'load': load,
    'comTip':Tip  
  },
  methods:{  //计算属性  用来绑定事件

  //    toColor:function() { }  /v1/agent/getmingxi.ashx
      
     addlist (){
                let that = this;
                let url = interfaceUrl();
                let token1 = getCookie('token1');
                let token2 = getCookie('token2');
                let data = { 
                               'token1':token1,
                               'token2':token2,
                               'type': 1,
                               'transtype': 0
                };
               this.isload = true;
               this.loadTxt = '加载中'
               this.$http.post(url + '/v1/agent/getmingxi.ashx',data,{emulateJSON: true}).then((res)=>{
                         console.log(res)
                        this.isload = false;
                     if(res.body.code === 200){

                        this.lists = res.body.data.list;
                        this.$emit('listenTochad',res.body.data)

                     }else{

                        this.istip = true;  //提示弹窗
                        this.tip  = res.body.message;    //弹窗提示语
                         setTimeout(function(){
                                this.istip = false;  //提示弹窗
                         }.bind(this),1000)

                     }


                })
     }
     
  
  }

}
</script>

<!--        scoped只允许本模板内的样式        -->

<style scoped>  
.anfst{

}
.anfst .top{
  height: 60px;
  background: #fff;
  margin-top:20px;

  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-around;
  align-items: center;

}
.anfst .list{
  margin-bottom:10px;
  background: #fff;
  height: 70px;
   display: flex;
  justify-content: space-around;
  align-items: center;
}
.anfst .list div p{
  text-align: left;
  font-size: 14px;
  color:#808080;
}
.anfst .list div p:last-child{
  margin-top:4px;
}
</style>