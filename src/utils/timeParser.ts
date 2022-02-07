/**
 * @param datestamp 时间戳
 * @returns time 转后后的时间
 */
export default function timeParser(
  datestamp: number | string,
  needTime = true
) {
  const date = new Date(datestamp)
  // 日期部分
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const part1 = `${year} 年 ${month < 10 ? '0' : ''}${month} 月 ${
    day < 10 ? '0' : ''
  }${day} 日 `
  // 时间部分
  if (needTime) {
    const hour = date.getHours()
    const minute = date.getMinutes()
    const part2 = `${hour < 10 ? '0' : ''}${hour} : ${
      minute < 10 ? '0' : ''
    }${minute}`
    return part1 + part2
  }
  return part1
}
