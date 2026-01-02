import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import adham from "../assets/adham.jpg";
import decoration1 from "../assets/decoration-1.jpg";
import decoration2 from "../assets/decoration-2.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-20 right-0 w-64 h-64 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <img src={decoration2} alt="" className="w-full h-full object-cover" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 left-0 w-48 h-48 opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <img src={decoration1} alt="" className="w-full h-full object-cover" />
      </motion.div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl animate-glow-pulse" />
              
              {/* Image container */}
              <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 p-1 rounded-3xl backdrop-blur-sm">
                <div className="bg-card/50 backdrop-blur-sm rounded-3xl overflow-hidden">
                  <img
                    src={adham}
                    alt="Adham"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-primary/50 rounded-2xl blur-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl blur-xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-primary font-semibold text-lg"
              >
                About Me
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary"
              >
                Turning Ideas
                <br />
                Into Reality
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm a passionate software developer and creative problem solver who loves building
              beautiful, functional, and user-friendly digital experiences. With a strong
              foundation in modern web and mobile technologies, backend systems, and a keen eye for design, I transform
              complex challenges into elegant solutions.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Every project is an opportunity to push boundaries and create something
              extraordinary. Let's build something amazing together.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

