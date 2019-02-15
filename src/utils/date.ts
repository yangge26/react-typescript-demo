import moment from 'moment'

export function DateFormat(dstr: string) {
    return moment(Number(dstr)).format('YYYY-MM-DD hh:mm:ss')
}
