import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import About from '../Pages/About/About';
import Home from '../Pages/Home/Home';
import Skills from '../Pages/Skills/Skills';
import Projects from '../Pages/Projects/Projects';
import Education from '../Pages/Education/Education';
import Contact from '../Pages/Contact/Contact';
import { Element } from 'react-scroll';

const RootLayout = () => {
    return (
        <div>
            <Navbar />

            <Element name="home">
                <Home />
            </Element>

            <Element name="about">
                <About />
            </Element>

            <Element name="skills">
                <Skills />
            </Element>

            <Element name="projects">
                <Projects />
            </Element>

            <Element name="education">
                <Education />
            </Element>

            <Element name="contact">
                <Contact />
            </Element>

            <Footer />
        </div>
    );
};

export default RootLayout;
