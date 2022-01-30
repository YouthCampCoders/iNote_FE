import React from 'react'
import style from './CpnBlockContainer.module.less'
import { ICpnBlockContainerProps } from './type'

const defaultStyle = {
  width: '100%'
}

const CpnBlockContainer: React.FC<ICpnBlockContainerProps> = (props) => {
  const { children, transStyle } = props
  const finalStyle = Object.assign(defaultStyle, transStyle)

  return (
    <div className={style['container']} style={{ ...finalStyle }}>
      {children}
    </div>
  )
}

export default CpnBlockContainer
