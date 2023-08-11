<template>
  <div class="nav-bar">
    <img src="@/assets/img/home/home_logo.png" alt="">
    <div class="title">风植旅途</div>
  </div>
</template>

<script setup>
</script>

<style scoped lang='less'>
.nav-bar{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    border-bottom: 1px solid #f2f2f2;
    img{
      width: 27px;
    }
    .title{
        color: var(--primary-color);
        font-size: 16px;
        font-weight: 600;
        margin-left: 3px;
    }
}
</style>