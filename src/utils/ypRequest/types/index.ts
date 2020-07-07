// import { AxiosInterceptorManager, AxiosRequestConfig, AxiosResponse } from "axios";
export type YpEventCb = (data: any) => void
export interface YpEventStore {
    [key: string]: YpEventCb[]
}
export interface YpEvent {
    on: (eventName: string, callback: YpEventCb) => void
    emit: (eventName: string, data: any) => void
    off: (eventName: string, callback: YpEventCb) => void
    once: (evtName: string, callback: YpEventCb) => void
    clear: () => void
}
export interface Params {
    gateway: string | object
    [propName: string]: any
}
export interface AnyKey {
    [propName: string]: any
}
export interface OptionConfig {
    [propName: string]: any
}
export interface AxiosResponse<T = any> {
    data: T
    status: number
    statusText: string
    headers: any
    config: OptionConfig
    request: any
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> { }
export interface GatewayParams {
    api: string
    version?: string
    timestamp: number
    token: string
    nonce: string
    params: object
    [propName: string]: any
}
// export interface ReqOption {
//   baseURL?: string
//   interceptors?: {
//     request?: InterceptorManage<AxiosRequestConfig>[],
//     response?: InterceptorManage<AxiosResponse>[],
//   }
//   headers?: object
//   timeout?: number
//   autoParams?: boolean
// }
