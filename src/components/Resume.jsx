import { RESUME } from "../constants";
import { motion } from "framer-motion";

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
  };

const hoverEffect = {
    scale: 1.05, // Slightly enlarge on hover
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Add shadow on hover
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  };
const Resume = () => {
    return (
        <motion.div className="mt-20 mx-auto max-w-fit flex align-items-center
            rounded-xl shadow-lg px-4 py-4
            bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500
            border-gray-900 text-xl font-mono"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={hoverEffect}
            variants={itemVariants}
            viewport={{root: Resume}}>
            {RESUME.map((item, index) => (
                <motion.a 
                    key={index}
                    href={item.path}
                    target="/_blank" 
                    rel="noopener noreferrer"
                    className="items-center mt-2"
                >
                    <img src={item.icon} width={180}></img>
                    <div>
                        <div className="text-blue-800">" "</div>
                        <h2>{item.text}</h2>
                    </div>
                </motion.a>
            ))}
        </motion.div>
    );
};

export default Resume;
