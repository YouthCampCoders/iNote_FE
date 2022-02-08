import styles from './PageFaq.module.less'
import CpnBlockContainer from 'components/CpnBlockContainer'
import CpnBreadCrumb from 'components/CpnBreadCrumb'
import FaqMain from './FaqMain'

const PageFaq: React.FC = () => {
  return (
    <div className={styles['faq']}>
      <main className={styles['faq__main']}>
        <CpnBreadCrumb/>
      <CpnBlockContainer transStyle={{ flex: 1, display: 'flex', flexDirection: 'column' }} children={<FaqMain/>}/>
      </main>
    </div>
  )
}

export default PageFaq

