import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// 组件
<<<<<<< HEAD
import PageNotify from 'pages/PageNotify'
import PageHome from 'pages/PageHome/PageHome'
import PageNotFound from 'pages/PageNotFound'
import PageFaq from 'pages/PageFaq'
import PageSetting from 'pages/PageSetting'
import PageMyNote from 'pages/PageMyNote'
import CpnNavBar from 'components/CpnNavBar/CpnNavBar'
=======
import PageNotFound from 'pages/PageNotFound'
import PageFirst from 'pages/PageFirst'
>>>>>>> dev-tyx

const App: React.FC = (props) => {
  return (
    <BrowserRouter>
      <CpnNavBar />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Navigate to={'/home'} />} />
        <Route path="/notify" element={<PageNotify />} />
        <Route path="/home" element={<PageHome />} />
        <Route path="/faq" element={<PageFaq/>}/>
        <Route path="/setting" element={<PageSetting/>}/>
        <Route path="/mynote" element={<PageMyNote />} />
=======
        <Route path="/" element={<Navigate to={'/first'} />} />
        <Route path="/first" element={<PageFirst />} />
>>>>>>> dev-tyx
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
