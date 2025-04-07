"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaPaperPlane,
  FaCommentAlt,
  FaUser,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaFacebook,
  FaCog,
} from "react-icons/fa"
import { client, urlFor } from "./client"
import adham from "../assets/adham.jpg"

// Animated Background Components
function ElegantShape({
  className = "",
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  isDark = false,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={`absolute inset-0 rounded-full 
            bg-gradient-to-r to-transparent 
            ${gradient} 
            backdrop-blur-[2px] border-2 
            ${isDark ? "border-white/[0.15]" : "border-black/[0.05]"} 
            ${isDark ? "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]" : "shadow-[0_8px_32px_0_rgba(0,0,0,0.05)]"} 
            after:absolute after:inset-0 after:rounded-full 
            ${
              isDark
                ? "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                : "after:bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1),transparent_70%)]"
            }`}
        />
      </motion.div>
    </motion.div>
  )
}

function AnimatedBackground({ darkMode }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Light mode shapes */}
      {!darkMode && (
        <>
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="from-orange-500/[0.15]"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
            isDark={false}
          />

          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            gradient="from-pink-500/[0.15]"
            className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
            isDark={false}
          />

          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            gradient="from-orange-300/[0.15]"
            className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
            isDark={false}
          />

          <ElegantShape
            delay={0.6}
            width={200}
            height={60}
            rotate={20}
            gradient="from-pink-300/[0.15]"
            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
            isDark={false}
          />

          <ElegantShape
            delay={0.7}
            width={150}
            height={40}
            rotate={-25}
            gradient="from-orange-200/[0.15]"
            className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
            isDark={false}
          />
        </>
      )}

      {/* Dark mode shapes */}
      {darkMode && (
        <>
          <ElegantShape
            delay={0.3}
            width={600}
            height={140}
            rotate={12}
            gradient="from-indigo-500/[0.15]"
            className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
            isDark={true}
          />

          <ElegantShape
            delay={0.5}
            width={500}
            height={120}
            rotate={-15}
            gradient="from-purple-500/[0.15]"
            className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
            isDark={true}
          />

          <ElegantShape
            delay={0.4}
            width={300}
            height={80}
            rotate={-8}
            gradient="from-violet-500/[0.15]"
            className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
            isDark={true}
          />

          <ElegantShape
            delay={0.6}
            width={200}
            height={60}
            rotate={20}
            gradient="from-blue-500/[0.15]"
            className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
            isDark={true}
          />

          <ElegantShape
            delay={0.7}
            width={150}
            height={40}
            rotate={-25}
            gradient="from-cyan-500/[0.15]"
            className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
            isDark={true}
          />
        </>
      )}

      {/* Stars for dark mode */}
      {darkMode && (
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 2}px`,
                height: `${Math.random() * 2 + 2}px`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Particles for light mode */}
      {!darkMode && (
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-orange-600"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 3}px`,
                height: `${Math.random() * 3 + 3}px`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

const iconMap = {
  HTML: "🌐",
  CSS: "🎨",
  React: "⚛️",
  JavaScript: "🟨",
  Java: "☕",
  NodeJS: "🟩",
  Python: "🐍",
  MySQL: "🗄️",
  JavaFX: "🖥️",
  Redux: "🔄",
  "Data Structures": "🏗️",
  Algorithms: "🧮",
  OOP: "🧱",
  "OOP Design": "📐",
}

export default function Component() {
  const [activeSection, setActiveSection] = useState("home")
  const [projects, setProjects] = useState([])
  const [darkMode, setDarkMode] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const homeRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    client.fetch('*[_type == "project"]').then((data) => setProjects(data))
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset for better accuracy

      const sections = [
        { id: "home", ref: homeRef },
        { id: "skills", ref: skillsRef },
        { id: "projects", ref: projectsRef },
        { id: "contact", ref: contactRef },
      ]

      for (const section of sections) {
        if (section.ref.current && scrollPosition >= section.ref.current.offsetTop) {
          setActiveSection(section.id)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle("light")
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = ["Home", "Skills", "Projects", "Contact"]

  const scrollToSection = (sectionId) => {
    const sectionRef = {
      home: homeRef,
      skills: skillsRef,
      projects: projectsRef,
      contact: contactRef,
    }[sectionId]

    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div
        className={`relative ${darkMode ? "bg-gray-900" : "bg-orange-50"} text-gray-800 dark:text-gray-200 transition-colors duration-500`}
      >
        {/* Animated Background */}
        <AnimatedBackground darkMode={darkMode} />

        {/* Gradient Overlays */}
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-purple-500/[0.05]"
              : "bg-gradient-to-br from-orange-500/[0.05] via-transparent to-pink-500/[0.05]"
          } blur-3xl`}
        />

        {/* Main content wrapper */}
        <div className="relative z-10">
          {/* Header */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md shadow-md transition-colors duration-500">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-bold text-orange-600 dark:text-orange-400"
                >
                  Adham
                </motion.div>
                <div className="hidden md:flex space-x-4">
                  {menuItems.map((item) => (
                    <motion.button
                      key={item}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className={`px-3 py-2 rounded-md ${
                        activeSection === item.toLowerCase()
                          ? "bg-orange-500 text-white"
                          : "text-gray-600 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-700"
                      }`}
                    >
                      {item}
                    </motion.button>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                  >
                    {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
                  </motion.button>
                  <button className="md:hidden" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                  </button>
                </div>
              </div>
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden mt-4"
                  >
                    {menuItems.map((item) => (
                      <motion.button
                        key={item}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className={`block w-full text-left px-3 py-2 rounded-md mb-2 ${
                          activeSection === item.toLowerCase()
                            ? "bg-orange-500 text-white"
                            : "text-gray-600 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-700"
                        }`}
                      >
                        {item}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </nav>
          </header>

          {/* Main content */}
          <main className="container mx-auto px-4 py-10 mb-20">
            {/* Home Section */}
            <motion.section
              ref={homeRef}
              id="home"
              className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8 md:mb-0 md:mr-12"
              >
                <img
                  src={adham || "/placeholder.svg"}
                  alt="Adham"
                  className="rounded-full w-64 h-64 object-cover border-4 border-orange-500 dark:border-orange-400 shadow-lg"
                />
              </motion.div>
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500 dark:from-orange-400 dark:to-pink-400"
                >
                  Hi, I'm Adham
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-xl mb-8 max-w-2xl"
                >
                  I craft seamless, user-friendly interfaces that enhance digital experiences. My passion lies in
                  building intuitive, responsive web applications that solve real-world problems and delight users.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex space-x-4 justify-center md:justify-start"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-orange-500 dark:bg-orange-400 text-white px-6 py-3 rounded-full font-semibold"
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/15249VthvSXgO65xtALJDHUL7uTE_zVzT/view?usp=sharing",
                        "_blank",
                      )
                    }
                  >
                    View CV
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full font-semibold"
                    onClick={() => scrollToSection("contact")}
                  >
                    Hire Me
                  </motion.button>
                </motion.div>
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section ref={skillsRef} id="skills" className="py-5" viewport={{ once: true, amount: 0.3 }}>
              <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "HTML", level: "Expert" },
                  { name: "CSS", level: "Advanced" },
                  { name: "React", level: "Advanced" },
                  { name: "JavaScript", level: "Advanced" },
                  { name: "Java", level: "Advanced" },
                  { name: "NodeJS", level: "Intermediate" },
                  { name: "Python", level: "Advanced" },
                  { name: "MySQL", level: "Expert" },
                  { name: "Data Structures", level: "Expert" },
                  { name: "Algorithms", level: "Advanced" },
                  { name: "OOP", level: "Advanced" },
                  { name: "OOP Design", level: "Advanced" },
                ].map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ${
                      darkMode ? "hover:shadow-orange-400/50" : "hover:shadow-orange-500/50"
                    }`}
                  >
                    <div className="text-4xl mb-2">{iconMap[skill.name]}</div>
                    <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{skill.level}</p>
                    <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${
                          skill.level === "Expert"
                            ? "bg-green-500"
                            : skill.level === "Advanced"
                              ? "bg-blue-500"
                              : "bg-yellow-500"
                        }`}
                        initial={{ width: 0 }}
                        whileInView={{
                          width: skill.level === "Expert" ? "100%" : skill.level === "Advanced" ? "75%" : "50%",
                        }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.3 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section
              ref={projectsRef}
              id="projects"
              className="py-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project._id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ${
                      darkMode ? "hover:shadow-orange-400/50" : "hover:shadow-orange-500/50"
                    }`}
                  >
                    <img
                      src={project.image ? urlFor(project.image.asset).url() : "/placeholder.jpg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 flex items-center">
                        <FaLaptopCode className="mr-2" />
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 text-xs px-2 py-1 rounded-full flex items-center"
                          >
                            <FaCog className="mr-1" />
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 flex items-center"
                        >
                          <FaExternalLinkAlt className="mr-1" />
                          Live Demo
                        </a>
                        <a
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 flex items-center"
                        >
                          <FaGithub className="mr-1" />
                          GitHub Repo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
              ref={contactRef}
              id="contact"
              className="py-20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
              >
                <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500 dark:from-orange-400 dark:to-pink-400">
                  Get in Touch
                </h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      <FaUser className="inline mr-2" />
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
                      <FaEnvelope className="inline mr-2" />
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
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      <FaCommentAlt className="inline mr-2" />
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
                    className="w-full bg-orange-500 dark:bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-600 dark:hover:bg-orange-500 transition duration-300 flex items-center justify-center"
                  >
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </motion.section>
          </main>

          {/* Footer */}
          <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 transition-colors duration-500">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
              <p>&copy; 2023 Adham. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="https://github.com/adham-turki" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-2xl hover:text-orange-500 dark:hover:text-orange-400 transition duration-300" />
                </a>
                <a href="https://linkedin.com/in/adham-turki-54b723313" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl hover:text-orange-500 dark:hover:text-orange-400 transition duration-300" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100009753456769">
                  <FaFacebook className="text-2xl hover:text-orange-500 dark:hover:text-orange-400 transition duration-300" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

