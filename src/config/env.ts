const env = process.env.REACT_APP_ENV
let API_BASE_URL = `https://apigw${env ? '-' + env : ''}.ypshengxian.com` // 基础接口请求
let UPLOAD_BASE_URL = '' // 资源上传

switch (env) {
    case 'dev':
        UPLOAD_BASE_URL = 'http://172.16.4.184:8070/resource/upload'
        break
    case 'test':
        UPLOAD_BASE_URL = 'http://172.16.4.184:8070/resource/upload'
        break
    case 'sit':
        UPLOAD_BASE_URL = 'http://172.16.22.211:8070/resource/upload'
        break
    case 'pre':
        UPLOAD_BASE_URL = 'https://pre-api-resource.ypshengxian.com/resource/upload'
        break
    default:
        UPLOAD_BASE_URL = 'https://api-resource.ypshengxian.com/resource/upload'
}


export {
    API_BASE_URL,
    UPLOAD_BASE_URL
}
