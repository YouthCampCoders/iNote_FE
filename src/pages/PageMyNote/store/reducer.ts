import * as actionTypes from './constants'

const defaultState = {
  NoteList: [],
}

// 最终同步处理
export default function reducer(state = defaultState, action: any) {
  switch (action.type) {
    case actionTypes.CHANGE_NOTLIST:
      return { ...state, NoteList: action.NoteList }
    default:
      return state
  }
}
