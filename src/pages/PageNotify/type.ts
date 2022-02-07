import type { DatePickerProps } from 'antd'
import { INoteListItemResult } from 'services/type'

interface INotifyTimePickerProps {
  onChange?: any
  onOk?: any
}

export type TNotifyTimePickerProps = INotifyTimePickerProps | DatePickerProps

// 提醒列表
export interface INotifyListGeneratorProps {
  list: INoteListItemResult[],
  onModify: any
  onDelete: any
}
