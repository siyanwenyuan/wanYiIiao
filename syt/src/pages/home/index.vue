<template>

  <div>
    <!--引入首页轮播图组件-->
    <Carousel/>
    <!--引入首页医院自动搜索框-->
    <Search/>

    <!--底部医院展示-->
    <el-row gutter="20">
      <el-col :span="20">
        <!--等级子组件-->
        <Level/>
        <!--地区子组件-->
        <Region/>
        <!--展示医院结构-->
        <div class="hospital">
          <card class="item" v-for="(item,index) in hasHospitalArr" :key="index" :hospitalInfo="item"/>
          <!--分页器-->

        </div>
        <el-pagination
            v-model:current-page="pageNo"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 40]"
            :background="true"
            layout="prev, pager, next, jumper,->,sizes,total"
            :total="total"
            @current-change="currentChange"
            @size-change="sizeChange"
        />

      </el-col>
      <el-col :span="4">456</el-col>
    </el-row>


  </div>
</template>


<script setup lang="ts">
//引入组合式api函数，和响应式数据
import {onMounted, ref} from "vue";
import {reqHospital} from "@/api/home";
import Carousel from '../home/carousel/index.vue'
import Search from '../home/search/index.vue'
//引入首页等级组件
import Level from '../home/level/index.vue'
//引入地区组件
import Region from '../home/region/index.vue'
//引入医院信息卡片组件
import Card from '../home/card/index.vue'
//引入医院的数据类型
import type {Content, HospitalResponseData} from "@/api/home/type.ts";


let pageNo = ref<number>(1);
let pageSize = ref<number>(10);
//存储已有医院的数据
//其中的Content是对返回的数据类型进行约束
let hasHospitalArr = ref<Content>([]);
//存储已有医院的总个数
let total = ref<number>(0);

//组件挂载完毕，就获取一次请求
onMounted(() => {
  getHospitalInfo();
});

//获取已有医院的数据,在这个封装成一个函数进行获取，方便上面onMounted挂载
const getHospitalInfo = async () => {
  //获取医院的数据，默认是第一页每页显示十条数据
  let result: HospitalResponseData = await reqHospital(pageNo.value, pageSize.value);
  //console.log(result);
  //存储数据
  if (result.code == 200) {
    //存储已有的医院的数据
    hasHospitalArr.value = result.data.content;
    //存储医院的总个数
    total.value = result.data.totalElements;
  }
}

//分页器页码发送变化触发
const currentChange = () => {

  //触发分页器，就重新发起一起请求
  getHospitalInfo();
}

//分页器下拉菜单发生变化的时候会触发
const sizeChange = () => {
  //每次只要发生改变，则触发这个方法，也就是发起一次请求
  getHospitalInfo();
}


</script>

<style scoped lang="scss">

.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .item {
    width: 48%;
    margin: 10px 0px;

  }
}

</style>
