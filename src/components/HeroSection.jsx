import profilePic from "../assets/profile-pictures/home.png";
import { PROFILE } from "../constants";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      <div
        className="mb-24 relative flex min-h-screen items-end justify-center 
        bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500"
        id="hero"
      >
        <motion.img
        src={profilePic}
          alt={PROFILE.name}
          className="absolute inset-0 z-10 h-full w-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="absolute inset-0 z-10  lg:from-30%"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="z-20 mx-4 max-w-3xl pb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h1 className="text-5xl font-semibold uppercase tracking-wide md:text-7xl">
            {PROFILE.name}
          </h1>
          <p className="pt-2 font-semibold">{PROFILE.info}</p>
        </motion.div>
      </div>
    </>
  );
};

export default HeroSection;
