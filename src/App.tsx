import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// 组件
import PageAbout from 'pages/PageAbout'
import PageNotify from 'pages/PageNotify'
import PageNotFound from 'pages/PageNotFound'
import PageMyNote from 'pages/PageMyNote'

import CpnNavBar from 'components/CpnNavBar'

const App: React.FC = (props) => {
  return (
    <BrowserRouter>
      <CpnNavBar />
      <Routes>
        <Route path="/" element={<Navigate to={'/home'} />} />
        <Route path="/notify" element={<PageNotify />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="/mynote" element={<PageMyNote />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
