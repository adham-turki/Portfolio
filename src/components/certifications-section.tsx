"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaAward, FaCode, FaTerminal, FaDatabase, FaServer, FaFileCode, FaLaptopCode, FaTimes } from "react-icons/fa"

interface Certification {
  id: string
  title: string
  icon: React.ReactNode
  imageSrc: string
  color: string
  description: string
  date: string
  instructor: string
  duration: string
}

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)
  const [darkMode, setDarkMode] = useState(true)

  const certifications: Certification[] = [
    {
      id: "js-foundations",
      title: "Deep JavaScript Foundations, v3",
      icon: <FaTerminal className="text-xl" />,
      imageSrc: "/images/js-foundations.png",
      color: "from-yellow-400 to-yellow-600",
      description: "Core JavaScript concepts and principles",
      date: "Jan 1, 2025",
      instructor: "Kyle Simpson",
      duration: "10 hours, 32 minutes",
    },
    {
      id: "js-hard-parts",
      title: "JavaScript: The Hard Parts, v2",
      icon: <FaCode className="text-xl" />,
      imageSrc: "/images/js-hard-parts.png",
      color: "from-yellow-500 to-amber-600",
      description: "Advanced JavaScript patterns and techniques",
      date: "Jan 1, 2025",
      instructor: "Will Sentance",
      duration: "6 hours, 41 minutes",
    },
    {
      id: "react-intro",
      title: "Complete Intro to React, v9",
      icon: <FaLaptopCode className="text-xl" />,
      imageSrc: "/images/react-intro.png",
      color: "from-cyan-400 to-blue-500",
      description: "Building modern interfaces with React",
      date: "Apr 7, 2025",
      instructor: "Brian Holt",
      duration: "8 hours, 27 minutes",
    },
    {
      id: "vanilla-js",
      title: "Vanilla JS: You Might Not Need a Framework",
      icon: <FaFileCode className="text-xl" />,
      imageSrc: "/images/vanilla-js.png",
      color: "from-yellow-300 to-amber-500",
      description: "Creating powerful applications without frameworks",
      date: "Apr 7, 2025",
      instructor: "Maximiliano Firtman",
      duration: "5 hours, 52 minutes",
    },
    {
      id: "web-performance",
      title: "Web Performance Fundamentals, v2",
      icon: <FaLaptopCode className="text-xl" />,
      imageSrc: "/images/web-performance.png",
      color: "from-blue-400 to-indigo-600",
      description: "Optimizing websites for speed and efficiency",
      date: "Apr 7, 2025",
      instructor: "Todd Gardner",
      duration: "5 hours, 59 minutes",
    },
    {
      id: "professional-css",
      title: "Professional CSS: Build a Website from Scratch",
      icon: <FaFileCode className="text-xl" />,
      imageSrc: "/images/professional-css.png",
      color: "from-teal-400 to-emerald-600",
      description: "Advanced styling techniques for modern websites",
      date: "Apr 7, 2025",
      instructor: "Kevin Powell",
      duration: "9 hours, 4 minutes",
    },
    {
      id: "full-stack",
      title: "Full Stack for Front-End Engineers, v3",
      icon: <FaServer className="text-xl" />,
      imageSrc: "/images/full-stack.png",
      color: "from-pink-400 to-purple-600",
      description: "Backend skills for frontend developers",
      date: "Apr 7, 2025",
      instructor: "Jem Young",
      duration: "8 hours, 12 minutes",
    },
    {
      id: "typescript",
      title: "TypeScript 5+ Fundamentals, v4",
      icon: <FaDatabase className="text-xl" />,
      imageSrc: "/images/typescript.png",
      color: "from-blue-500 to-orange-500",
      description: "Building type-safe applications with TypeScript",
      date: "Apr 7, 2025",
      instructor: "Mike North",
      duration: "5 hours, 12 minutes",
    },
  ]

  const openCertificate = (cert: Certification) => {
    setSelectedCert(cert)
    // Prevent body scrolling when dialog is open
    document.body.style.overflow = "hidden"
  }

  const closeCertificate = () => {
    setSelectedCert(null)
    // Restore body scrolling
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <motion.section
        ref={null}
        id="certifications"
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500 dark:from-orange-400 dark:to-pink-400">
            <FaAward className="inline-block mr-2 text-orange-500 dark:text-orange-400" />
            Certifications
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Professional certifications from Frontend Masters, showcasing my commitment to continuous learning and skill
            development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              onClick={() => openCertificate(cert)}
              className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 flex flex-col ${
                darkMode ? "hover:shadow-orange-400/50" : "hover:shadow-orange-500/50"
              }`}
            >
              <div className={`h-3 bg-gradient-to-r ${cert.color}`} />
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700">{cert.icon}</div>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300">
                    <FaAward className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">{cert.description}</p>
                <div className="flex items-center text-sm text-orange-500 dark:text-orange-400">
                  <span>View Certificate</span>
                  <svg
                    className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Certificate Dialog */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl"
            >
              <button
                onClick={closeCertificate}
                className="absolute -top-12 right-0 text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors z-10"
              >
                <FaTimes className="text-xl" />
              </button>

              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl"
                layoutId={`cert-${selectedCert.id}`}
              >
                <div className="relative">
                  <img
                    src={selectedCert.imageSrc || "/placeholder.svg"}
                    alt={selectedCert.title}
                    className="w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{selectedCert.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">Instructor: {selectedCert.instructor}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Completed: {selectedCert.date}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Duration: {selectedCert.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-orange-500 dark:bg-orange-400 text-white px-4 py-2 rounded-md font-medium"
                      onClick={closeCertificate}
                    >
                      Close
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

