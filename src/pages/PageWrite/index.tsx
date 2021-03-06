import React, { useState } from 'react'
// @ts-ignore: 该库没有类型文件, 暂时忽律以避免报错
import Markdown from 'react-mini-markdown'
// import { marked } from 'marked'
import useDocumentTitle from 'hooks/useDocumentTitle'
import { Button, Modal, Input, Switch, Form, message, AutoComplete } from 'antd'
import { addNewNote, modifyNote } from 'services/mynote'
import { useNavigate } from 'react-router-dom'
import cache from 'utils/cache'
import styles from './PageWrite.module.less'

const PageWrite: React.FC = () => {
  const options = cache.getCache('__tags__') || [{ value: '未分类' }]
  const detail = cache.getCache('__modify__')
  useDocumentTitle(detail ? '修改笔记' : '新建笔记')
  const navigate = useNavigate()
  const [src, setSrc] = useState(
    detail
      ? detail.content
      : `# Title
  快来记笔记吧~`
  )

  // 提交相关
  const [htmlSrc, setHtmlSrc] = useState('')
  const [submitShow, setSubmitShow] = useState(false)
  const [needPush, setNeedPush] = useState(detail ? detail.needPush : true)
  const [title, setTitle] = useState(detail ? detail.title : '')
  const [tag, setTag] = useState('')

  // 输入内容触发
  const getMarkDownContent = (text: string) => {
    // 改变markdown源码
    setSrc(text)
  }
  const submit = () => {
    // 提交HTML代码
    // const html = marked.parse(src)
    const html = src
    setHtmlSrc(html)
    setSubmitShow(true)
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
        保存笔记
      </Button>
      <Modal
        title="保存选项"
        visible={submitShow}
        onCancel={() => {
          setSubmitShow(false)
        }}
        onOk={async () => {
          let res = false
          if (detail) {
            res = await modifyNote(detail._id, title, htmlSrc, needPush)
          } else {
            res = await addNewNote(title, htmlSrc, tag, needPush)
          }

          if (res) {
            message.success('保存成功，可在我的笔记中查看')
            setSubmitShow(false)
            navigate('/home')
          } else {
            message.error('保存失败，请检查网络问题')
          }
        }}
      >
        {detail ? (
          <Form>
            <Form.Item label="标题">
              <Input
                placeholder="在此输入文章标题"
                value={title}
                onChange={(e) => {
                  e.preventDefault()
                  setTitle(e.target.value)
                }}
              ></Input>
            </Form.Item>
            <Form.Item label="是否需要推送">
              <Switch
                defaultChecked={true}
                onChange={(status) => setNeedPush(status)}
              ></Switch>
            </Form.Item>
          </Form>
        ) : (
          <Form>
            <Form.Item label="标题">
              <Input
                placeholder="在此输入文章标题"
                value={title}
                onChange={(e) => {
                  e.preventDefault()
                  setTitle(e.target.value)
                }}
              ></Input>
            </Form.Item>
            <Form.Item label="标签">
              <AutoComplete
                // maxLength={6}
                placeholder="请输入文章的标签"
                value={tag}
                options={options}
                onChange={(text) => {
                  if (text.length <= 12) {
                    setTag(text)
                  }
                }}
              ></AutoComplete>
            </Form.Item>
            <Form.Item label="是否需要推送">
              <Switch
                defaultChecked={true}
                onChange={(status) => setNeedPush(status)}
              ></Switch>
            </Form.Item>
          </Form>
        )}
      </Modal>
    </div>
  )
}

export default PageWrite
