import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 Hello, I'm </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Sahand N.
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            {" "}
            Full-Stack Developer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            I build modern, responsive web applications with clean code and a
            focus on user experience. Passionate about solving real-world
            problems through full-stack development and continuous learning.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/SahandNamvar" target="_blank">
              <i className="fab fa-github"> </i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sahandnamvar"
              target="_blank"
            >
              <i className="fab fa-linkedin"> </i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.85)",
                backdropFilter: "blur(12px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = {
  name: "Sahand Namvar",
  location: "📍 USA (Remote-friendly)",
  role: {
    primary: "Master's Student in Computer Science",
    secondary: "University Lab Instructor",
    passion: "Teaching tech & building impactful software",
  },
  stack: {
    languages: ["JavaScript", "Python", "Java", "C++"],
    frameworks: ["React", "Node.js", "Express", "Flask"],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
    tools: ["Git", "Docker", "Tailwind CSS", "Postman"],
  },
  interests: [
    "clean UI/UX design",
    "scalable APIs",
    "real-world problem solving",
    "exploring AI & machine learning",
  ],
  mission: "Crafting performant web apps that people love to use",
  funFact: "Writes better code with a cup of tea 🫖",
  status: "🚀 Open to new opportunities"
};`}
            </SyntaxHighlighter>
          </div>
          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                Currently crafting new digital experiences 💡
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
