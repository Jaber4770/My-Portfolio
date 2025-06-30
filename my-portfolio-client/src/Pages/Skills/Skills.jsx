import React from 'react';
import { DiMongodb } from 'react-icons/di';
import { FaCss3, FaGitAlt, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoFirebase } from 'react-icons/io5';
import { LuFigma } from 'react-icons/lu';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiJsonwebtokens } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';


const Skills = () => {

    return (
        <section
            id="skills"
            className="max-w-6xl mx-auto px-8 py-14 bg-white rounded-xl shadow-md border border-gray-200 my-20"
        >
            <h1 className="text-4xl font-extrabold mb-12 text-gray-900 border-b border-gray-300 pb-3">
                My Skills
            </h1>
            <div className=" grid lg:grid-cols-2 grid-cols-1 gap-5">
                {/* <Icon className={`${color} text-4xl`} /> */}
                <div>
                    <h1 className='text-3xl font-semibold'>Frontend</h1>
                    <div className='flex flex-wrap gap-2 p-2'>
                        <span className="text-4xl font-medium text-gray-600 hover:text-[#ec6231] p-5 border-1 rounded-full"><FaHtml5 /></span>
                        <span className="text-4xl font-medium text-gray-600 hover:text-blue-500 p-5 border-1 rounded-full"><FaCss3 /></span>
                        <span className="text-4xl font-medium text-gray-600 hover:text-[#2196f3] p-5 border-1 rounded-full"><RiTailwindCssFill /></span>
                        <span className="text-4xl font-medium text-gray-600 hover:text-yellow-500 p-5 border-1 rounded-full"><IoLogoJavascript /></span>
                        <span className="text-4xl font-medium text-gray-800 hover:text-blue-500 p-5 border-1 rounded-full"><FaReact /></span>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold'>Backend</h1>
                    <div className='flex flex-wrap gap-2  p-2'>
                        <span className="text-4xl font-medium text-gray-600 hover:text-green-500 p-5 border-1 rounded-full"><FaNodeJs /></span>
                        <span className="text-4xl font-medium text-gray-600 hover:text-blue-500 p-5 border-1 rounded-full"><SiExpress /></span>
                        <span className="text-4xl font-medium text-gray-600 hover:text-green-500 p-5 border-1 rounded-full"><DiMongodb /></span>
                        <span className="text-4xl font-medium text-gray-600 hover:text-[#FFC400] p-5 border-1 rounded-full"><IoLogoFirebase /></span>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold'>Tools</h1>
                    <div className='flex flex-wrap gap-2 p-2'>
                        <span className="text-4xl font-medium text-gray-600 hover:text-[#1ABCFE] p-5 border-1 rounded-full"><LuFigma /></span>
                        <span className="text-4xl font-medium text-gray-600 hover:text-[#F1502F] p-5 border-1 rounded-full"><FaGitAlt /></span>
                        <span className="text-4xl font-medium text-gray-600 hover:text-[#1a4ffe] p-5 border-1 rounded-full"><VscVscode /></span>
                    </div>
                </div>
                <div>
                    <h1 className='text-3xl font-semibold'>Auth tool</h1>
                    <div className='flex gap-2 p-2'>
                        <span className="text-4xl font-medium text-gray-600 hover:text-[#1ABCFE] p-5 border-1 rounded-full"><SiJsonwebtokens /></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
