import React from 'react'
import Header from '../../components/CpnNavBar'
import MyNote from '../../components/CpnMyNote'
import styles from './PageHome.module.css'
const PageHome: React.FC = (props) => {
  return (
    <div className={styles.home_container}>
    <Header/> 
    <div className={styles.home_main}  >
          <div className={styles.home_left}  >
             <p className={styles.note}>随笔记下</p>
             <div className={styles.options}>
             <p className={styles.start}>开始新的笔记</p>
             <p className={styles.other}>OR</p>
             <p className={styles.other}>打开已有笔记</p>
             </div>
          </div>
          <div className={styles.home_right} >
              <div className={styles.my_note}>
              <p className={styles.list}>我的笔记</p>
              <MyNote/>
              {/* <MyNote/> */}
              </div>
              <div className={styles.record}>
              <div className={styles.icon}>
             <img src={require('../../assets/img/icon/微信.png')} alt="微信" />
             <img src={require('../../assets/img/icon/抖音.png')} alt="抖音" />
             <img src={require('../../assets/img/icon/微博.png')} alt="微博" />
             <img src={require('../../assets/img/icon/推特.png')} alt="推特" />
          </div>
          <div className={styles.information}>
          <p>京公网安备：123123123号</p>
           <p>@YouthCampCoders</p> 
                 <p>2021</p>
           <p>All Rights Reserved</p>
          </div>
              </div>

          </div>
       </div>
    </div>

  )
}

export default PageHome
