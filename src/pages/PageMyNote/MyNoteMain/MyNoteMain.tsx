import React, { useState } from 'react'
import CpnBlockContainer from 'components/CpnBlockContainer'
import NoteContentListGenerator from './NoteContentListGenerator'
import NoteTagListGenerator from './NoteTagListGenerator'
import { Typography } from 'antd'
import { useSelector, shallowEqual } from 'react-redux'
import { IRootState } from 'store/type'
import { INoteListItemRootResult } from 'services/type'

const { Text } = Typography
const NoteTagInfo = [
  {
    title: '按标签分',
    list: ['未分类', '随笔记录', '日常生活', '读书笔记']
  },
  {
    title: '按年份分',
    list: ['2022', '2021']
  }
]

const MyNoteMain: React.FC = (props) => {
  const [indexList, setIndexList] = useState(
    new Array(NoteTagInfo.length).fill(0)
  )

  const { list } = useSelector<IRootState, INoteListItemRootResult>(
    (state) => ({
      list: state.myNote.noteList,
      success: state.myNote.success
    }),
    shallowEqual
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
      <NoteContentListGenerator NoteContentInfo={list} />
    </CpnBlockContainer>
  )
}

export default MyNoteMain
