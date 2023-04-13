import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { auth } from '@/fbase'
import { type User } from 'firebase/auth'

interface Props {
  children: React.ReactNode
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<User | null>(null)

  useEffect(() => {
    setIsLogin(auth.currentUser)
  })

  return isLogin != null ? <>{children}</> : <Navigate to={'/auth'} />
}

export default PrivateRoute
