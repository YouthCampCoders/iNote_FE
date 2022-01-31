import { combineReducers } from 'redux'
import { reducer as myNoteReducer } from 'pages/PageMyNote/store'

// 合并各个 reducer
const _Reducer = combineReducers({
  myNote: myNoteReducer
})

export default _Reducer
