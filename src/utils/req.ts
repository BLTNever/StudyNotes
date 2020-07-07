// import omsRequest, { Data } from './ypRequest/core/index'
// const env = process.env.REACT_APP_ENV
// const API_BASE_URL =  `https://apigw${env ? '-' + env : ''}.ypshengxian.com` // 基础接口请求

// interface result {
//     success?: boolean | undefined,
//     result?: object | {}
// }

const req = (url: string, param: any) => {
    // console.log(url, param)
    // let wgApi = '/request'
    // if (env) {
    //     wgApi += `?api=${url}`
    // }
    // param.baseUrl = API_BASE_URL + wgApi
    // return new Promise((resolve, reject) => {
    //     omsRequest(url, param).then((res:result) => {
    //         const { success, result } = res
    //         if (success) {
    //             resolve(result)
    //         }
    //     })
    // })
}

export default req
