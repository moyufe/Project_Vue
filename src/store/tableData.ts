import { defineStore } from 'pinia'

export const useTDStore = defineStore('TDs',{
    state:() => {
        return {
            pageNum: 1,                 //分页号
            pageSize: 10,               //取数据的大小
            keywords: "",                 
            serviceTypeId: "",            //一级服务类型
            serviceTypeId2: "",           //二级服务类型
            technicalId: "",              //技术领域
            province: "",                 //地区筛选
            dataOrigin: "",               //数据来源
            logicStatus: 1,
        }
    },

})