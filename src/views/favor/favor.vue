<template>
  <div class="favor">
    <nav-bar>
      <template #left>
        <div></div>
      </template>
      <template #title>
        <van-tabs v-model:active="active" type="card" shrink>
          <van-tab v-for="item in titles" :title="item"></van-tab>
        </van-tabs>
      </template>
    </nav-bar>
    <!-- 我的收藏 -->
    <div v-if="active==0" class="favor">
      <van-tabs v-model:active="activeName">
        <van-tab title="房屋" name="house">
          <div class="content">
            <template v-for="(item, index) in favorlist">
              <search-list-item :item-data="item"></search-list-item>
            </template>
          </div>
        </van-tab>
        <van-tab title="房东" name="landlord">
          <div class="content">
            <div v-if="landlordlist.length" class="list">房东列表</div>
            <div v-else class="no-data">
              <img class="icon-no-data" src="@/assets/img/favor/empty_favorite.44731802.png" alt="">
              <div class="name">暂无收藏</div>
              <div class="desp">
                点击
                <img src="@/assets/img/favor/favor.png" alt="">
                即可收藏房东
              </div>
              <button class="btn" @click="onVisitClick">随便去逛逛</button>
            </div>
          </div>  
        </van-tab>
      </van-tabs>
    </div>

    <!-- 浏览历史 -->
    <div v-if="active==1" class="history">
      <div class="content">
        <template v-for="(item, index) in historylist">
          <search-list-item :item-data="item"></search-list-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { useRouter } from "vue-router";
import NavBar from "@/components/nav-bar/index.vue"
import SearchListItem from "@/components/search-list-item/search-list-item.vue"
import { getFavorList, getHistoryList} from "@/services/modules/favor"

const titles = ["我的收藏", "浏览历史"]
const active = ref(0)
const activeName = ref('')

const favorlist = ref([])
const historylist = ref([])
const landlordlist = ref([])

getFavorList().then((res) => {
  favorlist.value = res.data.data.items || [];
});
getHistoryList().then((res) => {
  historylist.value = res.data.data.items || [];
});

const router = useRouter()
const onVisitClick = () => {
  router.push("/")
}
</script>

<style scoped lang='less'>
 .content {
  padding: 10px 20px 55px 20px;
  overflow-y: auto;
  height: calc(100vh - 160px);
  .no-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon-no-data {
      width: 100%;
    }
    .name {
      color: #333;
      font-size: 18px;
      font-weight: 500;
      line-height: 27px;
    }
    .desp {
      color: #666;
      line-height: 18px;
      font-size: 14px;
      margin: 7px auto 36px;

      img {
        position: relative;
        top: 4px;
        width: 12px;
      }
    }
    .btn {
      padding: 0 38px;
      height: 40px;
      line-height: 40px !important;
      font-size: 16px;
      color: #fff;
      background: var(--primary-color);
      border-radius: 20px;
      border: none;
      // 清除轮廓
      outline: none;
    }
  }
  }

</style>