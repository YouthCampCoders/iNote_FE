import { useRoutes, RouteObject, Navigate } from 'react-router-dom'
// 组件
import PageNotify from 'pages/PageNotify'
import PageHome from 'pages/PageHome/PageHome'
import PageNotFound from 'pages/PageNotFound'
import PageFaq from 'pages/PageFaq'
import PageSetting from 'pages/PageSetting'
import PageMyNote from 'pages/PageMyNote'
import PageIndex from 'pages/PageIndex'
import PageNoteDetail from 'pages/PageNoteDetail'
import PageWrite from 'pages/PageWrite'

const router: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/index'} />
  },
  {
    path: '/index',
    element: <PageIndex />
  },
  {
    path: '/home',
    element: <PageHome />
  },
  {
    path: '/write',
    element: <PageWrite />
  },
  {
    path: '/faq',
    element: <PageFaq />
  },
  {
    path: '/notify',
    element: <PageNotify />
  },
  {
    path: '/setting',
    element: <PageSetting />
  },
  {
    path: '/mynote',
    element: <PageMyNote />
  },
  {
    path: 'ndetail',
    element: <PageNoteDetail />
  },
  {
    path: '*',
    element: <PageNotFound />
  }
]

function RouteElement() {
  const element = useRoutes(router)
  return element
}

export default function RouteWrapperElement() {
  return <RouteElement />
}
