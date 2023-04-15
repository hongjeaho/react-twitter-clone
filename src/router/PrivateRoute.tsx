import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppSelector } from '@/features/hooks'

interface Props {
  children: React.ReactNode
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const isLogin = useAppSelector(state => state.customer.isLogin)

  return isLogin ? <>{children}</> : <Navigate to={'/auth'} />
}

export default PrivateRoute
