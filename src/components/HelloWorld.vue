<template>
  <div>
    <div class="content">
      <div class="warp">
        {{msg}}3221321
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    console.log('crea')
    let obj = {
      name:'llp',
      age:22,
      val:undefined
    }
    console.log('val' in obj)
  }
}
</script>

<style lang="scss" scoped>
.content{
  .warp{
    font-size: px-rem(36px);
  }
}
</style>
