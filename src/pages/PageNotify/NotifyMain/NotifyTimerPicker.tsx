import React from 'react'
import { DatePicker, Space } from 'antd'
import { TNotifyTimePickerProps } from '../type'

const _onChange = (onChange: any) => (value: any, dateString: any) =>
  onChange && onChange(value, dateString)
const _onOk = (onOk: any) => (value: any) => onOk && onOk(value)

const NotifyTimerPicker: React.FC<TNotifyTimePickerProps> = (props) => {
  const { onChange, onOk } = props
  return (
    <Space direction="vertical" size={12}>
      <DatePicker showTime onChange={_onChange(onChange)} onOk={_onOk(onOk)} />
    </Space>
  )
}

export default NotifyTimerPicker
