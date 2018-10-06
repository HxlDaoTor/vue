<!-- K线组件 -->
<template>
<div class="shipan">
    <div class="top">
         <p>USDT<span style="padding-left: 10px">{{ mybanck }}</span></p>
         <router-link to="/exchang">兑换</router-link>
    </div>
   <div id="min">  
       loading...        
   </div>

<!--                             点击看涨切换的界面 1                        -->

   <div class="connt" v-if = "isOK">

           <p class="txt_a"><span>预期收益:{{ shouyi }}({{ bfb*100 }}%)</span></p>
           <div class="add">
                 <p>下单周期：</p>
                  <div>
                      <button @touchstart="jianEve" >-</button>
                      <input type="tel" v-model="inpNum">
                      <button @touchstart="jiaEve">+</button>
                  </div>
           </div>
           <div class="huagan">
              <div class="ttx">
                   <span>买入量</span>
                   <input type="number" v-model="inpNam">
                   <span>USDT</span>
              </div>
               <div class="handle">

                     <slider :value-fun="sliderVal" :min="10" :max="100"></slider>

               </div> 
           </div>

           <div class="bottom">
              <p>一分钟后价格高于还是低于当前价格<span>{{ btcMony }}</span>？</p>
              <div class="btn">
                     <button @click="upward(idx,$event)" :data-id='idx'>看 涨</button>
                     <button @click="upward(ide,$event)" :data-id='ide'>看 跌</button>
              </div>
           </div>

           <div class="chicang">
                 <p>当你创建订单后，点击“持仓”查看状态<button  @click="chicang">持 仓</button></p>
           </div>

   </div>

  <!--                             点击看涨切换的界面 2                        -->

   <div class="otherCome" v-else>

         <div class="coby" v-for="(list,index) in lists">

           <div v-if="list.daojishi > 0">
                <div class="jiaoge">
                     <div>
                         <p>建仓方向<span class="down_tip">{{ list.trend }}</span></p>
                         <p>建仓价格<span>{{ list.place_value }}</span></p>
                     </div>
                     <div>
                         <p>买入量<span>{{ list.lot }}</span></p>
                         <p>当前价格<span class="in_mony">{{ btcMony }}</span></p>
                     </div>
                </div>
                <div class="jg_zq">交割周期 <span>{{ list.daojishi }}秒</span> </div>
           </div>
           <div class="stop_time" v-else @click="dqresults(index,$event)">
                 <p>{{ list.expect_result_time }}</p>
                 <p>到期结果</p>
           </div>

         </div>
        <div class="coby_foot">
             <p>到期后请点击”到期结果“查看明细</p>
             <button @click='callback'>返 回</button>
        </div>
   </div>

 <!--    到期结果弹窗      -->
 <div class="Popup" v-if='isPopup'>
          <div class="cete">
                   <h3>到期结果</h3>
                   <div class="first">

                        <div>
                            <p>建仓方向<span style="color:#d20a0f;">{{ Popup.trend }}</span></p>
                            <p>建仓时间<span>{{ Popup.place_time }}</span></p>
                            <p>建仓价格<span>{{ Popup.place_value }}</span></p>
                        </div>
                        <div>
                            <p>买入量<span>{{ Popup.lot }}</span></p>
                            <p>平仓时间<span>{{ Popup.result_time }}</span></p>
                            <p>平仓价格<span>{{ Popup.result_value }}</span></p>
                        </div>

                   </div>
                   <div class="last">
                        到期结果<span style="color:#23b6a1">{{ Popup.trans_result_money }}</span>
                   </div>
                   <div class="actd" @click="isOkbtn">
                        <button>知道了</button>
                   </div>
          </div>
 </div>


</div>

</template>

<script>
import { serveip,interfaceUrl  } from '../assets/js/config.js' 
import {setCookie,getCookie} from '../assets/js/cookes.js'
import slider from './solid' 

