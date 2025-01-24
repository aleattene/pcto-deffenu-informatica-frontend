import React from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import federer from './../assets/img/federer.png';

function Homepage() {

    return (
        <Dashboard imageSrc={federer} altText={federer}/>
  );
}

export default Homepage;