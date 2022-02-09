import { message } from 'antd'

export function validPhoneNumber(phone: string | number) {
  phone = phone.toString()
  const correct = /(13\d|14[579]|15[^4\D]|17[^49\D]|18\d)\d{8}/.test(phone)
  !correct &&
    message.error({
      content: '手机号有误，请检查输入',
      style: {
        zIndex: 1000
      }
    })
  return correct
}

export function validUserInfo(preInfo: any, curInfo: any) {
  const finalInfo = preInfo
  for (let key in curInfo) {
    if (curInfo[key] === preInfo[key]) {
      Reflect.deleteProperty(finalInfo, key)
    }
  }
  return finalInfo
}

export function validUserName(username: string) {
  const len = username.length
  !len && message.warn('用户名不能为空')
  return !!len
}
