<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    
                <router-link to="/goodsList" class='tab_a'>

              饮料
              </router-link>
    </div>
</template>

<script>
export default {
  name: 'cell',
  data () {
    return {
      msg: '多页面测试'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>