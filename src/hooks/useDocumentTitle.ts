import { useEffect, useRef } from 'react'

const useDocumentTitle = (title: string, keepOnUnmount = true) => {
  const oldTitle = useRef(document.title).current
  // 页面加载时: 旧title
  // 加载后：新title

  useEffect(() => {
    document.title = title
  }, [title])

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        // 如果不指定依赖，读到的就是旧title
        document.title = oldTitle
      }
    }
  }, [keepOnUnmount, oldTitle])
}

export default useDocumentTitle
