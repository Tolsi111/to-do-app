import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import sadFaceDoodle from '../../assets/sad-face.png'
import './NoPage.css'

function NoPage() {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    function handleMouseEnter () {
        setIsHovered(true);
      };
    
      function handleMouseLeave () {
        setIsHovered(false);
      };

      function navigateHome () {
        navigate("/");
      }

    return(
        <div className='main'>
            <h1 className='title'>No page here!</h1>
            <div className='content'>
                <img src={sadFaceDoodle}  alt='a sad face' className='doodle'/>
                <p className='main-text'>Unfortunately, you were trying to access a page that does not exist. Don't do that.</p>
            </div>
            <p  onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={navigateHome}
                className={`${'back-button'} ${isHovered? 'highlited' : 'animated'}`}>Back to main page</p>
            
        </div>
    )
}

export default NoPage;