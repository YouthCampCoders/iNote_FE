import './index.less'
import cache from 'utils/cache'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import CpnLogin from 'components/CpnLogin'
import iconWrite from 'assets/images/PageIndex/icon-write.png'
import iconGraphic from 'assets/images/PageIndex/icon-graphic.png'
import illustration from 'assets/images/PageIndex/illustration.png'

const PageIndex: React.FC = (props) => {
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  const getStart = () => {
    if (cache.getCache('__userinfo__')) {
      navigate('/home')
    } else {
      setIsLogin(true)
    }
  }

  return (
    <div id="app">
      <div className="index slide-top">
        <div className="content">
          <p className="name">iNote</p>
          <p className="slogan">You Note, We Code!</p>
          <button className="login-btn" onClick={getStart}>Get Start</button>
        </div>
        <div className="show">
          <img src={illustration}/>
        </div>
      </div>
      {isLogin ? <CpnLogin /> : ''}
      <div className="index-second">
        <div className="slogan">
          <p>You Note, We Code!</p>
          <p>你的笔记不只是笔记，更是你的外脑。尽情书写，剩下的交给我们！</p>
        </div>

        <div className="content">
          <div className="card">
            <div className="card__header">
              <img src={ iconGraphic } alt="" className="card__icon"/>
              <span className="card__title">艾宾浩斯遗忘曲线</span>
            </div>
            <div className="card__content">
              <p>书写下的笔记不应该书写完就去吃灰，iNote结合艾宾浩斯遗忘曲线规律进行笔记推送，让你的笔记不只存在于iNote，更存在于你的大脑！</p>
            </div>
          </div>

          <div className="card">
            <div className="card__header">
              <img src={ iconWrite } alt="" className="card__icon"/>
              <span className="card__title">沉浸笔记书写体验</span>
            </div>
            <div className="card__content">
              <p>完善的编辑器让你在书写时能够无需关心其他的事情，沉浸于自己的思路。源于Typora，不止于Typora！完美支持md语法，让你的书写更加流畅！</p>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>©YouthCampCoders 2021 All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default PageIndex
