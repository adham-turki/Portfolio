import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Lightbulb, Code2, Palette, Zap } from "lucide-react";
import adham from "../assets/adham.jpg";
import decoration1 from "../assets/decoration-1.jpg";
import decoration2 from "../assets/decoration-2.jpg";

// Legendary text animation - letter by letter with 3D flip
const AnimatedTitle = ({ text, className, delay = 0, isInView }) => {
  const words = text.split(" ");

  return (
    <motion.span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex mr-[0.25em]">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="inline-block"
              initial={{
                opacity: 0,
                y: 80,
                rotateX: -90,
                scale: 0.5,
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
                delay: delay + (wordIndex * 0.1) + (letterIndex * 0.03),
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

// Typewriter effect for paragraphs
const TypewriterParagraph = ({ text, className, delay = 0, isInView }) => {
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
      }, 15);
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

// Floating skill badges
const SkillBadge = ({ icon: Icon, label, delay, isInView }) => (
  <motion.div
    className="absolute bg-card/80 backdrop-blur-md border border-primary/30 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg"
    initial={{ opacity: 0, scale: 0, rotate: -180 }}
    animate={isInView ? {
      opacity: 1,
      scale: 1,
      rotate: 0,
    } : {}}
    transition={{
      type: "spring",
      damping: 15,
      stiffness: 100,
      delay,
    }}
    whileHover={{
      scale: 1.1,
      boxShadow: "0 10px 30px rgba(6,182,212,0.3)",
    }}
  >
    <Icon className="w-4 h-4 text-primary" />
    <span className="text-sm font-medium">{label}</span>
  </motion.div>
);

// Counter animation component
const Counter = ({ target, suffix = "", delay = 0, isInView }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay, isInView]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span>{count}{suffix}</span>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 px-6 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      </motion.div>

      {/* Decorative background elements with enhanced animations */}
      <motion.div
        className="absolute top-20 right-0 w-64 h-64 opacity-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? {
          opacity: 0.1,
          scale: 1,
          rotate: 360,
        } : {}}
        transition={{
          opacity: { duration: 1 },
          scale: { duration: 1, type: "spring" },
          rotate: { duration: 30, repeat: Infinity, ease: "linear" }
        }}
      >
        <img src={decoration2} alt="" className="w-full h-full object-cover" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-0 w-48 h-48 opacity-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? {
          opacity: 0.1,
          scale: 1,
          rotate: -360,
        } : {}}
        transition={{
          opacity: { duration: 1, delay: 0.3 },
          scale: { duration: 1, delay: 0.3, type: "spring" },
          rotate: { duration: 25, repeat: Infinity, ease: "linear" }
        }}
      >
        <img src={decoration1} alt="" className="w-full h-full object-cover" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${i % 3 === 0
            ? "w-2 h-2 bg-primary/30"
            : i % 3 === 1
              ? "w-1 h-1 bg-secondary/40"
              : "w-3 h-3 bg-primary/15"
            }`}
          style={{
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? {
            opacity: [0.2, 0.8, 0.2],
            y: [0, -40 - Math.random() * 20, 0],
            x: [0, (Math.random() - 0.5) * 30, 0],
            scale: [1, 1.3, 1],
          } : {}}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Column with Legendary Animations */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -30 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{
              duration: 1.2,
              delay: 0.2,
              type: "spring",
              damping: 20,
            }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto " >
              {/* Animated orbital rings */}
              <motion.div
                className="absolute inset-[-30px] rounded-3xl border border-primary/20 border-dashed"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? {
                  opacity: 1,
                  scale: 1,
                  rotate: 360,
                } : {}}
                transition={{
                  opacity: { duration: 0.5, delay: 0.5 },
                  scale: { duration: 0.5, delay: 0.5 },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              />
              <motion.div
                className="absolute inset-[-50px] rounded-3xl border border-secondary/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? {
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                } : {}}
                transition={{
                  opacity: { duration: 0.5, delay: 0.7 },
                  scale: { duration: 0.5, delay: 0.7 },
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" }
                }}
              />

              {/* Glowing background with pulse */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl"
                animate={isInView ? {
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1],
                } : {}}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Image container with reveal effect */}
              <motion.div
                className="relative bg-gradient-to-br from-primary/20 to-secondary/20 p-1 rounded-3xl backdrop-blur-sm overflow-hidden"
                initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
                animate={isInView ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" } : {}}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden">
                  <motion.img
                    src={adham}
                    alt="Adham"
                    className="w-full h-auto object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Shine sweep effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  animate={isInView ? { x: ["−100%", "200%"] } : {}}
                  transition={{ duration: 1.5, delay: 1.2 }}
                />
              </motion.div>

              {/* Floating decorative elements with stagger */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-primary/50 rounded-2xl blur-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? {
                  opacity: 1,
                  scale: 1,
                  rotate: 360,
                } : {}}
                transition={{
                  opacity: { duration: 0.5, delay: 0.8 },
                  scale: { duration: 0.5, delay: 0.8, type: "spring" },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl blur-xl"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? {
                  opacity: 1,
                  scale: 1,
                  rotate: -360,
                } : {}}
                transition={{
                  opacity: { duration: 0.5, delay: 1 },
                  scale: { duration: 0.5, delay: 1, type: "spring" },
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" }
                }}
              />



              {/* Corner sparkles */}
              <motion.div
                className="absolute top-4 left-4 text-primary"
                animate={isInView ? {
                  scale: [1, 1.3, 1],
                  rotate: [0, 15, -15, 0],
                  opacity: [0.5, 1, 0.5],
                } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Lightbulb className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column with Legendary Text Animations */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.4,
              type: "spring",
              damping: 20,
            }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {/* Animated label with line */}
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.span
                  className="h-px bg-gradient-to-r from-primary to-transparent"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 40 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                />
                <motion.p
                  className="text-primary font-semibold text-lg uppercase tracking-wider"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  About Me
                </motion.p>
                <motion.div
                  animate={isInView ? {
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Lightbulb className="w-5 h-5 text-primary" />
                </motion.div>
              </motion.div>

              {/* Animated title with letter-by-letter reveal */}
              <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary overflow-hidden">
                <AnimatedTitle
                  text="Turning Ideas"
                  delay={0.9}
                  isInView={isInView}
                />
                <br />
                <AnimatedTitle
                  text="Into Reality"
                  delay={1.3}
                  isInView={isInView}
                />
              </h2>

              {/* Animated underline */}
              <motion.div
                className="h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                initial={{ width: 0, opacity: 0 }}
                animate={isInView ? { width: "60%", opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
              />
            </div>

            {/* Typewriter paragraphs */}
            <div className="space-y-4">
              <TypewriterParagraph
                text="I design and build digital experiences that people love. Mixing creativity with code to turn big ideas into real, working products that make an impact."
                className="text-lg text-muted-foreground leading-relaxed"
                delay={2}
                isInView={isInView}
              />

              <TypewriterParagraph
                text="Every project is an opportunity to push boundaries and create something extraordinary. Let's build something amazing together."
                className="text-lg text-muted-foreground leading-relaxed"
                delay={4}
                isInView={isInView}
              />
            </div>

            {/* Animated stats/highlights */}
            <motion.div
              className="flex flex-wrap gap-6 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 2.5 }}
            >
              {[
                { target: 3, suffix: "+", label: "Years Experience" },
                { target: 50, suffix: "+", label: "Projects Completed" },
                { target: 100, suffix: "%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    damping: 15,
                    stiffness: 100,
                    delay: 2.7 + index * 0.2,
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.p
                    className="text-3xl font-bold text-primary"
                    animate={isInView ? {
                      textShadow: [
                        "0 0 0px rgba(6,182,212,0)",
                        "0 0 20px rgba(6,182,212,0.5)",
                        "0 0 0px rgba(6,182,212,0)",
                      ],
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <Counter
                      target={stat.target}
                      suffix={stat.suffix}
                      delay={2.8 + index * 0.2}
                      isInView={isInView}
                    />
                  </motion.p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
