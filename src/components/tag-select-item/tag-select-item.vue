<template>
  <div :class="['tag-select-item', type, active ? 'active':'']"
        @click="handleItemClick"
  >
    {{ title }}
  </div>
</template>

<script setup>
// 组件封装
const props = defineProps({
    title: {
        type: String,
        default: "标签名"
    },
    type: {
        type: String,
        default: "default" //bule / pink / gray
    },
    active: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['tagClick'])
/* <template>中使用的 $emit方法不能在组件的<script setup>中使用，
但defineEmits() 会返回一个相同作用的函数供我们使用 */
const handleItemClick = () => {
    emit('tagClick', props.title)
}

</script>

<style scoped lang='less'>
.tag-select-item{
    position: relative;
    display: inline-block;
    height: 25px;
    line-height: 25px;
    padding: 0 10px;
    margin-left: 10px;
    margin-bottom: 2px;
    margin-top: 2px;
    border-radius: 13px;

    font-size: 12px;
    color: #666;
    background-color: white;
}
.tag-select-item.active{
    color: var(--primary-color) !important;
}

.tag-select-item.blue {
  color: #333;
  background-color: #ebfcff;
  padding: 0px 12px;
  margin-bottom: 6px;
  margin-left: 5px;
}

.tag-select-item.pink {
  color: #333;
  background-color: #fff4ec;
  padding: 0px 12px;
  margin-bottom: 6px;
  margin-left: 5px;
}

.tag-select-item.gray {
  color: #333;
  background-color: rgb(185, 187, 189);
  padding: 0px 12px;
  margin-bottom: 6px;
  margin-left: 10px;
}

</style>