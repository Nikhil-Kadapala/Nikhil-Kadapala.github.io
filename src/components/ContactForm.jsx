import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      emailjs
        .send(
          "service_3hqot5c", // Your EmailJS service ID
          "template_l19k1uk", // Your EmailJS template ID
          {
            ...formData,
            reply_to: formData.email, // Add the reply-to email
            to_email: "kadapalanikhil@gmail.com", // Your email address
          },
          "3Q0HSwhn1mJZ0w6O6" // Your User ID
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Please try again later.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="mx-auto max-w-3xl p-4 border-gray-900 rounded-xl shadow-lg 
      bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500" 
      id="contact"
    >
      <Toaster />
      <motion.h2 
        className="my-8 text-white text-center text-4xl font-semibold tracking-tighter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{root: ContactForm}}
      >
        {"Let's Connect"}
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{root: ContactForm}}
      >
        <div className="mb-4 ">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border-gray-900 
            bg-gray-200 px-3 py-2 text-base text-black focus:border-gray-400 focus:outline-none"
          />
          {errors.name && (
            <motion.p
              className="text-sm text-black font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              aria-live="polite"
            >
              {errors.name}
            </motion.p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-gray-900 
            bg-gray-200 px-3 py-2 text-base text-black focus:border-gray-400 focus:outline-none"
          />
          {errors.email && (
            <motion.p
              className="text-sm text-black font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              aria-live="polite"
            >
              {errors.email}
            </motion.p>
          )}
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-gray-900 
            bg-gray-200 px-3 py-2 text-base text-black focus:border-gray-400 focus:outline-none"
            rows="4"
          />
          {errors.message && (
            <motion.p
              className="text-sm text-black font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              aria-live="polite"
            >
              {errors.message}
            </motion.p>
          )}
        </div>
        <button
          type="submit"
          className={`mb-6 w-full rounded-lg bg-gray-200 px-4 py-2 
            text-sm font-semibold text-gray-900 
            hover:bg-gradient-to-t from-blue-500 via-blue-700 to-blue-500 
            border-gray-900
            ${
            isSending ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
