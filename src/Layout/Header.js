import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
        <div className="header-container">
            <h1>portfolio</h1>
            <div className="links">
                <Link to="/education" className='nav-el'>education</Link>
                <Link to="/projects" className='nav-el'>projects</Link>
                <Link to="/work-experience" className='nav-el'>work experience</Link>
                <Outlet />
            </div>
        </div>
    );
}