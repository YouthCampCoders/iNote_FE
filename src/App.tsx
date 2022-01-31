import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

// 组件
import PageNotify from 'pages/PageNotify'
import PageHome from 'pages/PageHome'
import PageNotFound from 'pages/PageNotFound'
import PageFaq from 'pages/PageFaq'
import PageSetting from 'pages/PageSetting'
import PageMyNote from 'pages/PageMyNote'
import CpnNavBar from 'components/CpnNavBar/CpnNavBar'
import PageFirst from 'pages/PageFirst'

const App: React.FC = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <CpnNavBar />
        <Routes>
          <Route path="/" element={<Navigate to={'/first'} />} />
          <Route path="/first" element={<PageFirst />} />
          <Route path="/home" element={<PageHome />} />
          <Route path="/notify" element={<PageNotify />} />
          <Route path="/faq" element={<PageFaq />} />
          <Route path="/setting" element={<PageSetting />} />
          <Route path="/mynote" element={<PageMyNote />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
