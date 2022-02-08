import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

/*
 * usePathChange 路由守卫 hook
 * @ return {current} 返回当前页面的索引
 */
const indexList = ['/mynote', '/notify', '/faq', '/setting', '/home']

export default function usePathChange(): number {
  const location = useLocation()
  const [current, setCurrent] = useState(-1)
  useEffect(() => {
    let pathType = -1
    // pathType 在 0 - 3 之间属于 Navbar 中的切换值
    pathType = indexList.indexOf(location.pathname)
    // 设置当前的 Navbar 索引为 pathType
    setCurrent(pathType)
  }, [location.pathname])

  return current
}
