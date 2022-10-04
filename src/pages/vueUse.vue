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
    // 2、onClickOutside 关闭模态
//     onClickOutside检测在元素之外进行的任何点击。根据我的经验，此功能最常见的用例是关闭任何模式或弹出窗口。

// 通常，我们希望模态屏蔽网页的其余部分以吸引用户的注意力并限制错误。但是，如果他们确实在模态之外单击，我们希望它关闭。
//3.useVModel 简化了 v-model 绑定
//Vue 开发人员的一个常见用例是为组件创建自定义 v-model 绑定。这意味着我们的组件接受一个值作为 prop，并且每当该值被修改时，我们的组件都会向父级发出更新事件。
//4、使用InterpObserver 跟踪元素可见性
//5、useTransition 在值之间缓和
// https://blog.csdn.net/qq_28550263/article/details/122138846 中文索引
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
