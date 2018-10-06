<!-- 常见问题页 -->
<template>
   <div class="prob">
     <div class="bdyCot"  v-for='(item,index) in masgTxt'>
        <div class="content"  @click="isKg(index)" :class='item.kg == true? "onk" :""'>
              <p>{{ item.name }}</p>
              <span>≡</span>
        </div>
        <p class="tocp" v-if='item.kg'>{{ item.answer}}</p>
     </div> 

   </div>
</template>

<script>
export default {
  name: 'myWallet',
  data () {         //关联dom上的数据
    return {
       masgTxt:[]

    }
  },
  mounted: function () {  //钩子函数 加载完后执行
     // console.log('ceshi')
    this.changeList()
  },
  methods:{  //计算属性  用来绑定事件

    changeList (){
       let arrObj = [
             {
              name:'百汇网怎样订购',
              answer:'就那样玩',
              kg:false
             },
             {
              name:'哈希夺宝怎么玩？',
              answer:'就那样玩',
              kg:false
             },
              {
              name:'哈希夺宝怎么玩？',
              answer:'就那样玩',
              kg:false
             }
                                                 
       ];

     this.masgTxt =  arrObj; 

    },
    isKg (ev){
      if ( this.masgTxt[ev].kg === true){

           this.masgTxt[ev].kg = false
       }else{

        this.masgTxt[ev].kg = true

       }

    }
     
  
  }

    

}
</script>

<!--        scoped只允许本模板内的样式        -->
<style scoped>  
.prob{
  padding:0 10px 10px;
}
.prob .bdyCot{
  margin-top: 10px;
}
.prob .bdyCot .content{
  background: #fff;
/*  border-radius: 4px;*/
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

}
.prob .bdyCot .content p{
  text-align: left;
}
.prob .bdyCot p.tocp{
  background: #fff;
  border-top: 1px solid #e8e8e8;
  padding: 10px;
  text-align: left;
  color: #999;
  font-size: 14px;
}
.onk{
  color:#999;
}
</style>