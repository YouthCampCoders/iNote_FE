import * as ActionTypes from './contants'
import { Dispatch } from 'redux'

export const changeRouterPath =
  (pathList: string[]) => (dispatch: Dispatch) => {
    dispatch({
      type: ActionTypes.CHANGE_ROUTER_PATH,
      pathList: pathList
    })
  }
