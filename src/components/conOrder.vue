<!-- 模板 -->
<template>
   <div class="conOrder">
        <div class="top">
           <h5>收货信息：</h5>
           <p class='mallName'><span>店铺名称：</span>龙龙商行</p>
           <div class='detail'>
              <p><span>收货人：</span>李云龙</p>
              <p><span>电话：</span>15809425635</p>
           </div>
            <p class='mallName'><span>地址：</span>蓝天华庭20154室</p>
        </div> 
        <div class="pay">
           <h5>支付方式</h5> 
           <p>货到付款</p>
        </div> 
        <div class="goodsList">
                <div class="goodd" v-for="item in simData">
                   <img :src="item.img" alt="">
                   <div class="desc">
                       <p>{{ item.goodName }}</p>
                       <div class="compu">
                            <div class="nam">
                               <span class="mony">￥{{ item.number*item.price }}</span>
                               <span>×{{ item.number }}</span> 
                            </div>
                            <div class="num">

                            </div>
                       </div>
                   </div>
               </div>  
        </div>  

        <div class="sett">
            <div class="elemt">
       <!--            <p><span>种类（钟）：</span>19</p> -->
                  <p><span>数量（件）：</span>36</p>
                  <p><span>总金额：</span>￥{{ price }}</p>
            </div>
            <button @click='ssubOrder'>提交订单</button>
        </div>
   </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {         //关联dom上的数据
    return {
      msg: '',
      price:260,
      simData:[
          {
            img:'http://m.360buyimg.com/mobilecms/s276x276_jfs/t19081/281/2201765030/347037/431510d3/5aead14cNbe1f9dc0.jpg!q70.jpg',
            goodName:'佐登驰防晒衣女中长款宽松轻薄带帽学生外套2018夏季新品韩版宽松大码沙滩服长袖户外休闲运动服风衣 灰蓝色 M适合85-100斤',
            price:20,
            number:1,
            id:'001',
            checked:true
          },
          {
          img:'https://m.360buyimg.com/babel/jfs/t22810/230/1459781956/408714/c83161f8/5b612178Nf1a5c33b.jpg',
            goodName:'佐登驰防晒衣女中长款宽松轻薄带帽学生外套2018夏季新品韩版宽松大码沙滩服长袖户外休闲运动服风衣 灰蓝色 M适合85-100斤',
            price:30,
            number:20,
            id:'002',
            checked:true
          },
          {
          img:'https://m.360buyimg.com/babel/jfs/t22810/230/1459781956/408714/c83161f8/5b612178Nf1a5c33b.jpg',
            goodName:'佐登驰防晒衣女中长款宽松轻薄带帽学生外套2018夏季新品韩版宽松大码沙滩服长袖户外休闲运动服风衣 灰蓝色 M适合85-100斤',
            price:40,
            number:5,
            id:'003',
            checked:true
          },          
      ]

    }
  },
  mounted: function () {  //钩子函数 加载完后执行
  
  },
  methods:{  //计算属性  用来绑定事件
  ssubOrder(){

  }
     
  
  }

}
</script>

<!--        scoped只允许本模板内的样式        -->
<style scoped>  
.conOrder .top{
background: #fff;
border-bottom: 1px solid #f5f5f5;
padding:10px;
}
.conOrder .top .mallName{
  font-size: 14px;
  text-align: left;
}
.conOrder .top p{
  line-height: 22px;
}
.conOrder .top h5,.conOrder .pay h5{
font-size: 16px;
text-align: left;
color:#9a9a9a;
}
.conOrder .top .detail{
 display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
}
.conOrder .top .detail p{
  margin-right:15px;
}
.conOrder .top .detail span,.conOrder .top .mallName span{
  color:#9a9a9a;
}
.conOrder .pay{
  background: #fff;

  padding:10px;
}
.conOrder .pay p{
  color:#9a9a9a;
  font-size: 14px;
  text-align: left;
  line-height: 22px;
}
.conOrder .goodsList{
  margin: 10px 0 50px;
}
.conOrder .goodsList .goodd{
width: 100%;

display: flex;
justify-content: space-between;
padding:10px 10px;
box-sizing: border-box;
background: #fff;
border-bottom: 1px solid #f5f5f5;
}
.conOrder .goodsList .goodd img{
  width: 80px;
  height: 80px;
  vertical-align: middle;

}
.conOrder .goodsList .goodd p{
  overflow: hidden;
  text-overflow: ellipsis;
  height: 31px;
  word-break: break-word;
  font-size: 14px;
  line-height: 16px;
  padding:0 6px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  text-align: left;
}
.conOrder .goodsList .goodd .desc .compu .nam{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding:0 10px;
}
.conOrder .goodsList .goodd .desc .compu .nam span{
  color:#f23030;
}
.conOrder .sett{
  background: #fff;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 111;
/*  border-bottom:1px solid #f5f5f5;*/
      box-shadow: 0 0 10px 0 hsla(0,6%,58%,.2);
    -webkit-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.2);
    -moz-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.2);

}
.conOrder .sett div.elemt{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  font-size: 14px;
  padding:0 10px;
}

.conOrder .sett div.elemt p span{
  color:#9a9a9a;
}
.conOrder .sett div.elemt p:last-child{
  color:#f23030;
}
.conOrder .sett button{

  width: 40%;
  border:none;
  color:#fff;
  height: 100%;
  font-size: 16px;
   background: -webkit-linear-gradient(right top, #e4393c , #ff5400);
}
</style>