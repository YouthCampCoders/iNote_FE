import React, { useEffect } from 'react'
import { Button } from 'antd'
import { useDispatch } from 'react-redux'
import { getNoteListAction } from '../store/actionCreators'
import { INoteTagListGeneratorProps } from '../type'
import style from './MyNoteMain.module.less'

const NoteTagListGenerator: React.FC<INoteTagListGeneratorProps> = (props) => {
  const { indexList, setIndexList, NoteTagInfo } = props
  const dispatch = useDispatch()

  useEffect(() => {
    const [tag, year] = NoteTagInfo.map((item, index) => {
      return item.list[indexList[index]]
    })
    dispatch(getNoteListAction(year, tag))
  }, [indexList, NoteTagInfo, dispatch])

  const setIndexListHandle = (row: number, col: number) => {
    // 此处发送请求更新页面
    setIndexList(indexList.map((item, index) => (index === row ? col : item)))
  }

  return (
    <div className={style['taglist']}>
      {NoteTagInfo.map((tagList: any, tIndex: number) => (
        <ul key={tIndex} className={style['taglist__content']}>
          <li>{tagList.title}</li>
          {tagList.list.map((tag: string, lIndex: number) => (
            <li key={lIndex}>
              <Button
                onClick={() => setIndexListHandle(tIndex, lIndex)}
                type={indexList[tIndex] === lIndex ? 'primary' : 'text'}
                style={{ borderRadius: '5px' }}
              >
                {`#${tag}`}
              </Button>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

export default NoteTagListGenerator
