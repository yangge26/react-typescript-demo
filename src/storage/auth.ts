import { EncryptLocalStorage } from 'src/storage/storage'
import { IUserInfo } from 'src/models/auth/user-info'

const KEY_TOKEN = 'TOKEN'

const KEY_USER_INFO = 'USER_INFO'

/**
 * 与用户授权相关的本地缓存
 */
class AuthStorage extends EncryptLocalStorage {
    public getToken() {
        return this.getItem(KEY_TOKEN)
    }

    public setToken(token: string | null) {
        if (token === null) {
            this.removeItem(KEY_TOKEN)
        } else {
            this.setItem(KEY_TOKEN, token)
        }
    }

    public getUserInfo() {
        const text = this.getItem(KEY_USER_INFO)
        if (text) {
            try {
                const userInfo = JSON.parse(text)
                if (userInfo) {
                    console.info('用户信息', userInfo)
                }
                return userInfo as IUserInfo
            } catch (error) {
                //
            }
        }
        return null
    }

    public setUserInfo(userInfo: IUserInfo | null) {
        if (userInfo === null) {
            this.removeItem(KEY_USER_INFO)
        } else {
            this.setItem(KEY_USER_INFO, JSON.stringify(userInfo))
        }
    }
}

export const authStorage = new AuthStorage()
