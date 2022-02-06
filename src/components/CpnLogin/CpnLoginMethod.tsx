import React, { Dispatch, SetStateAction } from 'react'
import style from './CpnLiginMethod.module.less'
import { IPhoneLoginProps, IUserLoginProps } from './type'
import { validPhoneNumber } from 'utils/validMethod'
import { getPhoneValidCode } from 'services/user'
import { message } from 'antd'

const onChange = (e: any, fn: Dispatch<SetStateAction<string>>) => {
  fn(() => {
    return e.target.value
  })
}

const getCode = async (phone: number | string) => {
  const correct = validPhoneNumber(phone)
  correct &&
    (await getPhoneValidCode(phone)) &&
    message.success('发送成功，请打开手机查看')
}

export const PhoneLogin: React.FC<IPhoneLoginProps> = (props) => {
  const { code, phone, setCode, setPhone } = props

  return (
    <div className={style['phone']}>
      <div>
        <label htmlFor="phone">手机号</label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => {
            onChange(e, setPhone)
          }}
        />
      </div>
      <div>
        <label htmlFor="code">验证码</label>
        <input
          type="text"
          name="code"
          value={code}
          onChange={(e) => {
            onChange(e, setCode)
          }}
        />
        <button className={style['phone__code']} onClick={() => getCode(phone)}>
          获取验证码
        </button>
      </div>
      <div>使用手机号登录时，如未注册则自动注册账号</div>
    </div>
  )
}

const otherMethodList = [{ title: '微信', icon: 'img/wechat.svg' }]

export const UsernameLogin: React.FC<IUserLoginProps> = (props) => {
  return (
    <div className={style['phone']}>
      <div>
        <label htmlFor="phone">账号</label>
        <input type="text" name="phone" onChange={(e) => {}} />
      </div>
      <div>
        <label htmlFor="code">密码</label>
        <input type="text" name="code" onChange={(e) => {}} />
      </div>
      <div className={style['phone__other']}>
        <div>其他</div>
        {otherMethodList.map((method: any, index: number) => (
          <div key={index}>
            <img alt="" src={method.icon}></img>
          </div>
        ))}
      </div>
    </div>
  )
}
