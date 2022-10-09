<template>

    <h2>当前求和:{{ sum }}</h2>
    <button @click="sum++">点我加一</button>
    <hr>
    <h2>当前鼠标点击坐标为:x:{{ point.x }},y:{{ point.y }}</h2>
  </template>
  
  <script lang="ts" setup>
  import {ref} from 'vue'
  //复用的usePoint
  import usePoint from "../hooks/usePoint"
  
      //数据
      let sum = ref(0)
      let point = usePoint()
    
  </script>