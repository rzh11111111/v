import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

// 创建vue实例
const app = createApp(App);

//vue3全局异常监控
app.config.errorHandler = (err, vm, info) => {
    console.log('[全局异常]',err,vm,info)
}
app.use(store);
app.use(router);

// 挂载实例
app.mount('#app');
