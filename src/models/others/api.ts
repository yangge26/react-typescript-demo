/**
 * HTTP 请求返回的通用数据接口格式
 */
export interface IResponseData<T = undefined> {
    statusCode: string

    statusMessage: string

    /** HTTP请求返回的主数据（可能为空） */
    responseContent: T
}

/**
 * HTTP 请求返回的分页类
 */
export interface IPageList<T> {
    endRow: number
    firstPage: number
    hasNextPage: boolean
    hasPreviousPage: boolean
    isFirstPage: boolean
    isLastPage: boolean
    lastPage: number
    navigateFirstPage: number
    navigateLastPage: number
    navigatePages: number
    navigatepageNums: Array<number>
    nextPage: number
    pageNum: number
    pageSize: number
    pages: number
    prePage: number
    size: number
    startRow: number
    total: number
    list: Array<T>
}

/**
 * 分页类接口查询时所需要的分页相关的参数
 * @interface
 */
export interface IPageParams {
    /** @property 当前的页序 */
    pageNum: number
    /** @property 每一页包含的条目总数 */
    pageSize: number
}

/*----------HTTP 接口请求的业务状态码-----------*/

/** @constant 请求成功的业务状态码 */
export const OK = '20000'

/** @constant 请求失败的业务状态码 */
export const BAD_REQUEST = '20400'

/** @constant 身份验证失败的业务状态码 */
export const UNAUTHORIZED = '20401'

/** @constant 权限不足的业务状态码 */
export const FORBIDDEN = '20403'

/** @constant 系统内部错误的业务状态码 */
export const SYSTEM_ERROR = '20500'
