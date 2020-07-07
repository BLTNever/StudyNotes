import axios from 'axios'
import { Params, AnyKey, OptionConfig } from '../types/'

import { guid } from './nonce'
import { message } from 'antd'
import ypEvent from '../utils/event'
import ypStore from '@utils/ypStore/'
function getBaseUrl(): string {
    const env = ypStore.get('env') || ''
    // console.log('env>>>>', ypStore.get('env'))
    let baseURL = 'https://apigw.ypshengxian.com/request'
    if (env && env !== 'prod') {
        baseURL = `https://apigw-${env}.ypshengxian.com/request`
    }
    return baseURL
}
let axiosObejct = axios.create({
    timeout: 4900,
    responseType: 'json',
    withCredentials: false,
    validateStatus: function (status) {
        return status >= 100 && status < 600
    }
})
axiosObejct.interceptors.request.use(config => {
    config.headers = Object.assign(config.headers ? config.headers : {}, {
        'app-id': 'ypshop',
        'app-platform': 'web'
    })
    return config
})
axiosObejct.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error) // reject这个错误信息 让下流catch到 /
    }
)
function createParams(params: OptionConfig): OptionConfig {
    let requestParams = {
        api: params.apiUrl,
        version: params.version || '1.0',
        timestamp: new Date().getTime(),
        token: ypStore.get('token') || '',
        nonce: guid(),
        params: { ...params.data }
    }
    return requestParams
}
async function omsRequest(apiName: Params | string, data: object = {}): Promise<object> {
    let apiUrl = ''
    if (typeof apiName === 'string') {
        apiUrl = apiName
    } else {
        apiUrl = apiName.gateway as string
    }
    const objParams: OptionConfig = { apiUrl, data: { ...data } }
    const params = createParams(objParams) // 封装接口请求参数
    let result: AnyKey = {}
    try {
        // reject
        let res: AnyKey = await new Promise(resolve => {
            axiosObejct({
                method: 'POST',
                url: getBaseUrl(),
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                data: params
            }).then(res => {
                const { data } = res
                if (data.success) {
                    // 网关
                    if (data.result.success) {
                        // 业务
                        if (data.result.hasOwnProperty('result')) {
                            resolve({
                                success: true,
                                result: data.result.result,
                                code: 200,
                                message: '请求成功'
                            })
                        } else {
                            resolve({
                                success: true,
                                result: { ...data.result },
                                code: 200,
                                message: '请求成功'
                            })
                        }
                    } else {
                        resolve({
                            success: false,
                            result: {},
                            code: data.result.error.code || data.result.error.code,
                            message: data.result.error.message || data.result.message
                        })
                    }
                } else {
                    resolve({
                        success: false,
                        code: data.error.code || data.code,
                        message: data.error.message || data.message,
                        result: {}
                    })
                }
            }).catch(error => {
                let message = '系统异常'
                let code = -1000
                if (error.message.includes('timeout')) {
                    message = '接口请求超时'
                    code = -9999
                }
                result = { success: false, code, message, result: {} }
                resolve(result)
            })
        })
        result = res
    } catch (error) {
        result = { success: false, result: {}, code: -1001, message: '系统异常' }
    }
    if (!result.success) {
        if (result.code === -32001 || result.code === -32002 || result.code === -32003) {
            ypEvent.emit('auth_error', '登录失效')
        }
        message.error(result.message || '')
    }
    return result
}
export default omsRequest
