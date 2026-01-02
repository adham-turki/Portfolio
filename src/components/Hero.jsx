import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import adham from "../assets/adham.jpg";
import heroBg from "../assets/hero-bg.jpg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
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

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >


        <motion.div
          variants={itemVariants}
          className="mb-8 relative inline-block mt-8"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full blur-2xl animate-glow-pulse" />
          <div className="relative">
            <img
              src={adham}
              alt="Adham"
              className="w-56 h-56 md:w-64 md:h-64 mx-auto rounded-full object-cover border-4 border-primary/60 shadow-[0_0_40px_rgba(6,182,212,0.4)] relative z-10"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl -z-10" />
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-foreground to-secondary bg-200 animate-gradient-shift"
        >
          Hi, I'm Adham
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          I'm a passionate software developer who crafts seamless, user-friendly interfaces and robust backend systems. My passion lies in
          building intuitive, responsive applications that solve real-world problems and delight users.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mb-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1Itina7JFeC4qCMMGq3AdiVGoQdGAO734/view?usp=sharing",
                "_blank",
              )
            }
          >
            View CV
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            onClick={scrollToContact}
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          <motion.a
            href="https://github.com/adham-turki"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
            whileHover={{ y: -5 }}
          >
            <Github className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/adham-turki-54b723313"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
            whileHover={{ y: -5 }}
          >
            <Linkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="mailto:adham@example.com"
            className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
            whileHover={{ y: -5 }}
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>
  );
};

export default Hero;

