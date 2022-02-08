import styles from './PageSetting.module.less'
import CpnBreadCrumb from 'components/CpnBreadCrumb'
import SettingMain from './SettingMain'
import CpnBlockContainer from 'components/CpnBlockContainer'

const PageSetting: React.FC = () => {
  return (
    <div className={styles['setting']}>
      <main className={styles['setting__main']}>
      <CpnBreadCrumb/>
      <CpnBlockContainer transStyle={{ flex: 1, display: 'flex', flexDirection: 'column' }} children={<SettingMain/>}/>
      </main>
    </div>
  )
}

export default PageSetting
