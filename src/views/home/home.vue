<template>
  <div class="home" ref="homeRef">
    <home-nav-bar></home-nav-bar>
    <home-swipe></home-swipe>
    <home-search-box/>
    <home-categories></home-categories>
    <div class="home-top" v-if="isShowSearchBar">
      <search-bar
       height="45px"
       @click="onSearchClick"
      ></search-bar>
    </div>
    <home-content></home-content>
    <van-back-top bottom="10vh" offset="400"/>
  </div>
</template>

<script>
//  3.2.34 或以上的版本中，单文件组件会自动根据文件名生成对应的 name 选项
  export default {  
    name: "home"
  }
</script>

<script setup>
import { computed, watch, ref,onActivated } from "vue";
import { useRouter } from "vue-router";
import HomeNavBar from "./cpns/home-nav-bar.vue";
import HomeSwipe from "./cpns/home-swipe.vue";
import HomeSearchBox from "./cpns/home-search-box.vue";
import HomeCategories from "./cpns/home-categories.vue";
import HomeContent from "./cpns/home-content.vue";
import SearchBar from "@/components/search-bar/search-bar.vue";

import useHomeStore from "@/stores/modules/home";
import useScroll from "@/hooks/useScroll";


//请求数据
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouselistData()

// 监听滚动事件，自动加载更多房源内容
const homeRef = ref()
const {isReachBottom, scrollTop} = useScroll(homeRef) 
// 监听属性
watch(isReachBottom, (newValue) => {
  // 如果到达底部，isReachBottom会变为true
  if(newValue){
    homeStore.fetchHouselistData().then((res)=>{
      // console.log('res', res)
      isReachBottom.value = false
    })
  }
})
// 跳转回home时, 保留原来的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})

//控制搜索框显示隐藏
// 这里适合用计算属性
const isShowSearchBar = computed(()=>{
  // 向上滑动350px后显示搜索框
  return scrollTop.value > 350
})
const router = useRouter()
const onSearchClick = () => {
  router.push('/search')
}

</script>

<style scoped lang='less'>
.home{
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
}

.banner{
  img{
    width: 100%;
  }
}
.home-top{
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}

 
</style>