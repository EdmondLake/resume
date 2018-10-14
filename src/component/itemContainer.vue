<template>
  <div class="wrapper">
    <div class="container">
      <div class="tv_screen">
        <div class="screen_inner">
          <div v-if="fatherComponent === 'home'">
            <div class="my_pic">
              <div class="little_pic"></div>
            </div>
            <div class="my_name">熊典雯 / DianwenXiong</div>
            <div class="detail">
              <!--<div v-for="item of homeDetail" :key="item.id">-->
              <!--<span class="iconfont">{{item.code}}</span>-->
              <!--<span>{{item.info}}</span>-->
              <!--</div>-->
              <div class="my_collage">
                <span class="iconfont detail_icons">&#xe602;</span>
                <span class="detail_info">南昌工程学院</span>
              </div>
              <div class="my_educ">
                <span class="iconfont detail_icons">&#xe663;</span>
                <span class="detail_info">2016届本科毕业</span>
              </div>
              <div class="my_position">
                <span class="iconfont icon detail_icons">&#xe608;</span>
                <span class="detail_info">应聘前端工程师</span>
              </div>
            </div>
          </div>
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
        <div class="control_ul">
          <router-link to="/" class="control_li">个人资料</router-link>
          <router-link to="skill" class="control_li">掌握技能</router-link>
          <router-link to="item" class="control_li">工作经历</router-link>
          <router-link to="item" class="control_li">个人项目</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemcontainer",
  props: [
    'fatherComponent'
    // 'homeDetail'
  ]
}
</script>

<style  lang="stylus" scoped>
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
          .detail
            display: flex
            justify-content: center
            margin-top: .4rem
          .detail div
            text-align: center
            margin-right: .8rem
            .detail_icons
              display: block
              font-size: 1.12rem
              margin-bottom: .4rem
            .detail_info
              font-size: .24rem
              display: block
              border: .04rem solid #040000
              padding: .12rem .26rem
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
        .control_li
          color: #040000
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
        .control_li:hover
          background: #f7d6cd

</style>
