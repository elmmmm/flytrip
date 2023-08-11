<template>
    <van-nav-bar @click-left="onClickLeft">
        <!-- 具名插槽 -->
        <template #left>
            <!-- 这里再做一个插槽占位，让父组件决定这里放什么 -->
            <slot name="left">
                <i class="icon-left-arrow"></i>
                <span class="left-text">{{ leftText }}</span>
            </slot>
        </template>
        <template #title>
            <slot name="title">
                {{ title }}
            </slot>
        </template>
        <template #right>
            <slot name="right">
                <i class="icon-right-menu"></i>
            </slot>
        </template>
    </van-nav-bar>
</template>

<script setup>
import { useRouter } from 'vue-router'
defineProps({
    title: {
        type: String,
        default: "标题"
    },
    leftText: {
        type: String,
        default: ""
    }
})

const router = useRouter()
const onClickLeft = () => {
    // 或 router.back()
    router.go(-1)
}

</script>

<style scoped lang='less'>
.icon-left-arrow{
    display: inline-block;
    width: 8px;
    height: 15px;
    background: url(@/assets/img/common/icon_nav_back.png) 0 0/100% 100%;
}
.left-text{
    color: var(--primary-color);
    margin-left: 8px;
    font-weight: 700;
}
.icon-right-menu {
    display: inline-block;
    width: 20px;
    height: 15px;
    background-image: url(../../assets/img/common/icon-right-menu.png);
    background-size: 20px 15px;
}
</style>