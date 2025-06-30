import React from 'react';


const Projects = () => {
    const projects = [
        {
            title: 'Leafano – Gardening Tips Web App',
            photo: 'https://i.ibb.co/pBHRs5zB/leafano.png',
            description:
                'Leafano is a gardening tips web app designed to help plant enthusiasts with expert advice, plant care guides, and personalized recommendations. It offers a user-friendly interface to explore, filter, and sort gardening tips, making plant care simple and enjoyable for everyone.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
            link: 'https://leafano-8ca4e.web.app/',
            github: 'https://github.com/Jaber4770/Leafano',
            github2: 'https://github.com/Jaber4770/Leafano-Server'
        },
        {
            title: 'Parcel Delivery Platform – Zap-Shift',
            photo:'https://i.ibb.co/C32pz83V/zap-shift.png',
            description:
                'ZapShift (or ProFast) is a fast and reliable parcel delivery web application designed to streamline logistics by connecting senders, riders, and service centers efficiently. It offers real-time tracking, easy booking, and management features to ensure smooth and timely deliveries.',
            technologies: ['React', 'MongoDB', 'Express', 'Stripe', 'JWT'],
            link: 'https://zap-shift-0.web.app/',
            github: 'https://github.com/Jaber4770/ProFast'
        },
        {
            title: 'Restaurent Management Website',
            photo:'https://i.ibb.co/Qjr37ys3/dishora.png',
            description:
                'Dishora is a modern web platform that connects users with local restaurants and food delivery services, offering an intuitive interface for browsing menus and placing orders. It focuses on seamless user experience and real-time updates to ensure fast and reliable food delivery.',
            technologies: ['React', 'Firebase', 'Node.js', 'MongoDB'],
            link: 'https://dishora-873af.web.app/',
            github: 'https://github.com/Jaber4770/ProFast'
        }
    ];

    return (
        <section id='projects' className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-10">Projects</h1>
            <div className="space-y-5">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex gap-4"
                    >
                        <img className='w-1/2' src={project.photo} alt="" />
                        <div>
                            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{project.title}</h2>
                            <p className="text-gray-600 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-blue-500 hover:underline"
                                    >
                                        Live Site
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-gray-700 hover:underline"
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
