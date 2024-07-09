import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
    return(
        <div className='landing-container'>
            <div className='main-text-container'>
                <div>Hi, this is </div><br /><div id="beforenamediv"><span id='name'>Young Eon</span>'s</div><div>portfolio.</div>
            </div>
            <div className='continue-header'>
                Click <span><Link to="/home">here</Link></span> to go!
            </div>
        </div>
    );
}