import { IBreadcrumbList } from '../type'

export const BreadListMap: IBreadcrumbList = {
  mynote: {
    title: '我的笔记',
    to: '/mynote'
  },
  ndetail: {
    title: '笔记详情',
    to: '/mynote/ndetail'
  },
  notify: {
    title: '笔记提醒',
    to: '/notify'
  },
  faq: {
    title: '常见问题',
    to: '/faq'
  },
  setting: {
    title: '偏好设置',
    to: '/setting'
  },
  home: {
    title: '首页',
    to: '/home'
  }
}
