import * as ActionTypes from './contants'
import { INavBarStore } from './type'

const defaultState: INavBarStore = {
  pathList: ['home']
}

export default function reducer(state = defaultState, action: any) {
  switch (action.type) {
    case ActionTypes.CHANGE_ROUTER_PATH:
      return { ...state, pathList: action.pathList }
    default:
      return state
  }
}
