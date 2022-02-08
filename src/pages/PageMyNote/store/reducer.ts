import * as actionTypes from './constants'

const defaultState = {
  noteList: []
}

// 最终同步处理
export default function reducer(state = defaultState, action: any) {
  switch (action.type) {
    case actionTypes.GET_NOTELIST:
      return { ...state, noteList: action.noteList }
    default:
      return state
  }
}
