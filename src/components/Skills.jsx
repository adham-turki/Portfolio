import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code2, Palette, Rocket, Zap, Star } from "lucide-react";

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

// Typewriter effect
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
      }, 20);
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

// Animated counter for visual effect
const AnimatedCounter = ({ end, duration = 2, delay = 0, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      let start = 0;
      const increment = end / (duration * 60);
      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(counter);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [end, duration, delay, isInView]);

  return <span>{count}</span>;
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    {
      icon: Palette,
      title: "Frontend Development",
      description: "Building responsive and performant interfaces with React, JavaScript, HTML, CSS, Next.js, Redux, Redux Saga, and Flutter",
      color: "from-primary to-primary/50",
      tech: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Redux", "Redux Saga", "Flutter"],
    },
    {
      icon: Code2,
      title: "Backend Development",
      description: "Creating robust server-side solutions with Node.js, Java, Spring Boot, Python, PHP, MySQL, PostgreSQL, MongoDB, Redis, Firebase, Strapi, and Rules Engine",
      color: "from-secondary to-secondary/50",
      tech: ["NodeJS", "Java", "Spring Boot", "Python", "PHP", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Strapi", "Rules Engine"],
    },
    {
      icon: Rocket,
      title: "Tools & Others",
      description: "Using industry-standard tools and technologies including VS Code, IntelliJ, Android Studio, Postman, and more",
      color: "from-primary to-secondary",
      tech: ["VS Code", "IntelliJ", "Android Studio", "Postman", "SoapUI", "Thunder Client", "Jupiter", "Swagger UI", "PyCharm", "Android", "Data Structures", "Algorithms"],
    },
    {
      icon: Star,
      title: "Problem Solving",
      description: "Applying strong knowledge of Data Structures, Algorithms, OOP, and OOP Design principles to solve complex challenges",
      color: "from-secondary to-primary",
      tech: ["Data Structures", "Algorithms", "OOP", "OOP Design"],
    },
  ];

  return (
    <section id="techstack" className="relative min-h-screen flex items-center py-20 px-6 overflow-hidden">
      {/* Animated grid background with fade-in */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.03 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
        {/* Grid animation pulse */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
          animate={isInView ? {
            opacity: [0, 0.05, 0],
            scale: [1, 1.02, 1],
          } : {}}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${i % 4 === 0
            ? "w-2 h-2 bg-primary/40"
            : i % 4 === 1
              ? "w-1 h-1 bg-secondary/50"
              : i % 4 === 2
                ? "w-3 h-3 bg-primary/20"
                : "w-1.5 h-1.5 bg-secondary/30"
            }`}
          style={{
            left: `${5 + Math.random() * 90}%`,
            top: `${5 + Math.random() * 90}%`,
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? {
            opacity: [0.2, 0.8, 0.2],
            y: [0, -30 - Math.random() * 40, 0],
            x: [0, (Math.random() - 0.5) * 50, 0],
            scale: [1, 1.5, 1],
          } : {}}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating tech icons in background */}
      {[Code2, Palette, Rocket, Star, Zap].map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/10"
          style={{
            left: `${10 + i * 20}%`,
            top: `${20 + (i % 3) * 30}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? {
            opacity: [0.05, 0.15, 0.05],
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
            y: [0, -20, 0],
          } : {}}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-16 h-16" />
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
              <Zap className="w-5 h-5 text-primary" />

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
            <AnimatedTitle text="Tech Stack" delay={0.5} isInView={isInView} />
          </h2>

          {/* Animated underline */}
          <motion.div
            className="h-1 w-32 mx-auto bg-gradient-to-r from-primary via-secondary to-primary rounded-full mb-6"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          />

          {/* Typewriter description */}
          <TypewriterText
            text="A diverse skill set combining technical expertise with creative vision"
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            delay={1.5}
            isInView={isInView}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
                rotateX: -15,
                scale: 0.9,
              }}
              animate={isInView ? {
                opacity: 1,
                y: 0,
                rotateX: 0,
                scale: 1,
              } : {}}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: 2 + index * 0.2
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative perspective-1000"
            >
              {/* Animated glow background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              {/* Orbiting particles around card on hover */}
              <motion.div
                className="absolute -inset-4 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                    style={{
                      top: "50%",
                      left: "50%",
                    }}
                    animate={{
                      x: [
                        Math.cos((i * 90 * Math.PI) / 180) * 180,
                        Math.cos(((i * 90 + 360) * Math.PI) / 180) * 180,
                      ],
                      y: [
                        Math.sin((i * 90 * Math.PI) / 180) * 120,
                        Math.sin(((i * 90 + 360) * Math.PI) / 180) * 120,
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.25,
                    }}
                  />
                ))}
              </motion.div>

              <div className="relative bg-card/30 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 h-full overflow-hidden">
                {/* Shine sweep effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8 }}
                />

                {/* Animated icon container */}
                <motion.div
                  className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${skill.color} mb-6 relative`}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{
                    type: "spring",
                    damping: 15,
                    delay: 2.2 + index * 0.2
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {/* Pulsing ring around icon */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-white/30"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <skill.icon className="w-8 h-8 text-foreground relative z-10" />
                </motion.div>

                {/* Animated title */}
                <motion.h3
                  className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 2.4 + index * 0.2 }}
                >
                  {skill.title}
                </motion.h3>

                {/* Description with fade-in */}
                <motion.p
                  className="text-muted-foreground leading-relaxed mb-6"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 2.6 + index * 0.2 }}
                >
                  {skill.description}
                </motion.p>

                {/* Tech tags with staggered pop animation */}
                <div className="flex flex-wrap gap-2">
                  {skill.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm cursor-default"
                      initial={{ opacity: 0, scale: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{
                        type: "spring",
                        damping: 15,
                        delay: 2.8 + index * 0.2 + techIndex * 0.05,
                      }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "hsl(var(--primary) / 0.3)",
                        boxShadow: "0 0 15px rgba(6,182,212,0.4)",
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Animated bottom border */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-b-3xl"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 3 + index * 0.2 }}
                  style={{ transformOrigin: "left" }}
                />

                {/* Corner accent */}
                <motion.div
                  className="absolute top-4 right-4 text-primary/30"
                  animate={isInView ? {
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  } : {}}
                  transition={{
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
