<template>
    <div>我是父组件----1</div>
    <subassembly @getChili="getChili" :title="msg" ref="shield" />

    <button @click="shiEmots">获取暴露</button>
  </template>
  
  <script lang="ts" setup>
  import {ref} from 'vue'
  import subassembly from '@/components/subassembly.vue'
  
  //把值传递给子组件 ---> :title="msg"  <Home @getChili="getChili" :title="msg" />
  const msg = ref('父的值')
  const getChili = (msg:any) =>{
    console.log(msg,'123123')
  }

  const shield = ref()

const  shiEmots = () =>{
  //子组件接收暴露出来得值
  console.log('接收reactive暴漏出来的值',shield.value.xiaoZhi)
  console.log('接收ref暴漏出来的值',shield.value.xiaoXiaoZhi)
}

  </script>