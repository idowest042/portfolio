import ProjectDetails from '@/Pages/ProjectDetails/ProjectDetails';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import AboutMe from '../Pages/AboutMe/AboutMe';
import ContactMe from '../Pages/Contact/ContactMe';
import Home from '../Pages/Home/Home';
import Projects from '../Pages/Projects/Projects';
import Error404 from '../Pages/Shared/Error404';
import Skills from '../Pages/Skills/Skills';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-me',
        element: <AboutMe />,
      },
      {
        path: '/skills',
        element: <Skills />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/contact-me',
        element: <ContactMe />,
      },
      {
        path: '/projects/:slug',
        element: <ProjectDetails />,
      },
    ],
  },
]);

export default router;
