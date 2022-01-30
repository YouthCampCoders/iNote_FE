import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

// 组件
import PageNotFound from 'pages/PageNotFound'
import PageFirst from 'pages/PageFirst'

const App: React.FC = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/first'} />} />
        <Route path="/first" element={<PageFirst />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
