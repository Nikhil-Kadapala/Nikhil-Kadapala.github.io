import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mx-auto mb-24 relative flex flex-col  min-h-96 max-w-screen-3xl items-center justify-between px-20
        bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500
        border-gray-900" 
        id="about"
    >
      <motion.h1
        className="mx-auto mt-10 text-6xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ root: About }}
      >
        About
      </motion.h1>
      <motion.h2
        className="mx-auto mt-8 p-2 text-[3rem] lg:text"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {ABOUT.text1}
      </motion.h2>
      <motion.p
        className="mx-auto pl-2 text-3xl leading-relaxed text-justify"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {Array.isArray(ABOUT.text2) 
          ? ABOUT.text2.map((line, index) => (
              <p key={index} className="mb-2">{line}</p>
            ))
          : ABOUT.text2
        }
      </motion.p>
    </div>
  );
};

export default About;
