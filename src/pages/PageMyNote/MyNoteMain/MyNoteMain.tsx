import React, { useState } from 'react'
import CpnBlockContainer from 'components/CpnBlockContainer'
import NoteContentListGenerator from './NoteContentListGenerator'
import NoteTagListGenerator from './NoteTagListGenerator'
import { Typography } from 'antd'

const { Text } = Typography
const NoteTagInfo = [
  {
    title: '按标签分',
    list: ['随笔记录', '日常生活', '读书笔记']
  },
  {
    title: '按年份分',
    list: ['2022', '2021']
  }
]
const NoteContentInfo = new Array(11).fill({
  title: '我在INote的第一篇笔记',
  content: '第一次在iNote记笔记，感觉还不错哎！',
  tag: '随笔记录'
})

const MyNoteMain: React.FC = (props) => {
  const [indexList, setIndexList] = useState(
    new Array(NoteTagInfo.length).fill(0)
  )
  return (
    <CpnBlockContainer
      transStyle={{ flex: 1, display: 'flex', flexDirection: 'column' }}
    >
      <Text strong>筛选标题</Text>
      <NoteTagListGenerator
        indexList={indexList}
        setIndexList={setIndexList}
        NoteTagInfo={NoteTagInfo}
      />
      <NoteContentListGenerator NoteContentInfo={NoteContentInfo} />
    </CpnBlockContainer>
  )
}

export default MyNoteMain
