<template>
  <div class="tag-select">
    <template v-for="(item, index) in hotFilters" :key="index">
        <van-dropdown-menu v-if="item.subFilterItems && item.subFilterItems.length">
            <van-dropdown-item :title="item.label" :ref="dropdownItemRefs">
                <div class="drow-content">
                    <tag-select-item v-for="(subItem, indey) in item.subFilterItems"
                        class="d-item"
                        type="pink"
                        :title="subItem.label"
                        :active="subItem.isSelect"
                        @tag-click="handleSubTagClick(index, indey, item.label)"
                    >
                    </tag-select-item>
                </div>
            </van-dropdown-item>
        </van-dropdown-menu>

        <tag-select-item v-else
            :title="item.label"
            :active="item.isSelect"
            @tag-click="handleTagClick(index)"
        >
        </tag-select-item>
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import TagSelectItem from "@/components/tag-select-item/tag-select-item.vue";

const props = defineProps({
    itemsData: {
        type: Array,
        default: ()=>{}
    }
})

//用于保存全部组件实例
const dropdownRefs = {};  
const dropdownItemRefs = (el) => {
  if (el) {
    dropdownRefs[el.title] = el; 
  }
}
// 定义变量
const hotFilters = ref([])
watch(
    ()=>props.itemsData,
    (newValue) => {
        hotFilters.value = newValue
    }
)

// 事件
const handleTagClick = (index) => {
    hotFilters.value.forEach((hotInfo, i) => {
        hotInfo.isSelect = i === index
    });
}
const handleSubTagClick = (index, indey, title) => {
    // 一级菜单
    hotFilters.value.forEach((hotInfo, i) => {
        if(i === index){
            const subFilterItems = hotInfo.subFilterItems
            // 二级菜单
            subFilterItems.forEach((item, j) => {
                item.isSelect = j === indey
            })
        }
    })
    dropdownRefs[title]?.toggle();
}


</script>

<style scoped lang='less'>
.btn-style {
  height: 25px;
  line-height: 25px;
  border-radius: 13px;
  border: 1px solid rgba(0, 0, 0, 0);
  padding: 0 3px;
  background-color: white;
}
:global(.tag-select .van-dropdown-menu) {
  display: inline-block;
}
:global(.tag-select .van-dropdown-menu .van-dropdown-menu__bar) {
  .btn-style();
  box-shadow: none;
}
:global(.tag-select .van-dropdown-menu__title) {
  padding-right: 20px;
  font-size: 12px;
  color: #666;
}
:global(.tag-select .van-dropdown-menu__title::after) {
  right: 8px;
}

:global(.tag-select .van-dropdown-menu .van-dropdown-item--down) {
  top: 140px !important;
}
:global(.tag-select .van-dropdown-menu .van-dropdown-item__content) {
  background-color: rgb(255, 255, 255);
  padding-top: 0px;
}

.tag-select {
  height: 29px;
  // 水平滚动
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }

  .drow-content {
    margin-top: 12px;
    margin-left: 10px;
    display: flex;
    flex-wrap: wrap;
    .d-item {
      margin-bottom: 10px;
    }
  }
}
</style>