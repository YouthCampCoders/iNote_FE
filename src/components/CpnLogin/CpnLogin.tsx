import React from 'react'
import './index.less'
// import wechat from 'assets/images/PageFirst/wechat.png'
import { loginRequest } from '../../services/sdkRequest'
const CpnLogin: React.FC = (props) => {
  // let [phoneNumber, setPhoneNumer] = useState('')
  // 显示主页内容
  let out = function () {
    let start: any = document.querySelector('.phoneLogin')
    start.style.display = 'none'
    document.documentElement.style.overflow = 'visible'
  }
  // 具体什么方式登录
  let choose = function (way: string) {
    let login: any = document.querySelector('.login')
    let otherLogin: any = document.querySelector('.otherLogin')
    let wechat: any = document.querySelector('.wechatLogin')
    switch (way) {
      case 'phone':
        login.style.display = 'block'
        otherLogin.style.display = 'none'
        break
      case 'other':
        login.style.display = 'none'
        otherLogin.style.display = 'block'
        break
      case 'wechat':
        wechat.style.display = 'block'
        otherLogin.style.display = 'none'
        break
      case 'wxOther':
        wechat.style.display = 'none'
        otherLogin.style.display = 'block'
        break
    }
  }
  // 获取验证码
  let getVerifyCode = function () {
    loginRequest({
      url: 'user/sendMessage',
      method: 'get',
      params: {}
    }).then((res) => {
      console.log(res)
    })
  }
  return (
    <div className="phoneLogin">
      <div className="mask" onClick={out}></div>
      <div className="bounce">
        <span className="title">iNote Login</span>
        <div className="login">
          <form action="">
            <div className="phone">
              <span className="label">手机号</span>
              <input type="tel" name="" id="phone" />
            </div>
            <div className="verify">
              <span className="label code">验证码</span>
              <input type="text" className="verifycode" />
              <div className="get" onClick={getVerifyCode}>
                获取验证码
              </div>
            </div>
          </form>
          <span className="prompt">
            使用手机号登录时，如未注册则自动注册账号
          </span>
          <button className="submit">登录</button>
          <span className="other" onClick={() => choose('other')}>
            其他方式登陆？
          </span>
        </div>
        <div className="otherLogin">
          <form action="">
            <div className="pawLogin">
              <span className="label">账号</span>
              <input type="tel" name="" id="" />
            </div>
            <div className="verify">
              <span className="label code">密码</span>
              <input type="password" className="password" />
            </div>
          </form>
          <div className="choose">
            <span className="label otherWe">其他</span>
            <img
              src={'img/wechat.svg'}
              alt=""
              onClick={() => choose('wechat')}
            />
          </div>
          <button className="submit">登录</button>
          <span className="other" onClick={() => choose('phone')}>
            手机号登录？
          </span>
        </div>
        <div className="wechatLogin">
          <img src="" alt="" />
          <div className="prompt">打开微信-{'>'}扫一扫</div>
          <span className="other" onClick={() => choose('wxOther')}>
            其他方式登陆？
          </span>
        </div>
      </div>
    </div>
  )
}
export default CpnLogin
