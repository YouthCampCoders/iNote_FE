import React from 'react'
import './index.less'
import CpnLogin from 'components/CpnLogin'
import illustration from 'assets/images/PageFirst/illustration.png'
import icon from 'assets/images/PageFirst/icon.png'
import { useState } from 'react'

const PageFirst: React.FC = (props) => {
  const [loginSHow, setLoginShow] = useState(false)

  return (
    <div id="first">
      <div className="first">
        <div className="text">
          <span className="inote">iNote</span>
          <span className="slogan">You Note, We Code!</span>
          <button className="button" onClick={() => setLoginShow(true)}>
            Get Start
          </button>
        </div>
        <img className="illustration" src={illustration} alt="" />
      </div>
      {loginSHow ? <CpnLogin /> : ''}
      <div className="second">
        <span className="slogan">You Note, We Code!</span>
        <span className="show">
          You Note, We Code!You Note, We Code!You Note, We Code!You Note, We
          Code!
        </span>
        <div className="card">
          <div className="left">
            <img src={icon} alt="" className="icon" />
            <span className="abin">艾宾浩斯遗忘曲线</span>
            <div className="content">
              配合艾宾浩斯遗忘曲线进行推送配合艾宾浩斯遗忘曲线进行推送配合艾宾浩斯遗忘曲线进行推送配合艾宾浩斯遗忘曲线进行推送配合艾宾浩斯遗忘曲线进行推送配合艾宾浩斯遗忘曲线进行推送配合
            </div>
          </div>
          <div className="right">
            <img src={icon} alt="" className="icon" />
            <span className="abin">艾宾浩斯遗忘曲线</span>
            <div className="content">
              配合艾宾浩斯遗忘曲线进行推送配合艾宾浩斯遗忘曲线进行推送配合艾宾浩斯遗忘曲线进行推送配合艾宾浩斯遗忘曲线进行推送配合艾宾浩斯遗忘曲线进行推送配合艾宾浩斯遗忘曲线进行推送配合
            </div>
          </div>
        </div>
        <span className="logo">©YouthCampCoders 2021 All Rights Reserved</span>
      </div>
    </div>
  )
}

export default PageFirst
