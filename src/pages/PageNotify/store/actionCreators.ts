import * as ActionTypes from './constants'
import { Dispatch } from 'redux'
import { getNoteList } from 'services/mynote'

export const getPushNoteListAction = () => async (dispatch: Dispatch) => {
  const noteList = await getNoteList('', '', true)
  dispatch({
    type: ActionTypes.GET_PUSHNOTELIST,
    noteList
  })
}
