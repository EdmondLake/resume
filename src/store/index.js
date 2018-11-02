import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  compony: "南昌地宝传媒有限公司",
  workTime: "2016.04-2018.11",
  workDetail: [{
    position: "内容运营",
    time: "2016.04-2018.06",
    detail: [
      "1. 负责微信公众号运营，选题策划及内容的采集和编写；",
      "2. 负责论坛内容的运营和维护，每日首页的日常更新，内容产出，以及优质内容的编辑和推荐",
      "3. 负责客户广告投放的软文撰写",
      "4. 策划主题活动，刺激UGC内容的产出",
      "5. 负责各项线下活动的执行"
    ]
  },{
    position: "内容运营主管",
    time: "2018.08-2018.11",
    detail: [
      "1. 负责公司APP、论坛首页、微信公众号的运营规则的制定与把控",
      "2. 负责公司原创内容栏目的栏目定制、内容创作",
      "3. 对接公司其他部门的软文需求"
    ]
  }]
}

export default new Vuex.Store({
  state
})
