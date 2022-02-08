import * as ActionTypes from './constants'
import { Dispatch } from 'redux'
import { getNoteList } from 'services/mynote'

export const getNoteListAction =
  (year: string, tag: string) => async (dispatch: Dispatch) => {
    const noteList = await getNoteList(year, tag)

    dispatch({
      type: ActionTypes.GET_NOTELIST,
      noteList
    })
  }
