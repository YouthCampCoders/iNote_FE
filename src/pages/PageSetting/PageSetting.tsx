import CpnBreadCrumb from 'components/CpnBreadCrumb'
import SettingMain from './SettingMain'
import styles from './PageSetting.module.less'

const PageSetting: React.FC = () => {
  return (
    <div className={styles['setting']}>
      <div className={styles['setting__main']}>
        <CpnBreadCrumb />
        <SettingMain />
      </div>
    </div>
  )
}

export default PageSetting
