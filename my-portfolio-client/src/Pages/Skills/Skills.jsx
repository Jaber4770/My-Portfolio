import React from 'react';

const Skills = () => {
    const skills = [
        { name: 'HTML5', level: '90%' },
        { name: 'CSS3 / Tailwind CSS', level: '85%' },
        { name: 'JavaScript (ES6+)', level: '88%' },
        { name: 'React.js', level: '85%' },
        { name: 'Node.js & Express.js', level: '80%' },
        { name: 'MongoDB', level: '75%' },
        { name: 'Git & GitHub', level: '90%' },
        { name: 'REST API', level: '85%' },
        { name: 'Linux / Terminal', level: '70%' },
        { name: 'Cybersecurity Basics', level: '60%' },
    ];

    return (
        <section id='skills' className="max-w-5xl mx-auto px-6 py-12 bg-white rounded-lg shadow-md border border-gray-200 my-20">
            <h1 className="text-4xl font-bold mb-8 text-gray-800">My Skills</h1>
            <div className="space-y-6">
                {skills.map((skill, idx) => (
                    <div key={idx}>
                        <div className="flex justify-between mb-1">
                            <span className="text-lg font-medium text-gray-700">{skill.name}</span>
                            <span className="text-sm text-gray-500">{skill.level}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                                className="bg-blue-600 h-3 rounded-full transition-all duration-500"
                                style={{ width: skill.level }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
