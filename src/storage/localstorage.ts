/**
 * 通用的 localstorage 操作类
 */
export class LocalStorage {
    constructor(protected readonly key: string) {
        //
    }

    public get value(): string | null {
        return localStorage.getItem(this.key)
    }

    public set(value: string | object): void {
        if (typeof value === 'string') {
            localStorage.setItem(this.key, value)
        } else {
            localStorage.setItem(this.key, JSON.stringify(value))
        }
    }

    public clear() {
        localStorage.removeItem(this.key)
    }

}