import React, { useState } from 'react'
// @ts-ignore: 该库没有类型文件, 暂时忽律以避免报错
import Markdown from 'react-mini-markdown'
import { marked } from 'marked'
import styles from './PageWrite.module.less'
import useDocumentTitle from 'hooks/useDocumentTitle'
import { Button } from 'antd'

const PageWrite: React.FC  = () => {
  useDocumentTitle('新建笔记')

  const [src, setSrc] = useState(`# Title
  快来记笔记吧~`)

  // 输入内容触发
  const getMarkDownContent = (text: string) => {
    // 改变markdown源码
    setSrc(text)
  }
  const submit = () => {
    // 提交HTML代码
    const html = marked.parse(src)
    console.log(html)
  }

  return (
    <div>
      <Markdown initContent={src} getContent={getMarkDownContent} />
      <Button
        type="primary"
        onClick={submit}
        size={'large'}
        className={styles['submit-btn']}
      >
        提交笔记
      </Button>
    </div>
  )
}

export default PageWrite
