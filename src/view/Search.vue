<!--
 * @Author: 亦华宸 1786016109@qq.com
 * @Date: 2023-07-06 19:23:36
 * @LastEditors: 亦华宸 1786016109@qq.com
 * @LastEditTime: 2023-07-11 12:22:48
 * @FilePath: \Vue_data\project_vue\src\view\Search.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="common-layout">
        <el-container>
            <el-header><Navbar></Navbar></el-header>
            <el-main><Table></Table></el-main>
        </el-container>
    </div>
</template>
  

<script setup lang="ts">
// import { ElContainer, ElHeader, ElMain } from 'element-plus';
// import {RouterView} from "vue-router"
import Table from '../components/Table/index.vue'
import Navbar from '../components/navbar.vue'
</script>

<style scopedb lang="scss">
body{
    background-color: #f6f7f8;
}
.el-header{
    padding: 0px;
}
</style>