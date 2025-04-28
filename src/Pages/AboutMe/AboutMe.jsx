import ParticlesUI from '@/Animation/ParticlesUI';
import { Heading } from '@/Components/Common/Heading';
import ShineBorder from '@/Components/ui/shine-border';
import { FolderKanban, Lightbulb, Rocket, Terminal } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import joseph from '../../assets/Images/joseph.jpg';

const AboutMe = () => {
  const location = useLocation();

  return (
    <section className={`w-11/12 mx-auto ${location.pathname === '/' ? 'mt-10 md:mt-20' : 'my-6 md:my-10'}`}>
      <div className="relative flex flex-col gap-10 md:gap-20 lg:flex-row items-center">
        {/* Particles */}
        {location.pathname === '/about-me' && <ParticlesUI />}

        {/* Image Section */}
        <div className="lg:w-[30%] flex justify-center">
          <ShineBorder borderRadius={9999} color="#38BD67" borderWidth={3} className="dark:bg-transparent bg-transparent">
            <img className="lg:w-[320px] w-10/12 rounded-full shadow-lg" src={joseph} alt="idowu joseph abiodun" />
          </ShineBorder>
        </div>

        {/* About Content Section */}
        <div className="lg:w-[70%] flex flex-col items-center lg:items-start text-dark-lite dark:text-white-deep">
          <Heading headingTitle="About Me" />
          <h2 className="text-center lg:text-start text-2xl md:text-3xl text-primary1 font-semibold leading-snug md:leading-[48px] mb-4 md:mb-6">
            Idowu Joseph Abiodun
          </h2>
          <p className="text-left lg:text-justify text-base md:text-lg font-medium leading-relaxed md:leading-loose">
          Self-taught full stack developer specialized in building scalable e-commerce platforms and
marketplace applications. Passionate about creating high-performance web applications that
drive business growth. Seeking to deliver impactful solutions to dynamic tech teams
          </p>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-8 md:mt-12 space-y-8 md:space-y-12">
        {/* Skills & Expertise */}
        <div>
          <p className="text-left lg:text-justify text-base md:text-lg font-medium leading-relaxed md:leading-loose">
            I specialize in <strong>React, JavaScript, Bootstrap and Tailwind CSS</strong>, complemented by hands-on experience with backend technologies like <strong>Node.js and MongoDB</strong>. My focus is on delivering clean, efficient, and scalable solutions—whether it's Building E-Commerce Website, optimizing performance, or integrating robust backend systems.
          </p>
        </div>

        {/* Passion Section */}
        <div>
          <strong className="flex items-center gap-2 text-lg md:text-xl font-semibold mb-2 md:mb-3">
            <Lightbulb className="text-primary1" /> What Drives Me
          </strong>
          <ul className="space-y-2 text-base md:text-lg pl-5">
            <li className="mb-2">Designing responsive and scalable web applications.</li>
            <li className="mb-2">Writing clean, maintainable, and well-documented code.</li>
            <li>Enhancing user experiences through thoughtful design and interactivity.</li>
          </ul>
        </div>

        {/* Projects Section */}
        <div>
          <strong className="flex items-center gap-2 text-lg md:text-xl font-semibold mb-2 md:mb-3">
            <FolderKanban className="text-primary1" /> Featured Projects
          </strong>
          <ul className="space-y-3 text-base md:text-lg pl-5">
            <li className="mb-4">
              <a href="https://polarise-iota.vercel.app" target="_blank" rel="noopener noreferrer" className="block text-primary2 hover:underline font-semibold mb-1">
                Polarise Foods
              </a>
              A platform food delivery application featuring restaurant menu, cart functionality with an Admin-Panel.
            </li>
            <li className="mb-4">
              <a href="https://rattleecommercestore.vercel.app/login" target="_blank" rel="noopener noreferrer" className="block text-primary2 hover:underline font-semibold mb-1">
                Rattle
              </a>
              An e-commerce platform with product management, user authentication, and an admin dashboard. Integrated secure payment gateway simulation and order management system.
            </li>
            <li className="mb-4">
              <a href="https://westernchats-production.up.railway.app/" target="_blank" rel="noopener noreferrer" className="block text-primary2 hover:underline font-semibold mb-1">
                Western Chats
              </a>
              Built a real-time chat application using React, Node.js, and Socket.IO. Implemented private messaging, user authentication, and dynamic online user tracking.
            </li>
          </ul>
        </div>

        {/* Beyond Coding Section */}
        <div>
          <strong className="flex items-center gap-2 text-lg md:text-xl font-semibold mb-2 md:mb-3">
            <Terminal className="text-primary1" /> Beyond the Code
          </strong>
          <p className="text-left lg:text-justify text-base md:text-lg font-medium leading-relaxed md:leading-loose">
            Outside of development, I enjoy reading books for self improvement, meditating, and staying informed on tech innovations. I'm a lifelong learner, always seeking to refine my skills and explore new possibilities in the ever-evolving world of technology.
          </p>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col md:flex-row items-center gap-3 text-lg md:text-xl font-semibold">
          <span>Ready to collaborate? Let's build something extraordinary!</span>
          <Rocket className="text-primary1" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;