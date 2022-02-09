import cache from 'utils/cache'
import * as ActionTypes from './contants'
import { INavBarStore } from './type'
const { _id, avatar, username, intro, phoneNumber } =
  cache.getCache('__userinfo__') || {}

const defaultState: INavBarStore = {
  pathList: ['home'],
  userInfo: { _id, avatar, username, intro, phoneNumber }
}

export default function reducer(state = defaultState, action: any) {
  switch (action.type) {
    case ActionTypes.CHANGE_ROUTER_PATH:
      return { ...state, pathList: action.pathList }
    case ActionTypes.CHANGE_USER_INFO:
      return { ...state, userInfo: action.userInfo }
    default:
      return state
  }
}
