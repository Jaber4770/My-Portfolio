import { Facebook, Github, Linkedin, Twitter, Youtube } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';


const Footer = () => {
    return (
        <footer className="footer bg-gray-900 sm:footer-horizontal text-neutral-content items-center p-4">
            <aside className="grid-flow-col items-center">
                <span className="font-bold text-4xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    &lt;/JA&gt;
                </span>

                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <Link
                    href="https://github.com/Jaber4770"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <a>
                        <Github className="w-8 h-8 hover:text-gray-500 transition-colors duration-300" />
                    </a>
                </Link>

                <Link
                    href="https://www.linkedin.com/in/jaber-ahmed-7175a11b0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <a>
                        <Linkedin className="w-8 h-8 hover:text-blue-600 transition-colors duration-300" />
                    </a>
                </Link>

                {/* <Link
                    href="https://twitter.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                >
                    <a>
                        <Twitter className="w-8 h-8 hover:text-blue-500 transition-colors duration-300" />
                    </a>
                </Link> */}

                <Link
                    href="https://www.youtube.com/@Jack_Sargey"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                >
                    <a>
                        <Youtube className="w-8 h-8 hover:text-red-500 transition-colors duration-300" />
                    </a>
                </Link>

{/*                 <Link
                    href="https://www.facebook.com/Jaber.Ahmed4770/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <a>
                        <Facebook className="w-8 h-8 hover:text-blue-700 transition-colors duration-300" />
                    </a>
                </Link> */}
            </nav>
        </footer>
    );
};

export default Footer;