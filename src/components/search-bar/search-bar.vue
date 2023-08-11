<template>
  <div class="search-bar">
    <div v-if="currentCity.cityName" class="left">
        <span>{{ currentCity.cityName }}</span>
    </div>
    <div class="select-time">
        <div class="item start">
            <div class="name">住</div>
            <div class="date">{{ startDateStr }}</div>
        </div>
        <div class="item end">
            <div class="name">离</div>
            <div class="date">{{ endDateStr }}</div>
        </div>
    </div>
    <div class="content">
        <div class="keyword">{{ keyWord }}</div>
    </div>
    <div class="right">
        <i class="icon-search" v-if="searchIcon"></i>
    </div>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import { storeToRefs } from 'pinia';
import {formatMonthDay} from '@/utils/format_date.js'
import useMainStore from "@/stores/modules/main"
import useCityStore from "@/stores/modules/city"
const props = defineProps({
    keyWord: {
        type: String,
        default: "关键字/位置/民宿名"
    },
    searchIcon: {
        type: Boolean,
        default: true
    },
    height: { //css中使用
        type: String,
        default: "35px", 
  },
})

const mainStore = useMainStore()
const {startDate, endDate} = storeToRefs(mainStore)
const startDateStr = computed(()=>{
    return formatMonthDay(startDate.value, "MM.DD")
})
const endDateStr = computed(()=>formatMonthDay(endDate.value, "MM.DD"))
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

</script>

<style scoped lang='less'>
:global(.van-nav-bar .van-nav-bar__content .van-nav-bar__title) {
  width: 73%;
  max-width: 100%;
}

.search-bar{
    display: flex;
    align-items: center;
    height: v-bind("props.height");
    line-height: v-bind("props.height");
    padding: 0 10px;
    font-size: 14px;
    color: #999;
    border-radius: 6px;
    background-color: #f3f4f6;
    
    .left{
        font-weight: 500;
        min-width: 30px;
        font-size: 14px;
        padding-right: 6px;
        margin-right: 5px;
        border-right: 1px solid #fff;
        color: #333;
        white-space: nowrap;
    }

    .select-time{
        display: flex;
        flex-direction: column;
        .item{
            display: flex;
            // flex-direction: row;
            align-items: center;
            line-height: normal;
            font-size: 10px;
            .name{
                font-size: 10px;

            }
            .date{
                position: relative;
                color: #333;
                margin: 1px 10px 0 3px;
                font-weight: 500;
            }
        }
        // 画个小三角形
        .end .date::after{
            content: "";
            width: 0;
            height: 0;
            border: 4px solid #666;
            border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
            border-radius: 3px;
            transform: rotate(45deg);
            // 绝对定位后，相当于变成了行内块，高度被挤压 display: inline-block; 
            position: absolute;
            bottom: 0px;
            right: -12px;
        }
    }

    .content{
        position: relative;
        flex: 1;
        padding: 0 6px;
        text-align: left;
        border-left: 1px solid #fff;
        .keyword{
            max-width: 155px;
            font-size: 12px;
        }
    }
    
    .right{
        display: flex;
        align-items: center;
        .icon-search {
            width: 24px;
            height: 24px;
            display: inline-block;
            // 放大镜图标 一张精灵图
            // background-image: url(../../assets/img/home/home-sprite.png);
            background-image: url(@/assets/img/home/home-sprite.png);
            background-position: -29px -151px;
            background-size: 207px 192px;
        }
    }
}
</style>