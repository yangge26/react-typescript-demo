import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import addInterceptor from 'src/api/interceptors'
import { IResponseData } from 'src/models/others/api'
import { baseURL } from './baseURL'

class Networker {
    private axios: AxiosInstance

    constructor() {
        this.refresh()
    }

    public get ajax(): AxiosInstance {
        return this.axios
    }

    public Get<T = void>(url: string, config: AxiosRequestConfig = {}) {
        return this.ajax.get<IResponseData<T>>(url, config)
    }

    public Post<T = void>(url: string, data: object = {}, isJSON: boolean = true) {
        if (isJSON) {
            // application/json
            return this.ajax.post<IResponseData<T>>(url, data)
        } else {
            // x-www-form-urlencoded or query string
            const params = new URLSearchParams((data as {}) as string).toString()
            return this.ajax.post<IResponseData<T>>(url, params, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
        }
    }

    public refresh() {
        this.axios = Axios.create({
            baseURL
        })
        addInterceptor(this.axios)
    }
}

export default new Networker()
