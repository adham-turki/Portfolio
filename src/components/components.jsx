"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { CertificationsSection } from "./certifications-section"

const menuItems = ["Home", "Skills", "Projects", "Certifications", "Contact"]

const Component = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const homeRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const certificationsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (sectionId) => {
    const sectionRef = {
      home: homeRef,
      skills: skillsRef,
      projects: projectsRef,
      certifications: certificationsRef,
      contact: contactRef,
    }[sectionId]

    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Offset for better accuracy

      const sections = [
        { id: "home", ref: homeRef },
        { id: "skills", ref: skillsRef },
        { id: "projects", ref: projectsRef },
        { id: "certifications", ref: certificationsRef },
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

  return (
    <main>
      {/* Home Section */}
      <motion.section
        id="home"
        className="py-20"
        ref={homeRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Home Section
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20"
        ref={skillsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Skills Section
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20"
        ref={projectsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Projects Section
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        ref={certificationsRef}
        id="certifications"
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <CertificationsSection />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20"
        ref={contactRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Contact Section
      </motion.section>
    </main>
  )
}

export default Component

