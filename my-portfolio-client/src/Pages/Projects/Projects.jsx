import React, { useState } from 'react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'Leafano – Gardening Tips Web App',
            photo: 'https://i.ibb.co/pBHRs5zB/leafano.png',
            description:
                'Leafano is a gardening tips web app designed to help plant enthusiasts with expert advice, plant care guides, and personalized recommendations. It offers a user-friendly interface to explore, filter, and sort gardening tips, making plant care simple and enjoyable for everyone.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
            link: 'https://leafano-8ca4e.web.app/',
            github: 'https://github.com/Jaber4770/Leafano',
            github2: 'https://github.com/Jaber4770/Leafano-Server',
            challenges: 'Integrating filtering/sorting features dynamically and managing complex component states.',
            future: 'Adding user login with saved tips, AI-based recommendations, and mobile PWA support.',
        },
        {
            title: 'Parcel Delivery Platform – Zap-Shift',
            photo: 'https://i.ibb.co/C32pz83V/zap-shift.png',
            description:
                'ZapShift (or ProFast) is a fast and reliable parcel delivery web application designed to streamline logistics by connecting senders, riders, and service centers efficiently. It offers real-time tracking, easy booking, and management features to ensure smooth and timely deliveries.',
            technologies: ['React', 'MongoDB', 'Express', 'Stripe', 'JWT'],
            link: 'https://zap-shift-0.web.app/',
            github: 'https://github.com/Jaber4770/ProFast',
            challenges: 'Rider filtering, delivery logic, and authentication-based UI control.',
            future: 'Introduce mobile app, add map integration, and improve delivery analytics.',
        },
        {
            title: 'Restaurant Management Website',
            photo: 'https://i.ibb.co/Qjr37ys3/dishora.png',
            description:
                'Dishora is a modern web platform that connects users with local restaurants and food delivery services, offering an intuitive interface for browsing menus and placing orders. It focuses on seamless user experience and real-time updates to ensure fast and reliable food delivery.',
            technologies: ['React', 'Firebase', 'Node.js', 'MongoDB'],
            link: 'https://dishora-873af.web.app/',
            github: 'https://github.com/Jaber4770/ProFast',
            challenges: 'Real-time order updates and dynamic menu rendering.',
            future: 'Implement live chat, dashboard analytics, and role-based features.',
        },
    ];

    return (
        <section id='projects' className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-10">Projects</h1>
            <div className="space-y-5">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex lg:flex-row md:flex-row flex-col gap-4"
                    >
                        <img className='lg:w-1/3 md:w-1/3 w-full rounded-lg' src={project.photo} alt="" />
                        <div>
                            <h2 className="text-2xl font-semibold text-blue-600 mb-2">{project.title}</h2>
                            <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
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
                                <button
                                    className="text-sm text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    View More
                                </button>
                               {/*  {project.link && (
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
                                )} */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            {selectedProject && (
                <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-2xl rounded-lg p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
                            onClick={() => setSelectedProject(null)}
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                        <img className="w-full rounded mb-4" src={selectedProject.photo} alt={selectedProject.title} />
                        <p className="text-gray-700 mb-3"><strong>Description:</strong> {selectedProject.description}</p>
                        <p className="text-gray-700 mb-3"><strong>Technologies:</strong> {selectedProject.technologies.join(', ')}</p>
                        <p className="text-gray-700 mb-3"><strong>Challenges:</strong> {selectedProject.challenges}</p>
                        <p className="text-gray-700 mb-3"><strong>Future Plans:</strong> {selectedProject.future}</p>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Live Site
                            </a>
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                            >
                                GitHub (Client)
                            </a>
                            {selectedProject.github2 && (
                                <a
                                    href={selectedProject.github2}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                                >
                                    GitHub (Server)
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
