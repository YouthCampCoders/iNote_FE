import React from 'react'
import { INotifyListGeneratorProps } from '../type'
import CpnNoteCard from 'components/CpnNoteCard'
import timeParser from 'utils/timeParser'
import { Empty } from 'antd'

const NotifyListGenerator: React.FC<INotifyListGeneratorProps> = (props) => {
  const { list, onDelete, onModify } = props
  return (
    <>
      {list.length ? (
        list.map((note) => {
          const { _id, content, round, tag, schedule, title } = note
          return (
            <CpnNoteCard
              {...{ content, tag, title }}
              editable
              bottomGup
              id={_id}
              key={_id}
              onDelete={onDelete}
              onModify={onModify}
              time={timeParser(schedule[round - 1])}
            />
          )
        })
      ) : (
        <Empty description="暂无需要提醒的笔记" style={{ marginTop: '10%' }} />
      )}
    </>
  )
}

export default NotifyListGenerator
