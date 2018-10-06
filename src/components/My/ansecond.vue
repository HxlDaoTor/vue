<template>
   <div class="anfst">
          <div class="top"></div>
          <div class="list">
             二级
          </div>
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
.anfst{

}
.anfst .top{
  height: 60px;
  background: #fff;
  margin-top:20px;

  border-bottom: 1px solid #f5f5f5;
}
.anfst .list{
  margin-bottom:10px;
  background: #fff;
  height: 80px;

}
</style>