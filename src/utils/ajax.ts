import { AxiosResponse } from 'axios'
import { IResponseData } from 'src/models/others/api'
import { OK } from 'src/models/others/api'

export function isSuccess<T>(response: AxiosResponse<IResponseData<T>>): T | null {
    if (response) {
        const data = response.data
        if (data.statusCode === OK) {
            return data.responseContent
        }
    }
    return null
}

/**
 * 用于简单地判断 HTTP 请求是否成功
 *
 * @param response
 * @return {boolean}
 */
export function isSuccessReq<T>(response: AxiosResponse<IResponseData<T>>): boolean {
    if (response) {
        const data = response.data
        return data && data.statusCode === OK
    }
    return false
}
