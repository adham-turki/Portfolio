import { Github, Linkedin, Mail, Heart, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-2">
              Let's Create Together
            </h3>
            <p className="text-muted-foreground">
              Building the future, one project at a time
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/adham-turki"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/adham-turki-54b723313"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100009753456769"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary/20 text-center text-muted-foreground">
         
          <p className="mt-2 text-sm">
            © {new Date().getFullYear()} Adham. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

