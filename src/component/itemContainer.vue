<template>
  <div>
    <div v-if="fatherComponent === 'home'"></div>
  </div>
</template>

<script>
export default {
  name: "itemcontainer",
  props: ['fatherComponent']
}
</script>

<style  lang="stylus" scoped>

</style>
