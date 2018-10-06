<!-- 模板 -->
<template>
   <div class="cart">

        <div class="nav">
          <p>购物车</p>
        </div>
        <div class="cartList">


           <div class="goods" v-for="item in simData">
               <div class="options">
      <input  type="checkbox"  :value="item.id" :checked='item.checked' @click='checked(item.id,$event)'>
                  <!-- <label for="jec">{{ checkedNames }}</label> -->
               </div>
               <div class="goodd">
                   <img :src="item.img" alt="">
                   <div class="desc">
                       <p>{{ item.goodName }}</p>
                       <div class="compu">
                            <span class="mony">￥{{ item.number*item.price }}</span>
                            <div class="num">
                                 <span @click='add(item)'>+</span>
                                 <input type="number" v-model='item.number' disabled>
                                 <span @click='subt(item)'>-</span>
                             </div>
                       </div>
                   </div>
               </div>
           </div> 

        </div>
        <div class="sett">
            <div class="elemt">
                  <div class="allcheck">
                       <input  type="checkbox" id='check' value="jec" :checked='allChecked' @click='allCheck'>
                       <label for='check'>全选</label>
                  </div>
                  <p>合计：<span>￥{{ price }}</span></p>
            </div>
            <button @click='settlenent'>去结算</button>
        </div>

    <!-- 弹窗 -->
    <div class="pop" v-show='pop'>
               <div class="contet">
                     <!--  <span class="close" @click='pop = false'>×</span> -->
                     <div class="describe">
                    <!--    <h5>商品已成功加入购物车</h5> -->
                       <p>确认删除该商品吗？</p>

                     </div>
                     <div class="btn">
                         <button @click='pop = false'>我再想想</button>
                         <button>确定</button>
                     </div>
               </div>
    </div>        
    <foot :message='msg'></foot>
   </div>
</template>

<script>
import foot from './foot'
export default {
  name: 'carts',
  data () {         //关联dom上的数据
    return {
      msg: '3',
      cartNumber:1,
      allChecked:true,
      pop:true,
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
            number:1,
            id:'002',
            checked:true
          },
          {
          img:'https://m.360buyimg.com/babel/jfs/t22810/230/1459781956/408714/c83161f8/5b612178Nf1a5c33b.jpg',
            goodName:'佐登驰防晒衣女中长款宽松轻薄带帽学生外套2018夏季新品韩版宽松大码沙滩服长袖户外休闲运动服风衣 灰蓝色 M适合85-100斤',
            price:40,
            number:1,
            id:'003',
            checked:true
          },          
      ]

    }
  },
  components:{
    'foot': foot
    
  },
  computed:{
    price(){
      let list = this.simData.filter(function(item){
           return  item.checked == true;
      });
      let pr = 0;
      for(var i=0; i<list.length; i ++){

         pr += list[i].number* list[i].price

      }   
      return pr
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
      computedNum(ev){
             let num  = this.cartNumber;
             if(ev === 'add'){

               if(num < 50){
                 this.cartNumber ++               
               }else{
                this.$tip("单次订购不能大于50件");
               }

             }else if(ev === 'red'){
                if(num > 1)
                this.cartNumber --
              
             }
        
       },
       checked(id,ev){     //单选

       // console.log(ev.target.checked)
        //console.log(id)  
        let list = this.simData;
        for(var i=0; i<list.length; i++){
          if(list[i].id == id){
             list[i].checked = ev.target.checked
             break
          }
        }
        if(ev.target.checked == false){  //取消选定
             this.allChecked = false
        }

       },
       allCheck(ev){           //全选
          let list = this.simData;
          this.allChecked = ev.target.checked;
          if(ev.target.checked){

               for(let i=0; i<list.length; i++ ){

                  list[i].checked = true;
               }  

          }
 

       },
       settlenent(){
        this.$router.push({path:'/conOrder',query:{id:'0125'}});
       }
     
  
  }

}
</script>