export default {
  
  data () {         //关联dom上的数据
    return {
      isOK: true,   
      istip:false,             //提示小弹框
      isPopup:false,                  //背景半透明提示框
      tip:'',             //弹框提示语
      idx:'01',     //看涨 id
      ide:'02',       //看跌  id
      btcMony:'获取中...',
      vlueZq: 60  ,        //下单周期        
      buyVal: 1  ,            //买入量

     lists:[]    ,             //列表数据
     Popup:{}   ,                  //弹窗数据
     bfb: 0.85,
     mybanck: '',
     isload:false,      //loading
     loadTxt:''
    }
  },
  components:{

    'slider':slider,

    
  },
  mounted: function () {  //钩子函数 加载完后执行
    //  this.drawLine()
       this.webScokt()
       this.webScoktBck()
  },
  computed:{
        inpNum:{
            get:function(){
                return this.vlueZq;
            
            },
            set:function(newValue){
                this.vlueZq = 60;
                //console.log(newValue)
            }
        },
        inpNam:{
            get:function(){
                return this.buyVal;
            
            },
            set:function(newValue){
               // this.oldNum=newValue.replace(/[^\d]/g,'');
            }

        },
        shouyi (){
           return parseFloat(this.bfb*this.inpNam).toFixed(2) 
        }
  },
  methods:{  //计算属性  用来绑定事件

          sliderVal(min,max,total){
             // console.log(min)
             // console.log(max)
             // console.log(total)
            if( min <= 0){
              this.buyVal = 1
            }else{
              this.buyVal = min              
            }


          },
          upward(eve,$event){                                  //点击看涨  或者看跌
              let that = this;
              let url = interfaceUrl();
              let token1 = getCookie('token1');
              let token2 = getCookie('token2');
              let amount = this.buyVal;        //下单金额
              let goodsid = 2;               //商品id  默认2 比特币
              let trend ;                       //看涨（up）还是看跌(down) 

              if( eve === '01' ){     //点击了看涨

                trend = 'up'

              }else if(eve === '02'){      //点击了看跌

                trend = 'down'

              }

              let zq = this.vlueZq;             //下单周期
              let ordertype = 1                  //下单类型   0 模拟盘  1 实盘   
              let dataZe = { 
                             'token1':token1,
                             'token2':token2,
                             'amount':amount,
                             'goodsid':goodsid,
                             'trend':trend,
                             'zq':zq,
                             'ordertype':ordertype
                           };
                //  console.log(eve)
                // console.log($event.target.dataset.id)

               console.log(zq)
              // var hyc = 10;
              this.isload = true; 
              this.loadTxt = '下单中...';

              this.$http.post(url + '/v1/order/createorder.ashx',dataZe,{emulateJSON: true}).then((res)=>{
                       console.log(res)
                       console.log('看涨数据ok')

                    // clearInterval(sin)
                      
                      if( res.body.code === 1){   //下单成功
                         this.isload = false; 
                         this.isOK = false; 
                         this.lists = res.body.data.list;
                         this.lists.forEach(function(item, index){
                        //   console.log(that.lists[index])
                           
                              if(that.lists[index].daojishi > 0){
 
                              // clearInterval(sin)
                              var  sin =  setInterval(function(){
                                  // console.log('cesh定时器')
                                  that.lists[index].daojishi = that.lists[index].daojishi - 1
                                  if(that.lists[index].daojishi <=0){
                                    clearInterval(sin)
                                   
                                    // that.lists[index].daojishi=0
                                  }
                                },1000)
                              }

                         })


                      }else{

                          this.isload = false; 
                          this.istip = true;  //提示弹窗
                          this.tip  = res.body.message;    //弹窗提示语
                          setTimeout(function(){
                            this.istip = false;  //提示弹窗
                          }.bind(this),800)


                      }


              })

            },
            callback(){           //点击返回

               this.isOK = true;
            },
            isOkbtn(){             //知道了 按钮点击

                this.isPopup = false;

            },
            dqresults(ev,$event){           //点击到期结果事件
                  let list = this.lists; 
                 // console.log(ev)                //传过来的列表索引   index
                 // console.log(list[ev].id)   
 
                  let that = this;
                  let url = interfaceUrl();
                  let token1 = getCookie('token1');
                  let token2 = getCookie('token2');  
                  let goodsid = 2;
                  let ordertype = 1;
                  let orderid = list[ev].id;                   //商品id 通过节点传过来
                  let dataZs = { 
                                 'token1':token1,
                                 'token2':token2,
                                 'orderid':orderid,
                                 'goodsid':goodsid,
                                 'ordertype':ordertype,
                                 'indx': ev
                  };
     
                  this.$http.post(url + '/v1/order/queryorder.ashx',dataZs,{emulateJSON: true}).then((res)=>{

                          console.log(res)
                          if(res.body.code === 200){                     //交割成功

                              this.isPopup = true ;              //显示弹窗
                              this.Popup = res.body.order.data;                   //更新弹窗数据
                              this.lists.splice(ev,1)     //删除数组的这条数据  

                          }else{

                                this.istip = true;  //提示弹窗
                                this.tip  = res.body.message;    //弹窗提示语
                                setTimeout(function(){
                                  this.istip = false;  //提示弹窗
                                }.bind(this),800)

                          }
 
                   }) 
                 

            },
            chicang(){          //点击持仓

                      let url = interfaceUrl();
                      let token1 = getCookie('token1');
                      let token2 = getCookie('token2');
                      let goodsid = 2;               //商品id  默认2 比特币
                      let ordertype = 1                  //下单类型   0 模拟盘  1 实盘
                      let dataZe = { 
                                     'token1':token1,
                                     'token2':token2,
                                     'goodsid':goodsid,
                                     'ordertype':ordertype
                                   };

                      this.$http.post(url + '/v1/order/position.ashx',dataZe,{emulateJSON: true}).then((res)=>{

                             console.log(res)
                             console.log('lllllok')
                            if( res.body.code === 200 ){

                                this.lists = res.body.data.list;
                                this.isOK = false;

                            }else{

                                this.istip = true;  //提示弹窗
                                this.tip  = res.body.message;    //弹窗提示语
                                setTimeout(function(){
                                  this.istip = false;  //提示弹窗
                                }.bind(this),800)

                            }

                      })

            },
                      

         jianEve(){   //减法


           var val = parseInt(this.vlueZq)
           if( this.vlueZq > 60){

             this.vlueZq = val - 30

           }else{

                          this.istip = true;  //提示弹窗
                          this.tip  = '下单周期不能小于60秒';    //弹窗提示语
                          setTimeout(function(){
                            this.istip = false;  //提示弹窗
                          }.bind(this),800)

           }


         },
         jiaEve(){   //加法

            var val = parseInt(this.vlueZq)
            if( this.vlueZq < 900 ){
               this.vlueZq = val + 30
            }else{

                          this.istip = true;  //提示弹窗
                          this.tip  = '下单周期不能大于900秒';    //弹窗提示语
                          setTimeout(function(){
                            this.istip = false;  //提示弹窗
                          }.bind(this),800)
            }

         },

          webScoktBck (){          //查询实时余额

                  let that = this;
                 // let sevip = '47.104.182.218';
                  let token1 = getCookie('token1');
                  let token2 = getCookie('token2');
                  let mm = '{"function":"getmoney","token1":"'+ token1 +'","token2":"'+ token2 +'"}';
                  let  ws3 = new WebSocket("ws://"+ serveip() +":3721");
                     //console.log(ws2)
                  let setints;
                  ws3.onopen = function() {

                    // console.log('成功')
                      ws3.send(mm);
                      setints = setInterval(function () {ws3.send(mm)}, 1000);
                  };
                  ws3.onmessage = function(e) {
                      var data = JSON.parse(e.data);
                    // console.log(data);
                     // console.log('weeeeeeeeeeeeeeee')
                    var money = parseFloat(data.usdtbalance).toFixed(2);
                    //  console.log(money)
                      that.mybanck = money;
                      
                      
                  };
                  
                  ws3.onerror = function(e) { 
                      console.log("Client notified socket has closed",e); 
                    };
                  ws3.onclose = function(e){
                      console.log('usdt-----链接关闭');
                     // location.reload();
                  };

                  that.$router.afterEach(function () {  //监听路由切换
                      ws3.close();
                      clearInterval(setints)
                  })



          },
          webScokt(){
                let set = 0;
                let last = [];
                let data = [];
                let now = [];
                let that = this;
                let sevip = '47.104.182.218';
                let bit = '{"function":"linetime","type":"bitvc","second":"240","interval":1}';
                let  ws = new WebSocket("ws://"+ serveip() +":2786");
                let myChart = that.$echarts.init(document.getElementById('min'));
                   //console.log(ws2)
                let setint;
                ws.onopen = function() {

                    console.log('11成功')
                   ws.send(bit);
        
                  setint =  setInterval(function () {ws.send(bit)}, 1000);

                };
                ws.onmessage = function(e) {
                    var datas = JSON.parse(e.data);
                        set++;
                        last = [];
                        data = [];
                        now = [];
                        // console.log(datas);
                        // console.log('0000000000000000');
                      that.btcMony = datas.data[0].last
                        for(var i=0; i<datas.data.length;i++ )
                        {
                            //alert(i);
                            var res = {
                                value: [
                                    new Date(datas.data[i].mirco_timestamp), //日期
                                    datas.data[i].last //value
                                ]
                            };
                            data.push(res);
                            last.push(datas.data[i].last);
                            now.push(new Date(datas.data[i].mirco_timestamp));
                        }
                        data = data.reverse();
                        last = last.reverse();
                        now = now.reverse();
                     if(set == 1){


                            var    option = {                               
                                     grid: { show: true,left:10,top:10,right:57,height:185,borderColor:'rgba(128, 128, 128, 0.2)'},
                                     tooltip: {},
                                     xAxis: {
                                                type: 'time',
                                                splitLine: {
                                                    show: true,
                                                    lineStyle:{color:'#1D1E23'}
                                             },      
                                     splitNumber:5,
                                     axisLabel:{
                                                    formatter:function (value, index) {
                                                            // 格式化成月/日，只在第一个刻度显示年份
                                                            var date = new Date(value);
                                                            var texts = [that.timeZero(date.getHours()), that.timeZero(date.getMinutes())];
                                                            return texts.join(':');
                                                    
                                                                                      },
                                                     textStyle:{color:'#7E7E84'}
                                     },
                                      boundaryGap: false,
                                      axisLine:{show: false,lineStyle:{color:'#1A1A22'}},
                                      axisTick:{show:true,lineStyle:{color:'#1D1E23'}},
                                      offset:0
                                           },
                                   yAxis: {
                                          type: 'value',
                                          position:'right',
                                          boundaryGap: ['20%', '100%'],
                                          offset:-5,
                                          splitLine: {
                                              show: true,
                                              lineStyle:{color:'#1D1E23'}
                                          },
                                          axisLabel:{
                                              formatter:
                                              function (value, index) {
                                                      // 格式化成月/日，只在第一个刻度显示年份
                                                      return value.toFixed(2);
                                              
                                          },
                                              textStyle:{color:'#7E7E84'},
                                             // borderColor: '#1B92ED'
                                          },
                                          
                                          max:that.getMaxOne(last)+1,
                                          min:that.getMinOne(last)-1,
                                          splitNumber:5,
                                          axisLine:{show: false,lineStyle:{color:'#1A1A22'}},
                                          axisTick:{show:false},
                                          axisLabel:{textStyle:{color:'#7E7E84'},margin:10},
                                          type: 'value'
                                },
                                series: [{
                                            connectNulls:true,
                                            name:'成交',
                                            type:'line',
                                            data:data,
                                            smooth:true,
                                            symbol: 'none',
                                            areaStyle:{
                                               color: {
                                                        type: 'linear',
                                                        x: 0,
                                                        y: 0,
                                                        x2: 0,
                                                        y2: 1,
                                                        colorStops: [{
                                                            offset: 0, color: 'rgba(0, 122, 255, 0.2)' // 0% 处的颜色
                                                        }, {
                                                            offset: 1, color: 'rgba(0, 122, 255, 0.2)' // 颜色
                                                        }],
                                                        globalCoord: false // 缺省为 false
                                                    }

                                            },
                                            lineStyle:{normal:{color:'rgb(33,136,171)','width':1}},   //k线条颜色 粗细
                                            markLine:{
                                                data:[{
                                                    yAxis:data[data.length-1].value[1],
                                                    lineStyle:{normal:{color:'#007AFF','width':1}}
                                                }
                                                ],
                                                symbolSize:0
                                            },
                                            hoverAnimation: true,
                                            markPoint: {
                                                symbol:'circle',
                                                symbolSize:12,
                                                label:{normal:{show:false}},
                                                data: [
                                                {name: '周最低',
                                                 xAxis: now[now.length-1], 
                                                 itemStyle:{normal:{color:'white',borderColor:'rgb(33,136,171)'}},
                                                 yAxis: data[data.length-1].value[1]
                                                }
                                            ]
                                            },
                                            animationDurationUpdate:0

                                  }]
                            };



                      myChart.setOption(option);



                     }     //if 结束


                    var markLinedata = myChart.getOption().series[0].markLine.data;
                    var markPointdata = myChart.getOption().series[0].markPoint.data;
                   // console.log(markPointdata)
                    markLinedata[markLinedata.length - 1].yAxis = data[data.length-1].value[1];
                    markPointdata[markPointdata.length - 1].xAxis = now[now.length-1];
                    markPointdata[markPointdata.length - 1].yAxis = data[data.length-1].value[1];



                  myChart.setOption({
                    //  color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
                      yAxis: {
                          max:that.getMaxOne(last)+1,
                          min:that.getMinOne(last)-1,
                          axisLabel:{
                              show:true,
                              formatter:
                              function (value, index) {
                                      // 格式化成月/日，只在第一个刻度显示年份
                                      return value.toFixed(2);
                              
                                       },
                             textStyle:{color:'#7E7E84'},

                          }
                      },
                      
                      series: [
                      {
                          data: data,
                          markLine:{
                                  data:markLinedata,
                                  symbolSize:2
                                  },
                          markPoint: {
                              symbol:'diamond',
                              symbolSize:8,
                              label:{normal:{show:false}},
                              data: markPointdata
                                 }
                      }]
                  },false);

                   // console.log(datas);
                    //console.log('waaaaaaaaaaaaa')
                  
                    
                };
                
                ws.onerror = function(e) { 
                    console.log("Client notified socket has closed11",e); 
                  };
                ws.onclose = function(e){
                    console.log('11链接关闭');
                   // location.reload();
                };

               that.$router.afterEach(function () {  //监听路由切换
                    ws.close();
                    clearInterval(setint)
                })


          },
         getMaxOne(numbers){
              return Math.max.apply(Math, numbers);
        },
        getMinOne(numbers){
             return Math.min.apply(Math, numbers);
        },
        timeZero(p){
            if(p<10 )
            { 
              return '0'+ p;
            }
            return p;
       }



  }



  }


