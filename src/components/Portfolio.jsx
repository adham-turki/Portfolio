'use client'

import { useState, useEffect} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa'
import { client, urlFor } from './client'
import adham from '../assets/adham.jpg'
import PropTypes from 'prop-types'
const iconMap = {
  HTML: '🌐',
  CSS: '🎨',
  React: '⚛️',
  JavaScript: '🟨',
  Java: '☕',
  NodeJS: '🟩',
  Python: '🐍',
  MySQL: '🗄️',
  JavaFX: '🖥️',
  Redux: '🔄',
  'Data Structures': '🏗️',
  Algorithms: '🧮',
  OOP: '🧱',
  'OOP Design': '📐',
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')
  const [projects, setProjects] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    client.fetch('*[_type == "project"]').then((data) => setProjects(data))
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-orange-100 to-pink-200 dark:from-gray-900 dark:to-purple-900 text-gray-800 dark:text-gray-200 transition-colors duration-500">
        <Header activeSection={activeSection} setActiveSection={setActiveSection} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="container mx-auto px-4 py-20">
          <AnimatePresence mode="wait">
            {activeSection === 'home' && <Home key="home" darkMode={darkMode} />}
            {activeSection === 'skills' && <Skills key="skills" darkMode={darkMode} />}
            {activeSection === 'projects' && <Projects key="projects" projects={projects} darkMode={darkMode} />}
            {activeSection === 'contact' && <Contact key="contact" darkMode={darkMode} />}
          </AnimatePresence>
        </main>
        <Footer darkMode={darkMode} />
      </div>
    </div>
  )
}

function Header({ activeSection, setActiveSection, darkMode, toggleDarkMode }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md shadow-md transition-colors duration-500">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-orange-600 dark:text-orange-400"
        >
          Adham
        </motion.div>
        <ul className="flex space-x-4">
          {['Home', 'Skills', 'Projects', 'Contact'].map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`px-3 py-2 rounded-md ${
                  activeSection === item.toLowerCase()
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-700'
                }`}
              >
                {item}
              </button>
            </motion.li>
          ))}
          <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
            </button>
          </motion.li>
        </ul>
      </nav>
    </header>
  )
}
Header.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
}

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center md:text-left"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 md:mb-0 md:mr-12"
      >
        <img
          src={adham}
          alt="Adham"
          className="rounded-full w-64 h-64 object-cover border-4 border-orange-500 dark:border-orange-400 shadow-lg"
        />
      </motion.div>
      <div>
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500 dark:from-orange-400 dark:to-pink-400">
          Hi, I'm Adham
        </h1>
        <p className="text-xl mb-8 max-w-2xl">
          I craft seamless, user-friendly interfaces that enhance digital experiences. My passion lies in building
          intuitive, responsive web applications that solve real-world problems and delight users.
        </p>
        <div className="flex space-x-4 justify-center md:justify-start">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 dark:bg-orange-400 text-white px-6 py-3 rounded-full font-semibold"
            onClick={() => window.open('https://drive.google.com/file/d/15249VthvSXgO65xtALJDHUL7uTE_zVzT/view?usp=sharing', '_blank')}
          >
            View CV
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full font-semibold"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Hire Me
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
Home.propTypes = {
  darkMode: PropTypes.bool.isRequired,
}

function Skills({ darkMode }) {
  const skills = [
    { name: 'HTML', level: 'Expert' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'Java', level: 'Advanced' },
    { name: 'NodeJS', level: 'Intermediate' },
    { name: 'Python', level: 'Advanced' },
    { name: 'MySQL', level: 'Expert' },
    { name: 'Data Structures', level: 'Expert' },
    { name: 'Algorithms', level: 'Advanced' },
    { name: 'OOP', level: 'Advanced' },
    { name: 'OOP Design', level: 'Advanced' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ${
            darkMode ? 'hover:shadow-orange-400/50' : 'hover:shadow-orange-500/50'
          }`}
        >
          <div className="text-4xl mb-2">{iconMap[skill.name]}</div>
          <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
          <p className="text-gray-600 dark:text-gray-400">{skill.level}</p>
          <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full ${
                skill.level === 'Expert'
                  ? 'bg-green-500'
                  : skill.level === 'Advanced'
                  ? 'bg-blue-500'
                  : 'bg-yellow-500'
              }`}
              style={{
                width:
                  skill.level === 'Expert' ? '100%' : skill.level === 'Advanced' ? '75%' : '50%',
              }}
            ></div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
Skills.propTypes = {
  darkMode: PropTypes.bool.isRequired,
}

function Projects({ projects, darkMode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {projects.map((project, index) => (
        <motion.div
          key={project._id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ${
            darkMode ? 'hover:shadow-orange-400/50' : 'hover:shadow-orange-500/50'
          }`}
        >
          <img
            src={project.image ? urlFor(project.image.asset).url() : '/placeholder.jpg'}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300"
              >
                Live Demo
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  darkMode: PropTypes.bool.isRequired,
}

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500 dark:from-orange-400 dark:to-pink-400">
        Get in Touch
      </h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            required
          ></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-orange-500 dark:bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-600 dark:hover:bg-orange-500 transition duration-300"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 transition-colors duration-500">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2023 Adham. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-orange-500 dark:hover:text-orange-400 transition duration-300" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-orange-500 dark:hover:text-orange-400 transition duration-300" />
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope className="text-2xl hover:text-orange-500 dark:hover:text-orange-400 transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  )
}