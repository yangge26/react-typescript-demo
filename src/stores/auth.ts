import { BehaviorSubject } from 'rxjs'

import { IUserInfo } from 'src/models/auth/user-info'
import { authStorage } from 'src/storage/auth'

export class AuthState {
    readonly token: string | null = authStorage.getToken()
    readonly userInfo: Readonly<IUserInfo> | null = authStorage.getUserInfo()
}

export const store = new BehaviorSubject(new AuthState())

export function updateAuth(patch: Partial<AuthState>): void {
    const prevState = store.getValue()

    const newState: Partial<AuthState> = patch as {}
    store.next({
        ...prevState,
        ...newState
    })

    if (newState.hasOwnProperty('token')) {
        authStorage.setToken(newState.token || '')
    }

    if (newState.hasOwnProperty('userInfo')) {
        authStorage.setUserInfo(newState.userInfo || null)
    }
}

/**
 * 获取授权的配置信息
 */
export function getAuthStore() {
    return store.getValue()
}

/**
 * 重置授权的配置信息
 */
export function resetAuthStore() {
    store.next({
        token: null,
        userInfo: null
    })
    authStorage.setToken(null)
    authStorage.setUserInfo(null)
}

export function getUserInfo() {
    const config = store.getValue()
    return config ? config.userInfo : null
}
