  <template>
     <div class="foot">
         <router-link to="/home" class='tab_a'  replace>
                 <i :class="message === '0'?'icon-han':'icon-han_a'" class="iconfont" style="height: 30px;line-height:30px;font-size: 28px;"></i>
                 <p>首页</p>
         </router-link>
         <router-link to="/Make" class='tab_b' replace>
                 <i :class="message === '2'?'icon-dl_b':'icon-dl_a'" class="iconfont" style="height: 30px;line-height:30px;font-size: 28px;"></i>
                 <p>分类</p>
          </router-link>
          <router-link to="/carts" class='tab_b' replace>
                 <i :class="message === '3'?'icon-gouwuche2':'icon-gouwuche'" class="iconfont" style="height: 30px;line-height:30px;"></i>
                 <p>购物车</p>
          </router-link>          
          <router-link to="/My" class='tab_b' replace>
                 <i :class="message === '1'?'icon-my_a':'icon-my_b'" class="iconfont" style="height: 30px;line-height:30px;font-size: 28px;"></i>
                 <p>我的</p>
          </router-link>
        <!--   <div><i class="iconfont icon-bj_a"></i></div> -->
          
   </div>
</template>
<script>
export default {
  name:'foot',
  props : ['message'],
  data () {
    return {

    }
  },
   mounted: function () {   //钩子函数 加载完后执行


  },
  methods:{  //计算属性  用来绑定事件

  //    toColor:function() { }
  }
}
</script>
<style>
.tab_a p,.tab_b p{
	margin:0;
}
.foot{
  position: fixed;
  flex:0;
  bottom: 0;
  background: #fff;
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  font-size: 12px;
  color: #666;
  justify-content: space-around;
  align-items: center;
  padding-top: 4px;
 /* border-top: 1px solid #f5f5f5;*/
      box-shadow: 0 0 10px 0 hsla(0,6%,58%,.2);
    -webkit-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.2);
    -moz-box-shadow: 0 0 10px 0 hsla(0,6%,58%,.2);
}
.tab_a,.tab_b{
  display: flex;
  flex-direction: column;

}
.tab_a img,.tab_b img{
	width: 28px;
	height: 28px;
}
.tab_a p,.tab_b p{
	height: 20px;
	line-height: 12px;
}
.foot a{
  color: #9a9a9a;
  text-decoration:none;
  flex:1;
}
.foot a i.icon-gouwuche{
  font-size: 26px;
}
.foot a i.icon-gouwuche2{
  font-size: 24px;
}
</style>