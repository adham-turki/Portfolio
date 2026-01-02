import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { client, urlFor } from "./client";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client.fetch('*[_type == "project"]').then((data) => setProjects(data));
  }, []);

  return (
    <section id="projects" className="min-h-screen flex items-center py-20 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-lg mb-2">My Work</p>
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const gradient = index % 2 === 0 
              ? "from-primary/20 to-primary/5" 
              : "from-secondary/20 to-secondary/5";
            
            return (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative bg-card/30 backdrop-blur-sm border border-primary/20 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  {/* Project image */}
                  <div className="relative w-full h-56 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-20`} />
                    <img 
                      src={project.image ? urlFor(project.image.asset).url() : "/placeholder.jpg"} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack && project.techStack.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.repoLink && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-primary/50 hover:bg-primary/10"
                          onClick={() => window.open(project.repoLink, "_blank")}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}
                      {project.liveLink && (
                        <Button
                          size="sm"
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                          onClick={() => window.open(project.liveLink, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </div>
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

