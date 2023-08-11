<template>
    <van-dropdown-menu>
      <template v-for="(item, index) in itemsData">
        <!-- 位置筛选 -->
        <van-dropdown-item
          v-if="item.gType === 2"
          title="位置"  
          :ref="dropdownItemRefs"
        >
          <div class="dropdown-bar-panel-content">
            <side-bar
              class="top"
              :menuData="item.subGroups"
              @item-click="handleItemClick"
            ></side-bar>
            <view-house-btns
              class="bottom"
              @clear="handleClearClick('位置')"
              @view-click="handleViewClick('位置')"
            ></view-house-btns>
          </div>
        </van-dropdown-item>

        <!-- 排序切换 -->
        <van-dropdown-item
          v-if="item.gType === 4"
          v-model="value"
          :options="options"
        />
      </template>
    </van-dropdown-menu>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import SideBar from "@/components/side-bar/index.vue";
  import ViewHouseBtns from "@/components/view-house-btns/index.vue"
  
  const props = defineProps({
      itemsData: {
          type: Array,
          default: () => [],
      },
  });

  const handleItemClick = (item) => {
    console.log('当前选择--', item);
  };
  
  // 排序
  const value = ref(0);
  const options = [
    { text: "欢迎度排序", value: 0 },
    { text: "好评优先", value: 1 },
    { text: "点评数多->少", value: 2 },
    { text: "低价优先", value: 3 },
    { text: "高价优先", value: 4 },
  ];

  //用于保存全部组件实例
  const dropdownRefs = {};  
  const dropdownItemRefs = (el) => {
    if (el) {
      dropdownRefs[el.title] = el; 
    }
  };
  // vant下拉组件实例上定义了 toggle方法，用于切换下来/收起
  const handleClearClick = (title) => {
    dropdownRefs[title]?.toggle();
  };
  const handleViewClick = (title) => {
    dropdownRefs[title]?.toggle();
  };

  </script>
  
  <style scoped lang="less">
  @popupHeight: 500px;
  // 重写Vant样式
  
  :global(.van-dropdown-menu .van-dropdown-item__content) {
    overflow-y: hidden;
    max-height: 100%;
  }
  
  .dropdown-bar-panel-content {
    position: relative;
    height: @popupHeight;
    overflow: hidden;
    background-color: var(--van-sidebar-background-color);
  
    // .top {
    // }
  
    .bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100;
    }
  }
  </style>
  