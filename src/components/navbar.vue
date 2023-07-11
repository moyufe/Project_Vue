<template>
    <div class="box">
        <el-row justify="space-between">
            <el-col :span="10">
                <el-row justify="space-between">
                    <el-col :span="6" class="logo">
                        <img src="logo.png"><div>共创云</div>
                    </el-col>
                    <el-col v-for="item in title" :span="4" class="title">{{ item }}</el-col>
                </el-row>
            </el-col>
            <el-col :span="3">
                <el-row justify="space-around">
                    <el-col :span="10">
                        <el-button type="primary">登录</el-button>
                    </el-col>
                    <el-col :span="10">
                        <el-button id="zc">注册</el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
    
</template>

<script setup lang="ts">
const title = ["服务产品","科创需求","专利论文","交易大数据"]

</script>

<style scoped lang="scss">
.box{
    background-color: #fff;
    &>.el-row{
        width: 1200px;height: 50px;
        margin: 0px auto;
    }
}
.el-row{
    align-items: center;
}
.title{
    color: #606266;
    font-size: 14px;
    cursor: pointer;
    &:hover{
        color: #3473e6;
    }
}
.logo{
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #3473e6;
    &>img{
        width: 30px;height: 30px;
        margin-right: 10px;
    }
}
#zc{
    color: #3473e6;
    border-color: #3473e6;
}
</style>