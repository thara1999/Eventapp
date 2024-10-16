import axios from 'axios'
import React, { useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { toast } from 'sonner'
const Login = () => {
    const emailref = useRef(null)
    const passwordref = useRef(null)
    const navigate = useNavigate()
    const { login, user } = useAuth()
    const handleLogin = async (e) => {
        e.preventDefault()
        const logincheck = await login(emailref.current.value, passwordref.current.value);
        if (logincheck) {
            toast.success('Login successful')
            navigate('/events')
        } else {
            toast.error('Invalid email or password')
        }
    }

    if (user) {
        return <Navigate to="/events" />;
    }

    return (
        <>
            <form className='app-card' onSubmit={handleLogin}>
                <h4 className='auth-header'>Login</h4>
                <input className='auth-input' type="email" name="" id="email" ref={emailref} placeholder='Email' required />
                <input className='auth-input' type="password" name="" id="password" ref={passwordref} placeholder='Password' required />
                <button type='submit' className='app-btn'> Login </button>
            </form>
        </>
    )
}

export default Login