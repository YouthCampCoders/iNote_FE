import dayjs from 'dayjs'

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
  // let year = date.getFullYear()
  // let month = date.getMonth() + 1
  // let day = date.getDate()
  // const part1 = `${year} 年 ${month < 10 ? '0' : ''}${month} 月 ${
  //   day < 10 ? '0' : ''
  // }${day} 日 `
  // // 时间部分
  // if (needTime) {
  //   const hour = date.getHours()
  //   const minute = date.getMinutes()
  //   const part2 = `${hour < 10 ? '0' : ''}${hour} : ${
  //     minute < 10 ? '0' : ''
  //   }${minute}`
  //   return part1 + part2
  // }
  // return part1
  let target = dayjs(date).startOf('date')
  const hour = date.getHours()

  if (hour > 8 && hour < 14) {
    target = target.add(14, 'hour')
  } else if (hour >= 14 && hour < 20) {
    target = target.add(20, 'hour')
  } else {
    target = target.add(1, 'day').add(8, 'hour')
  }

  return target.format('YYYY-MM-DD HH : 00')
}
