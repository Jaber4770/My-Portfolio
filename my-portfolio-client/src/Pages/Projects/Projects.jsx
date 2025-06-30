import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Leafano – Gardening Tips Web App',
            description:
                'A MERN stack app that provides gardening tips with filtering and sorting features. Designed for plant enthusiasts to manage and explore tips by category.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
            link: 'https://leafano.netlify.app',
            github: 'https://github.com/yourhandle/leafano'
        },
        {
            title: 'Parcel Delivery Platform – Zap-Shift',
            description:
                'Fully functional parcel delivery site with rider registration, authentication, admin panel, and Stripe payment integration.',
            technologies: ['React', 'MongoDB', 'Express', 'Stripe', 'JWT'],
            link: '',
            github: 'https://github.com/yourhandle/zap-shift'
        },
        {
            title: 'Food Expiry Tracker',
            description:
                'A food safety tracker system to help users track and manage nearly expired food, including user roles, CRUD operations, and responsive design.',
            technologies: ['React', 'Firebase', 'Node.js', 'MongoDB'],
            link: '',
            github: 'https://github.com/yourhandle/food-expiry-tracker'
        }
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-10">Projects</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                    >
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
                ))}
            </div>
        </section>
    );
};

export default Projects;
