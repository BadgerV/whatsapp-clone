import React from 'react';
import './homepage.styles.css';
import FirstHalf from '../firsthalf-component/FirstHalf.component';
import SecondHalf from '../secondhalf-component/SecondHalf.component';

const HomePage = () => {
    return(
       <div className="homepage">
            <FirstHalf />
            <SecondHalf />  
       </div>
    )
};

export default HomePage;

