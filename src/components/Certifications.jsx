import React from "react";
import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";

// Animation settings
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const Certifications = () => {
  return (
    <section id="certifications" 
      className="certifications-section mb-20 max-w-screen-2xl mx-auto p-4 
      border-gray-900 rounded-xl px-2 py-10 lg:px-28 shadow-lg 
      bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500"
    >
      <motion.h2
        className="certifications-title mb-14 text-center text-4xl font-semibold"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ root: Certifications }}
      >
        Certifications
      </motion.h2>
      <motion.div
        className="certifications-container mx-auto flex flex-col items-start px-12 py-4 lg:px-20"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div 
            key={index}
            className="cert-item mb-8 flex items-center"
            variants={itemVariants}
            viewport={{ root: Certifications }}
          >
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="mr-4"> {/* Make the logo clickable */}
              <motion.div
                whileHover={{ scale: 1.2, transition: { duration: 0.3 } }}
                variants={containerVariants}
                viewport={{ root: Certifications }}
              >
                <img
                  src={cert.icon}
                  alt={`${cert.name} logo`}
                  className="cert-logo w-12 h-12 lg:w-16 lg:h-16"
                />
              </motion.div>
            </a>
            <div className="text-left">
              <h3 className="text-xl lg:text-2xl font-bold">{cert.name}</h3>
              <p className="text-md text-gray-400">
                {cert.issuingOrganization}
              </p>
              <p className="text-sm italic text-gray-500">{cert.issueDate}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;
