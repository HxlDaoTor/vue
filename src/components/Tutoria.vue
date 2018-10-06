<!-- 模板 -->
<template>
   <div>
<!--       <h4 class="divtop">{{ $t('message.tour.act') }}</h4> -->
      <div class="imgs">
          <img :src="topimg" width='100%'>
      </div>
      <div class="by">
        <p class="toop">{{ $t('message.tour.toip_v') }}</p>
        <div class="rule">
                 <h4>{{ $t('message.tour.rul') }}</h4>
                  <p><img :src="tipmg" alt="">{{ $t('message.tour.rus') }} <i>0</i>,<i>1</i>,<i>2</i>,<i>3</i>,<i>4</i>{{ $t('message.tour.wx') }}</p>
                <p><img :src="tipmg" alt="">{{ $t('message.tour.rub') }} <i>5</i>, <i>6</i>,<i>7</i>, <i>8</i>,<i>9</i>{{ $t('message.tour.wd') }}</p>
              <p><img :src="tipmg" alt="">{{ $t('message.tour.itxt_v') }}</p>
              <p><img :src="tipmg" alt="">{{ $t('message.tour.bot_v') }}</p>
              <h4>{{ $t('message.tour.que') }}</h4>
              <p><img :src="tipmg" alt="">{{ $t('message.tour.ift_v') }}</p>
              <p><img :src="tipmg" alt="">{{ $t('message.tour.ifurl') }}</p>
        </div>
        <div style="background:#fff;padding:15px;" class="allimg">
            <h2>1</h2>
            <img :src="img1" width="100%">
            <h2>2</h2>
            <img :src="img2" width="100%">
            <h2>3</h2>
            <img :src="img3" width="100%">
            <h2>4</h2>
            <img :src="img4" width="100%">
            <h2>5</h2>
            <img :src="img5" width="100%">
        </div>
      </div>    
   </div>
</template>

<script>
import {setCookie,getCookie} from '../assets/js/cookes.js' 
import { serveip,interfaceUrl,interfaceUrl_a } from '../assets/js/config.js'
export default {
  name: 'Hello',
  data () {         //关联dom上的数据 
    return {
      img1:'/static/imgs/en_a.png',
      img2:'/static/imgs/en_e.png', 
      img3:'/static/imgs/en_b.png',
      img4:'/static/imgs/en_c.png',
      img5:'/static/imgs/en_d.png',
      topimg:'/static/imgs/topher_en.jpg',
      tipmg:'/static/imgs/tip.png'
        
    }
  },
  mounted: function () {  //钩子函数 加载完后执行
     setCookie('isTutor',1,1000*60);
     this.isTutorEv();
     if(this.$i18n.locale == 'cn'){
      this.img1 = '/static/imgs/tp_a.png';
      this.img2 = '/static/imgs/tp_e.png'; 
      this.img3 = '/static/imgs/tp_b.png';
      this.img4 = '/static/imgs/tp_c.png';
      this.img5 = '/static/imgs/tp_d.png' ;
      this.topimg = '/static/imgs/topher.jpg';
     }
  },
  methods:{  //计算属性  用来绑定事件

    isTutorEv(){
            let url = interfaceUrl();
            let token1 = getCookie('token1');
            let token2 = getCookie('token2'); 
            let data = { 
                             'token1':token1,
                             'token2':token2
            };
            this.$http.post(url + '/v1/user/addjiaochengUser.ashx',data,{emulateJSON: true}).then((res)=>{

              console.log(res)

            })

    }
     
  

    }

}
</script>

<!--        scoped只允许本模板内的样式        -->
<style scoped>  
.imgs{
  width: 100%;

}
.imgs img{
  vertical-align: middle;

}
h4.divtop{
  text-align: center;
  font-weight: normal;
  font-size: 20px;
  margin: 0 0 20px 0;
  height: 80px;
  line-height: 80px;
  color: #fff;
  background:-webkit-linear-gradient(right top,#4a4fe4,#4a93f9);
}
.by p{
  font-size: 14px;
  line-height: 22px;
  color:#9a9a9a;
  text-align: left;
  background: #fff;
  padding:0 15px;
}
.by p.toop{
  padding:20px 15px 0;
}
.by p em{
  font-style: normal;
  color: #4a93f9;
}
.by div.rule{
  background: #fafafa;
/*  padding: 20px;*/
/*  margin: 10px 0;*/
  text-align: center;
  border-radius: 10px;
}
.by div.rule i{
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
/*  background: #4a93f9;*/
  border-radius: 100px;
  font-style: normal;
  color: #666;
  margin: 0 2px;
  font-size: 16px;
  font-weight: bold;
}
.by div.rule h4{
  background: #fff;
  padding:20px 0 6px;
  font-size: 16px;
}
.by div.rule img{
  width: 14px;
  height: 14px;
  vertical-align: middle;
  margin-right: 6px;
}
.allimg h2{
  font-size: 24px;
  color:#2673f5;
  padding:20px 10px 4px;
  border-bottom: 3px solid #2673f5;
  width: 15px;
  margin:10px auto;
}
</style>