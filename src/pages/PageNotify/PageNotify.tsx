import React from 'react'
import CpnBreadCrumb from 'components/CpnBreadCrumb'
import NotifyMain from './NotifyMain'
import styles from './PageNotify.module.less'
import useDocumentTitle from 'hooks/useDocumentTitle'

const PageNotify: React.FC = (props) => {
  useDocumentTitle('Ding~ 该复习了')
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
