import React from 'react'
import { INoteContentListGeneratorProps } from '../type'
import CpnNoteCard from 'components/CpnNoteCard'
import { Row, Col, Empty } from 'antd'

const NoteContentListGenerator: React.FC<INoteContentListGeneratorProps> = (
  props
) => {
  const { NoteContentInfo } = props

  return NoteContentInfo?.length ? (
    <Row gutter={16}>
      {NoteContentInfo.map((item, index) => (
        <Col span={8} key={item._id}>
          <CpnNoteCard {...item} />
        </Col>
      ))}
    </Row>
  ) : (
    <Empty
      style={{ marginTop: '10%' }}
      description="未找到笔记~"
      image={Empty.PRESENTED_IMAGE_SIMPLE}
    />
  )
}

export default NoteContentListGenerator
