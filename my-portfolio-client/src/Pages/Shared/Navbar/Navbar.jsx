import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-4 fixed sticky">
            <div className="flex-1">
                <Link to="/" className="">
                    <span className="font-bold text-4xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        &lt;/JA&gt;
                    </span>

                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-2 text-sm md:text-base">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/education">Education & Training</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
