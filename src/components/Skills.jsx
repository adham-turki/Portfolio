import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Rocket, Sparkles } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
      icon: Sparkles,
      title: "Problem Solving",
      description: "Applying strong knowledge of Data Structures, Algorithms, OOP, and OOP Design principles to solve complex challenges",
      color: "from-secondary to-primary",
      tech: ["Data Structures", "Algorithms", "OOP", "OOP Design"],
    },
  ];

  return (
    <section id="techstack" className="relative min-h-screen flex items-center py-20 px-6 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-lg mb-2">What I Do</p>
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A diverse skill set combining technical expertise with creative vision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-card/30 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 h-full">
                <div className={`inline-block p-4 rounded-2xl bg-gradient-to-br ${skill.color} mb-6`}>
                  <skill.icon className="w-8 h-8 text-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {skill.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {skill.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-b-3xl"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                  style={{ transformOrigin: "left" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

