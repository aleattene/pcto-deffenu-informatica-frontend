import React from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from './../Logo/Logo.jsx'
import { Link } from 'react-router-dom'

function Sidebar({ closeSidebar }) {

    const navigate = useNavigate()

    // Logo Action
    const handleClickLogo = () => navigate('/')

    // TO FIX ${sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'}

    return (
        <div
            className='fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-[rgb(20,30,37)]
                        lg:translate-x-0 lg:static lg:inset-0'
        >

            <Logo onClick={handleClickLogo} />
            <nav id="sidebar" className='mt-10'>
                <Link to='/athletes' class="flex items-center px-6 py-2 mt-4 text-gray-100 hover:bg-gray-700 hover:text-amber-400 hover:bg-opacity-25 hover:text-lg"
                onClick={closeSidebar}>
                    <span class="mx-3">Atleti</span>
                    
                </Link>
                <Link to='/trainers' class="flex items-center px-6 py-2 mt-4 text-gray-100 hover:bg-gray-700  hover:text-amber-400 hover:bg-opacity-25 hover:text-lg"
                onClick={closeSidebar}>
                    <span class="mx-3">Allenatori</span>
                </Link>
                <Link to='/sport-doctors' class="flex items-center px-6 py-2 mt-4 text-gray-100 hover:bg-gray-700  hover:text-amber-400 hover:bg-opacity-25 hover:text-lg"
                onClick={closeSidebar}>
                    <span class="mx-3">Medici Sportivi</span>
                </Link>
                <Link to='/payments' class="flex items-center px-6 py-2 mt-4 text-gray-100 hover:bg-gray-700  hover:text-amber-400 hover:bg-opacity-25 hover:text-lg"
                onClick={closeSidebar}>
                    <span class="mx-3">Compensi</span>
                </Link>
                <Link to='/sport-certificates' class="flex items-center px-6 py-2 mt-4 text-gray-100 hover:bg-gray-700  hover:text-amber-400 hover:bg-opacity-25 hover:text-lg"
                onClick={closeSidebar}>
                    <span class="mx-3">Certificati Medici</span>
                </Link>
            </nav>
        </div>
    )
}

export default Sidebar
