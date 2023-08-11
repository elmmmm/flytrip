<template>
  <div class="order-item-info">
    <img class="img-bg" :src="itemData.unitPicture" alt="">
    <div class="bottom">
        <div class="b-left">
            <div class="date">
                <p class="day">{{ getFormatDate(itemData.checkInDate) }}</p>
                <div class="week-time">
                    <span class="week">
                        {{ getFormatDate(itemData.checkInDate, true) }}
                    </span>
                    <span class="time">{{ itemData.checkInLatestTime }}</span>
                </div>  
            </div>
            <img class="arrow" src="@/assets/img/order/icon_right_orderlist.png" alt="">
            <div class="date">
                <p class="day">{{ getFormatDate(itemData.checkOutDate) }}</p>
                <div class="week-time">
                    <span class="week">
                        {{ getFormatDate(itemData.checkOutDate, true) }}
                    </span>
                    <span class="time">{{ itemData.checkOutLatestTime }}</span>
                </div>  
            </div>
        </div>
        <div class="b-right">
            <p class="name">支付总价</p>
            <span class="price">￥{{ itemData.prepayAmount }}</span>
        </div>
    </div>
  </div>
</template>

<script setup>
// import {computed} from 'vue'
const props = defineProps({
    itemData: {
        type: Object,
        default: () => {}
    }
})
const getFormatDate = (dateString, isWeek = false) => {
    let date = new Date(dateString)
    if(isWeek){
        // getDay()方法返回指定日期是星期几（从 0 到 6）
        return "周" + "日一二三四五六".charAt(date.getDay())
    }
    // getMonth()方法根据本地时间返回指定日期的月份（从 0 到 11）
    return `${date.getMonth() + 1}月${date.getDate()}日`
}

</script>

<style scoped lang='less'>
.order-item-info{
    position: relative;
    height: 223px;
    width: 100%;
    border-radius: 6px;
    
    .img-bg{
        width: 100%;
        height: 100%;
        border-radius: 6px;
    }

    .bottom{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;   
        display: flex;
        align-items: center;
        justify-content: space-between;

        height: 60px;
        background: rgba(9, 10, 14, 0.7);
        border-radius: 0 0 6px 6px;

        .b-left{
            flex: 1;
            display: flex;
            align-items: center;
            color: white;
            .date{
                padding: 0 20px;
                .day{
                    padding: 0;
                    margin: 0;
                    margin-bottom: 5px;
                    font-size: 16px;
                    line-height: 16px;
                    margin-bottom: 6px;
                }
                .week-time {
                    font-size: 12px;
                    text-align: center;
                    line-height: 12px;
                    opacity: 0.8;
                }
            }
            .arrow {
                width: 16px;
                height: 12px;
            }
        }

        .b-right{
            position: relative;
            width: 105px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &::before{
                content: "";
                position: absolute;
                top: 10px;
                left: -25px;
                width: 1px;
                height: 40px;
                background-color: white;
            }
            .name{
                color: #fff;
                text-align: center;
                line-height: 12px;
                opacity: 0.8;
                margin: 0;
                transform: scale(0.9);
            }
            .price {
                margin-top: 5px;
                font-size: 16px;
                color: var(--primary, #ff9645);
                letter-spacing: 0;
                text-align: right;
                line-height: 16px;
            }
        }
    }
}

</style>