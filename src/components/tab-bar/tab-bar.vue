<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" route active-color="#ff9854">
      <template v-for="(item, index) in tabbarData">
        <!-- to绑定路由 -->
        <van-tabbar-item :to="item.path">
          <!-- 组件库插槽设置自定义图标 -->
          <span>{{ item.text }}</span>
          <!-- <template #icon>
            <img v-if="currentIndex != index" :src="getAssetURL(item.image)">
            <img v-else :src="getAssetURL(item.imageActive)">
          </template> -->
          <template #icon="props">
            <img  :src="!props.active ? getAssetURL(item.image) : getAssetURL(item.imageActive)">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
// 普通变量不用const声明貌似不行唉？

import { ref, watch } from "vue";
// 导航栏数据
import tabbarData from "@/assets/data/tabbar.js";

import { getAssetURL } from "@/utils/load_assets.js";
import { useRoute } from 'vue-router'
const route = useRoute()
//当前选项卡
const currentIndex = ref(0)
//监听路由改变（vant这个标签栏组件如果直接在地址栏修改路径，底部的标签不会触发切换图标），修改对应索引修改图标
//--其实vant提供了相关的实现：开启router属性，使用作用域插槽props来判断标签激活状态
// 自己也可以监听当前路由route的改变，修改当前的index，如下：
// watch(route, (newRoute) => {
//   const index = tabbarData.findIndex(item => item.path === newRoute.path)
//   if(index===-1) return
//   currentIndex.value = index
// })

//切换选项卡点击回调
// const itemClick = (index, item) => {
//   currentIndex.value = index
//   router.push(item.path)
// }


</script>

<style scoped lang='less'>
.tab-bar {

  img {
    height: 26px;
  }

}
</style>