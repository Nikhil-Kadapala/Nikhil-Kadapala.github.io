import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import PropTypes from 'prop-types';

const Card = ({ image, title, subtitle, githubLink, demoLink }) => {
  return (
    <div className="m-4 block max-w-sm overflow-hidden rounded-lg">
      <div className="relative">
        <img className="w-full" src={image} alt={title} />
        <div className="flex flex-col justify-between p-4 text-white">
          <h2 className="mb-2 text-2xl font-bold">{title}</h2>
          <p className="mb-4 text-sm font-medium">{subtitle}</p>
          <div className="flex justify-around mt-4">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                <FaExternalLinkAlt className="mr-2" /> Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
  demoLink: PropTypes.string,
};

export default Card;
