import React,{useState} from 'react';
import {FaAlignRight} from 'react-icons/fa'
import Logo from '../logo.svg'
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="header">
                    <Link to="/">
                     <img src={Logo} alt="Resort Logo" aria-hidden/>
                    </Link>
                    <button 
                    type="button"
                    className="side-btn"
                    onClick={()=>setOpen(!open)}
                    >
                        <FaAlignRight 
                        />
                    </button>
                    </div>
                    <ul className={open?"show-nav nav-links":"nav-links"}>
                   <li>
                       <Link to="/">Home</Link>
                   </li>
                   <li>
                       <Link to="/rooms">Rooms</Link>
                   </li>
                </ul>
                </div>
                
        </nav>
    )
}
