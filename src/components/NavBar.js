import React, { useState } from 'react'
import "../App.css";
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const closeMenuItem=()=>{
        setClick(false);
    }
    return (
        <>
            <nav className="navbar">
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMenuItem}>
                        VathsalaK
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMenuItem}>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/education' className='nav-links' onClick={closeMenuItem}>Education</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/skills' className='nav-links' onClick={closeMenuItem}>Skills</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/recentprojects' className='nav-links' onClick={closeMenuItem}>RecentProjects</Link>
                        </li>
                    </ul>
                </div> 
            </nav>
        </>
    );
}

export default NavBar;