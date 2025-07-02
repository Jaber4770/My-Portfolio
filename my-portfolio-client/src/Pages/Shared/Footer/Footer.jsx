import { Facebook, Github, Linkedin, Twitter, Youtube } from 'lucide-react';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-neutral-content p-4">
            {/* Max-width container */}
            <div className="max-w-6xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-4">
                {/* Branding */}
                <aside className="flex items-center gap-4">
                    <span className="font-bold text-4xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        &lt;/JA&gt;
                    </span>
                    <p className="text-sm sm:text-base">
                        © {new Date().getFullYear()} - All rights reserved.
                    </p>
                </aside>

                {/* Social Links */}
                <nav className="flex gap-4">
                    <a
                        href="https://github.com/Jaber4770"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <Github className="w-6 h-6 hover:text-gray-400 transition-colors duration-300" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/jaber4770/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6 hover:text-blue-500 transition-colors duration-300" />
                    </a>

                    <a
                        href="https://www.youtube.com/@Jack_Sargey"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                    >
                        <Youtube className="w-6 h-6 hover:text-red-500 transition-colors duration-300" />
                    </a>

                    {/* Uncomment if needed */}
                    {/* 
                    <a
                        href="https://twitter.com/yourhandle"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                    >
                        <Twitter className="w-6 h-6 hover:text-blue-400 transition-colors duration-300" />
                    </a>

                    <a
                        href="https://www.facebook.com/Jaber.Ahmed4770/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                    >
                        <Facebook className="w-6 h-6 hover:text-blue-600 transition-colors duration-300" />
                    </a>
                    */}
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
