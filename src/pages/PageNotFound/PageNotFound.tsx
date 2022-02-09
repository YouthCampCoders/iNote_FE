import React from 'react'
import { Empty, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import useDocumentTitle from 'hooks/useDocumentTitle'

const PageNotFound: React.FC = (props) => {
  useDocumentTitle('页面走丢了，可你得回来')
  const navigate = useNavigate()

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Empty description="页面走丢了" />
      <Button
        type="primary"
        style={{ marginTop: '20px' }}
        onClick={() => navigate('/home')}
      >
        返回主页
      </Button>
    </div>
  )
}

export default PageNotFound
