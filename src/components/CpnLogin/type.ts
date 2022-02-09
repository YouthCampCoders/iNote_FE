import { SetStateAction, Dispatch } from 'react'

export interface IPhoneLoginProps {
  phone: string
  code: string
  setPhone: Dispatch<SetStateAction<string>>
  setCode: Dispatch<SetStateAction<string>>
}

export interface IUserLoginProps {
  username: string
  password: string
  setUsername: Dispatch<SetStateAction<string>>
  setPassword: Dispatch<SetStateAction<string>>
  setCur: Dispatch<SetStateAction<number>>
}

export interface ICpnLoginProps {
  closeFn: any
}
