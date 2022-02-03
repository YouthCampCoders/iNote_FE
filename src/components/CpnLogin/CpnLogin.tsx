import React, { useState } from 'react'
import style from './CpnLogin.module.less'
import { Button } from 'antd'
import { PhoneLogin, UsernameLogin } from './CpnLoginMethod'

const CpnLogin: React.FC = (props) => {
  const [cur, setCur] = useState(true)
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [code, setCode] = useState('')

  return (
    <div className={style['login']}>
      <div className={style['login__center']}>
        <div className={style['login__title']}>iNote Login</div>
        <div className={style['login__main']}>
          {cur ? (
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
              borderRadius: '10px'
            }}
          >
            登录
          </Button>
          <div onClick={() => setCur(!cur)}>其他方式登录</div>
        </div>
      </div>
    </div>
  )
}

export default CpnLogin
