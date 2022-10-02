<template>
    <img alt="Vue logo" src="./../assets/logo.png" />
    <UsePinia />
    <br />
   
    <div>
        <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="Consistency" name="1">
        <el-scrollbar height="400px">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </el-scrollbar>
        <router-link to="/login">点击跳转至login</router-link>
    <br /><br />
    <router-link to="/vueUse">点击跳转至vueUse页面</router-link>
    <br /><br />
    <router-link to="/request">点击跳转至request请求页面1</router-link>
    <br /><br />
    <router-link to="/toref">点击跳转至toref请求页面1</router-link>
    <p>{{ checked }}</p>
    <router-link to="/defineprops">点击跳转至defineprops请求页面1</router-link>
    <br /><br />
    <router-link to="/hooks">点击跳转至hooks请求页面1</router-link>
      </el-collapse-item>
      <el-collapse-item title="Feedback" name="2">
        <div>
          Operation feedback: enable the users to clearly perceive their
          operations by style updates and interactive effects;
        </div>
        <div>
          Visual feedback: reflect current state by updating or rearranging
          elements of the page.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Efficiency" name="3">
        <div>
          Simplify the process: keep operating process simple and intuitive;
        </div>
        <div>
          Definite and clear: enunciate your intentions clearly so that the
          users can quickly understand and make decisions;
        </div>
        <div>
          Easy to identify: the interface should be straightforward, which helps
          the users to identify and frees them from memorizing and recalling.
        </div>
      </el-collapse-item>
      <el-collapse-item title="Controllability" name="4">
        <div>
          Decision making: giving advices about operations is acceptable, but do
          not make decisions for the users;
        </div>
        <div>
          Controlled consequences: users should be granted the freedom to
          operate, including canceling, aborting or terminating current
          operation.
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
    // import { Component } from 'vue';
    import UsePinia from '@/components/UsePinia.vue';
    const checked = ref(true);
   
    const activeName = ref('1')
</script>
<style>
    .scrollbar-demo-item {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        margin: 10px;
        text-align: center;
        border-radius: 4px;
        background: var(--el-color-primary-light-9);
        color: var(--el-color-primary);
      }
</style>
