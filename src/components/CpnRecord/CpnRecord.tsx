import React from 'react'
import styles from './CpnRecord.module.css'
const CpnRecord: React.FC = (props) => {
  return (
           <>
            <div className={styles.icon}>
              <img src={'img/wechat.svg'} alt="微信" />
              <img src={'img/douyin.svg'} alt="抖音" />
              <img src={'img/weibo.svg'} alt="微博" />
              <img src={'img/twitter.svg'} alt="推特" />
            </div>
            <div className={styles.information}>
              <p>京公网安备：123123123号</p>
              <p>@YouthCampCoders</p>
              <p>2021</p>
              <p>All Rights Reserved</p>
            </div>
           </>
  )
}
export default CpnRecord