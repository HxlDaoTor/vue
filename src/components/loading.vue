<!-- 提示弹窗 -->
<template>
<div class="load"  v-show="visible">
   <div class="tip">
           <i class="iconfont icon-jiazaizhong"></i> 
           <p>{{ loa }}</p>
     <!--       -->
   </div>
</div>

</template>

<script>
export default {
  name: 'Loading',
//  props : ['loa'],
  data () {         //关联dom上的数据
    return {
       visible:false,
       loa:''

    }
  },
  mounted: function () {  //钩子函数 加载完后执行
   //  console.log('ceshi')
  },
  methods:{  //计算属性  用来绑定事件

  //    toColor:function() { }
     
  
  }

}
</script>

<!--        scoped只允许本模板内的样式        -->
<style scoped>  
.load{
    width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
z-index: 1111222;
}
.load .tip{
  height: 100px;
  min-width: 100px;
 /* padding: 0 10px;*/
  background: rgba(0,0,0,.6);
  border-radius: 4px;
  line-height: 46px;
  font-size: 14px;
  color: #f0f4ff;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
/* -webkit-transform: translateY(150rpx);*/
}

.load .tip p{
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  margin-top: 5px;
}
.load .tip i{
  animation:move infinite 1s linear; 
  color:#bfc6d9;
  width: 40px;
  height: 40px;
  line-height:40px;
  font-size: 40px;
  vertical-align: middle;
/*  font-size: 80px;*/
}
@keyframes move
{
from { transform:rotate(0deg);  }
to   {transform:rotate(360deg); }
} 
</style>