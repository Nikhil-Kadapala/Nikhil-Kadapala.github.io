import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="mb-24 relative flex flex-col mx-auto min-h-96 max-w-screen-3xl items-center justify-between px-20
        bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500
        border-gray-900" 
        id="about"
    >
      <motion.h1
        className="mt-10 text-6xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ root: About }}
      >
        About
      </motion.h1>
      <motion.h2
        className="p-2 text-[3rem] lg:text mx-auto"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {ABOUT.text2}
      </motion.h2>
      <motion.p
        className="pl-2 text-3xl leading-relaxed mx-auto"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {ABOUT.text1}
      </motion.p>
    </div>
  );
};

export default About;
