import React from 'react'
import { Card, Button, Typography } from 'antd'
import { ICpnNoteCardProps } from './type'
import style from './CpnNoteCard.module.less'
import { useNavigate } from 'react-router-dom'
import cache from 'utils/cache'

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

const EditBlock = (onModify: any, onDelete: any, id: string) => {
  return (
    <div className={style['card__edit']}>
      <Button
        icon={<img src="img/edit.svg" alt="" />}
        type="text"
        style={{ color: '#232946', fontWeight: 700 }}
        onClick={onModify(id)}
      >
        修改时间
      </Button>
      <Button
        icon={<img src="img/delete.svg" alt="" />}
        type="text"
        style={{ color: '#D81E06', fontWeight: 700 }}
        onClick={onDelete(id)}
      >
        取消推送
      </Button>
    </div>
  )
}

const CpnNoteCard: React.FC<ICpnNoteCardProps> = (props) => {
  const navigate = useNavigate()

  const goDetail = (pageInfo: any) => {
    navigate('/ndetail')
    cache.setCache('__notedetail__', pageInfo)
  }

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
    onDelete,
    id
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
      onClick={() => goDetail(props)}
    >
      <Card
        hoverable
        title={title || '未命名'}
        bordered={/* light  */ false}
        headStyle={{ ...headStyle }}
        bodyStyle={{ ...bodyStyle } as React.CSSProperties}
      >
        <Text ellipsis>{content.replace(/<[^>]+>/g, '')}</Text>
        <Button type="primary" style={buttonStyle}>
          {`#${tag}`}
        </Button>
        {time && TimeBlock(time)}
        {editable && EditBlock(onModify, onDelete, id)}
      </Card>
    </div>
  )
}

export default CpnNoteCard
