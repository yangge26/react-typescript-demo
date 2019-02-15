/** @constant 验证是否为数字的正则 */
const DIGIT_REG = /^[0-9]+$/

/** @constant 验证是否为中国大陆手机号的正则 */
const MOBILE_REG = /^[1][3,4,5,7,8][0-9]{9}$/

/** @constant 验证是否为合法 tenant code 串 */
const TENANT_CODE_REG = /^[a-zA-Z0-9]+$/

/**
 * 判断某个字符串是否为纯数字的组合
 * @param input
 * @return {boolean}
 */
export function isDigit(input: string) {
    return DIGIT_REG.test(input)
}

/**
 * 判断某个字符串是否为合法的手机号码（中国大陆的手机号码）
 * @param num - 需要判断是否为手机号码的字符串
 * @return {boolean}
 */
export function isMobile(num: string): boolean {
    return MOBILE_REG.test(num)
}

/**
 * 判断某个字符串是否为合法的租户代码
 * @param code - 租户代码
 * @return {boolean}
 */
export function isTenantCode(code: string): boolean {
    return TENANT_CODE_REG.test(code)
}
