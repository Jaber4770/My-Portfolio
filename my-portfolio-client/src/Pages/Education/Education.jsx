import React from 'react';

const Education = () => {
    const educationData = [
        {
            degree: 'BSc in Computer Science',
            institution: 'University of Messina, Italy',
            duration: '2024 – Present',
            description: 'Currently pursuing with scholarship. Focused on software development, data structures, and computer networks etc.'
        },
    ];
    const courseData = [
        {
            degree: 'Web Development',
            institution: 'Programming Hero, Dhaka',
            duration: '6 Months',
            description: 'The course focuses on modern web development technologies including HTML, CSS, JavaScript, React, Node.js, MongoDB, and Express.js. It emphasizes hands-on project building, problem solving, Git/GitHub collaboration, responsive design, REST APIs, and career readiness through real-world assignments and portfolio development.'
        }        
    ];

    return (
        <section id='education'>
            <div className="max-w-6xl mx-auto space-y-6 px-6 py-12 bg-white shadow-md rounded-lg border border-gray-200 my-20">
                <h1 className="text-4xl font-bold text-gray-800 mb-10">Education</h1>
                <div className="space-y-8">
                    {educationData.map((edu, index) => (
                        <div key={index} className="border-l-4 border-blue-600 pl-6">
                            <h2 className="text-2xl font-semibold text-gray-700">{edu.degree}</h2>
                            <p className="text-gray-600 italic">{edu.institution}</p>
                            <p className="text-sm text-gray-500 mb-2">{edu.duration}</p>
                            <p className="text-gray-600">{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-6xl mx-auto space-y-6 px-6 py-12 bg-white shadow-md rounded-lg border border-gray-200 my-20">
                <h1 className="text-4xl font-bold text-gray-800 mb-10">Cources</h1>
                <div className="space-y-8">
                    {courseData.map((edu, index) => (
                        <div key={index} className="border-l-4 border-blue-600 pl-6">
                            <h2 className="text-2xl font-semibold text-gray-700">{edu.degree}</h2>
                            <p className="text-gray-600 italic">{edu.institution}</p>
                            <p className="text-sm text-gray-500 mb-2">{edu.duration}</p>
                            <p className="text-gray-600">{edu.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
