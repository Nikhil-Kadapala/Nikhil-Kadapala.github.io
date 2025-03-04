import profilePic from "../assets/profile-pictures/hero.svg";
import { PROFILE } from "../constants";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      <div
        className="mt-9 relative flex flex-wrap min-h-screen items-center justify-between px-20
        bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500"
        id="hero"
      >
        <motion.img
          src={profilePic}
          alt={PROFILE.name}
          className="relative mx-auto left-0 z-10 h-auto w-2/5 object-cover rounded-3xl shadow-2xl 
          bg-white/5 border-gray-900 backdrop-blur-sm p-4 ml-10"
          initial={{ opacity: 0, y:50 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 1 , delay: 0.5, ease: "easeInOut"}}
          viewport={{ root: HeroSection }}
        />
        <motion.div
          className="absolute inset-0 z-10  lg:from-30%"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ root: HeroSection }}
        />
        <motion.div
          className="z-20 mx-4 max-w-3xl pb-20 pr-40"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ root: HeroSection }}
        >
          <h1 className="text-5xl font-semibold uppercase tracking-wide md:text-9xl">
            {PROFILE.name}
          </h1>
          <p className="pt-4 font-semibold">{PROFILE.info}</p>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
