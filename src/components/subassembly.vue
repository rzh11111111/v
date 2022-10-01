<template>
    <div>我是子组件----2</div>
    <div style="color: red">{{props.title}}</div>
    <button @click="toEmits">点击传到父组件</button>

    <div>我是子组件----defineExpose> {{ xiaoZhi.stator }}</div>
  </template>
  
  <script lang="ts" setup>
  import {defineProps,defineEmits,defineExpose,reactive,ref} from 'vue'
  
  //接收父组件 传过来的值！
  const  props = defineProps({
    title: {
      type: String
    }
  });
  
  //打印一下 接收父组件的值
  console.log(props.title) //父的值


  //先定义一下子 在发送值
const  emits = defineEmits(['getChili']);

const  toEmits = () => {
  emits('getChili','子的值')
}

let xiaoZhi = reactive({
  stator: '小志',
  age: 27
})

let xiaoXiaoZhi = ref('小小志');
console.log(xiaoXiaoZhi)

defineExpose({
  xiaoZhi,
  xiaoXiaoZhi
})
  </script>