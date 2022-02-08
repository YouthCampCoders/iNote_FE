import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeRouterPath } from '../store/actionCreators'

/*
 * useBreadChange 面包屑导航
 */

export default function useBreadChange() {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    const pathList = location.pathname.slice(1).split('/')
    dispatch(changeRouterPath(pathList))
  }, [location.pathname, dispatch])
}
