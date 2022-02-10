import './index.less'
import React, { useEffect, useState } from 'react'
// import NoteCard from './noteCard'
import { useNavigate } from 'react-router-dom'
import CpnNoteCard from 'components/CpnNoteCard'
import iconWeChat from 'assets/images/PageHome/wechat.svg'
import iconDouYin from 'assets/images/PageHome/douyin.svg'
import iconWeiBo from 'assets/images/PageHome/weibo.svg'
import iconTwitter from 'assets/images/PageHome/twitter.svg'
import useDocumentTitle from 'hooks/useDocumentTitle'
import { getNoteList } from 'services/mynote'
import cache from 'utils/cache'

const initProp = {
  _id: '',
  title: '',
  content: '',
  tag: ''
}

const PageHome: React.FC = (props) => {
  const [isEdit] = useState(false)
  const [note, setNote] = useState(initProp)
  const navigate = useNavigate()
  useDocumentTitle('写点什么吧')
  // const getNotesMainHeight = () => {
  //   console.log('getNotesMainHeight invoke')
  //   const notesMain: HTMLElement | null = document.querySelector('.notes__main');
  //   console.log(notesMain)
  //   const height = notesMain ? notesMain.offsetHeight : 435;
  //   if (notesMain) notesMain.style.maxHeight = `${height}px`
  // }
  // getNotesMainHeight()

  const createNote = () => {
    // setIsEdit(true)
    cache.deleteCache('__modify__')
    navigate('/write')
  }
  // const toDetail = () => {
  //   console.log('组件被点击')
  //   return ''
  // }

  useEffect(() => {
    ;(async () => {
      const res = await getNoteList('', '')
      setNote(res.pop()!)
    })()
  }, [])

  return (
    <div className="page-home-wrapper">
      <main>
        <div className="content block-wrapper">
          <div className="content__header">
            <span>随笔记下</span>
            <button className={isEdit ? 'save-btn' : 'save-btn hidden'}>
              保存笔记
            </button>
          </div>

          <div className="content__main">
            <button
              className={isEdit ? 'new-btn hidden' : 'new-btn'}
              onClick={createNote}
            >
              记下新的笔记
            </button>
            {/* 此处到时引入editor */}
          </div>
        </div>

        <div className="sidebar">
          <div className="notes block-wrapper">
            <div className="notes__header">
              <span>我的笔记</span>
            </div>

            <div className="notes__main">
              {/* <NoteCard onClick={toDetail} /> */}
              <CpnNoteCard {...{ ...note, id: note._id }} />
            </div>
          </div>

          <div className="info block-wrapper">
            <div className="info__icons">
              <img src={iconWeChat} alt="Wechat" />
              <img src={iconDouYin} alt="Douyin" />
              <img src={iconWeiBo} alt="Weibo" />
              <img src={iconTwitter} alt="Twitter" />
            </div>
            <div className="info__text">
              <p>京公网安备：123123123号</p>
              <p>@YouthCampCoders</p>
              <p>2021</p>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PageHome
