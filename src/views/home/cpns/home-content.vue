<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item,index) in houselist" :key="item.data.houseId">
        <house-item-v9 v-if="item.discoveryContentType===9" 
        :item-data="item.data" 
        @click = "itemClick(item.data)"
        />
        <house-item-v3 v-else-if="item.discoveryContentType===3" 
        :item-data="item.data" 
        @click = "itemClick(item.data)"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router"
import HouseItemV9 from "@/components/house-item-v9/house-item-v9.vue";
import HouseItemV3 from "@/components/house-item-v3/house-item-v3.vue";

const homeStore = useHomeStore()
const {houselist} = storeToRefs(homeStore)

// 点击房源卡片，转跳到详情页
const router = useRouter()
const itemClick = (item) => {
  // 动态路由传参
  router.push('/detail/' + item.houseId)
}


</script>

<style scoped lang='less'>
.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>