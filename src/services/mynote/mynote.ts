import {
  INoteListItemRootResult,
  INoteListItemResult,
  IBaseResult
} from '../type'
import request from 'services'

/**
 * functionName 获取所有笔记
 * method get
 * params
 *  year 年份
 *  tag 标签
 *  needPush 是否需要推送
 */

export const getNoteList = (year: string, tag: string, needPush?: boolean) => {
  return new Promise<INoteListItemResult[]>(async (resolve, reject) => {
    const paramY = year.length ? `year=${year}&` : ''
    const paramT = tag.length ? `tag=${tag}&` : ''
    // 判断是否是 boolean 类型 若为 undefined 表示未传
    const paramN = typeof needPush === 'boolean' ? `needPush=${needPush}&` : ''

    const res = await request.get<INoteListItemRootResult>({
      url: 'note?' + paramY + paramT + paramN
    })
    // 返回数据
    res.success && resolve(res.list)
  })
}

/**
 * functionName 获取需要推送的笔记
 * method get
 */
// export const getPushNoteList = () => {
//   return new Promise<boolean>(async (resolve, reject) => {
//     const res = await request.get<IBaseResult>({
//       url: 'push'
//     })
//     console.log(res)
//     resolve(res.success)
//   })
// }

/**
 * functionName 新增笔记
 * method post
 * body
 *  title: 笔记标题
 *  content: 笔记内容
 *  needPush: 是否需要推送
 *  tag：笔记的标签
 */
export const addNewNote = (
  title: string,
  content: string,
  tag: string,
  needPush: boolean
) => {
  return new Promise<boolean>(async (resolve, reject) => {
    tag = tag.length ? tag : '未分类'
    const res = await request.post<IBaseResult>({
      url: 'note',
      data: {
        title,
        content,
        tag,
        needPush
      }
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
export const modifyNote = (
  _id: string,
  title: string,
  content: string,
  needPush: string | boolean
) => {
  return new Promise<boolean>(async (resolve, reject) => {
    const res = await request.put<IBaseResult>({
      url: `note/${_id}`,
      data: { title, content, needPush }
    })

    resolve(res.success)
  })
}

/**
 * functionName 取消笔记推送
 * method delete
 * params
 *  _id 笔记的 id
 */
export const cancleNotePush = (id: string) => {
  return new Promise<boolean>(async (resolve, reject) => {
    const res = await request.delete<IBaseResult>({
      url: `note/push/${id}`
    })
    resolve(res.success)
  })
}

/**
 * functionName 修改笔记推送时间
 * method put
 * params
 *  id: 笔记 id
 * body
 *  id: 笔记 id
 *  date: 修改后的时间
 */
export const modifyNotePushTime = (id: string, date: string) => {
  return new Promise<boolean>(async (resolve, reject) => {
    const res = await request.post<IBaseResult>({
      url: `note/push/${id}`,
      data: {
        id,
        date
      }
    })
    resolve(res.success)
  })
}
