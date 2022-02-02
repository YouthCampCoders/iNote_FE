import * as ActionTypes from './constants'
import { Dispatch } from 'redux'
import { getNoteList } from 'services/mynote'

export const getNoteListAction = () => async (dispatch: Dispatch) => {
  const noteList = await getNoteList()
  dispatch({
    type: ActionTypes.GET_NOTELIST,
    noteList
  })
}
