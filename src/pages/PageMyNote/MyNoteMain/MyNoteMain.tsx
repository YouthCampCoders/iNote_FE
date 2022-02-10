import React, { useEffect, useState } from 'react'
import CpnBlockContainer from 'components/CpnBlockContainer'
import NoteContentListGenerator from './NoteContentListGenerator'
import NoteTagListGenerator from './NoteTagListGenerator'
import { Typography } from 'antd'
import { useSelector, shallowEqual } from 'react-redux'
import { IRootState } from 'store/type'
import { INoteListItemRootResult } from 'services/type'
import { getUserInfo } from 'services/user'

const { Text } = Typography
// const NoteTagInfo =

const MyNoteMain: React.FC = (props) => {
  const [NoteTagInfo, setNoteTagInfo] = useState([
    {
      title: '按标签分',
      list: ['标签']
    },
    {
      title: '按年份分',
      list: ['2022']
    }
  ])

  const [indexList, setIndexList] = useState(new Array(2).fill(0))

  useEffect(() => {
    ;(async () => {
      let { tags, years } = await getUserInfo()
      tags = tags || []
      years = years || []
      setNoteTagInfo([
        { title: '按标签分', list: tags },
        { title: '按年份分', list: years }
      ])
    })()
  }, [])

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
