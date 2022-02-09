import React from 'react'
import useDocumentTitle from 'hooks/useDocumentTitle'
import cache from 'utils/cache'
import CpnBlockContainer from 'components/CpnBlockContainer'
import { Typography } from 'antd'
import style from './PageNoteDetail.module.less'

const { Text, Paragraph } = Typography

const PageNoteDetail: React.FC = (props) => {
  useDocumentTitle('文章详情')
  const detail = cache.getCache('__notedetail__')

  return (
    <div className={style['detail']}>
      <div className={style['detail__main']}>
        <CpnBlockContainer>
          <Text strong className={style['main__title']}>
            这是一个标题
          </Text>
          <Paragraph>
            {new Array(20).fill(
              <div dangerouslySetInnerHTML={{ __html: detail.content }}></div>
            )}
          </Paragraph>
        </CpnBlockContainer>
      </div>
    </div>
  )
}

export default PageNoteDetail