</script>

<!--        scoped只允许本模板内的样式        -->
<style scoped> 
body{
  background: #0d1014;
} 
.shipan{
  min-height: 100%;
    background: #0b162a; 
}
#min{
/*      width: 320px;*/
    height: 217px;
    position: relative;

    z-index: 0;
    /*background: rgba(0,0,0,.5);*/
 
}

.shipan .top{
    display:flex;
    align-items: center; 
    justify-content: space-between;
     padding:10px;
   background: #272935;
   color: #fff;
  /* font-size: 13px;*/
}
.shipan .top a{
    border-radius: 2px;
    border:none;
    color:#fff;
    background: #3d76b8;
    padding: 4px 6px;
    font-size: 13px;
    height: 25px;
    line-height: 25px;
}
.shipan .connt{
  padding: 0 10px;
}
.shipan .connt p.txt_a{
  margin:5px auto;
/*  border: 1px solid #3d76b8;*/
  border-radius: 4px;
  color: #3d76b8;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  position: relative;
  z-index: 0;
}
.shipan .connt p.txt_a span{
  background: #0b162a;
  padding: 0 15px;
}
.shipan .connt p.txt_a::after{
  content:'';
  position: absolute;
  height: 1px;
  top: 50%;
  background: #11213f;
  margin-top: -1px;
  left: 15px;
  right: 15px;
  z-index: -1;
}
.shipan .connt .add{
  display: flex;
  justify-content:space-between;
  align-items: center;
  color: #c2ceda;
  font-size: 14px;
  margin: 0 6px;
  background: #393c4f;
}
.shipan .connt .add p{
  width: 40%;

}
.shipan .connt .add div{
  display: flex;
  width: 60%;

}
.shipan .connt .add input{
  background: #393c4f;
  height: 40px;
  border: none;
  width: 50%;
  text-align: center;
  color:#c2ceda;

}
.shipan .connt .add button{
  width: 25%;
  border: none;
  background: #2c2f41;
  color: #c2ceda;
  font-size: 16px;
}
.shipan .connt .huagan{
 margin: 10px 6px 0;
/* padding: 0 6px;*/
 padding-bottom: 4px;
 background: #ccc;
 border-radius: 4px;
 overflow: hidden;
}
.shipan .connt .huagan .ttx{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
 /* border-radius: 4px;*/
  background: #e8e8e8;
  color: #999;
  font-size: 14px;
 padding: 0 10px;
}
.shipan .connt .huagan .handle{

  padding: 20px 10px 20px 15px;
}
.shipan .connt .huagan .ttx input{
  background: none;
  border: none;
 height: 100%;
 color: #999;
 font-size: 16px;
 text-align: center;
}
.shipan .bottom{
  margin-top: 10px;
  font-size: 14px;
  padding: 0 6px;
}
.shipan .bottom p{
  color: #7e7e84;
  text-align: left;
  margin-top: 5px;
}
.shipan .bottom p span{
/*  background: #3d76b8;*/
  /*padding: 0 4px;*/
  border-radius: 2px;
  color: #3d76b8;
  margin-left: 4px;
}
.shipan .bottom .btn{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
  height: 40px;
}
.shipan .bottom .btn button{
  width: 48%;
  height: 100%;
  border: none;
  color: #d8e5f1;
  font-size: 14px;
  border-radius: 2px;
}
.shipan .bottom .btn button:first-child{
  background: #048754;

}
.shipan .bottom .btn button:last-child{
  background: #ff5746;
}
.shipan .chicang{
  margin-top: 5px;
  padding: 0 6px 10px;

}
.shipan .chicang p{
  color: #7e7e84;
  font-size: 14px;
  text-align: left;
 display: flex;
 justify-content: space-between;
 align-items: center;
}
.shipan .chicang p button{
  border:none;
  height: 36px;
  margin-left: 10px;
  border-radius: 2px;
  background: #2c2f41;
  width: 70px;
  line-height: 36px;
  color: #c2ceda;
  font-size: 14px;
}
/*             切换界面的样式               */
.shipan .otherCome{
  padding: 10px;

}
.shipan .otherCome .coby{
  margin-bottom: 10px;
padding: 10px 0;
  width: 100%;
  background: #2c2f41;
  border-radius: 2px;
color: #c2ceda;
font-size: 16px;
}
.coby .jiaoge{
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #c2ceda;
  padding:0 10px;
}
.coby .jiaoge div{
  width: 42%;
}
.coby .jiaoge p{
   display: flex;
  justify-content: space-between;
  align-items: center; 
  margin-bottom: 10px;
}
.coby .jiaoge p .down_tip{
  color:#23b6a1;
}
.coby .jiaoge p .in_mony{
  color: #0568d6;
}
.coby .jg_zq span{
  color:#d65523;
}
.otherCome .coby_foot{
  background: rgba(0,0,0,.8);

  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color:#c2ceda
}
.otherCome .coby_foot p{
  width: 80%;
  font-size: 14px;
}
.otherCome .coby_foot button{
  height: 40px;
  width: 80px;
  background: #007aff;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-size: 14px;

}
.coby .stop_time{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #7E7E84;
  font-size: 16px;
  min-height: 80px;
}
.shipan .Popup{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
}
.shipan .Popup .cete{
  position: absolute;
  top: 30%;
  left: 30px;
  right: 30px;
  background: #fff;
  border-radius: 2px;
/*  padding: 10px;*/
}
.shipan .Popup .cete .first,.shipan .Popup .cete .last{
  display: flex;
  justify-content: space-around;
  align-items: center;
 padding: 0 5px;
}
.shipan .Popup .cete .last{
  margin-bottom: 5px;
  justify-content: space-between;
  font-size: 14px;
 /* padding: 0 10px;*/
}
.shipan .Popup .cete .last span{
  display:block;
  width: 45%;
}
.shipan .Popup .cete h3{
  font-size: 16px;
  padding: 3px;
}
.shipan .Popup .cete .first div{
  width: 45%;
}
.shipan .Popup .cete .first p{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
 font-size: 14px;
}
.shipan .Popup .cete .actd{
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 border-top: 1px solid #e8e8e8;
 padding: 10px;
}
.shipan .Popup .cete .actd button{
  height: 30px;
  background: none;
  color: #007aff;
  font-size: 16px;
  border: none;

}
</style>