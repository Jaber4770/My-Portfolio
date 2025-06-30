import {
    createBrowserRouter
} from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import Education from "../Pages/Education/Education";
import Skills from "../Pages/Skills/Skills";
import Contact from "../Pages/Contact/Contact";
  

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        index: true
        /* children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: 'about',
                Component: About
            },
            {
                path: 'projects',
                Component: Projects
            },
            {
                path: 'education',
                Component: Education
            },
            {
                path: 'skills',
                Component: Skills
            },
            {
                path: 'contact',
                Component: Contact
            },
        ] */
    },
]);