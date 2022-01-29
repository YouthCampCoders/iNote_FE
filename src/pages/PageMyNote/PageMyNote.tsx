import React from 'react'
import styles from './PageMyNote.module.less'
import CpnBlockContainer from 'components/CpnBlockContainer'

const PageMyNote: React.FC = (props) => {
  return (
    <div className={styles['mynote']}>
      <div className={styles['mynote__main']}>
        <CpnBlockContainer transStyle={{ flex: 0 }}>
          <div>面包屑</div>
        </CpnBlockContainer>
        <CpnBlockContainer transStyle={{ flex: 1 }}>
          <div>内容</div>
        </CpnBlockContainer>
      </div>
    </div>
  )
}

export default PageMyNote
