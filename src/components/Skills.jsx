import { motion } from "framer-motion";
import { SKILLS} from "../constants";
import Marquee from 'react-fast-marquee';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

// Define hover effect for skill icons
const hoverEffect = {
  scale: 1.1,
  transition: {
    type: "spring",
    stiffness: 300,
  },
};

function split2rows(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

const Skills = () => {
  return (
    <div className="container mb-20 mx-auto rounded-xl bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500" id="skills">
      <motion.h2 className="mb-10 mt-24 text-center text-4xl font-semibold"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{root:Skills}}
      >
        <h1 className="text-blue-500">" "</h1>
        Skills
      </motion.h2>
      <motion.div
        className="mx-2 flex flex-col rounded-xl px-4 py-10 lg:px-20"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {split2rows(SKILLS, Math.ceil(SKILLS.length / 2)).map((chunk, chunkIndex) => (
          <Marquee key={chunkIndex} direction={chunkIndex % 2 === 0 ? "left" : "right"} speed={100} gradient={false}>
            {chunk.map((item, index) => (
              <motion.div 
                key={index} 
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px' }}
                variants={{ itemVariants}}
              >
              <div className="flex items-center">
                <motion.div whileHover={hoverEffect}>
                  <img src={item.src} alt={item.name} style={{ width: '100px', height: '100px' }} />
                </motion.div>
              </div>
              <span className="mb-10 px-6 text-xl lg:text-3xl">{item.name}</span>
              </motion.div>
            ))}
          </Marquee>
        ))}
      </motion.div>
    </div>  
  );
};

export default Skills;
