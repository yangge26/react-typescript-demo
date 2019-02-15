type Crypt = (source: string) => string

function simpleEncrypt(value: string) {
    return btoa(btoa(encodeURIComponent(value)))
}

function simpleDecrypt(value: string) {
    return decodeURIComponent(atob(atob(value)))
}

/**
 * 加密的本地缓存类
 */
export class EncrptStorage {
    constructor(
        private storage: Storage,
        /** 加密函数 */
        private encrypt: Crypt = simpleEncrypt,
        /** 解密函数 */
        private decrypt: Crypt = simpleDecrypt
    ) {}

    public setItem(key: string, value: string) {
        this.storage.setItem(key, this.encrypt(value))
    }

    public getItem(key: string) {
        try {
            return this.decrypt(this.storage.getItem(key) || '')
        } catch (error) {
            this.storage.removeItem(key)
            return null
        }
    }

    public removeItem(key: string) {
        this.storage.removeItem(key)
    }
}

export class EncryptLocalStorage extends EncrptStorage {
    constructor() {
        super(localStorage)
    }
}

export class EncryptSessionStorage extends EncrptStorage {
    constructor() {
        super(sessionStorage)
    }
}
