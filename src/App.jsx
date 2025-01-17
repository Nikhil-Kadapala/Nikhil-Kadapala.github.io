import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import About from "./components/About";
import Certifications from "./components/Certifications";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-gradient-to-t from-blue-900 via-blue-700 to-blue-500 tracking-tighter text-white antialiased">
        <Navbar />
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <Certifications /> {/* New Certifications Section */}
        <ContactForm />
        <Footer />
      </main>
  );
};

export default App;
