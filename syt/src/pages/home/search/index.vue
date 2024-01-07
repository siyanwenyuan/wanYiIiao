<template>

  <div class="search">
    <el-autocomplete
        clearable
        placeholder="请输入医院名称"
    />
    <el-button type="primary" size="default" :icon="Search"></el-button>

  </div>

</template>


<script setup lang="ts">

//引入icon图标组件
import {Search} from "@element-plus/icons-vue"
</script>


<style scoped lang="scss">

.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;

  //深度选择器，对element组件样式进行修改，否则样式修改不会生效
  ::v-deep(.el-input__wrapper){
    width: 600px;
    margin-right: 10px;
  }

}

</style>
