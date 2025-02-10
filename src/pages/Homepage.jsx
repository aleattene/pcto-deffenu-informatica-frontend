import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import { useNavigate } from 'react-router-dom';
import federer from './../assets/img/homepage.svg';
import Button from '../components/Button/Button';

function Homepage() {
  const navigate = useNavigate() 
  const handleClickFour = () => navigate('/athletes')
    return (
        <Dashboard imageSrc={federer} altText={federer}    
        buttons={<Button buttonText="Get Started" onClick={handleClickFour} />}/>
  );
}

export default Homepage;