import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { StrengthsSection } from './components/StrengthsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchSection } from './components/ResearchSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificationsSection } from './components/CertificationsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';


function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans relative">
      <ParticleBackground />
      <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <StrengthsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ResearchSection />
          <SkillsSection />
          <CertificationsSection />
          <AchievementsSection />
          <EducationSection />
          <ContactSection />
          <Footer />
        </div>  
    </div>
  );
}

export default App;
