<template>
  <div class="msg-tip">
    <strong class="score" v-if="itemData.overall">{{itemData.overall}}分</strong>
    <span class="answer van-ellipsis">{{itemData.commentBrief}}</span>
  </div>
</template>

<script setup>
  const props = defineProps({
    itemData: {
      type: Object,
      default: () => {}
    }
  })
</script>

<style scoped lang='less'>
.msg-tip {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  max-width: 59%;

  height: 17px;
  padding-left: 6px;
  border-radius: 10px;
  background-color: hsla(0, 0%, 100%, 0.9);

  .score {
    font-size: 14px;
    transform: scale(0.8);
    transform-origin: 0 center;
    color: #333;
  }
  .answer {
    position: relative;
    font-size: 12px;
    font-family: PingFangSC-Regular, Helvetica Neue, sans-serif;
    transform: scale(0.8);
    transform-origin: 0 center;
    margin-left: -2px;
    padding-left: 5px;
    color: #666;
    &::before {
      content: " ";
      left: 0;
      top: 2px;
      position: absolute;
      height: 10px;
      width: 1px;
      background-color: #dadada;
    }
  }
}
</style>