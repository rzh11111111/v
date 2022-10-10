<template>
    <img alt="Vue logo" src="./../assets/logo.png" />
    <UsePinia />
    <br />
   
    <div>
        <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="vue3功能" name="1">
        <el-scrollbar height="400px">
    <p v-for="item in activeItem" @click="topage(item.name)" :key="item.name" class="scrollbar-demo-item">点击跳转至{{ item.name }}页面</p>
  </el-scrollbar>
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
    import { useRouter } from 'vue-router';
    const router = useRouter()
    const checked = ref(true);
   
    const activeName = ref('1')

    const activeItem = reactive([
        {name:'login',use:'login'},
        {name:'vueUse',use:'vueUse'},
        {name:'request',use:'request'},
        {name:'torefVue',use:'torefVue'},
        {name:'defineprops',use:'defineprops'},
        {name:'hooksVue',use:'hooksVue'},
        {name:'tsLearn',use:'tsLearn'}
    ])
    const topage = (path:any)=>{
        router.push({path:path,query:{id:1}})
    }
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
