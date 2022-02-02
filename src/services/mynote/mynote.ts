import {
  INoteListItemRootResult,
  INoteListItemResult,
  IBaseResult
} from '../type'
import request from 'services'

/**
 * functionName 获取所有笔记
 * method get
 */
export const getNoteList = () => {
  return new Promise<INoteListItemResult[]>(async (resolve, reject) => {
    const res = await request.get<INoteListItemRootResult>({
      url: 'note'
    })
    // 返回数据
    res.success && resolve(res.list)
  })
}

/**
 * functionName 新增笔记
 * method post
 * body
 *  title: 笔记标题
 *  content: 笔记内容
 *  needPush: 是否需要推送
 */
export const addNewNote = () => {
  return new Promise<boolean>(async (resolve, reject) => {
    const res = await request.post<IBaseResult>({
      url: 'note'
    })

    resolve(res.success)
  })
}

/**
 * functionName 删除笔记
 * method delete
 * params
 *  _id 笔记的 id
 */
export const deleteNote = () => {
  return new Promise<boolean>(async (resolve, reject) => {
    const res = await request.delete<IBaseResult>({
      url: 'note'
    })

    resolve(res.success)
  })
}

/**
 * functionName 修改笔记
 * method put
 * params
 *  _id 笔记的 id
 * body
 *  title: 笔记标题
 *  content: 笔记内容
 *  needPush: 是否需要推送
 */
export const modifyNote = () => {
  return new Promise<boolean>(async (resolve, reject) => {
    const res = await request.put<IBaseResult>({
      url: 'note'
    })

    resolve(res.success)
  })
}
