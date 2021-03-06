import type { DatePickerProps } from 'antd'
import { INoteListItemResult } from 'services/type'

interface INotifyTimePickerProps {
  onChange?: any
  onOk?: any
}

export type TNotifyTimePickerProps = INotifyTimePickerProps | DatePickerProps

// ๆ้ๅ่กจ
export interface INotifyListGeneratorProps {
  list: INoteListItemResult[],
  onModify: any
  onDelete: any
}
