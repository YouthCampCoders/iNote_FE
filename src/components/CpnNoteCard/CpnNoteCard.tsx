import React from 'react'
import { Card, Button, Typography } from 'antd'
import { ICpnNoteCardProps } from './type'
import style from './CpnNoteCard.module.less'

const { Text } = Typography

const CpnNoteCard: React.FC<ICpnNoteCardProps> = (props) => {
  const { content, title, time, editable, tag, light } = props
  const bgColor = light ? '#fff' : '#F2F7FC'
  return (
    <div className={style['card']}>
      <Card
        hoverable
        title={title}
        bordered={light}
        headStyle={{
          fontWeight: 700,
          border: 'none',
          color: '#232946',
          backgroundColor: bgColor
        }}
        bodyStyle={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: bgColor,
          paddingTop: '0'
        }}
      >
        <Text>{content}</Text>
        <Button
          type="primary"
          style={{
            borderRadius: '5px',
            width: 'fit-content',
            marginTop: '16px'
          }}
        >
          {`#${tag}`}
        </Button>
      </Card>
    </div>
  )
}

export default CpnNoteCard
