<template>
  <div>
    <div v-if="fatherComponent === 'personinfo'">
      <div class="my_pic">
        <div class="little_pic"></div>
      </div>
      <div class="my_name">熊典雯 / DianwenXiong</div>

    </div>
  </div>
</template>

<script>
export default {
  name: "itemcontainer",
  props: ['fatherComponent']
}
</script>

<style  lang="stylus" scoped>
  .my_pic
    width: 2.5rem
    height: 2.5rem
    margin: .2rem auto
    background: url(../images/sprite-1.png) no-repeat 0 0
    border-radius: 50%
    border: 0.04rem solid #004000
    position: relative
    transition: all .8s
    z-index: 30
    .little_pic
      width: 2.4rem
      height: 2.4rem
      position: absolute
      top: 0
      left: 0
      border-radius: 50%
      border: 0.04rem solid #004000
      background: url(../images/sprite-1.png) no-repeat 0 -2.5rem
      transform-origin: .24rem 50%
      transform: rotate(0deg)
      transition: all 0.8s
    .little_pic:hover
      transform: rotate(90deg)
      transition: all 0.8s
  .my_name
    font-size: .28rem
    font-family: Microsoft Yahei
    border: .04rem solid #040000
    background: #f36233
    width: 4rem
    height: .6rem
    line-height: .6rem
    text-align: center
    margin: .3rem auto

</style>
