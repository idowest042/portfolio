import ParticlesUI from '@/Animation/ParticlesUI';
import { Heading } from '@/Components/Common/Heading';
import { SkillCloud } from '@/Components/Skills/SkillCloud';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Skills = () => {
  const [learningSkills, setLearningSkills] = useState([]);
  const [comfortableSkills, setComfortableSkills] = useState([]);
  const [frontEnd, setFrontEnd] = useState([]);
  const [backEnd, setBackEnd] = useState([]);
  const [tools, setTools] = useState([]);
  const location = useLocation();

  useEffect(() => {
    axios.get('/skills/front-end.json').then((res) => setFrontEnd(res.data));
    axios.get('/skills/back-end.json').then((res) => setBackEnd(res.data));
    axios.get('/skills/tools.json').then((res) => setTools(res.data));
    axios.get('/skills/learningSkills.json').then((res) => setLearningSkills(res.data));
    axios.get('/skills/comfortable.json').then((res) => setComfortableSkills(res.data));
  }, []);

  return (
    <section className={`w-11/12 my-20 mx-auto ${location.pathname === '/' ? 'mt-20' : 'my-10'}`}>
      {/* Particles */}
      {location.pathname === '/skills' && <ParticlesUI />}

      {/* Section Title */}
      <div className="flex flex-col items-center justify-center">
        <Heading headingTitle="Skills" />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title="Frontend" skills={frontEnd} />

          <div className="order-0">
            <SkillCard title="Backend" skills={backEnd} />
          </div>

          <SkillCard title="Tools" skills={tools} />
        </div>
      </div>

      <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* only show md screen */}
        <div className="hidden md:block lg:hidden"></div>

        {/* Current Learning */}
        <div className="md:order-2 lg:order-none">
          <SkillCard title="Current Learning" skills={learningSkills} />
        </div>

        <div className="md:order-0 lg:order-none lg:-mt-32 border rounded-lg dark:border-none">
          <SkillCloud />
        </div>

        <div className="order-none">
          <SkillCard title="Comfortable" skills={comfortableSkills} />
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills }) => (
  <div className="p-6 bg-white dark:bg-dark-lite rounded-xl border dark:border-none">
    <Heading headingTitle={title} />
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
      {skills?.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </div>
  </div>
);

// Reusable Skill Item Component
const SkillItem = ({ skill }) => (
  <div className="lang flex flex-col items-center justify-center space-y-3">
    <img className="w-10 h-10 object-contain" src={skill?.image} alt={skill?.name} />
    <p className="font-bold text-dark-lite tracking-widest dark:text-white-deep">{skill?.name}</p>
  </div>
);

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};

SkillItem.propTypes = {
  skill: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default Skills;
