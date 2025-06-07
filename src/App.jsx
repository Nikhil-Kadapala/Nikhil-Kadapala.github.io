import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import About from "./components/About";
import Resume from "./components/Resume";
import Experience from "./components/Experience";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-blue-900 tracking-tighter text-white antialiased">
        <Navbar />
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <ContactForm />
        <Resume />
        <Footer />
    </main>
  );
};

export default App;
