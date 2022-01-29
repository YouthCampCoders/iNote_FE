import { CpnCrumb } from 'components/CpnCrumb'
import CpnNavBar from 'components/CpnNavBar'
import './style.less'
import '../../assets/css/commonl.css'

const PageSetting: React.FC = () => {
  return (
    <div>
      <CpnNavBar />
      <main>
        <CpnCrumb value='偏好设置'/>
        <div className='maincontent'>
        
        </div>
      </main>
    </div>
  )
}
export default PageSetting

