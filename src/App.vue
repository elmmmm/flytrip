<template>
  <div class="app">
    <!-- <KeepAlive>  vue3不支持
      <router-view></router-view>
    </KeepAlive> -->
    <router-view v-slot="{ Component }">
      <keep-alive include="home">             
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <!-- 这里建议用v-show，不用v-if，涉及到执行时机，路由可能没来得及监听 -->
    <tab-bar v-show="!$route.meta.hideTabBar"></tab-bar>
    <loading></loading>
  </div>
</template>

<script setup>
// vue3导入的组件都在模板中直接可用
import TabBar from '@/components/tab-bar/tab-bar.vue'
import Loading from '@/components/loading/loading.vue';
</script>


<style scoped>

</style>
