// const Store = window.require('electron-store')
// const store = new Store()
import cookie from '@utils/ypRequest/core/cookies'
class YpStore {
    //   constructor() {}
    public get(name: string): any {
        // return localStorage.getItem(name)
        return cookie.read(name)
    }
    public save(key: string, val: any) {
        localStorage.setItem(key, val)
    }
}
export default new YpStore()
