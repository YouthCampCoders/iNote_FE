import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// 组件
import PageHome from 'pages/PageHome'
import PageNotFound from 'pages/PageNotFound'
import PageFaq from 'pages/PageFaq'
import PageSetting from 'pages/PageSetting'

const App: React.FC = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/home'} />} />
        <Route path="/home" element={<PageHome />} />
        <Route path="/faq" element={<PageFaq/>}/>
        <Route path="/setting" element={<PageSetting/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
