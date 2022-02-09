import request from 'services'
import { IFileRootResult } from 'services/type'

/**
 * functionName 文件上传
 * method post
 */
export const uploadFile = (formData: any) => {
  return new Promise<string>(async (resolve, reject) => {
    const res = await request.post<IFileRootResult>({
      url: '/file',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    // 返回数据
    res.success && resolve(res.url)
  })
}
