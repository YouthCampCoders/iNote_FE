import React from 'react';
import '../assets/css/Header.css'
const CpnNavBar: React.FC = (props) => {
  return (
    <div className='header'>
      <div className='header_container'>
      <div className='logo' >
      </div> 
      <div className='tab'>
        <ul>
        <li>
          <a href="#">我的笔记</a>
        </li>
        <li>
          <a href="#">笔记提醒</a>
        </li>
        <li>
          <a href="#">常见问题</a>
        </li>
        <li>
          <a href="#">偏好设置</a>
        </li>
		</ul>
     <div className='avatar'>
      </div>
      </div>
      </div>
      </div>
  )
}
export default CpnNavBar
