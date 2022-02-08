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
      <Menu.Item onClick={userLogout}>退出登录</Menu.Item>
    </Menu>
  )
}

const CpnNavBarAvatarMenu: React.FC = () => {
  return (
    <Dropdown overlay={<AvatarMenu />}>
      <img
        src="https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/gold.981a5510.svg"
        alt=""
      />
    </Dropdown>
  )
}

export default CpnNavBarAvatarMenu
