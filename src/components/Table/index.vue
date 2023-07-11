<!--
 * @Author: 亦华宸 1786016109@qq.com
 * @Date: 2023-07-06 19:57:07
 * @LastEditors: 亦华宸 1786016109@qq.com
 * @LastEditTime: 2023-07-12 02:15:07
 * @FilePath: \Vue_data\project_vue\src\components\Table\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div id="box">
        <!-- 搜索框 -->
        <el-row class="row-bg" justify="space-between">
            <el-col :span="2"> <img src="resource.png"> <div>资源大厅</div> </el-col>
            
            <el-col :span="10">
                <el-input
                v-model="searchValue"
                placeholder="请输入资源名称或用户名搜索"
                size="large"
                >
                    <template #append>
                        <el-button @click="selectData" :icon="Search" type="primary" id="search">搜索</el-button>
                    </template>
                </el-input>
            </el-col>
        </el-row>

        <!-- 信息筛选表 -->
        <SelectTable></SelectTable>
        <!-- 信息展示区 -->
        <PresentInformation ></PresentInformation>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import PresentInformation from './components/PresentInformation.vue'
import SelectTable from './components/SelectTable.vue'
import { useTDStore } from '../../store/tableData';

    const store = useTDStore();     //操控状态
    let searchValue: Ref<string> = ref("")
        
    /**
     * @description: 用于处理搜索事件
     * @return: void
     */
    function selectData(){
        store.keywords = searchValue.value
    }    
</script>

<style scoped lang="scss">
    #box{
        width: 1140px;
        padding: 30px;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 6px 1px #eaebef;
    }
    .el-col{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
    }
    .el-button{
        width: 90px;
        height: 100%;
        border-radius: 0 3px 3px 0;
        color: #fff !important;
        background-color: #3473e6 !important;
    }
</style>