import React, { useEffect, useState } from 'react'
import NotifyModal from './NotifyModal'
import NotifyTimerPicker from './NotifyTimerPicker'
import NotifyListGenerator from './NotifyListGenerator'
import CpnBlockContainer from 'components/CpnBlockContainer'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getPushNoteListAction } from '../store/actionCreators'
import { IRootState } from 'store/type'
import { INoteListItemRootResult } from 'services/type'
import { cancleNotePush, modifyNotePushTime } from 'services/mynote'
import style from './NotifyMain.module.less'
import { message } from 'antd'

// const testList = new Array(10).fill(0)

const NotifyMain: React.FC = (props) => {
  const [modVisible, setModVisible] = useState(false)
  const [delVisibleD, setDelVisible] = useState(false)
  // 当前操作的对象
  const [target, setTarget] = useState('')
  const [time, setTime] = useState('')
  //
  const close = (cancleFn: any) => () => {
    cancleFn(false)
    setTarget('')
  }
  // 进行操作时更改操作对象
  const operate = (operateFn: any) => (id: string) => () => {
    operateFn(true)
    setTarget(id)
  }

  const { list } = useSelector<IRootState, INoteListItemRootResult>(
    (state) => ({
      list: state.notify.noteList,
      success: state.notify.success
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPushNoteListAction())
  }, [dispatch, target, time])

  return (
    <CpnBlockContainer
      transStyle={{ flex: 1, display: 'flex', flexDirection: 'column' }}
    >
      <div className={style['noteList']}>
        <NotifyListGenerator
          list={list}
          onDelete={operate(setDelVisible)}
          onModify={operate(setModVisible)}
        />
      </div>
      <NotifyModal
        title="请选择下一次修改的时间"
        visible={modVisible}
        onCancel={close(setModVisible)}
        onOk={async () => {
          if (time.length) {
            const res = await modifyNotePushTime(target, time)
            res ? message.success('修改成功') : message.error('修改失败')
          }
          close(setModVisible)()
          setTime('')
        }}
      >
        <NotifyTimerPicker onOk={(moment) => setTime(moment.toString())} />
      </NotifyModal>
      <NotifyModal
        title="是否取消推送"
        visible={delVisibleD}
        onCancel={close(setDelVisible)}
        onOk={async () => {
          const res = await cancleNotePush(target)
          res ? message.success('取消成功') : message.error('取消失败')
          close(setDelVisible)()
        }}
      >
        确认后不再接收该笔记的推送
      </NotifyModal>
    </CpnBlockContainer>
  )
}

export default NotifyMain
