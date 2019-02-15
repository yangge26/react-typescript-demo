/**
 * 过滤对象中的空字符串值
 * @param params
 */
export function paramsNotEmpty(params: any) {
    let keys = Object.keys(params)
    let res = {} as any
    for (let k of keys) {
        if (params[k] !== '') {
            res[k] = params[k]
        }
    }
    return res
}
