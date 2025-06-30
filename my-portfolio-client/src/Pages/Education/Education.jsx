import React from 'react';

const Education = () => {
    const educationData = [
        {
            degree: 'Bachelor of Science in Computer Science and Engineering',
            institution: 'University of Messina, Italy',
            duration: '2023 – Present',
            description: 'Currently pursuing with a regional scholarship. Focused on software development, data structures, and computer networks.'
        },
        {
            degree: 'Higher Secondary Certificate (HSC)',
            institution: 'Govt. Science College, Dhaka',
            duration: '2018 – 2020',
            description: 'Science background with a strong emphasis on Physics, Chemistry, and Mathematics.'
        },
        {
            degree: 'Secondary School Certificate (SSC)',
            institution: 'Dhanmondi Government Boys’ High School',
            duration: '2016 – 2018',
            description: 'Achieved strong academic results with involvement in extracurricular activities including Scouts.'
        }
    ];

    return (
        <section className="max-w-5xl mx-auto px-6 py-12 bg-white shadow-md rounded-lg border border-gray-200 my-20">
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
        </section>
    );
};

export default Education;
