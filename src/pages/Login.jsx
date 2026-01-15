import React, { useContext, useEffect, useState } from 'react'
import Axois from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { token, setToken, navigate, backendURL } = useContext(ShopContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      if (currentState === 'Signup') {
        const response = await Axois.post(`${backendURL}/api/user/register`, {
          name,
          email,
          password,
        })

        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
        }
      } else {
        const response = await Axois.post(`${backendURL}/api/user/login`, {
          email,
          password,
        })

        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        } else {
          toast.error(response.data.message)
        }
      }
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token, navigate])

  return (
    <section className="border-t border-border-light">
      <div className="max-w-lg mx-auto px-6 sm:px-10 py-16">
        <div className="border border-border-light bg-white p-8">
          <p className="text-caption text-text-tertiary">Account</p>
          <h1 className="text-3xl font-semibold mt-3">{currentState}</h1>

          <form onSubmit={onSubmitHandler} className="mt-8 space-y-4">
            {currentState === 'Login' ? null : (
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                className="w-full border border-border-light px-3 py-2 text-sm"
                placeholder="Name"
                required
              />
            )}
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="w-full border border-border-light px-3 py-2 text-sm"
              placeholder="Email"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              className="w-full border border-border-light px-3 py-2 text-sm"
              placeholder="Password"
              required
            />

            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-text-tertiary">
              <Link to="/forgot-password" className="hover:text-text-primary">
                Forgot password
              </Link>
              {currentState === 'Login' ? (
                <button type="button" onClick={() => setCurrentState('Signup')}>
                  Create account
                </button>
              ) : (
                <button type="button" onClick={() => setCurrentState('Login')}>
                  Login here
                </button>
              )}
            </div>

            <button type="submit" className="w-full bg-brand-black text-brand-white py-3 text-button">
              {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
