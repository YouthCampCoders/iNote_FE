import React from 'react'
import useDocumentTitle from 'hooks/useDocumentTitle'
import cache from 'utils/cache'
import CpnBlockContainer from 'components/CpnBlockContainer'
import { Typography, Button } from 'antd'
import style from './PageNoteDetail.module.less'
import { useNavigate } from 'react-router-dom'

const { Text, Paragraph } = Typography

const PageNoteDetail: React.FC = (props) => {
  useDocumentTitle('文章详情')
  const detail = cache.getCache('__notedetail__')
  const navigate = useNavigate()

  return (
    <div className={style['detail']}>
      <div className={style['detail__main']}>
        <CpnBlockContainer>
          <Text strong className={style['main__title']}>
            {detail.title}
          </Text>
          <Button
            className={style['main__modify']}
            type="primary"
            onClick={() => {
              cache.setCache('__modify__', detail)
              navigate('/write')
            }}
          >
            修改笔记
          </Button>
          <Paragraph>
            <div dangerouslySetInnerHTML={{ __html: detail.content }}></div>
          </Paragraph>
        </CpnBlockContainer>
      </div>
    </div>
  )
}

export default PageNoteDetail
