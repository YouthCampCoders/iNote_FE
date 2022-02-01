import type { DatePickerProps } from 'antd'

interface INotifyTimePickerProps {
  onChange?: any
  onOk?: any
}

export type TNotifyTimePickerProps = INotifyTimePickerProps | DatePickerProps
