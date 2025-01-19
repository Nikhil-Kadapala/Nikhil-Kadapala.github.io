import { SOCIAL_MEDIA_LINKS } from "../constants";
import logo from "../assets/footer.svg";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="mb-8 mt-14">
      {/* Logo Section */}
      <div className="flex items-center justify-center">
        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img src={logo} width={240} className="mb-1" alt="Company Logo" />
          <div className="mb-2 h-1 w-12" />
        </motion.figure>
      </div>

      {/* Social Media Links Section */}
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeInOut" }}
            className="hover:scale-150 transition-transform duration-200"
            viewport={{root: Footer}}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>

      {/* Footer Text */}
      <p className="mt-6 text-center text-sm tracking-wide text-gray-400">
        This page is built using the template from CompileTab. Check out compiletab 
        <a href="https://youtu.be/-TJ03nvX99c?si=0034tn23h283T35B" target="/"> here </a>
      </p>
    </div>
  );
};

export default Footer;
