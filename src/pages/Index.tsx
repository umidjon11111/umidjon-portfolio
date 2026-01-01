import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>
          Umidjon - Full-Stack Web Developer | React, Next.js, Node.js
        </title>
        <meta
          name="description"
          content="Umidjon - Professional Full-Stack Web Developer specializing in React, Next.js, Node.js, and MongoDB. Building modern, scalable web applications."
        />
        <meta
          name="keywords"
          content="Full-Stack Developer, React Developer, Next.js, Node.js, MongoDB, Web Development, Uzbekistan"
        />
        <link rel="canonical" href="https://umidjon.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
