import React, { CSSProperties, useEffect, useState } from 'react'
import CpnBlockContainer from 'components/CpnBlockContainer'
import { Typography, Form, Input, Button, Avatar, Upload } from 'antd'
import { getUserInfo } from 'services/user'
import { validUserName } from 'utils/validMethod'
import styles from './SettingMain.module.less'
import { uploadFile } from 'services/file'
import { useDispatch } from 'react-redux'
import { changeUserinfoAction } from 'components/CpnNavBar/store/actionCreators'
import useDocumentTitle from 'hooks/useDocumentTitle'

const { Text } = Typography
const { TextArea } = Input
const transStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  flex: 1
}

const infoVal = {
  _id: '',
  username: '',
  phoneNumber: '',
  intro: '',
  avatar: '',
  email: ''
}

const SettingMain: React.FC = () => {
  // 用户信息
  const [info, setInfo] = useState(infoVal)
  // 对比默认
  const [defaultInfo, setDefaultInfo] = useState(infoVal)
  // 修改redux
  const dispatch = useDispatch()

  useDocumentTitle('换个身份，换个心情')
  // 获取用户信息
  useEffect(() => {
    ;(async () => {
      const { _id, username, phoneNumber, intro, avatar, email } =
        await getUserInfo()
      const curInfo = {
        _id,
        username,
        phoneNumber,
        intro,
        avatar:
          avatar ??
          'https://qcq5h7.file.qingfuwucdn.com/file/c02d3ac8c5ca0524_1644456590487.png',
        email
      }

      setInfo(curInfo)
      setDefaultInfo(curInfo)
    })()
  }, [])

  return (
    <CpnBlockContainer transStyle={transStyle}>
      <div>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 10 }}
          layout="vertical"
          colon={false}
          labelAlign={'left'}
        >
          <Form.Item>
            <div className={styles['main__avatar']}>
              <Upload
                showUploadList={false}
                beforeUpload={async (fileInfo) => {
                  const formData = new FormData()
                  formData.append('file', fileInfo)
                  const res = await uploadFile(formData)
                  setInfo({ ...info, avatar: res })
                  return false
                }}
              >
                <Avatar
                  size={64}
                  shape={'square'}
                  alt="修改头像"
                  src={info.avatar}
                />
              </Upload>
              <Text type="secondary" className={styles['avatar__text']}>
                请选择合适的头像尺寸~
              </Text>
            </div>
          </Form.Item>
          <Form.Item label="用户 ID">
            <Input disabled value={info._id} />
          </Form.Item>
          <Form.Item label="用户名">
            <Input
              showCount
              maxLength={20}
              value={info.username}
              onChange={(e) => {
                e.preventDefault()
                validUserName(e.target.value) &&
                  setInfo(() => ({ ...info, username: e.target.value }))
              }}
            />
          </Form.Item>
          <Form.Item label="邮箱">
            <Input
              value={info.email}
              onChange={(e) => {
                e.preventDefault()
                setInfo(() => ({ ...info, email: e.target.value }))
              }}
            />
          </Form.Item>
          <Form.Item label="个人介绍">
            <TextArea
              showCount
              maxLength={100}
              value={info.intro}
              onChange={(e) => {
                e.preventDefault()
                setInfo(() => ({ ...info, intro: e.target.value }))
              }}
            />
          </Form.Item>
          <Form.Item label="手机号">
            <Input disabled value={info.phoneNumber} />
          </Form.Item>
          <Form.Item>
            <Button
              onClick={async () => {
                dispatch(changeUserinfoAction(defaultInfo, info))
              }}
            >
              提交修改
            </Button>
          </Form.Item>
        </Form>
      </div>
    </CpnBlockContainer>
  )
}
export default SettingMain
