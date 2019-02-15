import { AxiosInstance } from 'axios'

import { getAuthStore, resetAuthStore } from 'src/stores/auth'
import { IResponseData, UNAUTHORIZED } from 'src/models/others/api'

export default function addInterceptor(http: AxiosInstance) {
    http.interceptors.request.use(config => {
        const authConfig = getAuthStore()

        const token = authConfig ? authConfig.token : ''

        config.params = {
            ...(typeof config.params === 'object' && config.params ? config.params : {})
        }

        if (!config.headers) {
            config.headers = {}
        }
        // 添加token
        config.headers.Authorization =  'Bearer ' + token

        if (config.url) {
            let url = config.url

            url = url.replace('{}', 'v1')

            config.url = url
        }

        return config
    })

    http.interceptors.response.use(value => {
        const data: IResponseData<{}> = value.data
        if (data && data.statusCode === UNAUTHORIZED) {
            resetAuthStore()
        }
        return value
    })
}
