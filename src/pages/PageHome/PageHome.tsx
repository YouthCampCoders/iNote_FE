import React from 'react'
import CpnNoteCard from 'components/CpnNoteCard'
import CpnRecord from 'components/CpnRecord/CpnRecord'
import styles from './PageHome.module.css'
const PageHome: React.FC = (props) => {
  return (
    <div className={styles.home_container}>
      <div className={styles.home_main}>
        <div className={styles.home_left}>
          <p className={styles.note}>随笔记下</p>
          <div className={styles.options}>
            <p className={styles.start}>开始新的笔记</p>
            <p className={styles.other}>OR</p>
            <p className={styles.other}>打开已有笔记</p>
          </div>
        </div>
        <div className={styles.home_right}>
          <div className={styles.my_note}>
            <p className={styles.list}>我的笔记</p>
            <CpnNoteCard title='' tag='' content=''/>
          </div>
          <div className={styles.record}>
           <CpnRecord/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHome
