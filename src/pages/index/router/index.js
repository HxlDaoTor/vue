
import Vue from 'vue' /* 引用vue文件 */
import Router from 'vue-router' /* 引用vue路由模块，并赋值给变量Router */ 
const My = r => require.ensure([], () => r(require('@/components/My')))
const Make = r => require.ensure([], () => r(require('@/components/Make')))
const carts = r => require.ensure([], () => r(require('@/components/goodsCart')))
const angn = r => require.ensure([], () => r(require('@/components/angn')))
const HelloWorld = r => require.ensure([], () => r(require('@/components/HelloWorld')))
const ceshi = r => require.ensure([], () => r(require('@/components/ceshi')))
const login = r => require.ensure([], () => r(require('@/components/login')))
const reg = r => require.ensure([], () => r(require('@/components/reg')))
const topup = r => require.ensure([], () => r(require('@/components/topUp')))
//const shipan = r => require.ensure([], () => r(require('@/components/shipan')))
const withdra = r => require.ensure([], () => r(require('@/components/withDra')))
const drop = r => require.ensure([], () => r(require('@/components/drop')))
const myRecord = r => require.ensure([], () => r(require('@/components/My/myRecord')))
const myProb = r => require.ensure([], () => r(require('@/components/My/myProb')))
const contact = r => require.ensure([], () => r(require('@/components/My/callWe')))
//const anfst = r => require.ensure([], () => r(require('@/components/My/anfirst')))
//const ansecd = r => require.ensure([], () => r(require('@/components/My/ansecond')))
//const tradList = r => require.ensure([], () => r(require('@/components/My/tradList')))
const active = r => require.ensure([], () => r(require('@/components/active')))
const Tutorial = r => require.ensure([], () => r(require('@/components/Tutoria')))
const backPassword = r => require.ensure([], () => r(require('@/components/backPass')))
const setUp = r => require.ensure([], () => r(require('@/components/setUp')))
const promotelist = r => require.ensure([], () => r(require('@/components/prom')))
const details = r => require.ensure([], () => r(require('@/components/details')))
const conOrder = r => require.ensure([], () => r(require('@/components/conOrder')))
const goodsList = r => require.ensure([], () => r(require('@/components/goodsList')))
//import {setCookie,getCookie} from '../../assets/js/cookes.js'
Vue.use(Router) /* 使用路由 */ 
 const router = new Router({ 
    mode: 'history',
 	routes: [ /* 进行路由配置，规定“/”引入到Hello组件  */ 
    { 
	  path: '/', 
      redirect: 'login' ,            //重定向
	},
	{ 
	  path: '/home', 
	  name: 'home', /**/ 
	  component: HelloWorld,/* 注册Hello组件 */ 
	  meta: { title: "百汇网" }

	},
	{ 
	  path: '/My',              //--------------------------------------
	  name: 'My', /*  */ 
	  component: My,
      meta: { title: "TxHashbet-Presonal" }
	},
	{ 
	  path: '/carts',              //--------------------------------------
	  name: 'carts', /*  */ 
	  component: carts,
      meta: { title: "百汇网-购物车" }
	},	
	{ 
	  path: '/details',              //--------------------------------------
	  name: 'details', /*  */ 
	  component: details,
      meta: { title: "商品详情" }
	},
	{ 
	  path: '/conOrder',              //--------------------------------------
	  name: 'conOrder', /*  */ 
	  component: conOrder,
      meta: { title: "确认订单" }
	},	
	{ 
	  path: '/goodsList',              //--------------------------------------
	  name: 'goodsList', /*  */ 
	  component: goodsList,
      meta: { title: "商品列表" }
	},	

	{ 
	  path: '/Make', 
	  name: 'Make', 
	  component: Make,
	  meta: { title: "TxHashbet-Proxy" }

	},
	{ 
	  path: '/promotelist',                 //推广 
	  name: 'promotelist', /* promotelist*/ 
	  component: promotelist,
	  meta: { title: "TxHashbet-promote" }

	},	
	{ 
	  path: '/Tutorial',   //教程
	  name: 'Tutorial',
	  component: Tutorial,
	  meta: { title: "TxHashbet-Tutorials" }

	},
	{ 
	  path: '/ceshi', 
	  name: 'ceshi', 
	  component: ceshi

	},

	{ 
	  path: '/login', 
	  name: 'login', 
	  component: login,
	  meta: { title: "登录" }
     
	},
	{ 
	  path: '/backPassword', 
	  name: 'backPassword', 
	  component: backPassword,
	  meta: { title: "TxHashbet-backPassword" }
     
	},
	{ 
	  path: '/setUp', 
	  name: 'setUp', 
	  component: setUp,
	  meta: { title: "TxHashbet-setUp" }
     
	},	
	{ 
	  path: '/withdra',            //提现
	  name: 'withdra', 
	  component: withdra,
	  meta: { title: "TxHashbet-Withdraw" }

	},
    { 
	  path: '/topup',    //充值
	  name: 'topup', 
	  component: topup,
	  meta: { title: "TxHashbet-deposit" }
     
	},	
	{ 
	  path: '/My/myRecord',    //交易记录 列表
	  name: 'myRecord', 
	  component: myRecord,
	  meta: { title: "TxHashbet-Transaction Details" }

	},
	// { 
	//   path: '/My/tradList',    //交易记录
	//   name: 'tradList', 
	//   component: tradList,
	//   meta: { title: "TxHashbet-Withdrawals record" }

	// },
	{ 
	  path: '/My/myProb',    //  常见问题
	  name: 'myProb', 
	  component: myProb,
	  meta: { title: "TxHashbet-FAQ" }

	},
	{ 
	  path: '/My/contact',    
	  name: 'contact', 
	  component: contact

	},
	{ 
	  path: '/active',    
	  name: 'active', 
	  component: active,
      meta: { title: "TxHashbet-Activity" }
	},
	{ 
	  path: '/reg',    // 注册 kongtou
	  name: 'reg', 
	  component: reg,
     meta: { title: "TxHashbet-sign up" }
	},
	{ 
	  path: '/drop',    // 验证
	  name: 'drop', 
	  component: drop

	},
	// { 
	//   path: '/angn',   
	//   name: 'angn', 
	//   component: angn,
	//   children: [

 //        {
 //          // 当 /user/:id/profile 匹配成功，
 //          // UserProfile 会被渲染在 User 的 <router-view> 中
 //          path: 'anfst',
 //          component: anfst
 //        },
 //        {
 //          // 当 /user/:id/posts 匹配成功
 //          // UserPosts 会被渲染在 User 的 <router-view> 中
 //          path: 'ansecd',
 //          component: ansecd
 //        }
 //      ]

	// }

  ] 

})
// router.beforeResolve((to, from, next) => {
//   //console.log('navigation-guards');
//   // to: Route: 即将要进入的目标 路由对象
//   // from: Route: 当前导航正要离开的路由
//   // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 
//   const nextRoute = ['HelloWorld','login','My','Make','ceshi','assets','deposit','withdrawal','myWallet'];
//    // const auth = store.state.auth; 
//    let username = getCookie('username') 
//    const title = to.meta && to.meta.title;
//   if( username ){   //如果有就直接到首页咯
//   	//console.log(next)
//     next();
//   }else{
   
//    if(to.path=='/login' || to.path=='/reg' || to.path=='/backPassword'){  //如果是登录页面或者注册页，就直接next()
//       next();

//     }else{     //不然就跳转到登录；
//       next('/login');
//     }

//   }

//  if (title) {
//         document.title = title;
//   }
// });
export default router