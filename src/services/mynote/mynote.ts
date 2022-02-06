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
export const getNoteList = (year: string, tag: string) => {
  return new Promise<INoteListItemResult[]>(async (resolve, reject) => {
    const paramY = year.length ? `year=${year}&` : ''
    const paramT = tag.length ? `tag=${tag}&` : ''
    const res = await request.get<INoteListItemRootResult>({
      url: 'note?' + paramY + paramT
    })
    // 返回数据
    res.success && resolve(res.list)
  })
}

/**
 * functionName 获取需要推送的笔记
 * method get
 */
export const getPushNoteList = () => {
  return new Promise<boolean>(async (resolve, reject) => {
    const res = await request.get<IBaseResult>({
      url: 'push'
    })
    console.log(res)
    resolve(res.success)
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
