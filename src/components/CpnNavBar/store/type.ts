export interface IUserPartInfo {
  username?: string
  avatar?: string
  _id?: string
  phoneNumber?: string | number
  intro?: string
}

export interface INavBarStore {
  pathList: string[]
  userInfo: IUserPartInfo
}
