import ParticlesUI from '@/Animation/ParticlesUI';
import { Heading } from '@/Components/Common/Heading';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';
import WorkCard from '../../Components/Works/WorkCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const location = useLocation();

  useEffect(() => {
    try {
      axios.get('/projects.json').then((res) => setProjects(res?.data));
    } catch (error) {
      toast.error(error.code);
    }
  }, []);

  return (
    <section className={`flex flex-col w-11/12 mx-auto items-center justify-center ${location.pathname === '/' ? 'mt-20' : 'my-10'}`}>
      {/* Particles */}
      {location.pathname === '/projects' && <ParticlesUI />}

      <Heading headingTitle="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects?.map((project, index) => (
          <WorkCard key={index} work={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
