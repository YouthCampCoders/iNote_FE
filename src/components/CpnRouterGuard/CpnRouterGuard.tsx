import React from 'react'

const CpnRouterGuard: React.FC = (props) => {
  const { children } = props
  console.log(props)
  return <>{children}</>
}

export default CpnRouterGuard
