<template>
    <h2> 这里是登录页面 </h2>
    <br />
    <router-link to="/">点击跳转至首页,query</router-link>
    <br /><br />
    <router-link to="/vueUse">点击跳转至vueUse页面1</router-link>
</template>
<script lang="ts" setup>
    //没有r，是route
import { useRoute } from 'vue-router';
const route = useRoute()
    console.log(route.query)
</script>
