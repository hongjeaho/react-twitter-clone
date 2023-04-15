import React, { useState } from 'react'
import styled from '@emotion/styled/macro'
import { auth } from '@/fbase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { setIsLogin } from '@/features/stores/customer'
import { useAppDispatch } from '@/features/hooks'
import { useNavigate } from 'react-router-dom'

const Base = styled.div`
  display: flex;
`
const Form = styled.form``
const Input = styled.input``
const Button = styled.button``

const Auth: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [account] = useState<boolean>(true)

  const movePage = useNavigate()
  const dispatch = useAppDispatch()

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      if (account) {
        await createUserWithEmailAndPassword(auth, email, password)
      } else {
        await signInWithEmailAndPassword(auth, email, password)
      }

      dispatch(setIsLogin(true))
      movePage('/home')
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <Base>
      <Form onSubmit={onSubmit}>
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={e => {
            setEmail(e.target.value)
          }}
          required
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value)
          }}
          required
        />
        <Button type="submit">{account ? '신규 생성' : '로그인'}</Button>
      </Form>
    </Base>
  )
}

export default Auth
