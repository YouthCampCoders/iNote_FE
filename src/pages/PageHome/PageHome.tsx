import './index.less'
import React, { useState } from 'react'
import NoteCard from './noteCard'
import iconWeChat from 'assets/images/PageHome/wechat.svg'
import iconDouYin from 'assets/images/PageHome/douyin.svg'
import iconWeiBo from 'assets/images/PageHome/weibo.svg'
import iconTwitter from 'assets/images/PageHome/twitter.svg'

const PageHome: React.FC = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  // const getNotesMainHeight = () => {
  //   console.log('getNotesMainHeight invoke')
  //   const notesMain: HTMLElement | null = document.querySelector('.notes__main');
  //   console.log(notesMain)
  //   const height = notesMain ? notesMain.offsetHeight : 435;
  //   if (notesMain) notesMain.style.maxHeight = `${height}px`
  // }
  // getNotesMainHeight()

  const createNote = () => {
    setIsEdit(true);
  }
  const toDetail = () => {
    console.log('组件被点击')
    return ''
  }

  return (
    <div className="page-home-wrapper">
      <main>
        <div className="content block-wrapper">
          <div className="content__header">
            <span>随笔记下</span>
            <button className={ isEdit ? 'save-btn' : 'save-btn hidden' }>保存笔记</button>
          </div>
          
          <div className="content__main">
            <button className={ isEdit ? 'new-btn hidden' : 'new-btn' } onClick={createNote}>记下新的笔记</button>
            {/* 此处到时引入editor */}
          </div>
        </div>

        <div className="sidebar">
          <div className="notes block-wrapper">
            <div className="notes__header">
              <span>我的笔记</span>
            </div>

            <div className="notes__main">
              <NoteCard id='1' title='iNote第一个笔记' content='iNote用起来还不错' tag='#随笔记录' onClick={ toDetail }/>
            </div>
          </div>

          <div className="info block-wrapper">
            <div className="info__icons">
              <img src={iconWeChat} alt="Wechat"/>
              <img src={iconDouYin} alt="Douyin"/>
              <img src={iconWeiBo} alt="Weibo"/>
              <img src={iconTwitter} alt="Twitter"/>
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
