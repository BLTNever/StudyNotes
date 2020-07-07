class Session {
    public get(name: string): any {
        if (!name?.length) return false
        return sessionStorage.getItem(name)
    }
    public set(key: string, val: any) {
        sessionStorage.setItem(key, JSON.stringify(val))
    }
}
export default new Session()