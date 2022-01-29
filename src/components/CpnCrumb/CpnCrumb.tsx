import styles from './CpnCrumb.module.less'
interface Props {
  value: string
}

export const CpnCrumb: React.FC<Props> = ({ value }) => {
  return (
    <div className={styles['crumb']}>
      <p>当前位置:</p> <p>首页</p>
      <img src='/img/right.svg'/>
      <p>{value}</p>
    </div>
  )
}
