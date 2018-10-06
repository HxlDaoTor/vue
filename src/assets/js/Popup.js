//弹窗组件 插件

import TipComponent from '../../components/pop'
import LodComponent from '../../components/loading'
const Tip = {};
// 注册Toast
Tip.install = function (Vue) {
  // 生成一个Vue的子类
  // 同时这个子类也就是组件
  const TipConstructor = Vue.extend(TipComponent)   //扩展组件方法
  // 生成一个该子类的实例
  const instance = new TipConstructor();
  // 将这个实例挂载在我创建的div上
  // 并将此div加入全局挂载点内部
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  // 通过Vue的原型注册一个方法
  // 让所有实例共享这个方法 
  //Animal.prototype.constructor = Animal;
  Vue.prototype.$tip = (msg, duration = 1500) => {
    instance.message = msg;
    instance.visible = true;
    setTimeout(() => {
      instance.visible = false;
    }, duration);
  }


   //加载中插件
  const LodConstructor = Vue.extend(LodComponent);  
  const lodinstance = new LodConstructor();
  lodinstance.$mount(document.createElement('div'));
  document.body.appendChild(lodinstance.$el); 
  Vue.prototype.$lod = (msg) => {
    if(msg){
        lodinstance.loa = msg;
        lodinstance.visible = true;
    }else{
        lodinstance.loa = '';
        lodinstance.visible = false;
    }
         
  }

}

export default  Tip


