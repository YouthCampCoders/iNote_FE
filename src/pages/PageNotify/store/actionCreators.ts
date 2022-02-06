import * as ActionTypes from './constants'
import { Dispatch } from 'redux'
import { getPushNoteList } from 'services/mynote'

export const getPushNoteListAction = () => async (dispatch: Dispatch) => {
  const noteList = await getPushNoteList()
  dispatch({
    type: ActionTypes.GET_PUSHNOTELIST,
    noteList
  })
}
