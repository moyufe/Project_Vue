<!--
 * @Author: 亦华宸 1786016109@qq.com
 * @Date: 2023-07-06 16:31:17
 * @LastEditors: 亦华宸 1786016109@qq.com
 * @LastEditTime: 2023-07-07 22:29:14
 * @FilePath: \Vue_data\project_vue\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { RouterView } from 'vue-router';
import locale from "element-plus/lib/locale/lang/zh-cn";
</script>

<template>
  <el-config-provider :locale="locale">
    <RouterView></RouterView>
  </el-config-provider>
</template>

<style>
*{margin: 0;padding: 0;}
</style>
