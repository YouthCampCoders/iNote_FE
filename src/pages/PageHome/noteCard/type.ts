import { MouseEventHandler } from 'react'

export default interface INoteCardProps {
  id: string,
  title: string,
  content: string,
  tag: string,
  abstract?: string,
  onClick: MouseEventHandler<HTMLElement>
}