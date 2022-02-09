import * as ActionTypes from './contants'
import { Dispatch } from 'redux'
import { IUserPartInfo } from './type'
import { changeUserInfo } from 'services/user'
import { validUserInfo } from 'utils/validMethod'
import { message } from 'antd'
import cache from 'utils/cache'

export const changeRouterPath =
  (pathList: string[]) => (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.CHANGE_ROUTER_PATH,
      pathList: pathList
    })
  }

export const changeUserinfoAction =
  (preUserInfo: IUserPartInfo, curUserInfo: IUserPartInfo) =>
  async (dispatch: Dispatch) => {
    const res = await changeUserInfo(validUserInfo(preUserInfo, curUserInfo))
    if (res) {
      dispatch({
        type: ActionTypes.CHANGE_USER_INFO,
        userInfo: { ...curUserInfo }
      })
      message.success('修改成功')
      cache.setCache('__userinfo__', curUserInfo)
    }
  }
