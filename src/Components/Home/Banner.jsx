import { Code, Facebook, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';
import { RainbowButton } from '../ui/rainbow-button';

const Banner = () => {
  const resumeLink = 'https://drive.google.com/uc?export=download&id=1_JguHomJ-u0k77Glz1a7jE2-atM0jgvA';

  const handelResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumeLink;
    link.setAttribute('download', 'Resume of idowu joseph Abiodun.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [code] = useState(`
  const profile = {
    name: 'Idowu Joseph Abiodun',
    title: 'Full-Stack Developer | MERN Stack Developer',
    skills: ['React', 'Bootstrap', 'Express', Tailwind CSS,
    'MongoDB', 'Github', Javascript, Git, Firebase],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 1,
    hireable: function () {
      return(
        this.hardWorker && 
        this.problemSolver && 
        this.skills.length >= 5 && 
        this.yearsOfExperience >= 1
      );
    },
  };
  `);

  return (
    <section className="mt-4">
      <div className="w-11/12 mx-auto lg:flex-row grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Text Section */}
        <div className="flex-1 items-center justify-center">
          <p className="text-dark-deep text-[2.5rem] md:text-[3.5rem] lg:text-[2.5rem] font-semibold dark:text-white-lite text-center lg:text-left">Hi, I&apos;m</p>
          <h1 className="text-dark-deep text-[3.5rem] md:text-[4.5rem] lg:text-[3.5rem] font-bold dark:text-white-lite text-center lg:text-left max-sm:text-5xl">Idowu Joseph Abiodun </h1>
          <p className="text-xl text-dark-lite font-medium dark:text-white-deep lg:text-left text-center">Full Stack Developer | Problem Solver</p>

          {/* Social Links */}
          <div className="flex gap-3 items-center justify-center lg:justify-start mt-3">
            <a href="https://www.linkedin.com/in/idowu-joseph-6a8343328" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={30} className="hero-icon lang" />
            </a>
            <a href="https://github.com/idowest042" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={30} className="hero-icon lang" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61574552880677" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook size={30} className="hero-icon lang" />
            </a>
            <a className="lg:hidden" href="mailto:idowujo042@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <Mail size={30} className="hero-icon lang" />
            </a>
            <a className="hidden lg:block" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=idowujo042@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <Mail size={30} className="hero-icon lang" />
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center lg:justify-start">
            <RainbowButton className={`!bg-gradient-to-r from-primary2 to-primary1 rounded-xl text-white font-semibold custom-scale-effect`} onClick={handelResumeDownload}>
              Download Resume
            </RainbowButton>
          </div>
        </div>

        {/* Right column - Code window */}
        <div className="flex-1 p-4">
          <div className="bg-white dark:bg-dark-lite rounded-xl overflow-hidden border dark:border-[#172635]">
            <div className="flex items-center gap-2 p-3 bg-gray-100 dark:bg-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors"></div>
              <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center gap-2">
                <Code size={16} />
                developer.js
              </span>
            </div>
            <pre className="overflow-x-auto">
              <code>{code}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
