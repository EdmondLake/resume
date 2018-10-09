<template>
  <div class="wrapper">
    <div class="container">
      <div class="tv_screen">
        <div class="screen_inner">
          <item-container fatherComponent="personinfo"></item-container>
        </div>
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
        <div class="control_btn"></div>
        <ul class="control_ul">
          <li @click="changeParam(personinfo)">个人资料</li>
          <li @click="changeParam(skill)">掌握技能</li>
          <li @click="changeParam(experi)">工作经历</li>
          <li @click="changeParam(project)">个人项目</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import itemContainer from '../../component/itemContainer'
export default {
  name: "home",
  data () {
    return {
      fatherComponent: 'personinfo'
    }
  },
  components: {
    itemContainer
  },
  methods: {
    changeParam: function(val) {
      this.fatherComponent = val
    }
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
        padding: .2rem .36rem
        .control_btn
          width: .8rem
          height: .8rem
          background: #ec6b46
          border: .2rem solid #000000
          border-radius: 50%
          margin-left: -0.2rem
          cursor: pointer
        .control_btn:hover
          background: #cf5b3a
        .control_ul li
          display: block
          -webkit-box-sizing: border-box
          -moz-box-sizing: border-box
          box-sizing: border-box
          width: 100%
          height: .64rem
          line-height: .52rem
          border: .06rem solid #000000
          border-radius: .08rem
          margin-top: .36rem
          font-size: .22rem
          text-align: center
          background: #fff
          cursor: pointer
        .control_ul li:hover
          background: #f7d6cd
</style>
