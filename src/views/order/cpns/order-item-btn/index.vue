<template>
  <div class="order-item-btn">
    <div class="left">
        <div v-if="itemData.orderStatus===1" class="left-content">
            <img class="icon-time" src="@/assets/img/order/icon-time.png" alt="">
            <span class="time">{{ parseInt(itemData.countdown/60) }}分</span>
            <span class="msg">后订单自动取消</span>
        </div>
    </div>
    <div class="right">
        <!-- 状态1为待支付 -->
        <button v-if="itemData.orderStatus===1" class="btn connect">联系房东</button>
        <button v-if="itemData.orderStatus===1" class="btn pay">去支付</button>
        <!-- 状态5为已取消 -->
        <button v-if="itemData.orderStatus===5" class="btn delete">删除</button>
        <button v-if="itemData.orderStatus===5" class="btn order">再次预定</button>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
    itemData: {
        type: Object,
        default: ()=>{}
    }
})
</script>

<style scoped lang='less'>
.rowlayout{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.order-item-btn{
    .rowlayout();
    height: 60px;
    .left-content{
        .rowlayout();
        font-size: 11px;
        .icon-time{
            width: 11px;
            height: 11px;
            margin-right: 3px;
        }
        .time {
            color: var(--primary-color);
            // letter-spacing 属性增加或减少字符间的空白（字符间距）
            letter-spacing: 0;
            margin-right: 1px;
        }
        .msg {
            color: #666;
            letter-spacing: 0;
            line-height: 11px;
        }
    }

    .right{
        .rowlayout();
        .btn{
            display: inline-block;
            text-align: center;
            line-height: 30px;
            margin-left: 10px;
            font-size: 14px;
            min-width: 75px;
            color: #666;
            background: #fff;
            border: 1px solid #e9e9e9;
            border-radius: 6px;
        }
        .pay {
            color: white;
            background-color: var(--primary-color, #ff9645);
            border: 1px solid var(--primary-color, #ff9645);
        }
        .order {
            color: var(--primary-color, #ff9645);
            border: 1px solid var(--primary-color, #ff9645);
        }
    }

}

</style>