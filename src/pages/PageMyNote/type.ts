import { Dispatch, SetStateAction } from 'react'

export interface INoteTagInfo {
  title: string
  list: string[]
}

export interface INoteContentInfo {
  content: string
  title: string
  tag: string
  editable?: boolean
  time?: Date
  light?: boolean
}

export interface INoteTagListGeneratorProps {
  indexList: number[]
  setIndexList: Dispatch<SetStateAction<any[]>>
  NoteTagInfo: INoteTagInfo[]
}

export interface INoteContentListGeneratorProps {
  NoteContentInfo: INoteContentInfo[]
}
