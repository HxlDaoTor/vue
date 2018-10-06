<!-- 模板 -->
<template>
   <div class="goodsList">
      <div class="nav">
         <div class="sloe">
           <p>全部</p>
           <p>饮料</p>
           <p>矿泉水</p>
           <p>酒水</p>
           <p>副食</p>
           <p>日化</p>
         </div>
      </div>
      <div class="smallClass">
        <span>康师傅</span>
        <span>伊利</span>
        <span>康师傅</span>
        <span>可口可乐</span>
        <span>百事可乐</span>
        <span>雪碧</span>
        <span>芬达</span>
      </div>
      <div class="lists">

                <div class="goodd" v-for="item in simData">
                <router-link to="/details" >
                   <img :src="item.img" alt="">
                   <div class="desc">
                       <p>{{ item.goodName }}</p>
                       <div class="compu">
                            <div class="nam">
                               <span class="mony">￥{{ item.number*item.price }}</span>
                               <span>{{ item.jifen }}积分</span> 
                            </div>
                            <div class="num">
                                 <span @click.prevent='add(item)'>+</span>
                                 <input type="number" v-model='item.number' disabled>
                                 <span @click.prevent='subt(item)'>-</span>
                                 <button>订购</button>
                            </div>
                       </div>
                   </div>
                </router-link>
               </div>  

      </div>

   </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {         //关联dom上的数据
    return {
      msg: '',
      simData:[
          {
            img:'http://m.360buyimg.com/mobilecms/s276x276_jfs/t19081/281/2201765030/347037/431510d3/5aead14cNbe1f9dc0.jpg!q70.jpg',
            goodName:'佐登驰防晒衣女中长款宽松轻薄带帽学生外套2018夏季新品韩版宽松大码沙滩服长袖户外休闲运动服风衣 灰蓝色 M适合85-100斤',
            price:20,
            number:1,
            id:'001',
            jifen:20,
          },
          {
          img:'https://m.360buyimg.com/babel/jfs/t22810/230/1459781956/408714/c83161f8/5b612178Nf1a5c33b.jpg!q70.jpg',
            goodName:'佐登驰防晒衣女中长款宽松轻薄带帽学生外套2018夏季新品韩版宽松大码沙滩服长袖户外休闲运动服风衣 灰蓝色 M适合85-100斤',
            price:30,
            number:20,
            id:'002',
            jifen:30,
          },
          {
          img:'https://m.360buyimg.com/babel/jfs/t22810/230/1459781956/408714/c83161f8/5b612178Nf1a5c33b.jpg',
            goodName:'佐登驰防晒衣女中长款宽松轻薄带帽学生外套2018夏季新品韩版宽松大码沙滩服长袖户外休闲运动服风衣 灰蓝色 M适合85-100斤',
            price:40,
            number:5,
            id:'003',
            jifen:40,
          },  
          {
          img:'https://m.360buyimg.com/babel/jfs/t22810/230/1459781956/408714/c83161f8/5b612178Nf1a5c33b.jpg',
            goodName:'佐登驰防晒衣女中长款宽松轻薄带帽学生外套2018夏季新品韩版宽松大码沙滩服长袖户外休闲运动服风衣 灰蓝色 M适合85-100斤',
            price:40,
            number:5,
            id:'003',
            jifen:40,
          },                    
      ]

    }

  },
  mounted: function () {  //钩子函数 加载完后执行
   
  },
  methods:{  //计算属性  用来绑定事件

        add(item){
          if(item.number < 50)
           item.number +=1
        },
        subt(item){
          if(item.number  > 1)
            item.number -=1
        },
     
  
  }

}
</script>

<!--        scoped只允许本模板内的样式        -->
<style scoped>  
.goodsList .nav{
  width: 100%;

  height: 50px;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
  /*overflow: hidden;*/

  overflow-x: auto;
}
.goodsList .nav .sloe{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140% ;
  height:100%;
}
.goodsList .nav p{
  width: 20%;
}
.goodsList .lists{

  background: #fff;
  overflow: hidden;
}

.goodsList .goodd a{
width: 100%;

display: flex;
justify-content: space-between;
padding:10px 10px;
box-sizing: border-box;
background: #fff;
border-bottom: 1px solid #f5f5f5;
}
.goodsList .goodd img{
  width: 100px;
  height: 100px;
  vertical-align: middle;

}
.goodsList .goodd p{
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
.goodsList .goodd .desc .compu .nam{
/*  display: flex;
  justify-content: space-between;
  align-items: center;*/
  margin-top: 10px;
  padding:0 10px;
  text-align: left;
}
.goodsList .goodd .desc .compu .nam span:first-child{
  color:#f23030;
}
.goodsList .goodd .desc .compu .nam span:last-child{
  background: #f5f5f5;
  border-radius: 4px;
  padding:2px 6px;
  margin-left: 10px;
  font-size: 14px;
  color:#9a9a9a;
}
.compu .num{
display: flex;
/*justify-content:space-between;*/
align-items: center;
flex-direction:row;
height: 30px;
line-height: 30px;
padding-left:6px;
margin-top:6px;
}
.compu .num span{
  width: 30px;
  border: 1px solid #ddd;
 height: 100%;

}
.compu .num input{
  width: 30%;
  height: 100%;
  border:none;
  background: #f5f5f5;
  border-top:1px solid #ddd;
  border-bottom:1px solid #ddd;
  text-align: center;
  border-radius: 0;

}
.compu .num button{
  /*background: -webkit-linear-gradient(right top, #e4393c , #ff5400);*/
  background: #ff5400;
  border: none;
  padding: 4px 15px;
  margin-left: 20px;
  color:#fff;
  height: 30px;
  border-radius: 2px;
}
.goodsList .smallClass{

  /*width: 100%;*/

  padding:0 10px 10px;
  background: #f9f9f9;
  border-bottom: 1px solid #f5f5f5;
  overflow: hidden;
 

}
.goodsList .smallClass span{
  background: #f2f2f7;
  display: block;
  float: left;
  margin:10px 10px 0 0;
  padding: 0 5px;
  font-size: 12px;
    height: 25px;
    line-height: 25px;
    color: #666;
    background-color: #f2f2f7;
    border-radius: 2px;
    min-width: 20%;
    box-sizing:border-box;
}
</style>