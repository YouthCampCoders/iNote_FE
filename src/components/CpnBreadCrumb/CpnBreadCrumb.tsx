import React from 'react'
import CpnBlockContainer from 'components/CpnBlockContainer'
import { BreadcrumbConfig } from './config/breadcrumbList'
import { Breadcrumb, Typography } from 'antd'
import { Link } from 'react-router-dom'

import style from './CpnBreadCrumb.module.less'

const { Text } = Typography
const breadcrumbList = BreadcrumbConfig
const separatorImg = (
  <img src="img/right.svg" alt="" style={{ width: '16px', height: '16px' }} />
)

const CpnBreadCrumb: React.FC = (props) => {
  return (
    <CpnBlockContainer transStyle={{ display: 'flex', flexDirection: 'row' }}>
      <Text strong>当前位置： &emsp;</Text>
      <Breadcrumb
        separator={separatorImg}
        className={style['breadcrumb__item']}
      >
        {breadcrumbList.map((breadCrumb, index) => (
          <Breadcrumb.Item key={index}>
            <Link to={breadCrumb.to}>{breadCrumb.title}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </CpnBlockContainer>
  )
}

export default CpnBreadCrumb
