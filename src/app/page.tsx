import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { profile } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection profile={profile} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection profile={profile} />
      </main>
    </>
  );
}
