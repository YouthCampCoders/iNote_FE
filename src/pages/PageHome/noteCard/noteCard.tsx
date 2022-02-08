import './index.less'
import React from 'react'
import INoteCardProps from './type'

const noteCard: React.FC<INoteCardProps> = (props) => {
  const { id, title, abstract, tag, content, onClick } = props
  return (
    <div className="cpn-note-card" onClick={ onClick }>
      <div className="note-card__title">
        <span>{ title }</span>
      </div>

      <div className="note-card__abstract">
        <p>{ abstract ? abstract : content.slice(0, 15) }</p>
      </div>

      <div className="note-card__tag">
        <span>{ tag }</span>
      </div>
    </div>
  )
}

export default noteCard
