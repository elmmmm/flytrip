<template>
  <div class="search-category">
    <div class="title">
        <span class="name">{{ title }}</span>
        <div class="more" @click="moreClick">
            <slot name="more">
                <span class="m-name">展开</span>
                <i :class="['icon-more', moreIconIsDown?'down':'up']"></i>
            </slot>
        </div>
    </div>
    <div :class="['content', moreIconIsDown?'hidden':'']">
        <template v-for="item in itemData">
            <tag-select-item :title="item.name" type="pink" @tag-click="handleTagClick(item)">
            </tag-select-item>
        </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TagSelectItem from "@/components/tag-select-item/tag-select-item.vue";
const props = defineProps({
    title: {
        type: String,
        default: "热门搜索",
    },
    itemData: {
        type: Array,
        default: () => []
    }
})

// 下拉展开
const moreIconIsDown = ref(false)
const moreClick = () => {
    moreIconIsDown.value = !moreIconIsDown.value
}

// 小标签点击
const emit = defineEmits(['tagClick'])
const handleTagClick = (item) => {
    emit("tagClick", item)
}

</script>

<style scoped lang='less'>
.search-category{
    .title{
        display: flex;
        justify-content: space-between;
        .name{
            position: relative; 
            padding-left: 10px;
            font-size: 16px;
            font-weight: 500;
            color: #333;
            &::before{
                content: "";
                position: absolute;
                top: 1px;
                left: 0;
                width: 3px;
                height: 15px;
                background-color:var(--primary-color) ;
            }
        }

        .more{
            display: flex;
            justify-content: center;
            align-items: center;
            .m-name{
                font-weight: 500;
                font-size: 10px;
                color: #666;
                line-height: 20px;
                height: 20px;
                margin-right: 5px;
            }
            .icon-more{
                display: inline-block;
                background-image: url(@/assets/img/home/home-sprite.png);
                width: 10px;
                height: 5.5px;
                background-size: 207px 192px;
            }
            .down{
                background-position: -178px -121px;
            }
            .up{
                background-position: -176px -133px;
            }
        }
    }

    .content{
        margin-top: 7px;
        margin-bottom: 22px;
    }
    .content.hidden {
        max-height: 0px;
        overflow-y: hidden;
    }
}
</style>