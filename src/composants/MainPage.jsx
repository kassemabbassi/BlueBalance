import React from 'react'
import NavBar from './NavBar'
import HomePage from './HomePage'

export default function MainPage() {
    return (
        <div className='flex-col h-screen'>
            <NavBar />
            <HomePage/>
        </div>
    )
}
