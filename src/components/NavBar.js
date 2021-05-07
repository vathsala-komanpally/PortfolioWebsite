import React, { useState } from 'react'
import "../App.css";
import './NavBar.css';
import { Link } from 'react-router-dom';

//import {Contact} from "../pages/ContactPage";
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
                        VathsalaK<i className='fab fa-typo3' />
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
                            <Link to='/recentwork' className='nav-links' onClick={closeMenuItem}>RecentWork</Link>
                        </li>
                    </ul>
                </div> 
            </nav>
        </>
    );
}

export default NavBar;
{/* <a className="navbar-brand" href="#">VathsalaK</a>
<a className="nav-link" href="#" onClick={<About/>}>About<span className="sr-only">(current)</span></a>
<a className="nav-link" href="#" onClick={<Education/>}>Education<span className="sr-only">(current)</span></a>
<a className="nav-link" href="#" onClick={RecentWork}>RecentWork<span className="sr-only">(current)</span></a>
<a className="nav-link" href="#" onClick={Resume}>Resume<span className="sr-only">(current)</span></a> */}