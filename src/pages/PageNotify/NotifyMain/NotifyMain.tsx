import React, { useEffect, useState } from 'react'
import CpnBlockContainer from 'components/CpnBlockContainer'
import CpnNoteCard from 'components/CpnNoteCard'
import timeParser from 'utils/timeParser'
import NotifyModal from './NotifyModal'
import NotifyTimerPicker from './NotifyTimerPicker'
import { useDispatch } from 'react-redux'
import { getPushNoteListAction } from '../store/actionCreators'
import style from './NotifyMain.module.less'

const testList = new Array(10).fill(0)

const NotifyMain: React.FC = (props) => {
  const [modVisible, setModVisible] = useState(false)
  const [delVisibleD, setDelVisible] = useState(false)
  const close = (cancleFn: any) => () => cancleFn(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPushNoteListAction())
  }, [dispatch])

  return (
    <CpnBlockContainer
      transStyle={{ flex: 1, display: 'flex', flexDirection: 'column' }}
    >
      <div className={style['noteList']}>
        {testList.map((_, index) => (
          <CpnNoteCard
            title="你好"
            tag="2022"
            time={timeParser(+new Date())}
            content="简单的标题"
            editable
            bottomGup
            key={index}
            onModify={() => setModVisible(true)}
            onDelete={() => setDelVisible(true)}
          />
        ))}
      </div>
      <NotifyModal
        title="请选择下一次修改的时间"
        visible={modVisible}
        onCancel={close(setModVisible)}
      >
        <NotifyTimerPicker onOk={(value) => console.log(value)} />
      </NotifyModal>
      <NotifyModal
        title="是否取消推送"
        visible={delVisibleD}
        onCancel={close(setDelVisible)}
      >
        确认后不再接收该笔记的推送
      </NotifyModal>
    </CpnBlockContainer>
  )
}

export default NotifyMain
