<template>
  <div class="wrapper">
    <div class="container">
      <div class="tv_screen">
        <div class="screen_inner">
          <transition name="move">
            <div class="tv_blank" :show="show">
              <div class="tv_blank_up" ref="blankUp"></div>
              <div class="tv_blank_down" ref="blankDown"></div>
            </div>
          </transition>
          <div v-if="fatherComponent === 'home'">
            <div class="my_pic slide-left">
              <img src="../images/sprite-1.png" alt="" class="my_avatar">
            </div>
            <div class="my_name">熊典雯 / DianwenXiong</div>
            <div class="detail">
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
          <div v-if="fatherComponent === 'skill'">
            <div class="skill_container">
              <div class="short_item">html5</div>
              <div class="long_item">css3</div>
              <div class="long_item">HTML</div>
              <div class="short_item">CSS</div>
              <div class="half_item">JavaScript</div>
              <div class="half_item">jQuery</div>
              <div class="short_item">Ajax</div>
              <div class="long_item">Photoshop</div>
              <div class="full_item">Vue</div>
            </div>
          </div>
          <div v-if="fatherComponent === 'experi'">
            <div class="experi_container">
              <h3 class="my_compony">{{compony}}</h3>
              <p class="my_worktime">{{workTime}}</p>
              <div class="experi_item" v-for="item in workDetail">
                <div class="item_detail">
                  <div class="experi_item_left">
                    <h4 class="my_position">{{item.position}}</h4>
                    <p class="position_time">{{item.time}}</p>
                  </div>
                  <div class="experi_item_right">
                    <ol v-for="item in item.detail">
                      <li class="work_item">{{item}}</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="fatherComponent === 'project'">
            <div class="project_container">
              <div class="project_item">
                <div class="project_item_left">
                  <img class="project_img" src="@/images/project_1.png" alt="">
                </div>
                <div class="project_item_right">
                  <h3 class="project_title">
                    <span class="iconfont">&#xe620;</span>
                    去哪儿网APP
                  </h3>
                  <p class="item_link">
                    <span class="iconfont icon_link">&#xe65f;</span>
                    <a href="https://github.com/EdmondLake/travelAPP" class="project_link">项目地址</a>
                  </p>
                  <p class="project_item_intro">
                    <span class="iconfont">&#xe645;</span>
                    vue2.5+vue-router+webpack构建去哪儿网APP
                  </p>
                </div>
              </div>
              <div class="project_item">
                <div class="project_item_left">
                  <img class="project_img" src="@/images/project_2.png" alt="">
                </div>
                <div class="project_item_right">
                  <h3 class="project_title">
                    <span class="iconfont">&#xe620;</span>
                    VUE答题H5
                  </h3>
                  <p class="item_link">
                    <span class="iconfont icon_link">&#xe65f;</span>
                    <a href="https://github.com/EdmondLake/Test-project" class="project_link">项目地址</a>
                  </p>
                  <p class="project_item_intro">
                    <span class="iconfont">&#xe645;</span>
                    用VUE+webpack构建一个简单的答题H5
                  </p>
                </div>
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
          <div class="screen_btn" @click="tv_on_off"></div>
        </div>
      </div>
      <div class="tv_control">
        <div class="control_btn" @click="tv_on_off"></div>
        <div class="control_ul">
          <router-link to="/" class="control_li">个人资料</router-link>
          <router-link to="/skill" class="control_li">掌握技能</router-link>
          <router-link to="/experi" class="control_li">工作经历</router-link>
          <router-link to="/project" class="control_li">个人项目</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "itemContainer",
  props: [
    'fatherComponent'
  ],
  computed: mapState([
    'compony',
    'workTime',
    'workDetail'
  ]),
  data () {
    return {
      show: false
    }
  },
  methods: {
    tv_on_off () {
      this.show = !this.show
      if (this.show) {
        this.$refs.blankUp.style.transform = 'translateY(0%)'
        this.$refs.blankUp.style.transition = 'all .6s'
        this.$refs.blankDown.style.transform = 'translateY(0%)'
        this.$refs.blankDown.style.transition = 'all .6s'
      } else {
        this.$refs.blankUp.style.transform = 'translateY(-100%)'
        this.$refs.blankUp.style.transition = 'all .6s'
        this.$refs.blankDown.style.transform = 'translateY(100%)'
        this.$refs.blankDown.style.transition = 'all .6s'
      }
    }
  }
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
          position: relative
          .tv_blank
            width: 12.2rem
            height: 7.8rem
            border: .2rem solid #000
            border-radius: .48rem
            position: absolute
            top: -0.2rem
            left: -0.2rem
            z-index: 600
            overflow: hidden
            .tv_blank_up, .tv_blank_down
              width: 100%
              height: 50%
              background: #333
              border-radius: .02rem .02rem 0 0
            .tv_blank_up
              transform: translateY(-100%)
            .tv_blank_down
              border-radius: 0 0 .02rem .02rem
              transform: translateY(100%)
          .my_pic
            width: 2.5rem
            height: 2.5rem
            margin: .2rem auto
            border-radius: 50%
            border: 0.04rem solid #004000
            overflow: hidden
            .my_avatar
              width: 100%
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
          .skill_container
            margin: 1.4rem auto
            display: flex
            flex-wrap: wrap
            width: 9rem
            height: 5rem
          .skill_container div
            height: .6rem
            line-height:.6rem
            margin-right: .24rem
            border: .04rem solid #040000
            text-align: center
            font-family: 'Mirrosoft Yahei'
            font-size: .26rem
            font-weight: 600
            box-sizing: content-box
            color: #333333
          .short_item
            width: 3rem
          .long_item
            width: 5rem
          .half_item
            width: 4rem
            background: #ec6b46
          .full_item
            width: 8.32rem
            background: #ec6b46
          .experi_container
            margin: .4rem auto
            width: 9rem
            .my_compony
              color: #e35f3b
              text-align: center
              font-size: .3rem
              line-height: .8rem
              font-weight: 600
            .my_worktime
              font-size: .28rem
              text-align: center
            .experi_item
              display: flex
              margin-bottom: .3rem
              margin-top: .3rem
              line-height: .48rem
              .experi_item_left
                width: 2rem
                float: left
                margin-right: .2rem
                .my_position
                  color: #e27252
                  font-weight: 400
                .position_time
                  font-size: .24rem
              .experi_item_right
                flex: 1
                overflow: hidden
                .work_item
                  font-size: .24rem
          .project_container
            margin: .2rem auto
            width: 10.4rem
            .project_item
              display: flex
              padding-bottom: .2rem
              padding-top: .2rem
              border-bottom: 1px solid #e35f3b
              .project_item_left
                float: left
                width: 4.6rem
                cursor: pointer
                margin-right: .4rem
                .project_img
                  width: 100%
              .project_item_right
                flex: 1
                overflow: hidden
                line-height: .6rem
                .project_title
                  font-size: .28rem
                  font-weight: 600
                  color: #e35f3b
                .item_link
                  color: #3360e2
                  display: inline-block
                  margin-left: .4rem
                  .project_link
                    color: blue
                    text-decoration: underline
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
