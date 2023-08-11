<template>
  <div class="search">
    <div class="search-nav-bar">
      <nav-bar>
        <template #title>
          <search-bar
          keyWord="搜索景点、地标、房源"
          :searchIcon="false"
          @click="onSearchClick"
          ></search-bar>
        </template>
      </nav-bar>
      <!-- 区域 排序 筛选 下拉框  -->
      <dropdown-select :itemsData="searchConditions"></dropdown-select>
      <!-- 筛选关键字 -->
      <div class="tab-wrapper">
          <tag-select :items-data="searchHouse.hotFilters"></tag-select>
      </div>
    </div>
    <div class="list">
      <template v-for="(item, index) in searchHouse.items">
        <search-list-item :item-data="item"></search-list-item>
      </template>
    </div>
  
    <!-- 点击搜索框显示搜索面板（全屏） -->
    <search-panel 
      v-if="showSearchPanel"
      @cancel="onSearchCancel"
      >
    </search-panel>
  </div>
</template>

<script setup>
import { ref  } from 'vue';
import NavBar from "@/components/nav-bar/index.vue"
import SearchBar from "@/components/search-bar/search-bar.vue";
import DropdownSelect from "@/components/dropdown-select/dropdown-select.vue";
import TagSelect from "@/components/tag-select/tag-select.vue";
import SearchListItem from "@/components/search-list-item/search-list-item.vue";
import SearchPanel from "./cpns/search-panel/search-panel.vue"
import { getSearchConditions, getSearchHouse,  } from "@/services/modules/search.js";

const searchConditions = ref([])
const searchHouse = ref([])
const showSearchPanel = ref(false)

// 请求数据
getSearchConditions().then((res) => {
  searchConditions.value  = res.data.data.allConditions
})
getSearchHouse().then((res) => {
  searchHouse.value = res.data.data;
});

const onSearchClick = () => {
  showSearchPanel.value = true;
}
const onSearchCancel = () => {
  showSearchPanel.value = false;
}

</script>

<style scoped lang='less'>
  .search{
    overflow: hidden;
    width: 100%;
    height: 100%;
    .search-nav-bar {
      position: fixed;
      width: 100%;
      z-index: 100;
    }

    .tab-wrapper {
      padding: 12px 0 10px 20px;
      background-color: #f7f8fb;
    }

    .list{
      padding: 141px 20px 0 20px;
      z-index: -1;
      position: relative;
    }
  }

</style>