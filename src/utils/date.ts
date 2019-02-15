import moment from 'moment'

// 日期格式化
export function DateFormat(dstr: string) {
    return moment(Number(dstr)).format('YYYY-MM-DD hh:mm:ss')
}
