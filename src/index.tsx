import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// 全局 CSS
import './assets/css/reset.css'
import './assets/css/common.css'
import 'antd/dist/antd.less'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
