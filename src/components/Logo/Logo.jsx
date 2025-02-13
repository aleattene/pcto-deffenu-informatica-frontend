import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './../../assets/img/logo.svg'


function LogoWithText() {

    // Redirect to Homepage
    const navigate = useNavigate()
    const goToHomepage = () => navigate('/')

    return (
        <div className="flex items-center justify-center mt-8 cursor-pointer" onClick={goToHomepage}>
            <div class="flex items-center mx-4" >
                <img id="logo-img" className='w-13 h-13 rounded-full' src={logo} alt="Logo SM"
                />
                <span class="mx-4 text-2xl font-semibold text-gray-300">Sport Management</span>
            </div>
        </div>
    );
}

export default LogoWithText;
