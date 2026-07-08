import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import Features from "./Features";
import StudentSection from "./StudentSection";
import Footer from "./Footer";

import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="authContainer">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <StudentSection />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;