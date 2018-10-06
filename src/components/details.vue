<!-- 详情页 -->
<template>
   <div class="details">
         <div class="banner">
                   <swiper :options="swiperOption" ref="mySwiper" >  
                     <swiper-slide>
                          <img src="/static/img/yinliao_a.jpg" alt="">

                     </swiper-slide>

                     <swiper-slide>
                           <img src="/static/img/yinliao_b.jpg" alt="">

                     </swiper-slide>

                            
                </swiper>
                <div class="swiper-pagination"></div>      
             
         </div>
         <div class="descr">
                <div class="nam">
                   <p>脉动水蜜桃味600ml*15瓶</p>
                   <p class="price">￥46.00</p> 
                </div>
                <div class="spec">
                   <p><span>赠送积分：</span>20</p> 
                   <p><span>建议零售价：</span> 3.00元/瓶(袋)72.00元/件(盒)</p>
                </div>  
                <div class="deta">
                    <h4>商品详细信息：</h4>
                     <div class="list">
                           <ul>
                             <li>
                                 <p><span>产品名称：</span>脉动水蜜桃600ml*15瓶</p>
                                 <p><span>产地：</span>中国</p>
                             </li>
                             <li>
                                  <p><span>条形码：</span>26245488</p>
                                  <p><span>包装规格：</span>600ml*15瓶</p>
                             </li>
                             <li>
                                  <p><span>保质期：</span>12个月</p>
                                  <p><span>口味：</span>功能饮料</p>
                             </li>
                             <li>
                                <p><span>生产日期：</span>见实物</p>
                                <p><span>品牌：</span>脉动</p>
                             </li>
                           </ul>
                     </div>
               </div>              
         </div>

      <div class="addCarts">
               <div class="num">
                     <p>数量(件)：</p>
                     <span @click='computedNum("add")'>+</span>
                     <input type="number" v-model='cartNumber' disabled>
                     <span @click='computedNum("red")'>-</span>
               </div>
              <button>加入购物车</button>    
      </div>
    <!-- 弹窗 -->
    <div class="pop" v-show='pop'>
               <div class="contet">
                      <span class="close" @click='pop = false'>×</span>
                     <div class="describe">
                       <h5>商品已成功加入购物车</h5>
                       <p>您的购物车已有<span>26</span>件商品</p>

                     </div>
                     <div class="btn">
                         <button>查看购物车</button>
                         <button>继续购物</button>
                     </div>
               </div>
    </div>

   </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')
export default {
  data () {         //关联dom上的数据
    return {
      msg: '',
      pop:true,      
      cartNumber:1,
      swiperOption: {
       autoplay:false,
       loop:true,
       setWrapperSize :true,
       pagination : {
                    el:'.swiper-pagination',
                    // bulletElement : 'li',
                    },
       paginationClickable :true,
       // scrollbar:'.swiper-scrollbar',
       mousewheelControl : true,
       observeParents:true,
       debugger: true,

     },

    }
  },
  components:{
     'swiper':swiper,
    'swiperSlide':swiperSlide,    
  },
  computed:{
  swiper() {
     return this.$refs.mySwiper.swiper
   }
  },
  mounted: function () {  //钩子函数 加载完后执行

    // this.$lod('加载中')


  },
  methods:{  //计算属性  用来绑定事件

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
        
       }

  }
     
  
  }
</script>

<!--        scoped只允许本模板内的样式        -->
<style scoped>  
.banner{
  position: relative;
        box-shadow: 0 0 10px 0 hsla(0,6%,58%,.2);
    -webkit-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.2);
    -moz-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.2);
    z-index: 1;
}
.banner img{
  width: 100%;
  vertical-align: middle;
}
.banner .swiper-pagination{ 
/*  分页器小点*/
bottom:10px;
width: 100%;

}
.descr .nam{
  background: #fff;
  padding:15px 10px;
  position: relative;
}
.descr .nam::after,.descr .spec::after{
  content: '';
  position:absolute;
  height: 1px;
  background: #f5f5f5;
  left: 10px;
  right: 10px;
  bottom: 0;
}
.descr .nam p{
  text-align: left;
}
.descr .nam p.price{
  color:#f23030;
}
.descr .spec{


  background: #fff;
  padding:10px 10px;
  font-size: 12px;
  position:relative;
}
.descr .spec p{
  text-align: left;
  line-height: 22px;
}
.descr .spec p span{
    color:#9a9a9a;
}
.descr .deta{
  background: #fff;
  padding:10px 10px;
  font-size: 14px;
  position:relative; 
  text-align: left; 
  margin-bottom: 60px;
}
.descr .deta h4{

  font-size: 14px;
  color:#9a9a9a;

}
.descr .deta p{

}
.descr .deta .list{

}
.descr .deta .list li{
  display: flex;
  justify-content:space-around;
  align-items: center;

}
.descr .deta .list li p{
text-align: left;
font-size: 12px;
line-height: 22px;
}
.descr .deta .list li p span{
  color:#9a9a9a;
}
.descr .deta .list li p:first-child{
  width: 60%;
}
.descr .deta .list li p:last-child{
  width:40%;
}
.addCarts{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #fff;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content:space-between;
  align-items: center;
}
.addCarts button{
  background: #e4393c;
  width: 40%;
  border:none;
  color:#fff;
  height: 100%;
  font-size: 16px;
}
.addCarts .num{
display: flex;
/*justify-content:space-between;*/
align-items: center;
flex-direction:row;
height: 35px;
line-height: 35px;
padding-left:10px;
}
.addCarts .num span{
  width: 35px;
  border: 1px solid #ddd;
 height: 100%;

}
.addCarts .num input{
  width: 30%;
  height: 100%;
  border:none;
  background: #f5f5f5;
  border-top:1px solid #ddd;
  border-bottom:1px solid #ddd;
  text-align: center;
}
.details .pop{
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
 z-index: 11;
}
.details .pop .contet{
  background: #fff;
  border-radius: 10px;
  height: 180px;
  width: 70%;
  position: relative;
    overflow: hidden;
}
.details .pop .contet span.close{
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
.details .pop .contet .describe{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 74%;
}
.details .pop .contet .btn{
  display: flex;
  justify-content:space-between;
  align-items: center;
  border-top: 1px solid #f5f5f5;
  height: 26%;
  position: absolute;
  bottom:0;
  left: 0;
  right: 0;

}
.details .pop .contet .btn button{
  background: none;
  border:none;
  width: 50%;
  height: 100%;
}
.details .pop .contet .btn button:first-child{
  border-right: 1px solid #f5f5f5;
}
.details .pop .contet .btn button:last-child{
 background: #fbb152;
 color:#fff;
}
</style>