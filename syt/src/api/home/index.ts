//首页管理接口
import request from "@/utils/request.ts";

//引入返回的数据类型
import type  {HospitalResponseData,HospitalLevelAndRegionResponseData} from "@/api/home/type.ts";

enum API {
    HOSPITAL_URL = '/hosp/hospital/',
    //获取医院等级与地区接口
    HOSPITALLEVELANDREGION_URL='/cmn/dict/findByDictCode/'
}

export const reqHospital = (page: number, limit: number) => request.get<any,HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}`);
//获取医院的等级或地区的数据
export const reqHospitalLevelAndRegion=(dictCode:string)=>request.get<any,HospitalLevelAndRegionResponseData>(API.HOSPITALLEVELANDREGION_URL+dictCode);


