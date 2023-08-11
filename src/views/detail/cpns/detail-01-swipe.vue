<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="2000" indicator-color="white">
        <template v-for="(item, index) in swipeData" :key="index">
            <van-swipe-item class="item">
                <img :src="item.url" alt="">
            </van-swipe-item>
        </template>

        <!-- 自定义指示器 -->
        <template #indicator="{ active, total }">
            <div class="indicator">
                <!-- 遍历对象swipeGroup -->
                <template v-for="(value, key, index) in swipeGroup" :key="key">
                    <span
                        class="item"
                        :class="{active: swipeData[active]?.enumPictureCategory == key}"
                    >
                    <span class="text">{{ getName(value[0].title) }}</span>
                    <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                        {{ getCategoryIndex(swipeData[active]) }}/{{ value.length }}
                    </span>
                    </span>
                </template>
            </div>
        </template>
    </van-swipe>
  </div>
</template>

<script setup>
const props = defineProps({
    swipeData: {
        type: Array,
        default: () => []
    }
})

// 对原始数据swipeData按照图片类型进行分组
const swipeGroup = {}  //键名是enumPictureCategory，键值是数组
for(const item of props.swipeData){
    let valueArray = swipeGroup[item.enumPictureCategory]
    if(valueArray == undefined){
        valueArray = []
        swipeGroup[item.enumPictureCategory] = valueArray
    }
    valueArray.push(item)
}

// 对title进行格式化
const nameReg = /【(.*?)】/i
const getName = (name) => {
  // return name.replace("：", "").replace("】", "").replace("【", "")
  const results = nameReg.exec(name)
  return results[1]
}
//获取分组中的索引
const getCategoryIndex = (item) => {
    const valueArray = swipeGroup[item.enumPictureCategory]
    return valueArray.findIndex(arrItem => arrItem == item) + 1
}

</script>

<style scoped lang='less'>
.swipe{
    .swipe-list{
        .item{
            img{
                width: 100%;
            }
        }
    }
    .indicator{
        position: absolute;
        right: 5px;
        bottom: 5px;
        display: flex;
        padding: 2px 5px;
        font-size: 12px;
        color: #fff;
        border-radius: 1px;
        background-color: rgba(0, 0, 0, 0.8);

        .item{
            margin: 0 3px;
            // 多类选择器
            &.active{
                padding: 0 3px;
                border-radius: 5px;
                background-color: #fff;
                color: #333;
            }
        }
    }
}

</style>