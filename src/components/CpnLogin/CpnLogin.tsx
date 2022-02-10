import React, { useState } from 'react'
import style from './CpnLogin.module.less'
import { Button, message } from 'antd'
import { PhoneLogin, UsernameLogin } from './CpnLoginMethod'
import { loginWithPhone } from 'services/user'
import { useNavigate } from 'react-router-dom'
import { ICpnLoginProps } from './type'

const CpnLogin: React.FC<ICpnLoginProps> = (props) => {
  const { closeFn } = props
  // 登录信息相关
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  // 当前的登录方式
  const [cur, setCur] = useState(0)
  const navigate = useNavigate()
  // 登录
  const login = async (curMethod: number, params: any) => {
    let success = false
    switch (curMethod) {
      case 0:
        const { phone, code } = params
        success = await loginWithPhone(phone, code)
        if (success) {
          message.success('欢迎回来~')
        } else {
          message.error('登录失败，请检查手机号或验证码是否正确')
        }
        break
    }
    success && navigate('/home')
  }

  return (
    <div className={style['login']} onClick={() => closeFn(false)}>
      <div
        className={style['login__center']}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style['login__title']}>iNote Login</div>
        <div className={style['login__main']}>
          {!cur ? (
            <PhoneLogin {...{ phone, code, setPhone, setCode }} />
          ) : (
            <UsernameLogin
              {...{ username, password, setUsername, setPassword, setCur }}
            />
          )}
        </div>
        <div className={style['login__bottom']}>
          <Button
            type="primary"
            style={{
              width: '40%',
              color: '#B8C1EC',
              fontWeight: 700,
              borderRadius: '10px',
              height: '50px'
            }}
            onClick={() => {
              login(cur, { phone, code })
            }}
          >
            登录
          </Button>
          {/* <div onClick={() => setCur(cur ? 0 : 1)}>其他方式登录</div> */}
        </div>
      </div>
    </div>
  )
}

export default CpnLogin
