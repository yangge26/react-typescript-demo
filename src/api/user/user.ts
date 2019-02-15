import request from 'src/api/request'

import { IPageList } from 'src/models/others/api'

/**
 * 获取用户列表
 */
export function queryUserList() {
    return request.Get<IPageList<any>>(`/queryUserList`)
}
