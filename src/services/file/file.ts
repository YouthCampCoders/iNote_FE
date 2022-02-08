import request from 'services'
import { IFileRootResult } from 'services/type'

/**
 * functionName 获取所有笔记
 * method get
 */
export const getNoteList = () => {
  return new Promise<string>(async (resolve, reject) => {
    const res = await request.post<IFileRootResult>({
      url: '/file'
    })
    // 返回数据
    res.success && resolve(res.url)
  })
}
