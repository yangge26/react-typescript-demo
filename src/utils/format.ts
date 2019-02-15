import { Moment } from 'moment'

/** @const 时间对象的固定格式 (到天) */
const DATE_FORMAT = 'YYYY-MM-DD'

/** @const 时间对象的固定格式 (到秒) */
const DATETIME_FORMAT = 'YYYY-MM-DD hh:mm:ss'

/**
 * 将日期对象转化为固定格式的字符串
 *
 * @param {Moment} datetime - 日期对象
 * @return {string}
 */
export function datetimeFormat(datetime: Moment | undefined): string {
    if (datetime) {
        return datetime.format(DATETIME_FORMAT)
    }
    return ''
}

/**
 * 日期区间的格式化，将起始日和终止日格式化
 * @param datetime - 日期期间
 */
export function dateRangeFormat(datetime: [Moment, Moment]): [string, string] {
    const start: Moment = datetime[0]
    const end: Moment = datetime[1]
    return [`${start.format(DATE_FORMAT)} 00:00:00`, `${end.format(DATE_FORMAT)} 23:59:59`]
}
