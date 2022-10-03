<template>
    <h1> useMouse 的鼠标坐标 </h1>
    <h3>Mouse: {{ x }} x {{ y }}</h3>
    <h1> useRefHistory 跟踪响应式数据的更改 </h1>
    <p> 
    <button @click="undo"> Undo </button>
    <button @click="redo"> Redo </button>
  </p>
  <textarea v-model="text"/>
  <ul>
    <li v-for="entry in history" :key="entry.timestamp">
      {{ entry }}
    </li>
  </ul>

    <router-link to="/">点击跳转至首页2</router-link>
</template>

<script lang="ts" setup>
    import { useMouse,useRefHistory  } from '@vueuse/core';
    // 
    const { x, y } = useMouse();
    // 
    const text = ref('')
    const { history, undo, redo } = useRefHistory(text)
    //高级选项
    // const { history, undo, redo } = useRefHistory(text, {
    //   deep: true,
    //   capacity: 10,
    // })
</script>
<style scoped>
button {
    border: none;
    outline: none;
    margin-right: 10px;
    background-color: #2ecc71;
    color: white;
    padding: 5px 10px;;
  }
</style>
