import { PROJECTS } from "../constants";
import Card from "./Card";
import { motion } from "framer-motion";

// Container variants for animation
const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      staggerChildren: 0.4,
    },
  },
};

// Item variants for animation (applied on each project card)
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } },
};

// Hover effect for floating and highlighting
const hoverEffect = {
  scale: 1.05, // Slightly enlarge on hover
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add shadow on hover
  transition: {
    duration: 0.3,
    ease: "easeInOut",
  },
};

const Projects = () => {
  return (
    <div id="projects" className="mx-auto max-w-screen-2xl p-1">
      <motion.h2
        className="mt-14 text-center text-5xl font-semibold"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ root: Projects }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center text-pretty py-8"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ root: Projects }}
      >
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            whileHover={hoverEffect} // Apply hover effect here
            className="bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 m-4 rounded-lg shadow-lg border-gray-900"
          >
            <Card
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              className="text-black text-5xl font-semibold"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
