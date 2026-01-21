import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Strengths from "./components/Strengths";
import Education from "./components/Education";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { portfolioData } from "./data/portfolio";

function App() {
  // Dynamic Title & AOS Init
  useEffect(() => {
    document.title = `${portfolioData.personalInfo.name} - Portafolio`;
    Aos.init({
      duration: 750,
      //once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
        <Header data={portfolioData.personalInfo} />

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (Sidebar-like) */}
          <div className="lg:col-span-4 space-y-8">
            <Profile data={portfolioData.profile} />
            <Strengths data={portfolioData.strengths} />
            <Languages data={portfolioData.languages} />
          </div>

          {/* Right Column (Main Content) */}
          <div className="lg:col-span-8 space-y-8">
            <Experience data={portfolioData.experience} />
            <Education data={portfolioData.education} />
            <Skills data={portfolioData.skills} />
          </div>
        </main>

        <Footer name={portfolioData.personalInfo.name} />
      </div>
    </div>
  );
}

export default App;
