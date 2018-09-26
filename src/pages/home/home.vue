<template>
  <div class="wrapper">
    <div class="container">
      <div class="tv_screen">
        <div class="screen_inner"></div>
        <div class="screen_right">
          <div class="screen_sound">
            <ul>
              <li v-for="n in 12"></li>
            </ul>
          </div>
          <div class="screen_btn"></div>
        </div>
      </div>
      <div class="tv_control">
        <div class="tv_little_btn">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemContainer from '../../component/itemContainer'
export default {
  name: "home",
  components: {
    itemContainer
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    width: 100%
    height: 100%
    background: #fae2ed
    position: absolute
    top: 0
    left: 0
    .container
      overflow: hidden
      width: 19.2rem
      margin: 0 auto
      /*height: 0*/
      /*padding-bottom: 100%*/
      padding-top: 1.5rem
      .tv_screen
        float: left
        width: 14.8rem
        height: 8.8rem
        border-radius: .48rem
        border: .2rem solid #000
        background: #fcd445
        display: flex
        .screen_inner
          width: 12.2rem
          height: 7.8rem
          margin-top: .3rem
          margin-left: .3rem
          border: .2rem solid #000
          border-radius: .48rem
          background: #fff
        .screen_right
          flex: 1
          padding: 2.4rem .26rem .5rem
          .screen_sound li
            width: .32rem
            height: .32rem
            border-radius: 50%
            background: #000
            float: left
            margin-right: .14rem
            margin-top: .3rem
          .screen_sound li:nth-child(3n)
            margin-right: 0
          .screen_btn
            width: 1.3rem
            height: 1.3rem
            background: #ec6b46
            border: .22rem solid #000
            border-radius: 50%
            margin: 4.2rem auto 0
            text-align: center
            cursor: pointer
          .screen_btn:hover
            background: #cf5b3a
      .tv_control
        width: 3.8rem
        height: 8.8rem
        float: right
        background: #fcd445
        border: .2rem solid #000
        border-radius: .48rem
</style>
