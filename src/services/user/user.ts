import request from 'services'
import {
  IBaseResult,
  IUserLoginRootResult,
  IUserLoginResult
} from 'services/type'
import cache from 'utils/cache'

/**
 * functionName 获取手机验证码
 * method get
 * params
 *  phoneNumber: 手机号
 */
export const getPhoneValidCode = (phone: number | string) => {
  return new Promise<boolean>(async (resolve, reject) => {
    const res = await request.get<IBaseResult>({
      url: `user/sendMessage?phoneNumber=${phone}`
    })
    resolve(res.success)
  })
}

/**
 * functionName 手机验证码登录
 * method post
 * body
 *  phoneNumber: 手机号
 *  code: 验证码
 */
export const loginWithPhone = (
  phone: string | number,
  code: string | number
) => {
  return new Promise<boolean>(async (resolve, reject) => {
    const res = await request.post<IUserLoginRootResult>({
      url: 'user/phoneLogin',
      data: {
        phoneNumber: phone,
        code
      }
    })

    res.success && cache.setCache('__userinfo__', res.userInfo)
    resolve(res.success)
  })
}

/**
 * functionName 用户名密码登录
 * method post
 * body
 *  username: 用户名
 *  password: 密码
 */
export const loginWithUsername = () => {
  return new Promise<IUserLoginResult>(async (resolve, reject) => {
    const res = await request.post<IUserLoginRootResult>({
      url: 'user/userLogin'
    })
    resolve(res.userInfo)
  })
}

/**
 * functionName 退出登录
 * method post
 */
export const logout = () => {
  return new Promise<boolean>(async (resolve, reject) => {
    const res = await request.post<IBaseResult>({
      url: 'user/logout'
    })
    res.success && cache.clearCache()
    resolve(res.success)
  })
}

/**
 * functionName 获取用户信息
 * method get
 */
export const getUserInfo = () => {
  return new Promise<IUserLoginResult>(async (resolve, reject) => {
    const res = await request.get<IUserLoginRootResult>({
      url: 'user/info'
    })
    resolve(res.userInfo)
  })
}

/**
 * functionName 修改用户信息
 * method put
 * body
 *  username: 用户名
 *  avatar: 头像
 *  intro: 自我介绍
 */
export const changeUserInfo = () => {
  return new Promise<boolean>(async (resolve, reject) => {
    const res = await request.put<IBaseResult>({
      url: 'user/info'
    })
    resolve(res.success)
  })
}

/**
 * functionName 设置或修改密码
 * method post
 * body
 *  newPassword: 新密码
 *  originPassword: 原密码
 */
export const changePassword = () => {
  return new Promise<boolean>(async (resolve, reject) => {
    const res = await request.post<IBaseResult>({
      url: 'user/changePassword'
    })
    resolve(res.success)
  })
}

/**
 * functionName 查询密码是存在
 * method get
 */
export const getPwExist = () => {
  return new Promise<boolean>(async (resolve, reject) => {
    const res = await request.get<IBaseResult>({
      url: 'user/pwExist'
    })
    resolve(res.success)
  })
}
