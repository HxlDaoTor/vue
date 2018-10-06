<!-- 提示弹窗 -->
<template>
<div class="tipp" v-show="visible">
   <div class="tip" >
          {{ message }}
   </div>
</div>

</template>

<script>
export default {
  name: 'Tip',
 // props : ['tip'],
  data () {         //关联dom上的数据
    return {

    visible: false,
    message: ""

    }
  },
  mounted: function () {  //钩子函数 加载完后执行

  },
  methods:{  //计算属性  用来绑定事件

     
  
  }

}
</script>

<!--        scoped只允许本模板内的样式        -->
<style scoped>  
.tipp{
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
.tipp .tip{
  text-align: center;
  height: 46px;
  min-width: 100px;
  padding: 0 10px;
  background: rgba(0,0,0,.8);
  border-radius: 4px;
  line-height: 46px;
  font-size: 14px;
  color: #fff;
 animation:mymove 0.3s 1;  
/* -webkit-transform: translateY(150rpx);*/
}

@keyframes mymove
{
    from { transform: translateY(-20px)  }
    to   {transform: translateY(0px)}
}

</style>