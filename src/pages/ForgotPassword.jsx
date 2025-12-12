import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    // Step 1: Send OTP to email
    const onSubmitEmail = async (e) => {
        e.preventDefault();
        
        if (!email) {
            toast.error('Please enter your email');
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post(backendUrl + '/api/user/forgot-password', { email });

            if (response.data.success) {
                toast.success(response.data.message);
                setStep(2); // Move to OTP verification step
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    // Step 2: Verify OTP
    const onVerifyOTP = async (e) => {
        e.preventDefault();
        
        if (!otp || otp.length !== 6) {
            toast.error('Please enter a valid 6-digit OTP');
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post(backendUrl + '/api/user/verify-otp', { email, otp });

            if (response.data.success) {
                toast.success(response.data.message);
                setStep(3); // Move to password reset step
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'Invalid OTP');
        } finally {
            setLoading(false);
        }
    };

    // Step 3: Reset Password
    const onResetPassword = async (e) => {
        e.preventDefault();

        if (password.length < 8) {
            toast.error('Password must be at least 8 characters');
            return;
        }

        if (password !== confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post(backendUrl + '/api/user/reset-password', { 
                email, 
                otp, 
                password 
            });

            if (response.data.success) {
                toast.success(response.data.message);
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl'>
                    {step === 1 && 'Forgot Password'}
                    {step === 2 && 'Verify OTP'}
                    {step === 3 && 'Reset Password'}
                </p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>

            {/* Step 1: Enter Email */}
            {step === 1 && (
                <form onSubmit={onSubmitEmail} className='w-full'>
                    <p className='text-sm text-gray-600 mb-4'>
                        Enter your email address and we'll send you an OTP to reset your password.
                    </p>
                    
                    <input
                        type='email'
                        className='w-full px-3 py-2 border border-gray-800 mb-6'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button
                        type='submit'
                        disabled={loading}
                        className='bg-black text-white font-light px-8 py-2 mt-4 w-full disabled:bg-gray-400 disabled:cursor-not-allowed'
                    >
                        {loading ? 'Sending...' : 'Send OTP'}
                    </button>

                    <div className='w-full flex justify-between text-sm mt-4'>
                        <Link to='/login' className='text-blue-600 hover:underline'>
                            Back to Login
                        </Link>
                    </div>
                </form>
            )}

            {/* Step 2: Enter OTP */}
            {step === 2 && (
                <form onSubmit={onVerifyOTP} className='w-full'>
                    <p className='text-sm text-gray-600 mb-4'>
                        Enter the 6-digit OTP sent to <strong>{email}</strong>
                    </p>
                    
                    <input
                        type='text'
                        className='w-full px-3 py-2 border border-gray-800 mb-6 text-center text-2xl tracking-widest'
                        placeholder='000000'
                        value={otp}
                        onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        maxLength={6}
                        required
                    />

                    <button
                        type='submit'
                        disabled={loading}
                        className='bg-black text-white font-light px-8 py-2 mt-4 w-full disabled:bg-gray-400 disabled:cursor-not-allowed'
                    >
                        {loading ? 'Verifying...' : 'Verify OTP'}
                    </button>

                    <div className='w-full flex justify-between text-sm mt-4'>
                        <button 
                            type='button'
                            onClick={() => setStep(1)} 
                            className='text-blue-600 hover:underline'
                        >
                            Change Email
                        </button>
                        <button 
                            type='button'
                            onClick={onSubmitEmail} 
                            className='text-blue-600 hover:underline'
                            disabled={loading}
                        >
                            Resend OTP
                        </button>
                    </div>
                </form>
            )}

            {/* Step 3: Enter New Password */}
            {step === 3 && (
                <form onSubmit={onResetPassword} className='w-full'>
                    <p className='text-sm text-gray-600 mb-4'>
                        Enter your new password.
                    </p>

                    <input
                        type='password'
                        className='w-full px-3 py-2 border border-gray-800 mb-3'
                        placeholder='New Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <input
                        type='password'
                        className='w-full px-3 py-2 border border-gray-800 mb-6'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button
                        type='submit'
                        disabled={loading}
                        className='bg-black text-white font-light px-8 py-2 mt-4 w-full disabled:bg-gray-400 disabled:cursor-not-allowed'
                    >
                        {loading ? 'Resetting...' : 'Reset Password'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ForgotPassword;
