import { message } from 'antd'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import cache from 'utils/cache'

/*
 * usePathChange 路由守卫 hook
 * @ return {current} 返回当前页面的索引
 */
const indexList = [
  '/mynote',
  '/notify',
  '/faq',
  '/setting',
  '/home',
  '/ndetail'
]

export default function usePathChange(): number {
  const location = useLocation()
  const navigate = useNavigate()
  const [current, setCurrent] = useState(-1)

  useEffect(() => {
    let pathType = -1
    // pathType 在 0 - 3 之间属于 Navbar 中的切换值
    pathType = indexList.indexOf(location.pathname)
    // 设置当前的 Navbar 索引为 pathType
    setCurrent(pathType)
    if (location.pathname !== '/index' && !cache.getCache('__userinfo__')) {
      navigate('/index')
      message.warning('请先登录~')
    }
  }, [location.pathname, navigate])

  return current
}
