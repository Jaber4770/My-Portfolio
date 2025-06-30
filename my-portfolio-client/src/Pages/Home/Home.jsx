import React from 'react';
import { ArrowRight, Code, Github, Linkedin } from 'lucide-react';
import './Home.css'
import { Link } from 'react-router';
// import TypingTitle from './TypingTitle';

const Home = () => {
    return (
        <section id='home' className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-16 mt-14">
            {/* Background blobs */}
            <div className="absolute w-64 h-64 bg-blue-500 rounded-full top-20 left-20 opacity-20 blur-[60px] z-[-1] animate-float"></div>
            <div className="absolute w-72 h-72 bg-purple-500 rounded-full bottom-20 right-20 opacity-20 blur-[60px] z-[-1] animate-float-reverse"></div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div className="text-left space-y-6 z-10">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                        <span className="text-sm font-medium text-blue-600">MERN STACK DEVELOPER</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
                        Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Jaber Ahmed</span>
                    </h1>

                    {/* <TypingTitle></TypingTitle> */}

                    <p className="text-xl text-gray-600">
                        A passionate MERN Stack Developer with a strong interest in web development and ethical hacking.
                        I enjoy building modern web applications. With foundational knowledge in web penetration testing and cybersecurity.
                    </p>

                    <div className="py-4">
                        <div className="flex flex-wrap gap-3 mb-6">
                            <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React.js</span>
                            <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Node.js</span>
                            <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">MongoDB</span>
                            <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">Cybersecurity</span>
                        </div>

                        <div className="flex gap-4">
                            <a href="#contact" className="btn btn-primary px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                                Contact Me <ArrowRight/> 
                            </a>
                            <a href="#projects" className="btn btn-outline px-8 py-3 rounded-full border-2 border-gray-300 hover:border-blue-500 transition-all duration-300 flex items-center gap-2">
                                My Projects <Code />
                            </a>
                        </div>
                    </div>

                    <div className="flex gap-4 pt-4">
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



                    </div>
                </div>

                {/* Right Column */}
                <div className="hidden md:block relative">
                    <div className="relative animate-float">
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                        <div className="relative bg-white p-4 rounded-2xl shadow-2xl border border-gray-100">
                            <div className="bg-gray-800 rounded-lg overflow-hidden">
                                <div className="flex gap-2 p-3 bg-gray-900">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="p-4 font-mono text-gray-200 text-sm">
                                    <div className="mb-2"><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</div>
                                    <div className="ml-4"><span className="text-yellow-400">name</span>: <span className="text-green-400">'Jaber Ahmed'</span>,</div>
                                    <div className="ml-4"><span className="text-yellow-400">role</span>: <span className="text-green-400">'MERN Stack Developer'</span>,</div>
                                    <div className="ml-4"><span className="text-yellow-400">skills</span>: [</div>
                                    <div className="ml-8"><span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>,</div>
                                    <div className="ml-8"><span className="text-green-400">'MongoDB'</span>, <span className="text-green-400">'Cybersecurity'</span></div>
                                    <div className="ml-4">]</div>
                                    <div>{'}'}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
