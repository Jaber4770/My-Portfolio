import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-base-100 fixed top-0 left-0 w-full z-50 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 navbar">
                <div className="flex-1">
                    <Link to="home" className="cursor-pointer">
                        <span className="font-bold text-4xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            &lt;/JA&gt;
                        </span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-none mx-auto">
                    <ul className="menu menu-horizontal px-1 gap-2 text-sm md:text-base">
                        <li>
                            <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} className="cursor-pointer">
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link to="skills" smooth={true} duration={500} className="cursor-pointer">
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500} className="cursor-pointer">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="education" smooth={true} duration={500} className="cursor-pointer">
                                Education & Training
                            </Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500} className="cursor-pointer">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden flex-none">
                    <button
                        className="btn btn-square btn-ghost"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {/* Hamburger icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <div className="absolute top-full left-0 w-full bg-base-100 shadow-md md:hidden z-40">
                        <ul className="menu menu-vertical px-4 py-2 gap-2 text-base">
                            <li>
                                <Link
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="about"
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="skills"
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="projects"
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="education"
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Education & Training
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    className="cursor-pointer"
                                    onClick={() => setMenuOpen(false)}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
