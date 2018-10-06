<!-- 模板 -->
<template>
   <div>
          测试 组件模板
   </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {         //关联dom上的数据
    return {
      msg: '你好'

    }
  },
  mounted: function () {  //钩子函数 加载完后执行
     console.log('ceshi')
  },
  methods:{  //计算属性  用来绑定事件

  //    toColor:function() { }
     
  
  }

}
</script>

<!--        scoped只允许本模板内的样式        -->
<style scoped>  

</style>