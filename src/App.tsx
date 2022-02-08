import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

// 组件
import PageNotify from 'pages/PageNotify'
import PageHome from 'pages/PageHome/PageHome'
import PageFaq from 'pages/PageFaq'
import PageSetting from 'pages/PageSetting'
import PageMyNote from 'pages/PageMyNote'
import CpnNavBar from 'components/CpnNavBar/CpnNavBar'
import PageNotFound from 'pages/PageNotFound'
import PageFirst from 'pages/PageFirst'

const App: React.FC = (props) => {
  return (
    <BrowserRouter>
      <CpnNavBar />
      <Routes>
        <Route path="/" element={<Navigate to={'/home'} />} />
        <Route path="/notify" element={<PageNotify />} />
        <Route path="/home" element={<PageHome />} />
        <Route path="/faq" element={<PageFaq/>}/>
        <Route path="/setting" element={<PageSetting/>}/>
        <Route path="/mynote" element={<PageMyNote />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
