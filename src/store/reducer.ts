import { combineReducers } from 'redux'
import { reducer as myNoteReducer } from 'pages/PageMyNote/store'
import { reducer as navPathReducer } from 'components/CpnNavBar/store'
import { reducer as notifyReducer } from 'pages/PageNotify/store'

// 合并各个 reducer
const _Reducer = combineReducers({
  myNote: myNoteReducer,
  navPath: navPathReducer,
  notify: notifyReducer
})

export default _Reducer
