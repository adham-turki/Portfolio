
import PropTypes from 'prop-types';
import matchify from '../assets/matchify.png'
import { client } from './client';
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare, FaJava, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';



const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    client.fetch('*[_type == "project"] ').then((data) => setProjects(data));
  }, []);
  console.log(projects);

  return (
    <div className="mt-20">


      {/* Skills Section */}
      <section id="skills" className="p-10 mb-40">
        <h1 className="text-4xl font-bold mb-4">Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SkillCard skill="HTML" level="Expert" />
          <SkillCard skill="CSS" level="Advanced" />
          <SkillCard skill="React" level="Advanced" />
          <SkillCard skill="JavaScript" level="Advanced" />
          <SkillCard skill="Java" level="Advanced" />
          <SkillCard skill="JavaFX" level="Advanced" />
          <SkillCard skill="NodeJS" level="Intermediate" />
          <SkillCard skill="Python" level="Advanced" />
          <SkillCard skill="MySQL" level="Expert" />
          <SkillCard skill="Redux" level="Intermediate" />
          <SkillCard skill="Data Structures" level="Expert" />
          <SkillCard skill="Algorithms" level="Advanced" />
          <SkillCard skill="OOP" level="Advanced" />
          <SkillCard skill="OOP Design" level="Advanced" />
        </div>
      </section>



      {/* Projects Section */}
      <section id="projects" className="p-10 mb-40"
        style={{
          background: 'linear-gradient(to bottom, rgba(255, 165, 0, 0.0), rgba(255, 165, 0, 0.15))',
        }}
      >
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dynamically render Project Cards */}
          {projects.map((project) => (
            <ProjectCard
              key={project._id}
              title={project.title || 'Untitled Project'}
              description={project.description || 'No description available.'}
              techStack={project.techStack || []}
              liveLink={project.liveLink || '#'}
              repoLink={project.repoLink || '#'}
              backgroundImage={project.image?.asset?.url || matchify} // Fallback to default image if not provided
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contactme" className="p-10 text-center w-full">
        <ContactForm />
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-2xl"></i>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

function SkillCard({ skill, level }) {
  const iconMap = {
      HTML: <FaHtml5 className="text-orange-500 text-4xl" />,
      CSS: <FaCss3Alt className="text-blue-500 text-4xl" />,
      React: <FaReact className="text-cyan-500 text-4xl" />,
      JavaScript: <FaJsSquare className="text-yellow-500 text-4xl" />,
      Java: <FaJava className="text-red-500 text-4xl" />,
      NodeJS: <FaNodeJs className="text-green-500 text-4xl" />,
      Python: <FaPython className="text-blue-400 text-4xl" />,
      MySQL: <FaDatabase className="text-orange-700 text-4xl" />,
      JavaFX: <FaJava className="text-purple-500 text-4xl" />,
      Redux: <FaReact className="text-red-500 text-4xl" />,
      'Data Structures': <FaDatabase className="text-green-600 text-4xl" />,
      Algorithms: <FaDatabase className="text-teal-600 text-4xl" />,
      OOP: <FaJava className="text-orange-500 text-4xl" />,
      'OOP Design': <FaJava className="text-orange-500 text-4xl" />,
  };

  return (
      <div className="bg-gradient-to-r from-orange-100 to-orange-200 dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="flex items-center space-x-2 md:space-x-4">
              {iconMap[skill]}
              <div>
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white mb-1">{skill}</h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Level: <span className="font-medium text-gray-800 dark:text-gray-200">{level}</span></p>
              </div>
          </div>
      </div>
  );
}


function ProjectCard({ title, description, techStack, liveLink, repoLink, backgroundImage }) {
  return (
    <div
      className="relative project-card  dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className=" absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>

      <div className="relative p-6 flex flex-col h-full"> {/* Ensure the card takes full height */}
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-200 mb-4 flex-grow">{description}</p> {/* Allow description to grow */}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-blue-500 text-white text-xs font-semibold rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4 mt-4">
          <a
            href={liveLink}
            className="text-white font-semibold underline hover:text-blue-300 transition-colors"
          >
            Live Demo
          </a>
          <a
            href={repoLink}
            className="text-white font-semibold underline hover:text-blue-300 transition-colors"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}

import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function ContactForm() {
  return (
    <div className=" dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto p-8 bg-orange-100  dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100 text-center">Get in Touch (Disabled)</h2>
        <form className="flex flex-col gap-6">
          <div className="flex items-center border-b border-gray-300 dark:border-gray-600 py-2">
            <FaUser className="text-gray-500 dark:text-gray-400 mr-4" />
            <input
              type="text"
              className="flex-1 p-4 border-none rounded-lg bg-orange-50 dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Name"
            />
          </div>
          <div className="flex items-center border-b border-gray-300 dark:border-gray-600 py-2">
            <FaEnvelope className="text-gray-500 dark:text-gray-400 mr-4" />
            <input
              type="email"
              className="flex-1 p-4 border-none rounded-lg bg-orange-50 dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
            <textarea
              className="p-4 border border-gray-300 rounded-lg bg-orange-50 dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="6"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled
            className="flex items-center justify-center py-3  bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            <FaPaperPlane className="mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}



ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  liveLink: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string, // backgroundImage is optional and should be a string (URL)


};
SkillCard.propTypes = {
  skill: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,

};
export default Portfolio;
