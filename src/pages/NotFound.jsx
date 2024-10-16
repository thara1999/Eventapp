import { CircleSlash, TriangleAlert } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='event-not-found'>
                <div className='app-card'>
                    <TriangleAlert />
                    <p>Page Not Found</p>
                    <button onClick={() => navigate('/')} className='app-btn'>
                        Home
                    </button>
                </div>
            </div>
        </>
    )
}

export default NotFound