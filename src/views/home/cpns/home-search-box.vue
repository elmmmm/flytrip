<template>
    <div class="search-box">
        <!-- 城市位置 -->
        <div class="location">
            <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
            <div class="position" @click="positionClick">
                <span class="text">我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="">
            </div>
        </div>

        <!-- 酒店日期 -->
        <div class="section date-range bottom-grey-line" @click="showCalendar=true">
            <div class="start">
                <div class="date">
                    <span class="tip">入住</span>
                    <span class="time">{{ startDateStr }}</span>
                </div>
                <div class="stay">共{{stayCount}}晚</div>
            </div>
            <div class="end">
                <div class="date">
                    <span class="tip">离店</span>
                    <span class="time">{{ endDateStr }}</span>
                </div>
            </div>
        </div>
        <!-- 日历 -->
        <van-calendar 
        v-model:show="showCalendar" 
        type="range" 
        color="#ff9854" 
        :round="false"
        :show-confirm="true"
        @confirm="onConfirm" 
        />
        <!-- 价格/人数选择 -->
        <div class="section price-counter bottom-gray-line">
            <div class="start">价格不限</div>
            <div class="end">人数不限</div>
        </div>
        <!-- 关键字 -->
        <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

        <!-- 热门建议 -->
        <div class="section hot-suggests">
        <template v-for="(item, index) in hotSuggests" :key="index">
            <div 
            class="item"
            :style="{ color: item.tagText.color, background: item.tagText.background.color }"
            >
            {{ item.tagText.text }}
            </div>
        </template>
        </div>
        <div class="section search-btn">
            <div class="btn" @click="searchBtnClick">开始搜索</div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { formatMonthDay, getDiffDays } from "@/utils/format_date"
import useCityStore from "@/stores/modules/city";
import useHomeStore from "@/stores/modules/home";
import useMainStore from "@/stores/modules/main";


const router = useRouter()
const cityClick = () => {
    router.push('/city')
}
// ----------------获取位置、城市 
const positionClick = () => {
    navigator.geolocation.getCurrentPosition(res => {
        console.log('获取位置成功', res)
    }, err => {
        console.log('获取位置失败', err)
    }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    })
}
// 当前选定的城市
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

// ----------------------酒店日期模块
// 初始的日期显示为今天和明天
// const today = new Date()
// const startDate = ref(formatMonthDay(today))
// 如果 dayValue 超出了月份的合理范围，setDate 将会相应地更新 Date 对象
// const tomorrow = new Date()
// tomorrow.setDate(today.getDate() + 1)

const mainStore = useMainStore()
const {startDate, endDate} = storeToRefs(mainStore)

const startDateStr = computed(() => formatMonthDay(startDate.value))
const endDateStr = computed(() => formatMonthDay(endDate.value))
const stayCount = ref(getDiffDays(startDate.value, endDate.value))

// 日历组件
const showCalendar = ref(false)
const onConfirm = (value) => {
    // value中保存的是开始和结束的时间（Date类型）
    // startDate.value = value[0]
    // endDate.value = value[1]
    // 下面也能同步修改状态
    mainStore.startDate = value[0]
    mainStore.endDate= value[1]
    stayCount.value = getDiffDays(value[0], value[1])
    showCalendar.value = !showCalendar.value
}

// ----------------热门建议
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)

// ----------------搜索按钮
const searchBtnClick = () => {
    router.push({
        path: "./search",
        query: {
            startDate: startDate.value,
            endDate: endDate.value,
            currentCity: currentCity.value.cityName
        }
    })
}


</script>

<style scoped lang='less'>
.search-box {
    --van-calendar-popup-height: 100%;
}
.location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;

    .city {
        flex: 1;
        color: #333;
        font-size: 15px;
    }

    .position {
        width: 74px;
        display: flex;
        align-items: center;

        .text {
            font-size: 12px;
            position: relative;
            top: 2px;
            color: #666;
        }

        img {
            margin-left: 5px;
            width: 18px;
            height: 18px;
        }
    }
}

.section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 20px;
    color: #999;
    height: 44px;

    .start {
        flex: 1;
        display: flex;
        height: 44px;
        align-items: center;
    }

    .end {
        min-width: 30%;
        padding-left: 20px;
    }

    .date {
        display: flex;
        flex-direction: column;

        .tip {
            font-size: 12px;
            color: #999;
        }

        .time {
            margin-top: 3px;
            color: #333;
            font-size: 15px;
            font-weight: 500;
        }
    }
}

.date-range{
    .stay {
            flex: 1;
            text-align: center;
            font-size: 12px;
            color: #666;
        }
}

.price-counter{
    .start{
        border-right: 1px solid var(--line-color);
    }
}

.hot-suggests{
    margin: 10px 0;
    height: auto;

    .item{
        padding: 4px 8px;
        margin: 4px;
        border-radius: 14px;
        font-size: 12px;
        line-height: 1;
    }
}

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}

</style>