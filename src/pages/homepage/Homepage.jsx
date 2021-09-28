import React from 'react'
import './homepage.css'

import Homebar from '../../components/homebar/Homebar';


function Homepage() {
    return (
        <div className='home'>
            <Homebar />
            <div className="imageContainer">
                <img className="organistionImage" src="https://aitplacements.in/static/media/ait2.55aa091d.webp" alt="AIT home page" />
            </div>
        </div>
    );
}

export default Homepage;
