<template>
    <div>
        <h1>ref reactive 函数</h1>
        <p>姓名：{{ name }}</p>
        <p>姓名2：{{ name_ref }}</p>
        <el-button type="primary" @click="btn">修改信息</el-button>
        <h1>toRef toRefs 函数</h1>

        <p>年龄：{{ boy.age }}</p>
        <p>年龄2：{{ boy_toRef }}</p>
        <el-button type="primary" @click="btn2">修改 name</el-button>
    </div>
</template>
<script lang="ts" setup>
    import { ref, toRef } from 'vue';

    const name = '我是𝒆𝒅.';
    const name_ref = ref(name);
    const btn = () => {
        name_ref.value = '𝒆𝒅.';
        console.log(name_ref); // 打印一下被ref包裹的数据
        console.log(name); // 打印一下源数据
    };

    const boy = {
        name: '我是𝒆𝒅.',
        age: 10
    };
    const boy_toRef = toRef(boy, 'name'); // 这个 boy_toRef 就是被 toRef 函数操作过的 boy 的 name 值
    const btn2 = () => {
        boy_toRef.value = '𝒆𝒅.'; // 把 name 修改成 𝒆𝒅.
        console.log(boy_toRef); // 修改完成打印一下结果
        console.log(boy); // 修改完成打印一下boy结果
    };
</script>
