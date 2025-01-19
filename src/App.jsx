import Home from "./components/Home";
import About from "./components/About";
import Testimonials from "./components/Testimonial";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Questions from "./components/Questions";

function App() {
  return (
    <>
      <main className="font-thin font-sans bg-neutral-100">
        <Home />
        <About />
        <Services />
        <Questions />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;

//need react lazy
