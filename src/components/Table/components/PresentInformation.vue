<!--
 * @Author: 亦华宸 1786016109@qq.com
 * @Date: 2023-07-07 22:36:55
 * @LastEditors: 亦华宸 1786016109@qq.com
 * @LastEditTime: 2023-07-11 00:49:28
 * @FilePath: \Vue_data\project_vue\src\components\Table\components\PresentInformation.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <el-row justify="center">
            <el-col :span="7">服务名称</el-col>
            <el-col :span="7">发布用户</el-col>
            <el-col :span="4">服务类型</el-col>
            <el-col :span="3">成功成交数</el-col>
            <el-col :span="3">信用评价</el-col>
        </el-row>
        <el-row justify="center" v-for="item in PresentData.list" :key="item.id">
            <el-col :span="7">{{ item.title }}</el-col>
            <el-col :span="7" style="display: flex;align-items: center;"><img src="../../../assets/default_avatar.442622a.png" style="width: 40px;height: 40px;margin-right: 10px;">  <div style="word-wrap: word-break;
word-break: break-all;">{{ item.orgName }}</div></el-col>
            <el-col :span="4">{{ item.serviceTypeName }}</el-col>
            <el-col :span="3">{{ item.totalDeal }}</el-col>
            <el-col :span="3">{{ item.avgScore }}</el-col>
        </el-row>
        <el-pagination
            background
            v-model:current-page= store.pageNum
            v-model:page-size= store.pageSize
            layout="prev, pager, next, jumper,"
            :total= PresentData.total
        />
    </div>
</template>

<script setup lang="ts">
import { watch, reactive, } from 'vue'
import { useTDStore } from '../../../store/tableData';
import { apiGetData } from '../../../apis/index'

    const store = useTDStore();
    let PresentData = reactive({});
    /**
     * @description: 用于重新发送请求，获取数据。
     * @returns: void
     */
    const initGetList = async () => {
        let res = await apiGetData();
        Object.assign(PresentData, res.data.data);   
    }
    
    initGetList()   //页面数据初始化

    watch(store,() => {
        initGetList();
    })
    
    
    
</script>

<style scoped lang="scss">
.el-row:first-child{
    height: 48px;
    padding: 0px 20px;
    font-size: 14px;
    font-weight: 700;
    align-items: center;
    color: #909399;
    background-color: #f7f8f9;
    border-radius: 4px;
    box-sizing: border-box;
}
.el-row:nth-child(n+2){
    height: 80px;
    padding: 0px 20px;
    margin: 15px 0px;
    align-items: center;
    border: 1px solid #dfdfdf;
    border-radius: 4px;
    &:hover{
        border: 1px solid #3473e6;
        box-shadow: 0 0 3px 1px #e2e4e9;
        &>.el-col:nth-child(-n+2) {
            color: #3473e6;
        }
    }
    &>.el-col:nth-child(-n+2) {
        font-weight: 700;
    }
    &>.el-col:nth-child(3) {
        color: #4f5054;
        font-size: 14px;
    }
    &>.el-col:nth-child(4) {
        font-weight: 700;
        color: #f1b221;
    }
    &>.el-col:nth-child(5){
        font-weight: 700;
        color: #3473e6;
    }
}
.el-pagination{
    padding: 20px 0px;
    display: flex;
    justify-content: center;
}
</style>