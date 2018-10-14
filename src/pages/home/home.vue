<template>
  <div class="home_container">
    <itemContainer father-component="home"></itemContainer>
  </div>
</template>

<script>
import itemContainer from '../../component/itemContainer'
import axios from 'axios'
export default {
  name: "home",
  components: {
    itemContainer
  }
}
</script>

<style lang="stylus" scoped>

</style>
