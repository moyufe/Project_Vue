import httpRequest from '../utils/request'
import { useTDStore } from '../store/tableData';

const store = useTDStore();

export function apiGetData(){
    return httpRequest({
        url:"api/v1/service/list",
        method:"get",
        params:{
            pageNum: store.pageNum,                 //分页号
            pageSize: store.pageSize,               //取数据的大小
            keywords: store.keywords,                 
            serviceTypeId: store.serviceTypeId,            //一级服务类型
            serviceTypeId2: store.serviceTypeId2,           //二级服务类型
            technicalId: store.technicalId,
            province: store.province,         //地区筛选
            dataOrigin: store.dataOrigin,               //数据来源
            logicStatus: store.logicStatus,
        }
    })
}

export function apiGetList(){
    return httpRequest({
        url:"api/v1/technical/list",
        method:"get",
    })
}

export function apiGetType(){
    return httpRequest({
        url:"admin/api/v1/service_type/ladderlist",
        method:"get",
    })
}

