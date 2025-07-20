import { motion } from "framer-motion";

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

// Project Data Array
const projectsData = [
  {
    title: "Intelligent Journaling Platform",
    description:
      "An intelligent diary that feels personal — track your mood, reflect through emotional trends, and receive thoughtful AI-responses for better mental clarity.",
    tech: ["MERNStack", "OpenAI", "GoogleNLP"],
    image: "/projects/Login.png",
    repoUrl: "https://github.com/SahandNamvar/smart-diary-app-frontend.git",
  },
  {
    title: "eMessageMe: Feature-Rich Firebase Messaging App",
    description:
      "A secure Android messaging app built with Firebase and Firestore, offering a rich set of communication features in a clean, user-friendly interface.",
    tech: ["Android", "Firebase", "RealTimeChat"],
    image: "/projects/ChatApp.png",
    repoUrl: "https://github.com/SahandNamvar/Android-ClassForum-Firebase.git",
  },
  {
    title: "Android Weather App with Real-Time NWS Forecasts",
    description:
      "A lightweight Android app for browsing cities and viewing real-time multi-day weather forecasts from the NWS API with a clean, responsive UI.",
    tech: ["AndroidStudio", "Java", "Postman"],
    image: "/projects/WeatherApp.png",
    repoUrl: "https://github.com/SahandNamvar/Android-NWS-Weather-App.git",
  },
  {
    title: "Personal Budget Tracker Web Application",
    description:
      "An intuitive budget tracker that organizes your income and expenses, providing personalized analytics and robust security for confident money management.",
    tech: ["NodeJS", "Axios", "RESTAPI"],
    image: "/projects/Budget.png",
    repoUrl:
      "https://github.com/SahandNamvar/personal-budget-tracking-web-app-mern.git",
  },
  {
    title: "ML-Based Early Alzheimer’s Detection",
    description:
      "A machine learning model that uses key health indicators to predict early diagnosis of Alzheimer’s disease, enhancing early intervention strategies.",
    tech: ["Python", "Pandas", "ScikitLearn"],
    image: "/projects/Kaggle.png",
    repoUrl:
      "https://github.com/SahandNamvar/Binary-classification-Alzheimer-disease.git",
  },
  {
    title: "Whack A Mole! Whack 'em All!",
    description:
      "Just some classic DOM smashing fun. A simple game built with vanilla HTML, CSS, and JS — sometimes you just need to have some fun and fast clicks!",
    tech: ["VanillaJS", "HTML/CSS", "HaveSomeFun"],
    image: "/projects/Game.png",
    repoUrl:
      "https://github.com/SahandNamvar/Mobile-App-Dev-Tile-Matching-Game.git",
  },
];

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {projectsData.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
            variants={fadeInUp}
          >
            <motion.div
              className="project-card"
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <motion.div
                className="project-image"
                style={{ backgroundImage: `url('${project.image}')` }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
};
