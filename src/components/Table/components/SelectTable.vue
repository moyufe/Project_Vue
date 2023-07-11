<template>
    <el-row>
        <el-col :span="4">服务</el-col>
        <el-col :span="4">需求</el-col>
        <el-col :span="4">科创资源</el-col>
    </el-row>
    <div class="select">
        <div>
            <div>服务类型:</div>
            <div :class="classObj.zk[0]">
                <el-button :class="classObj.xz[0][0]"  @click="select.service('',-1)">不限</el-button>
                <el-button :class="classObj.xz[0][parseInt(index)+1]" v-for="(item, index) in viewData.service" @click="select.service(item.id, index)" >{{ item.name }}</el-button>
            </div>
            <div @click="qh(0)">
                <div v-if="f[0]">更多 <el-icon><ArrowDown /></el-icon></div>
                <div v-else>收起 <el-icon><ArrowUp /></el-icon></div>
            </div>
        </div>
        <el-divider border-style="dashed" />
        <div v-show="viewData.service2.length != 0">
            <div>二级:</div>
            <div :class="classObj.zk[1]">
                <el-button :class="classObj.xz[1][0]" @click="select.service2('',-1)">不限</el-button>
                <el-button :class="classObj.xz[1][parseInt(index)+1]" v-for="(item, index) in viewData.service2" @click="select.service2(item.id, index)">{{ item.name }}</el-button>
            </div>
            <div @click="qh(1)">
                <div v-if="f[1]">更多 <el-icon><ArrowDown /></el-icon></div>
                <div v-else>收起 <el-icon><ArrowUp /></el-icon></div>
            </div>
        </div>
        <el-divider border-style="dashed" v-show="viewData.service2.length != 0" />
        <div>
            <div>技术领域:</div>
            <div :class="classObj.zk[2]">
                <el-button :class="classObj.xz[2][0]" @click="select.ladderList('',-1)">不限</el-button>
                <el-button :class="classObj.xz[2][parseInt(index)+1]" v-for="(item, index) in viewData.ladderList" @click="select.ladderList(item.id, index)">{{ item.name }}</el-button>
            </div>
            <div @click="qh(2)">
                <div v-if="f[2]">更多 <el-icon><ArrowDown /></el-icon></div>
                <div v-else>收起 <el-icon><ArrowUp /></el-icon></div>
            </div>
        </div>
        <el-divider border-style="dashed" />
        <div>
            <div>数据来源:</div>
            <div :class="classObj.zk[3]">
                <el-button :class="classObj.xz[3][0]" @click="select.dataOriginList('',-1)">不限</el-button>
                <el-button :class="classObj.xz[3][parseInt(index)+1]" v-for="(item, index) in viewData.dataOriginList" @click="select.dataOriginList(item.id, index)">{{ item.name }}</el-button>
            </div>
            <div @click="qh(3)">
                <div v-if="f[3]">更多 <el-icon><ArrowDown /></el-icon></div>
                <div v-else>收起 <el-icon><ArrowUp /></el-icon></div>
            </div>
        </div>
        <el-divider border-style="dashed" />
        <div>
            <div>地区:</div>
            <div :class="classObj.zk[4]">
                <el-button :class="classObj.xz[4][0]" @click="select.provinceList('',-1)">不限</el-button>
                <el-button :class="classObj.xz[4][parseInt(index)+1]" v-for="(item, index) in viewData.provinceList" @click="select.provinceList(item, index)">{{ item }}</el-button>
            </div>
            <div @click="qh(4)">
                <div v-if="f[4]">更多 <el-icon><ArrowDown /></el-icon></div>
                <div v-else>收起 <el-icon><ArrowUp /></el-icon></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useTDStore } from '../../../store/tableData';
