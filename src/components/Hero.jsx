import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Star, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import adham from "../assets/adham.jpg";
import heroBg from "../assets/hero-bg.jpg";

// Legendary text animation component - letter by letter with wave effect
const AnimatedText = ({ text, className, delay = 0 }) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const letterAnimation = {
    hidden: {
      opacity: 0,
      y: 30,
      rotateX: -90,
      scale: 0.8,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: i * 0.03,
      },
    }),
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap justify-center ${className}`}
      style={{ minHeight: '1.2em' }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterAnimation}
          className="inline-block"
          style={{
            display: letter === " " ? "inline" : "inline-block",
            width: letter === " " ? "0.3em" : "auto",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Glitch text effect for dramatic entrance
const GlitchText = ({ children, className }) => {
  return (
    <motion.div className={`relative ${className}`}>
      <motion.span
        className="absolute inset-0 text-primary/50"
        animate={{
          x: [0, -3, 3, -1, 0],
          opacity: [1, 0.8, 1, 0.9, 1],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        style={{ clipPath: "inset(20% 0 30% 0)" }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 text-secondary/50"
        animate={{
          x: [0, 3, -3, 1, 0],
          opacity: [1, 0.9, 1, 0.8, 1],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 3,
          delay: 0.1,
        }}
        style={{ clipPath: "inset(60% 0 10% 0)" }}
      >
        {children}
      </motion.span>
      <span className="relative">{children}</span>
    </motion.div>
  );
};

// Typewriter effect for description
const TypewriterText = ({ text, className, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, started]);

  return (
    <motion.p className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle"
        />
      )}
    </motion.p>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.8
      },
    },
  };

  // Explosive reveal animation
  const explosiveReveal = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 80,
        duration: 1.2,
      },
    },
  };

  // Magnetic hover effect for buttons
  const magneticHover = {
    rest: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      }
    },
    tap: { scale: 0.95 },
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Enhanced Floating particles with varied sizes and colors */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0
              ? "w-1 h-1 bg-primary/50"
              : i % 3 === 1
                ? "w-2 h-2 bg-secondary/40"
                : "w-3 h-3 bg-primary/20"
              }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50 - Math.random() * 30, 0],
              x: [0, (Math.random() - 0.5) * 40, 0],
              opacity: [0.2, 0.9, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Shooting stars effect */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              x: [0, 200],
              y: [0, 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 3 + 2,
              repeatDelay: 5,
            }}
          >
            <motion.div
              className="absolute w-20 h-px bg-gradient-to-r from-white to-transparent -left-20"
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >


        {/* Legendary Profile Image with Multi-Ring Animation */}
        <motion.div
          variants={explosiveReveal}
          className="mb-8 relative inline-block mt-8"
        >
          {/* Outer spinning rings */}
          <motion.div
            className="absolute inset-[-20px] rounded-full border-2 border-primary/30 border-dashed"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-[-35px] rounded-full border border-secondary/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-[-50px] rounded-full border border-primary/10 border-dotted"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />

          {/* Orbiting particles around the image */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"
              style={{
                top: "50%",
                left: "50%",
              }}
              animate={{
                x: [
                  Math.cos((i * 60 * Math.PI) / 180) * 150,
                  Math.cos(((i * 60 + 360) * Math.PI) / 180) * 150,
                ],
                y: [
                  Math.sin((i * 60 * Math.PI) / 180) * 150,
                  Math.sin(((i * 60 + 360) * Math.PI) / 180) * 150,
                ],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3,
              }}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full blur-2xl animate-pulse" />

          {/* Pulsing glow effect */}
          <motion.div
            className="absolute inset-[-10px] rounded-full bg-gradient-to-r from-primary via-secondary to-primary"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "blur(20px)" }}
          />

          <div className="relative">
            <motion.img
              src={adham}
              alt="Adham"
              className="w-56 h-56 md:w-64 md:h-64 mx-auto rounded-full object-cover border-4 border-primary/60 shadow-[0_0_40px_rgba(6,182,212,0.4)] relative z-10"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 60px rgba(6,182,212,0.6)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl -z-10" />

            {/* Sparkle effect on hover */}
            <motion.div
              className="absolute -top-2 -right-2 text-primary"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 15, -15, 0],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>

        {/* Legendary Animated Title with Letter-by-Letter Reveal */}
        <motion.div
          className="mb-6"
          style={{ minHeight: '2em', overflow: 'visible' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <GlitchText className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-secondary bg-200 animate-gradient-shift">
            <AnimatedText
              text="Hi, I'm Adham"
              delay={1}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold"
            />
          </GlitchText>
        </motion.div>

        {/* Animated subtitle with reveal effect */}
        <motion.div
          className="overflow-hidden mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 text-primary"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <motion.span
              className="h-px bg-gradient-to-r from-transparent to-primary"
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ delay: 2.5, duration: 0.6 }}
            />
            <span className="text-lg md:text-xl font-medium tracking-wider uppercase">
              Software Developer
            </span>
            <motion.span
              className="h-px bg-gradient-to-l from-transparent to-primary"
              initial={{ width: 0 }}
              animate={{ width: 60 }}
              transition={{ delay: 2.5, duration: 0.6 }}
            />
          </motion.div>
        </motion.div>

        {/* Typewriter Description */}
        <motion.div
          className="mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8 }}
        >
          <TypewriterText
            text="Turning ideas into reality — where imagination meets innovation, and vision becomes reality."
            className="text-xl md:text-2xl text-muted-foreground"
            delay={3}
          />
        </motion.div>

        {/* Animated Buttons with Magnetic Effect */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5, duration: 0.8, type: "spring" }}
        >
          <motion.div
            variants={magneticHover}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] group"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Itina7JFeC4qCMMGq3AdiVGoQdGAO734/view?usp=sharing",
                  "_blank",
                )
              }
            >
              {/* Shine effect */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                animate={{ x: ["−100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                View CV
              </span>
            </Button>
          </motion.div>

          <motion.div
            variants={magneticHover}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              size="lg"
              variant="outline"
              className="relative overflow-hidden border-2 border-primary/50 hover:border-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 group"
              onClick={scrollToContact}
            >
              {/* Border animation */}
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10">Get In Touch</span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Icons with Staggered Pop Animation */}
        <motion.div
          className="flex gap-6 justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 5,
              },
            },
          }}
        >
          {[
            { href: "https://github.com/adham-turki", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com/in/adham-turki-54b723313", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:adham@example.com", icon: Mail, label: "Email" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="relative w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors duration-300 group"
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0,
                  rotate: -180,
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  },
                },
              }}
              whileHover={{
                y: -8,
                scale: 1.15,
                boxShadow: "0 10px 30px rgba(6,182,212,0.4)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Ripple effect on hover */}
              <motion.span
                className="absolute inset-0 rounded-full bg-primary/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
              <social.icon className="w-5 h-5 relative z-10 group-hover:text-primary-foreground transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>


    </section>
  );
};

export default Hero;

