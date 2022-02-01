import React from 'react'
import { Modal, ModalProps, Typography } from 'antd'

const { Text } = Typography

const NotifyModal: React.FC<ModalProps> = (props) => {
  const _props = { ...props }
  _props.title = _props.title ? <Text strong>{_props.title}</Text> : '默认标题'
  return (
    <Modal
      cancelText="取消"
      okText="确认"
      {..._props}
      closable={false}
      style={{
        borderRadius: '10px'
      }}
    />
  )
}

export default NotifyModal
