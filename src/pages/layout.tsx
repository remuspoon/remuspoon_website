import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/navbar.tsx'

const Layout = () => {
    return (
        <main className='bg-gray max-w-screen'>
            <Navbar />
            <Outlet />
        </main>
    )
}

export default Layout