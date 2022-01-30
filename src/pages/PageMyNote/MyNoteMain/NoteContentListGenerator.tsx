import React from 'react'
import { INoteContentListGeneratorProps } from '../type'
import CpnNoteCard from 'components/CpnNoteCard'
import { Row, Col } from 'antd'

const NoteContentListGenerator: React.FC<INoteContentListGeneratorProps> = (
  props
) => {
  const { NoteContentInfo } = props
  return (
    <Row gutter={16}>
      {NoteContentInfo.map((item, index) => (
        <Col span={8} key={index}>
          <CpnNoteCard {...item} />
        </Col>
      ))}
    </Row>
  )
}

export default NoteContentListGenerator
