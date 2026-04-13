import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ExternalLink, Github, Layers, Code2, Star, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { client, urlFor } from "./client";

// Legendary letter-by-letter animation
const AnimatedTitle = ({ text, className, delay = 0, isInView }) => {
  const words = text.split(" ");

  return (
    <motion.span className={`inline-flex flex-wrap justify-center ${className}`} style={{ minHeight: '1.2em' }}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex mr-[0.25em]">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="inline-block"
              initial={{
                opacity: 0,
                y: 30,
                rotateX: -90,
                scale: 0.8,
              }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                rotateX: 0,
                scale: 1,
              } : {}}
              transition={{
                type: "spring",
                damping: 12,
                stiffness: 100,
                delay: delay + (wordIndex * 0.1) + (letterIndex * 0.04),
              }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
};

// Typewriter effect for descriptions
const TypewriterText = ({ text, className, delay = 0, isInView }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const startTimer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimer);
  }, [delay, isInView]);

  useEffect(() => {
    if (!started || !isInView) return;
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 18);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, started, isInView]);

  return (
    <motion.p className={className}>
      {displayedText}
      {started && currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-5 bg-primary ml-1 align-middle"
        />
      )}
    </motion.p>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client.fetch('*[_type == "project"]').then((data) => setProjects(data));
  }, []);

  return (
    <section id="projects" className="relative min-h-screen flex items-center py-20 px-6 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.2 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${i % 4 === 0
            ? "w-2 h-2 bg-primary/35"
            : i % 4 === 1
              ? "w-1 h-1 bg-secondary/45"
              : i % 4 === 2
                ? "w-3 h-3 bg-primary/20"
                : "w-1.5 h-1.5 bg-secondary/35"
            }`}
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${5 + Math.random() * 90}%`,
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? {
            opacity: [0.2, 0.7, 0.2],
            y: [0, -35 - Math.random() * 35, 0],
            x: [0, (Math.random() - 0.5) * 45, 0],
            scale: [1, 1.4, 1],
          } : {}}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating code icons in background */}
      {[Code2, Layers, Star, Rocket].map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/8"
          style={{
            left: `${15 + i * 22}%`,
            top: `${25 + (i % 2) * 45}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? {
            opacity: [0.04, 0.12, 0.04],
            scale: [1, 1.15, 1],
            rotate: [0, 15, -15, 0],
            y: [0, -25, 0],
          } : {}}
          transition={{
            duration: 7 + i,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-20 h-20" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Animated label with expanding lines */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span
              className="h-px bg-gradient-to-r from-transparent to-primary"
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.div
              className="flex items-center gap-2"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ type: "spring", damping: 15, delay: 0.3 }}
            >
              <motion.div
                animate={isInView ? { rotate: [0, 360] } : {}}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Layers className="w-5 h-5 text-primary" />
              </motion.div>
              <p className="text-primary font-semibold text-lg uppercase tracking-wider">My Work</p>
              <motion.div
                animate={isInView ? {
                  scale: [1, 1.3, 1],
                  rotate: [0, 15, -15, 0],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-5 h-5 text-primary" />
              </motion.div>
            </motion.div>
            <motion.span
              className="h-px bg-gradient-to-l from-transparent to-primary"
              initial={{ width: 0 }}
              animate={isInView ? { width: 60 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          {/* Legendary animated title */}
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary mb-4" style={{ minHeight: '2em', overflow: 'visible' }}>
            <AnimatedTitle text="Featured Projects" delay={0.5} isInView={isInView} />
          </h2>

          {/* Animated underline */}
          <motion.div
            className="h-1 w-40 mx-auto bg-gradient-to-r from-primary via-secondary to-primary rounded-full mb-6"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
          />

          {/* Typewriter description */}
          <TypewriterText
            text="A selection of projects that showcase my skills and creativity"
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            delay={1.6}
            isInView={isInView}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const gradient = index % 2 === 0
              ? "from-primary/20 to-primary/5"
              : "from-secondary/20 to-secondary/5";

            return (
              <motion.div
                key={project._id}
                initial={{
                  opacity: 0,
                  y: 80,
                  rotateY: index % 2 === 0 ? -15 : 15,
                  scale: 0.85,
                }}
                animate={isInView ? {
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                  scale: 1,
                } : {}}
                transition={{
                  type: "spring",
                  damping: 20,
                  stiffness: 90,
                  delay: 2.2 + index * 0.2
                }}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="group relative perspective-1000"
              >
                {/* Animated glow background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl blur-xl`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Orbiting particles on hover */}
                <motion.div
                  className="absolute -inset-6 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                      style={{
                        top: "50%",
                        left: "50%",
                      }}
                      animate={{
                        x: [
                          Math.cos((i * 60 * Math.PI) / 180) * 200,
                          Math.cos(((i * 60 + 360) * Math.PI) / 180) * 200,
                        ],
                        y: [
                          Math.sin((i * 60 * Math.PI) / 180) * 140,
                          Math.sin(((i * 60 + 360) * Math.PI) / 180) * 140,
                        ],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>

                <div className="relative bg-card/30 backdrop-blur-sm border border-primary/20 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  {/* Shine sweep effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full z-20 pointer-events-none"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "200%" }}
                    transition={{ duration: 0.8 }}
                  />

                  {/* Project image with reveal animation */}
                  <motion.div
                    className="relative w-full h-56 overflow-hidden"
                    initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
                    animate={isInView ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" } : {}}
                    transition={{ duration: 0.8, delay: 2.4 + index * 0.2 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`} />
                    <motion.img
                      src={project.image ? urlFor(project.image.asset).url() : "/placeholder.jpg"}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.7 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />

                    {/* Floating project number badge */}
                    <motion.div
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center text-primary-foreground font-bold text-sm"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{
                        type: "spring",
                        damping: 15,
                        delay: 2.6 + index * 0.2
                      }}
                      whileHover={{ scale: 1.2, rotate: 15 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </motion.div>
                  </motion.div>

                  <div className="p-8 flex flex-col flex-grow">
                    {/* Animated title */}
                    <motion.h3
                      className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 2.5 + index * 0.2 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description with fade-in */}
                    <motion.p
                      className="text-muted-foreground leading-relaxed mb-6 flex-grow"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 2.6 + index * 0.2 }}
                    >
                      {project.description}
                    </motion.p>

                    {/* Tech tags with staggered animation */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack && project.techStack.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm cursor-default"
                          initial={{ opacity: 0, scale: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                          transition={{
                            type: "spring",
                            damping: 15,
                            delay: 2.8 + index * 0.2 + tagIndex * 0.05,
                          }}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "hsl(var(--primary) / 0.25)",
                            boxShadow: "0 0 15px rgba(6,182,212,0.4)",
                          }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Animated buttons */}
                    <motion.div
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 3 + index * 0.2 }}
                    >
                      {project.repoLink && (
                        <motion.div
                          className="flex-1"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-primary/50 hover:bg-primary/10 overflow-hidden relative group/btn"
                            onClick={() => window.open(project.repoLink, "_blank")}
                          >
                            <motion.span
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full"
                              animate={{ x: ["−100%", "200%"] }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                            />
                            <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                            Code
                          </Button>
                        </motion.div>
                      )}
                      {project.liveLink && (
                        <motion.div
                          className="flex-1"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            size="sm"
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground overflow-hidden relative group/btn"
                            onClick={() => window.open(project.liveLink, "_blank")}
                          >
                            <motion.span
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                              animate={{ x: ["−100%", "200%"] }}
                              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                            />
                            <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            Live Demo
                          </Button>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  {/* Animated bottom border */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: 3.2 + index * 0.2 }}
                    style={{ transformOrigin: "left" }}
                  />

                  {/* Corner accent */}
                  <motion.div
                    className="absolute top-4 left-4 text-primary/25"
                    animate={isInView ? {
                      rotate: [0, 360],
                    } : {}}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Code2 className="w-6 h-6" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

