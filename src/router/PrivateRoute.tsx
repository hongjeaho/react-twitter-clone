import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { authService } from '@/fbase'
import { type User } from 'firebase/auth'

interface Props {
  children: React.ReactNode
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<User | null>(null)

  useEffect(() => {
    setIsLogin(authService.currentUser)
  })

  return isLogin != null ? <>{children}</> : <Navigate to={'/auth'} />
}

export default PrivateRoute
