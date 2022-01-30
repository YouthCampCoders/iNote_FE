import CpnBlockContainer from 'components/CpnBlockContainer'
import { CpnCrumb } from 'components/CpnCrumb/CpnCrumb'
import styles from './PageSetting.module.less'
import Settings from './Settings'

const PageSetting: React.FC = () => {
  return (
    <div className={styles['setting']}>
      <main className={styles['setting__main']}>
      <CpnBlockContainer transStyle={{ flex: 0 }} children={<CpnCrumb value='偏好设置'/>}/>
        <CpnBlockContainer transStyle={{ flex: 1 }} children={<Settings/>}/>
      </main>
    </div>
  )
}

export default PageSetting

