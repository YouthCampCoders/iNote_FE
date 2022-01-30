import React from 'react'
import CpnBreadCrumb from 'components/CpnBreadCrumb'
import NotifyMain from './NotifyMain'
import styles from './PageNotify.module.less'

const PageNotify: React.FC = (props) => {
  return (
    <div className={styles['notify']}>
      <div className={styles['notify__main']}>
        <CpnBreadCrumb />
        <NotifyMain />
      </div>
    </div>
  )
}

export default PageNotify
