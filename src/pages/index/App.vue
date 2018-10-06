<template>
  <div id="app">
<!--     <img src="../../assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  margin:0;
  padding:0;
}
html,body,#app{
   background: #f5f5f9;
   margin:0;
   color: #666;
   height: 100%;

}
a{
  text-decoration:none;
  color:#2c3e50;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
}
input,button {outline:none; -webkit-appearance: none; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
/*  margin-top: 60px;*/
 
}
.foot .router-link-active{
 /* color:#2772ff;*/
    color:#fe2e46; 
  
}
</style>
