import Vue from 'Vue'
import cell from './cell.vue'
import Router from '../index/router'

console.log(Router)
console.log('.....ll')
new Vue({
    el:'#app',// 这里参考cell.html和cell.vue的根节点id，保持三者一致
     router: Router,
    render: h => h(cell)
})