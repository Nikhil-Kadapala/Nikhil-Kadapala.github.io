import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-blue-900 tracking-tighter text-white antialiased">
        <Navbar />
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <ContactForm />
        <Resume />
        <Footer />
    </main>
  );
};

export default App;
