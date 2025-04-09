import { Link } from 'react-router-dom';
import React from 'react';
const Navbar = () => {
    return (
        <nav >
            <div >
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/service" className="nav-link">Service</Link>
                    </li>
                </ul>  
            </div>
        </nav>
    )
}

export default Navbar;