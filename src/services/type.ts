/**
 *  返回数据类型定义
 *  IBaseResult => 基本的返回值类型
 *  IUserLoginResult => 登录返回用户信息
 *  INoteListItemResult => 文章列表
 * */

export interface IBaseResult {
  success: boolean
  message?: string
}

// 登录
export interface IUserLoginResult {
  _id: string
  username: string
  nickname: string
  firstProvider: string
  avatar?: any
  email?: any
  phoneNumber: string
  intro?: any
  lastLogin: number
  loginCount: number
  lastIp?: any
  agent?: any
  status: boolean
  createAt: number
  createdAt: number
  updatedAt: number
  loginAt: number
  expireAt: number
  tags: string[]
}

export interface IUserLoginRootResult extends IBaseResult {
  userInfo: IUserLoginResult
}

// 笔记

export interface INoteListItemResult {
  _id: string
  title: string
  content: string
  needPush: boolean
  author: string
  tag: string
  round: number
  schedule: string[]
  createdAt: Date
  updatedAt: Date
}

export interface INoteListItemRootResult extends IBaseResult {
  list: INoteListItemResult[]
}

// 文件上传
export interface IFileRootResult extends IBaseResult {
  url: string
}
