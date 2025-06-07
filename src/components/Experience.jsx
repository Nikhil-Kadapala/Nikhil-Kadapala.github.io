import React from "react";
import PropTypes from 'prop-types';
import './Experience.css';
import unhLogo from "../assets/unh.png";
import tcsLogo from "../assets/TCS.png";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: " Information Technology Help Desk Technician",
    company: "University of New Hampshire",
    duration: "2024 - 2025",
    description:"Provided technical support to end-users via phone, email, and in-person, resolving hardware, software, and network issues. Troubleshooted and resolved a wide range of technical problems, including operating system errors, application malfunctions, and network connectivity issues. Installed, configured, and maintained computer systems including re-imaging and end-point management. Assisted with user account management, including creating new accounts, resetting passwords, and managing user permissions. Documented all support requests and resolutions in a ticketing system. Contributed to maintaining a knowledge base of common issues and solutions.",
    logo: unhLogo
  },
  {
    title: "SAP Security Consultant",
    company: "Tata Consultancy Services (TCS)",
    duration: "2021 - 2022",
    description:
      "SAP Security Management: Managed user accounts, roles, and authorizations, ensuring segregation of duties compliance. Security Implementation and Monitoring: Configured and implemented security measures, monitored security incidents, and ensured compliance with regulations. User Training and Documentation: Provided training on security best practices and created documentation on security configurations and procedures.",
    logo: tcsLogo
  },
];

const TimelineItem = ({ data, index }) => (
  <div id="exp-item" className="mx-auto max-w-3xl">
    <div className="timeline-content mb-4 bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 text-sm p-4 rounded-lg">
      <img
        src={data.logo}
        alt={`${data.company || data.institution} logo`}
        className="company-logo"
      />
      <h3 className="experience-title font-semibold text-white">
        {data.title}
      </h3>
      <h4 className="experience-company mt-2 text-white">
        {data.company || data.institution}
      </h4>
      <p className="experience-duration text-white">{data.duration}</p>
      <p className="experience-description text-white">{data.description}</p>
    </div>
  </div>
);

TimelineItem.propTypes = {
  data: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="experience-section 
      bg-gradient-to-t from-blue-900 via-blue-700 to-blue-900
      flex flex-col justify-items-start"
    >
      <motion.h1
        className="mx-auto mb-4 text-4xl text-center font-semibold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ root: Experience }}
      >
        Experience
      </motion.h1>
      <div className="timeline-container mx-auto flex flex-wrap gap-6 justify-center px-4">
        {timelineData.map((item, index) => (
          <TimelineItem key={item.title} data={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
