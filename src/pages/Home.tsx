import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import About from "@/components/About";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
    
      <Hero />
      <About></About>
      <SkillsSection></SkillsSection>
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}
