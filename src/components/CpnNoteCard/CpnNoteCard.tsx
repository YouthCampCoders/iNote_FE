import React from 'react'
import { Card, Button, Typography } from 'antd'
import { ICpnNoteCardProps } from './type'
import style from './CpnNoteCard.module.less'

const { Text } = Typography
const headStyle = {
  fontWeight: 700,
  border: 'none',
  color: '#232946',
  backgroundColor: '#F2F7FC'
}

const bodyStyle = {
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 0,
  backgroundColor: '#F2F7FC'
}

const buttonStyle = {
  borderRadius: '5px',
  width: 'fit-content',
  marginTop: '16px'
}

const TimeBlock = (time?: string) => {
  return (
    <div className={style['card__time']}>
      <img src="img/time.svg" alt="" />
      <Text>{`下次推送时间 : ${time}`}</Text>
    </div>
  )
}

const EditBlock = (onModify: any, onDelete: any) => {
  return (
    <div className={style['card__edit']}>
      <Button
        icon={<img src="img/edit.svg" alt="" />}
        type="text"
        style={{ color: '#232946', fontWeight: 700 }}
        onClick={onModify}
      >
        修改时间
      </Button>
      <Button
        icon={<img src="img/delete.svg" alt="" />}
        type="text"
        style={{ color: '#D81E06', fontWeight: 700 }}
        onClick={onDelete}
      >
        取消推送
      </Button>
    </div>
  )
}

const CpnNoteCard: React.FC<ICpnNoteCardProps> = (props) => {
  const {
    content,
    title,
    time,
    editable,
    tag,
    light,
    // topGup,
    // bottomGup,
    onModify,
    onDelete
  } = props
  // const cardTopGup = topGup ? '16px' : '16px'
  const cardTopGup = '16px'
  // const cardBottomGup = bottomGup ? '16px' : '0'
  const cardBottomGup = '0'

  headStyle.backgroundColor = bodyStyle.backgroundColor = light
    ? '#fff'
    : '#F2F7FC'

  return (
    <div
      className={style['card']}
      style={{ marginTop: cardTopGup, marginBottom: cardBottomGup }}
    >
      <Card
        hoverable
        title={title}
        bordered={light}
        headStyle={{ ...headStyle }}
        bodyStyle={{ ...bodyStyle } as React.CSSProperties}
      >
        <Text ellipsis>{content}</Text>
        <Button type="primary" style={buttonStyle}>
          {`#${tag}`}
        </Button>
        {time && TimeBlock(time)}
        {editable && EditBlock(onModify, onDelete)}
      </Card>
    </div>
  )
}

export default CpnNoteCard
