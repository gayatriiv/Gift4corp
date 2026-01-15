import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const ForgotPassword = () => {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const navigate = useNavigate()

  const onSubmitEmail = async (e) => {
    e.preventDefault()

    if (!email) {
      toast.error('Please enter your email')
      return
    }

    try {
      setLoading(true)
      const response = await axios.post(`${backendUrl}/api/user/forgot-password`, { email })

      if (response.data.success) {
        toast.success(response.data.message)
        setStep(2)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const onVerifyOTP = async (e) => {
    e.preventDefault()

    if (!otp || otp.length !== 6) {
      toast.error('Please enter a valid 6-digit OTP')
      return
    }

    try {
      setLoading(true)
      const response = await axios.post(`${backendUrl}/api/user/verify-otp`, { email, otp })

      if (response.data.success) {
        toast.success(response.data.message)
        setStep(3)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'Invalid OTP')
    } finally {
      setLoading(false)
    }
  }

  const onResetPassword = async (e) => {
    e.preventDefault()

    if (password.length < 8) {
      toast.error('Password must be at least 8 characters')
      return
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    try {
      setLoading(true)
      const response = await axios.post(`${backendUrl}/api/user/reset-password`, {
        email,
        otp,
        password,
      })

      if (response.data.success) {
        toast.success(response.data.message)
        setTimeout(() => {
          navigate('/login')
        }, 2000)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="border-t border-border-light">
      <div className="max-w-lg mx-auto px-6 sm:px-10 py-16">
        <div className="border border-border-light bg-white p-8">
          <p className="text-caption text-text-tertiary">Password Recovery</p>
          <h1 className="text-2xl font-semibold mt-3">
            {step === 1 && 'Forgot Password'}
            {step === 2 && 'Verify OTP'}
            {step === 3 && 'Reset Password'}
          </h1>

          {step === 1 && (
            <form onSubmit={onSubmitEmail} className="mt-6 space-y-4">
              <input
                type="email"
                className="w-full border border-border-light px-3 py-2 text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-black text-brand-white py-3 text-button disabled:bg-border-medium"
              >
                {loading ? 'Sending...' : 'Send OTP'}
              </button>
              <div className="text-xs uppercase tracking-[0.2em] text-text-tertiary">
                <Link to="/login" className="hover:text-text-primary">
                  Back to login
                </Link>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={onVerifyOTP} className="mt-6 space-y-4">
              <p className="text-sm text-text-secondary">
                Enter the 6-digit OTP sent to <span className="text-text-primary">{email}</span>
              </p>
              <input
                type="text"
                className="w-full border border-border-light px-3 py-2 text-sm text-center tracking-[0.4em]"
                placeholder="000000"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                maxLength={6}
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-black text-brand-white py-3 text-button disabled:bg-border-medium"
              >
                {loading ? 'Verifying...' : 'Verify OTP'}
              </button>
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-text-tertiary">
                <button type="button" onClick={() => setStep(1)}>
                  Change email
                </button>
                <button type="button" onClick={onSubmitEmail} disabled={loading}>
                  Resend OTP
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <form onSubmit={onResetPassword} className="mt-6 space-y-4">
              <input
                type="password"
                className="w-full border border-border-light px-3 py-2 text-sm"
                placeholder="New password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="password"
                className="w-full border border-border-light px-3 py-2 text-sm"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-black text-brand-white py-3 text-button disabled:bg-border-medium"
              >
                {loading ? 'Resetting...' : 'Reset Password'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword
