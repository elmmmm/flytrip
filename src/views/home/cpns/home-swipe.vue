<template>
  <div class="banner">
    <van-swipe class="banner-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="image in images" :key="image">
            <img :src="getAssetURL(image)" />
        </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
import { getAssetURL } from "@/utils/load_assets.js";
 const images = [
      'home/banner.webp',
      'home/banner2.webp',
    ];
</script>

<style scoped lang='less'>
.banner{
    .banner-swipe{
        img{
            width: 100%;
        }
    }
}
</style>