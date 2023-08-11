<template>
  <div class="detail top-page" ref="detailRef">
    <!-- 隐藏的标签页 -->
    <tab-control
      v-if="showTabControl"
      class="tabs"
      :titles="names"
      @tabItemClick="tabClick"
      ref="tabControlRef"
    />

    <van-nav-bar
        title="房屋详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
    <!-- v-if="mainPart"：刚开始detailInfos是没有数据的，会出现访问undefined -->
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
      <detail-infos name="概览" :ref="getSectionRef" :top-infos="mainPart.topModule" />
      <detail-facility name="设施" :ref="getSectionRef" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
      <detail-landlord name="房东" :ref="getSectionRef" :landlord="mainPart.dynamicModule.landlordModule" />
      <detail-comment name="评价" :ref="getSectionRef" :comment="mainPart.dynamicModule.commentModule" />
      <detail-notice name="须知" :ref="getSectionRef"  :order-rules="mainPart.dynamicModule.rulesModule.orderRules" />
      <detail-map name="周边" :ref="getSectionRef"  :position="mainPart.dynamicModule.positionModule" />
      <detail-intro :price-intro="mainPart.introductionModule"/>
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/ensure-icon.png" alt="">
      <div class="text">风在摇它的叶子</div>
    </div>
  </div>
</template>

<script setup>
import { ref,computed,watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getDetailInfos } from "@/services";
import TabControl from "@/components/tab-control/tab-control.vue"
import DetailSwipe from "./cpns/detail-01-swipe.vue";
import DetailInfos from "./cpns/detail-02-infos.vue";
import DetailFacility from "./cpns/detail-03-facility.vue";
import DetailLandlord from "./cpns/detail-04-landlord.vue";
import DetailComment from "./cpns/detail-05-comment.vue";
import DetailNotice from "./cpns/detail-06-notice.vue"
import DetailMap from "./cpns/detail-07-map.vue"
import DetailIntro from "./cpns/detail-08-intro.vue"
import useScroll from "@/hooks/useScroll.js";

const route = useRoute()
const router = useRouter()
const houseId = route.params.id

//请求详情页数据
const detailInfos = ref({})
// 数据做一下拆分
const mainPart = computed(() => detailInfos.value?.mainPart)
getDetailInfos(houseId).then((res) => {
  // console.log(res);
  detailInfos.value = res.data
})

// 点击标签页，滑到对应区块
const detailRef = ref()
const {scrollTop} = useScroll(detailRef)
const showTabControl = computed(() => {
    return scrollTop.value >= 300
})
// 保存标签页标题和对应DOM
const sectionEls = ref({})
const names = computed(() => { 
  const ks = Object.keys(sectionEls.value)
  // console.log('中文---', ks)
  return ks
})

// ref属性还可以绑定为一个函数，会在每次组件更新时都被调用，该函数会收到元素引用作为其第一个参数
const getSectionRef = (value) => {
  // 离开详情页时：当绑定的元素被卸载时，函数也会被调用一次，此时的 el 参数会是 null
  if(!value) return
  const name = value.$el.getAttribute("name")
  sectionEls.value[name] = value.$el
}

//绑定点击标签页回调：滑动到指定区块
let isClick = false
let currentDistance = -1
const tabClick = (index) => {
  const key = Object.keys(sectionEls.value)[index]
  const el = sectionEls.value[key]
  // offsetTop获得元素距离带有定位父元素的位置
  let distance = el.offsetTop
  if( index !== 0){
    distance = distance - 44
  }

  isClick = true //点击状态激活
  currentDistance = distance
  detailRef.value.scrollTo({
    top: distance,
    behavior: "smooth"
  })
}

// 页面滚动，滚动时匹配对应的标签页标签，使其高亮

const tabControlRef = ref()
watch(scrollTop, (newValue) => {
  if(newValue === currentDistance){
    isClick = false  //点击后到达目标区块，让点击标识失活
  }
  if(isClick) return
  //获取所有区块的offsetTop
  const els = Object.values(sectionEls.value)
  const values = els.map(el => el.offsetTop)
  //根据当前的位置去匹配标签索引
  let index = values.length - 1 //默认超出的位置设置为最后一个标签
  for(let i=0; i < values.length; i++){
    if(values[i] > newValue + 44){
      index = i-1
      break
    }
  }
  tabControlRef.value?.setCurrentIndex(index)
})

const onClickLeft = () => {
    router.back()
}
</script>

<style scoped lang='less'>
.tabs {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>