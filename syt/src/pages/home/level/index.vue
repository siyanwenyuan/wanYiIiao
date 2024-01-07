<template>

  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">
        等级:
      </div>
      <ul class="hospital">
        <li class="active">全部</li>
        <li>三级甲等</li>
        <li>三级甲等</li>
        <li>三级甲等</li>
        <li>三级甲等</li>
      </ul>

    </div>

  </div>
</template>


<script setup lang="ts">
//引入这个请求的方法
import {reqHospitalLevelAndRegion} from '@/api/home'
//引入组合式api函数
import {onMounted,ref} from "vue";
import {HospitalLevelAndRegionResponseData,HospitalLevelAndRegionArr} from "@/api/home/type.ts";

//通过数组存储医院等级
let levelArr=ref<HospitalLevelAndRegionArr>([]);



//组件挂载完毕
onMounted(() => {

  //组件一挂载完毕，就获取一次医院等级的数据
  getLevel();
});


//获取医院等级的数据
const getLevel = async () => {

  let result: HospitalLevelAndRegionResponseData = await reqHospitalLevelAndRegion('HosType');
  //存储医院等级数据
  if(result.code==200)
  {
    levelArr.value=result.data;

  }

};


</script>

<script lang="ts">
 export default {
   name:"Level"


 }
</script>


<style scoped lang="scss">
.level {

  color: #7f7f7f;

  h1 {

    font-weight: 900;
    margin: 10px 0px;
  }

  .content {
    display: flex;

    .left {
      margin-right: 10px;
    }

    .hospital {
      display: flex;

      li {
        margin-right: 10px;

        &.active {
          color: #55a6fe;
        }

      }

      li:hover {
        color: #55a6fe;
        cursor: pointer;
      }
    }
  }
}

</style>
