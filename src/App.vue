<template>
  <div id="app">
    <!--添加transition动画效果-->
    <!--<transition :name="transitionName">-->
    <router-view/>
    <!--</transition>-->
  </div>
</template>

<script>
export default {
  name: 'App'
  // data () {
  //   return {
  //     transitionName: ''
  //   }
  // }
  // 使用watch监听$router的变化
  // watch: {
  //   $router(to, from){
  //     // 如果to的索引大于from的索引，说明是前进页面，即由home页面到其他三个页面，判断为前进状态（slide-left），反之为后退状态（slide-right）
  //     if(to.meta.index > from.meta.index){
  //       this.transitionName = 'slide-left'
  //     } else {
  //       this.transitionName = 'slide-right'
  //     }
  //
  //   }
  // }
}
</script>

<style lang="stylus">

</style>
