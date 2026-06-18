"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { Section } from "@/components/common/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";
import { ProjectModal } from "./ProjectModal";
import styles from "./ProjectsSection.module.scss";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <Section
        id="projects"
        eyebrow="Projects"
        title="서비스처럼 보이고 작동하도록 완성한 작업들입니다."
        className={styles.projectsSection}
        headingClassName={styles.compactHeading}
      >
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.05}>
              <button className={styles.card} type="button" onClick={() => setSelectedProject(project)}>
                <span className={styles.visual} style={{ "--accent": project.accent } as CSSProperties}>
                  <i>{String(index + 1).padStart(2, "0")}</i>
                  <b>{project.title}</b>
                </span>
                <span className={styles.content}>
                  <span className={styles.meta}>{project.techStack.slice(0, 3).join(" / ")}</span>
                  <strong>{project.title}</strong>
                  <span>{project.summary}</span>
                </span>
              </button>
            </FadeIn>
          ))}
        </div>
      </Section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
