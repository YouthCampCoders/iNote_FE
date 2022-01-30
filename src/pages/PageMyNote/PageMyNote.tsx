import React from 'react'
import styles from './PageMyNote.module.less'
import CpnBlockContainer from 'components/CpnBlockContainer'

const PageMyNote: React.FC = (props) => {
  return (
    <div className={styles['mynote']}>
      <div className={styles['mynote__main']}>
        <CpnBlockContainer transStyle={{ flex: 0 }} children={<div>面包屑</div>}/>
        <CpnBlockContainer transStyle={{ flex: 1 }} children={<div>内容</div>}/>
      </div>
    </div>
  )
}

export default PageMyNote
