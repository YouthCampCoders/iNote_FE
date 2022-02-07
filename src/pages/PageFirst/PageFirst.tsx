import React from 'react'
import CpnLogin from 'components/CpnLogin'
import illustration from 'assets/images/PageFirst/illustration.png'
import iconGraphic from 'assets/images/PageFirst/icon-graphic.png'
import iconWrite from 'assets/images/PageFirst/icon-write.png'
import { useState } from 'react'
import cache from 'utils/cache'
import './index.less'
import { useNavigate } from 'react-router-dom'

const PageFirst: React.FC = (props) => {
  const [loginSHow, setLoginShow] = useState(false)
  const navigate = useNavigate()

  const getStart = () => {
    if (cache.getCache('__userinfo__')) {
      navigate('/home')
    } else {
      setLoginShow(true)
    }
  }

  return (
    <div id="first">
      <div className="first">
        <div className="text">
          <span className="inote">iNote</span>
          <span className="slogan">You Note, We Code!</span>
          <button className="button" onClick={getStart}>
            Get Start
          </button>
        </div>
        <img className="illustration" src={illustration} alt="" />
      </div>
      {loginSHow ? <CpnLogin /> : ''}
      <div className="second">
        <p className="slogan">You Note, We Code!</p>
        <p className="show">你的笔记不只是笔记，更是你的外脑。尽情书写，剩下的交给我们！</p>
        <div className="card">
          <div className="left">
            <img src={ iconGraphic } alt="" className="icon" />
            <span className="abin">艾宾浩斯遗忘曲线</span>
            <div className="content">
              书写下的笔记不应该书写完就去吃灰，iNote结合艾宾浩斯遗忘曲线规律进行笔记推送，让你的笔记不只存在于iNote，更存在于你的大脑！
            </div>
          </div>
          <div className="right">
            <img src={ iconWrite } alt="" className="icon" />
            <span className="abin">沉浸笔记书写体验</span>
            <div className="content">
              完善的编辑器让你在书写时能够无需关心其他的事情，沉浸于自己的思路。源于Typora，不止于Typora！完美支持md语法，让你的书写更加流畅！
            </div>
          </div>
        </div>
        <span className="logo">©YouthCampCoders 2021 All Rights Reserved</span>
      </div>
    </div>
  )
}

export default PageFirst