import { apiGetType, apiGetList } from '../../../apis/index';

    const store = useTDStore();     //操控状态
    const viewData = reactive({
        service:{},
        service2:[],
        ladderList:{},
        dataOriginList:[{name: "共创云", id: "nttcc"},{name: "科惠网", id: "51kehui"},{name: "江西省网上常设技术市场", id: "jxstc"},{name: "潇湘科技要素大市场",id:"hntpe"}],
        provinceList:["湖北省","湖南省","江西省","北京市","天津市","河北省","山西省","内蒙古自治区","辽宁省","吉林省","黑龙江省","上海市","江苏省","浙江省","安徽省","福建省","山东省","河南省","广东省","广西壮族自治区","海南省","重庆市","四川省","贵州省","云南省","西藏自治区","陕西省","甘肃省","青海省","宁夏回族自治区","新疆维吾尔自治区","台湾省","香港特别行政区","澳门特别行政区"]
    })

    //处理页面数据代码块
    /**
     * @description: 用于发送请求，获取类型数据。
     * @returns: void
     */
     const initGetList = async () => {
        const [getType, getList] = await Promise.all([apiGetType(),apiGetList()])
        Object.assign(viewData.service, getType.data.data);
        Object.assign(viewData.ladderList,getList.data.data.list);
        sz();
    }
    initGetList()       //初始化页面数据

    let select = {
        service: (val: string, i: number) => {
            viewData.service2.splice(0,viewData.service2.length);
            classObj.xz[1].splice(1,classObj.xz[1].length);
            if(i!=-1){
                viewData.service[i].children.forEach(item => {
                    viewData.service2.push({id: item.id,name: item.name});
                    classObj.xz[1].push({sz: false})
                })
            }
            store.serviceTypeId = val;
            store.serviceTypeId2 = '';
            bs(0,i);
        },
        service2:(val: string, i: number) => {
            store.serviceTypeId2 = '';
            if(i!=-1){
                store.serviceTypeId2 = val;
            }
            bs(1,i);
        },
        ladderList:(val: string, i: number)=>{
            store.technicalId = '';
            if(i!=-1){
                store.technicalId = val;
            }
            bs(2,i);
        },
        dataOriginList:(val: string, i: number) => {
            store.dataOrigin = '';
            if(i!=-1){
                store.dataOrigin = val;
            }
            bs(3,i);
        },
        provinceList:(val: string, i: number) => {
            store.province = '';
            if(i!=-1){
                store.province = val;
            }
            bs(4,i);
        }
    }

    let classObj = reactive({
        zk: [{ss:true},{ss:true},{ss:true},{ss:true},{ss:true}],        //展开的类
        xz: [[{sz:true}],[{sz:true}],[{sz:true}],[{sz:true}],[{sz:true}]]        //选择类型的类
    })
    //处理展开和收回代码块
    let f = ref([1,1,1,1,1]);
    /**
     * @description 用于切换页面类型状态
     */
    function qh(i:number){
        f.value[i]=(f.value[i]+1)%2;
        if(f.value[i]){
            classObj.zk[i].ss = true
        }else{
            classObj.zk[i].ss = false   
        }
    }

    //类型按钮代码块
    /**
     * @description 默认类型按钮数据初始
     */
    function sz(){
        let i = 0;
        for(let item in viewData){
            for(let val in viewData[item]){
                classObj.xz[i].push({sz:false});
            }
            i++;
        }       
    }
    /**
     * @description 类型按钮切换事件
     */
    function bs(index1: number, index2: number){
        for(let i in classObj.xz[index1]){
            classObj.xz[index1][parseInt(i)].sz = false;
        }
        classObj.xz[parseInt(index1)][parseInt(index2)+1].sz = true;
        
    }
</script>

<style scoped lang="scss">
.el-row{
    height: 48px;
    padding: 0px 20px;
    font-size: 14px;
    font-weight: 700;
    align-items: center;
    background-color: #f7f8f9;
    border-radius: 4px;
    box-sizing: border-box;
    margin: 20px 0px;
}
.select{
    border: 1px solid #dcdfe6;
    padding: 0px 20px;
    border-radius: 3px;
    margin-bottom: 50px;
    &>div{
        display: flex;
        padding-top: 10px; padding-bottom: 10px;
        &>div:nth-child(1){
            width: 100px;
            padding-left: 10px;
            line-height: 2;
            color: #a2a5ab;
            font-size: 14px;
        }
        &>div:nth-child(2){
            width: 900px;
            // background-color: red;
            display: flex;
            flex-wrap: wrap;
        }
        &>div:last-child{
            font-size: 14px;
            color: #3473e6;
            padding-top: 4px;
            cursor: pointer;
        }
    }
}
.ss{
    height: 30px;
    overflow:hidden;
}
.el-divider{
    margin: 0px; padding: 0px !important;
}
.el-button{
    color: #000;
    border: 0;
    &:hover{
        color: #fff;
        background-color: #3473e6;
    }
}
.sz{
    color: #fff;
    background-color: #3473e6;
}
</style>