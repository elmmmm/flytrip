<template>
  <div class="order">
    <van-sticky>
      <nav-bar title="订单列表">
        <template #left>
          <div></div>
        </template>
      </nav-bar>
      <van-tabs
        v-model:active="currentOrder"
        title-active-color="#ff9854"
        line-height="2"
      >
        <template v-for="(item, index) in orderTitles" :key="item">
          <!-- 在标签指定name属性的情况下，v-model:active的值为当前标签的name -->
          <van-tab :title="item" :name="index"></van-tab>
        </template>
      </van-tabs>
    </van-sticky>
    <div class="content">
      <div v-if="orderlist.length">
        <template v-for="(item, index) in orderlist" :key="index">
          <order-item :itemData="item"></order-item>
        </template>
      </div>
      <div v-else class="tips">
        <img src="@/assets/img/order/icon-order.png" alt="">
        <div class="title">暂无订单，快去逛逛吧</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import NavBar from "@/components/nav-bar/index.vue"
import OrderItem from "./cpns/order-item/index.vue";

import { getOrderList } from '@/services/modules/order'

//定义数据
const currentOrder = ref(0) //索引
const orderTitles = ["全部订单", "近期订单", "待支付"]
const orderTitleType = ["all", "recent", "pend"]
const orderlist = ref([])

// 请求全部数据
getOrderList().then((res) => {
  orderlist.value = res.data.data.orders || []
})
// 请求当前类型的数据
watch(currentOrder, 
      (newValue, oldValue) => {
        if(newValue !== undefined){
          getOrderList(orderTitleType[newValue]).then((res) => {
            orderlist.value = res.data.data.orders || []
            console.log(orderTitleType[newValue])
          })
        }
      }
)

</script>

<style scoped lang='less'>
.order{
  height: 100vh;
  
  .content{
    height: calc(100vh - 90px);
    overflow: scroll;
    padding-bottom: 50px;
    
    .tips{
      text-align: center;
      margin-top: 80px;
      img{
        width: 88%;
      }
      .title{
        margin-top: 20px;
        color: #000;
        font-size: 18px;
      }
    }
  }
}

</style>