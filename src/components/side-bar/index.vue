<template>
    <div v-if="sideDatas.length" class="side-bar">
      <!-- 左侧-使用vant侧边导航组件实现 -->
      <div class="side-menu">
        <!-- 这里是类名：热门推荐、观光景点、商圈 -->
        <van-sidebar v-model="currentSideActive" @change="onSideMenuChange">
          <template v-for="(item, index) in sideDatas" :key="index">
            <van-sidebar-item :title="item.label" />
          </template>
        </van-sidebar>
      </div>

      <!-- 右侧-通过插槽传入面板结构 -->
      <div class="content">
        <!-- 这里是每个类名下的项目，有的类目下面还有类目subGroups -->
        <slot name="content">
          <!-- 插槽的默认内容 -->
          <template
            v-if="sideDatas[currentSideActive].items.length"
            v-for="(addrInfo, index) in sideDatas[currentSideActive].items"
            :key="index"
          >
            <div
              :class="['list-item', addrInfo.isSelect ? 'active' : '']"
              @click="handleItemClick(currentSideActive, index)"
            >
              <div class="name">{{ addrInfo.label }}</div>
              <span class="desp" v-if="addrInfo.percentageUser">
                {{ addrInfo.percentageUser }}
              </span>
            </div>
          </template>
          
          <!-- 如果有二级类目，就要渲染成二级列表 -->
          <template v-if="getSubSide.length">
            <div class="sub-side-panel">
              <div class="sub-side-bar">
                <van-sidebar v-model="currentSubSideActive">
                  <template v-for="(group, indey) in getSubSide" :key="indey">
                    <van-sidebar-item :title="group.label"/>
                  </template>
                </van-sidebar>
              </div>
              <div class="sub-content">
                <template v-for="(addrItem, indez) in getSubSide[currentSubSideActive].items" :key="indez">
                  <div
                    :class="['list-item', addrItem.isSelect ? 'active' : '']"
                    @click="handleSubItemClick(indez)"
                  >
                  <div class="name">{{ addrItem.label }}</div>
                  <span class="desp" v-if="addrItem.percentageUser">
                    {{ addrItem.percentageUser }}
                  </span>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from "vue";
  const props = defineProps({
    menuData: {
      type: Array,
      default: () => [],
    },
  });
  const emit = defineEmits(["itemClick"]);

  const currentSideActive = ref(0);  //第一级侧边导航的索引
  const sideDatas = ref([]);
  
  watch(
    // 监听props：这里要写成函数
    () => props.menuData,
    (newValue, oldValue) => {
      // console.log("menuData", newValue)
      sideDatas.value = newValue;
    },
    {
      immediate: true,
    }
  );
  
  // 第一级类目
  const onSideMenuChange = (index) => console.log(`侧边导航标签 ${currentSideActive.value}`)

  const handleItemClick = (currentSideActive, index) => {
    if (sideDatas.value[currentSideActive]) {
      let addrInfos = sideDatas.value[currentSideActive].items || [];
      // 给每个具体的选项添加一个选中标识 isSelect
      addrInfos.forEach((item, i) => {
        item.isSelect = i === index;
      });
      // 将当前选中项目信息传递给上层组件
      emit("itemClick", {
        sideDatas: sideDatas.value,
        currentSideActive,
        index,
      });
    }
  }

  //如果有二级类目，就要渲染
  const currentSubSideActive = ref(0)
  const getSubSide = computed(() => {
    let subMenus = sideDatas.value[currentSideActive.value].subGroups || []
    return subMenus
  })
  const handleSubItemClick = (indez) => {
    if(sideDatas.value[currentSideActive.value]){
      let subGroups = sideDatas.value[currentSideActive.value].subGroups || []
      let addrItems = subGroups[currentSubSideActive.value].items || []
      
      addrItems.forEach((item, i) => {
        item.isSelect = i === indez
      })
      emit('itemClick', {
        sideDatas: sideDatas.value,
        currentSideActive: currentSideActive.value,
        currentSubSideActive: currentSubSideActive.value,
        indez
      })
    }
  }
 
  </script>
  
  <style scoped lang="less">

  :global(.side-bar .van-sidebar-item) {
      padding-left: 20px;
      padding-top: 14px;
      padding-bottom: 14px;
    }
  :global(.side-bar .van-sidebar-item::before) {
    border-radius: 50%;
    left: 8px;
  }

  @popupHeight: 500px;
  .side-bar :deep(.van-sidebar) {
    height: calc(@popupHeight - 60px);
  }
  .side-bar {
    display: flex;
    flex-direction: row;
    .content {
      flex: 1;
      overflow-y: auto;
      height: calc(@popupHeight - 60px);
      background-color: white;
  
      .list-item {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 55px;
  
        padding: 0 20px 0 10px;
        margin-right: 20px;
        margin-left: 12px;
  
        font-size: 14px;
        .name {
          padding-bottom: 6px;
        }
  
        .desp {
          font-size: 12px;
          color: #999;
        }
      }
    }
  }
  
  .active {
    background-color: #fffcf5;
    .name {
      color: var(--primary-color);
    }
  }

  .sub-side-panel {
  display: flex;
  flex-direction: row;
  .sub-side-bar {
    border-right: 1px solid #f8f8f8;
  }
  .sub-side-bar :deep(.van-sidebar) {
    .van-sidebar-item {
      background-color: white !important;
    }
  }
  .sub-content {
    flex: 1;
    overflow-x: hidden;
    overflow-y: scroll;
    height: calc(@popupHeight - 60px);
  }
  }
  </style>
  