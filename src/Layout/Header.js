import React from 'react';
import { useEffect, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {

    const educationRef = useRef();
    const projectRef = useRef();
    const workexRef = useRef();

    const location = useLocation();
    
    useEffect(() => {
        const education = educationRef.current;
        const project = projectRef.current;
        const workex = workexRef.current;

        switch (location.pathname) {
            case '/education':
                education.style.opacity = 1;
                project.style.opacity = 0.55;
                workex.style.opacity = 0.55;
                break;
            case '/projects':
                education.style.opacity = 0.55;
                project.style.opacity = 1;
                workex.style.opacity = 0.55;
                break;
            case '/work-experience':
                education.style.opacity = 0.55;
                project.style.opacity = 0.55;
                workex.style.opacity = 1;
                break;
            default:
                break;
        }
    }, [location]);

    return (
        <div className="header-container">
            <h1><a href="https://drive.google.com/file/d/1RLG-GLlE9HULf1_XqfX7ZrAIkGMXiAi6/view?usp=sharing" target="_blank" rel="noreferrer">portfolio</a></h1>
            <div className="portfolio-line"></div>
            <div className="links">
                <Link to="/education" className='nav-el' id='edu-label' ref={ educationRef }>education</Link>
                <Link to="/projects" className='nav-el' id='pro-label' ref={ projectRef }>projects</Link>
                <Link to="/work-experience" className='nav-el' id='work-label' ref={ workexRef }>work experience</Link>
                <Outlet />
            </div>
        </div>
    );
}