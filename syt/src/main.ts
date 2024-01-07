import { createApp } from 'vue'
import App from './App.vue'

//引入清除默认样式
import '@/style/reset.scss'
//引入全局组件--顶部 底部时都是全局组件

import HospitalTop from '@/components/hospital_top/index.vue';
import HospitalBottom from '@/components/hospital_bottom/index.vue';
//引入vue-router组件
import router from "@/router";
//引入element-plus插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入element-plus中文

//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app=createApp(App);
app.component('HospitalTop',HospitalTop);
app.component('HospitalBottom',HospitalBottom);
//安装vue-router
app.use(router);
//安装element-plus插件
app.use(ElementPlus,{
    locale: zhCn,
});

app.mount('#app');
