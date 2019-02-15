/**
 * 用户授权信息的模型
 * 
 * @interface
 */
export interface IUserInfo {
    id: number
    tenantCode?: string
    userTypeId?: number
    username?: string
    fullName?: string
    lastName?: string
    firstName?: string
    nickName?: string
    gender?: string
    icon?: string
    regionId?: number
    mobile?: string
    mobileFlag?: string
    email?: string
    emailFlag?: string
    weixin?: number
    weibo?: number
    qq?: number
    alipay?: number
    staffId?: number
    customerTenantCodes?: string
    employeeTenantCodes?: string
    status?: string
}


