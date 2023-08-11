<template>
  <div class="search-panel">
    <van-search
        v-model="value"
        show-action
        shape="round"
        placeholder="搜索景点、地标、房源"
        @search="onSearch"
        @cancel="onCancel"
    >
    </van-search>
    <div class="search-category-panel">
        <search-category
            title="搜索历史"
            :item-data="searchStore.getSearchHistorys"
            @tag-click="onTagClick"
        >
        </search-category>
    </div>
  </div>
</template>

<script setup>
import { ref, watch} from 'vue'
import useSearchStore from "@/stores/modules/search";
import SearchCategory from "../search-category/search-category.vue";

const props = defineProps({
    searchPanelDatas: {
        type: Array,
        default: ()=>{}
    }
})
const searchStore = useSearchStore()
searchStore.initSearchHistory()

const emit = defineEmits(["cancel", "search", ]);
const value = ref("")
const onSearch = (val) => {
    // 缓存到历史记录中
    searchStore.addSearchHistory(val);
}
const onCancel = () => {
    emit("cancel")
}
const onTagClick = (item) => {
    console.log('tagClick', item)
}

</script>

<style scoped lang='less'>
// 重写Vant样式
:global(.search-panel .van-search--show-action) {
  padding-left: 0px;
}
.search-panel :deep(.van-search) {
  .van-field__left-icon .van-icon-search {
    font-size: 25px;
  }
  .van-field__control::placeholder {
    font-size: 13px;
    color: #ccc !important;
  }
}

.search-panel{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    padding: 0px 20px;
    background-color: white;
}

.search-category-panel {
  overflow-y: scroll;
  padding-top: 30px;
  height: calc(100% - 100px);
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
}
</style>