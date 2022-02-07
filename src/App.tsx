import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// 组件
import PageNotify from 'pages/PageNotify'
import PageNotFound from 'pages/PageNotFound'
import PageFaq from 'pages/PageFaq'
import PageSetting from 'pages/PageSetting'
import PageMyNote from 'pages/PageMyNote'
import CpnNavBar from 'components/CpnNavBar/CpnNavBar'
import PageHome from 'pages/PageHome/PageHome'

const App: React.FC = (props) => {
  return (
    <BrowserRouter>
      <CpnNavBar />
      <Routes>
        <Route path="/" element={<Navigate to={'/home'} />} />
        <Route path="/home" element={<PageHome/>} />
        <Route path="/notify" element={<PageNotify />} />
        <Route path="/faq" element={<PageFaq/>}/>
        <Route path="/setting" element={<PageSetting/>}/>
        <Route path="/mynote" element={<PageMyNote />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
