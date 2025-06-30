import React from 'react';
import { Typed } from 'react-typed';

const TypingTitle = () => {
    return (
        <p className="text-xl text-gray-600 h-8">
            <Typed
                strings={[
                    'MERN Stack Developer',
                    'Cybersecurity Enthusiast',
                    'Content Creator'
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
            />
        </p>
    );
};

export default TypingTitle;