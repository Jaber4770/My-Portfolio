import React from 'react';

const About = () => {
    return (
        <section id='about' className="max-w-6xl mx-auto px-6 py-12 bg-white rounded-lg shadow-md border border-gray-200 my-20 flex lg:flex-row flex-col-reverse">
            <div className='flex-1'>
                <h1 className="text-4xl font-bold mb-6 text-gray-800">About Me</h1>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    Hello! I’m Jaber Ahmed, a passionate Web Developer with a keen interest in building modern web applications.
                    I love solving problems and continuously learning new technologies to enhance my skills.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    My expertise includes full-stack development, working primarily with JavaScript, React, Node.js, and MongoDB.
                    I enjoy creating clean, efficient, and scalable code. {/*  as well as contributing to open-source projects.*/}
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                    When I’m not coding, I’m often exploring new tech trends, reading documentation on Software Engineering, Programming, including in photography and travel.
                    I’m excited about collaborating on meaningful projects and continuously growing as a developer.
                </p>
            </div>
            <div className='flex-1 mb-5 lg:mb-0'>
                <img className='rounded-full' src="https://avatars.githubusercontent.com/u/73513227?v=4" alt="" />
            </div>
        </section>
    );
};

export default About;
