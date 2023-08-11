<template>
  <div class="search-list-item-title">
    <div class="info">
        <van-tag color="#3f4954" text-color="#fff" class="van-ellipsis">
            {{ itemData.address }}
        </van-tag>
        <span class="unit">{{ itemData.unit }}</span>
        <span class="desp">{{ itemData.unitDesp }}</span>
    </div>
    <div class="title ellipsis-text-2">{{ itemData.unitName }}</div>
  </div>
</template>

<script setup>
defineProps({
    itemData: {
        type: Object,
        default: () => {}
    }
})
</script>

<style scoped lang='less'>
.info{
    display: flex;
    align-items: center;
    .unit, .desp{
        font-size: 12px;
        white-space: nowrap;
        color: #666;
    }
    .unit{
        position: relative;
        margin-left: 10px;
        margin-right: 10px;
        &::after{
            content: "";
            position: absolute;
            top: 45%;
            right: -25%;
            width: 2px;
            height: 2px;
            border-radius: 2px;
            background-color: #666;
        }
    }
}
.title {
    line-height: 22px;
    font-size: 18px;
    margin-top: 8px;
    font-weight: 500;
    }
</style>