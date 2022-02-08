import CpnBlockContainer from 'components/CpnBlockContainer'
import CpnBreadCrumb from 'components/CpnBreadCrumb'
import styles from './PageSetting.module.less'
import Settings from './Settings'

const PageSetting: React.FC = () => {
  return (
    <div className={styles['setting']}>
      <main className={styles['setting__main']}>
        <CpnBreadCrumb />
        <CpnBlockContainer transStyle={{ flex: 1 }} children={<Settings />} />
      </main>
    </div>
  )
}

export default PageSetting
