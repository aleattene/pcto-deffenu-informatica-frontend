import React from 'react'
import './Dashboard.css'
import federer from './../../assets/img/federer.png'
import Footer from '../Footer/Footer'

function Dashboard() {

    return (
        <div id="dashboard">
            <img id="dashboard-img"
                src={federer} alt="federer" />
            <div id="dashboard-footer">
                <Footer />
            </div>
        </div>
    )
}

export default Dashboard