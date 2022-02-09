import React from 'react'
import CpnBlockContainer from 'components/CpnBlockContainer'
import { BreadListMap } from './config/breadcrumbList'
import { Breadcrumb, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'
import { INavBarStore } from 'components/CpnNavBar/store/type'
import { IBreadcrumb } from './type'
import { IRootState } from 'store/type'
import style from './CpnBreadCrumb.module.less'

const { Text } = Typography
const separatorImg = (
  <img
    src={'/img/right.svg'}
    alt=""
    style={{ width: '16px', height: '16px' }}
  />
)

const CpnBreadCrumb: React.FC = (props) => {
  const { pathList } = useSelector<IRootState, INavBarStore>(
    (state) => ({
      pathList: state.navPath.pathList
    }),
    shallowEqual
  )

  const breadcrumbList = pathList.map((pathname: string) => {
    return BreadListMap[pathname]
  })

  return (
    <CpnBlockContainer
      transStyle={{ display: 'flex', flexDirection: 'row', flex: 0 }}
    >
      <Text strong>当前位置： </Text>
      <Breadcrumb
        separator={separatorImg}
        className={style['breadcrumb__item']}
      >
        {breadcrumbList.map((breadCrumb: IBreadcrumb, index: number) => (
          <Breadcrumb.Item key={index}>
            <Link to={breadCrumb.to}>{breadCrumb.title}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </CpnBlockContainer>
  )
}

export default CpnBreadCrumb
