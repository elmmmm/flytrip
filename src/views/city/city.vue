<template>
  <div class="city top-page">
    <div class="top">
      <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="cancelClick" />

      <!-- 标签页 -->
      <!-- 在标签指定 name 属性的情况下，v-model:active 的值为当前标签的 name（此时无法通过索引值来匹配标签） -->
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <!-- 遍历对象 -->
        <template v-for="(value, key, index) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- 对于传递 props 来说，推荐更贴近 HTML 的书写风格(短横线) -->
      <!-- <CityGroup :group-data="currentGroup" /> -->
      <!-- 通过v-show提升切换效率 -->
      <template v-for="(value, key, index) in allCities">
          <city-group v-show="tabActive===key" :group-data="value"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
// import { getCityAll } from "@/services";
import useCityStore from "@/stores/modules/city"

import CityGroup from "./cpns/city-group.vue"
const router = useRouter()
// 搜索框功能
const searchValue = ref("")
const cancelClick = () => {
  router.back()
}
// 标签页
const tabActive = ref(0)
const allCity = ref({})
// 法1、直接请求数据
// getCityAll().then(res => {
//   allCity.value = res.data
// })
// 法2、通过pinia获取数据
const cityStore = useCityStore()
// 调用action 请求数据
cityStore.fetchAllCitiesData()
// 保持响应式
const { allCities } = storeToRefs(cityStore)

// 获取标签页切换内容
// 通过计算属性保持响应
// 根据key(vant组件中的name属性)从allCities获取数据, 默认直接获取的数据不是响应式的, 所以必须包裹computed
const currentGroup = computed(() => allCities.value[tabActive.value])

</script>

<style scoped lang='less'>
.city {
  // 实现搜索栏不动的两种方式 
  // 法1： 固定定位+margin-top
  // 法2：保持搜索栏为标准流，设置内容区的滚动窗口高度overflow-y
  .top{
    position: relative;
    z-index: 9;
  }
  .content{
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
