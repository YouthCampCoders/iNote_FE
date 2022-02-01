import { MouseEventHandler } from 'react'

/**
 * ICpnNoteCardProps 接口
 * light 参数可以配置颜色是主题色 还是 白色
 * editable 是否可以出现右下角的操作按钮
 * time 传入可显示时间
 * topGup 是否有上边距
 * bottomGup 是否有下边距
 */
export interface ICpnNoteCardProps {
  content: string
  title: string
  tag: string
  editable?: boolean
  time?: string
  light?: boolean
  topGup?: boolean
  bottomGup?: boolean
  onModify?: MouseEventHandler<HTMLElement>
  onDelete?: MouseEventHandler<HTMLElement>
}
