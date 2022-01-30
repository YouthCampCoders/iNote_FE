import React from 'react'
import CpnBreadCrumb from 'components/CpnBreadCrumb'
import MyNoteMain from './MyNoteMain'
import styles from './PageMyNote.module.less'

const PageMyNote: React.FC = (props) => {
  return (
    <div className={styles['mynote']}>
      <div className={styles['mynote__main']}>
        <CpnBreadCrumb />
        <MyNoteMain />
      </div>
    </div>
  )
}

export default PageMyNote
