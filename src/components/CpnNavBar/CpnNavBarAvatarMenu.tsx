import React from 'react'
import { Dropdown, Menu, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { logout } from 'services/user'

const AvatarMenu: React.FC = () => {
  const navigate = useNavigate()
  const userLogout = async () => {
    if (await logout()) {
      navigate('/index')
      message.success('登出成功')
    } else {
      message.error('操作失败')
    }
  }
  return (
    <Menu>
      <Menu.Item onClick={userLogout} key="退出登录">
        退出登录
      </Menu.Item>
    </Menu>
  )
}

const CpnNavBarAvatarMenu: React.FC = () => {
  return (
    <Dropdown overlay={<AvatarMenu />}>
      <img
        src="https://qcq5h7.file.qingfuwucdn.com/file/fa8a9aec55040644_1643707699523.png"
        alt=""
      />
    </Dropdown>
  )
}

export default CpnNavBarAvatarMenu