<!--        scoped只允许本模板内的样式        -->
<style scoped>  
.cart .nav{
  height: 45px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart .nav p{
  padding:0 15px;
}
.cartList{
  margin-bottom: 180px;
}
.cartList .goods{
  max-height: 150px;
  border-radius: 10px;
  background: #fff;
  margin:10px 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
      box-shadow: 0 0 12px 0 hsla(0,6%,58%,.1);
    -webkit-box-shadow: 0 0 12px 0 hsla(0,6%,58%,.1);
    -moz-box-shadow: 0 0 12px 0 hsla(0,6%,58%,.1);
}
.cartList .goods .options{
  width: 12%;

  height: 100%;
}
.cartList .goods .options input[type='checkbox'],.sett input[type='checkbox']{

    -webkit-appearance: none;

    vertical-align:middle;
    margin-top:0;
    background:#fff;
    border:#999 solid 1px;
    border-radius: 50%;
    min-height: 20px;
    min-width: 20px;
}
.cartList .goods .options input[type='checkbox']:checked,.sett input[type='checkbox']:checked{

    background: #fe2e46;
    position: relative;
    border:none;
}
.cartList .goods .goodd{
width: 88%;
height: 100%;
display: flex;
justify-content: space-between;
padding:10px 0;
box-sizing: border-box;

}
.cartList .goods .options input[type='checkbox']:checked::after,.sett input[type='checkbox']:checked::after{
    content: '';
    top: 5px;
    left: 5px;
    position: absolute;
    background: transparent;
    border: #fff solid 2px;
    border-top: none;
    border-right: none;
    height: 4px;
    width: 8px;
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg); 
    transform: rotate(-45deg);
}
.cartList .goods .goodd img{
  width: 100px;
  height: 100px;
  vertical-align: middle;

}
.cartList .goods .goodd p{
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
.desc .compu{

  margin-top: 10px;
}
.desc .compu .mony{
  color:#f23030;
  display: block;
  text-align: left;
  padding-left:6px;
  line-height: 22px;
  height: 22px;
}
.compu .num{
display: flex;
/*justify-content:space-between;*/
align-items: center;
flex-direction:row;
height: 30px;
line-height: 30px;
padding-left:6px;
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
.cart .sett{
  background: #fff;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  z-index: 111;
  border-bottom:1px solid #f5f5f5;

}
.cart .sett div.elemt{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  font-size: 14px;
  padding:0 10px;
}
.cart .sett div.elemt p span{
  color:#f23030;
}
.cart .sett button{

  width: 40%;
  border:none;
  color:#fff;
  height: 100%;
  font-size: 16px;
   background: -webkit-linear-gradient(right top, #e4393c , #ff5400);
}
.cart .pop{
    width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 background: rgba(0,0,0,.4);
 z-index: 1111;
}
.cart .pop .contet{
  background: #fff;
  border-radius: 4px;
  height: 120px;
  width: 60%;
  position: relative;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0,.2);

}
.cart .pop .contet span.close{
  font-size: 24px;
  position: absolute;
  top: 4px;
  right: 4px;
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  color:#9a9a9a;
}
.cart .pop .contet .describe{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 74%;
}
.cart .pop .contet .btn{
  display: flex;
  justify-content:space-between;
  align-items: center;
  border-top: 1px solid #f5f5f5;
  height: 35%;
  position: absolute;
  bottom:0;
  left: 0;
  right: 0;

}
.cart .pop .contet .btn button{
  background: none;
  border:none;
  width: 50%;
  height: 100%;
}
.cart .pop .contet .btn button:first-child{
  border-right: 1px solid #f5f5f5;
}
.cart .pop .contet .btn button:last-child{
 background: #fbb152;
 color:#fff;
}
input::-webkit-input-placeholder{
  color:#afafaf;
  font-size:14px;
}
</style>