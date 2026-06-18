"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { Project } from "@/types/portfolio";
import styles from "./ProjectModal.module.scss";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.classList.add("no-scroll");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className={styles.backdrop}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className={styles.dim} type="button" aria-label="프로젝트 상세 닫기" onClick={onClose} />
          <motion.article
            className={styles.panel}
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 42 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <button className={styles.close} type="button" onClick={onClose} aria-label="닫기">
              Close
            </button>
            <div className={styles.hero} style={{ "--accent": project.accent } as React.CSSProperties}>
              <p>{project.techStack.join(" / ")}</p>
              <h3 id="project-modal-title">{project.title}</h3>
            </div>
            <div className={styles.body}>
              <div>
                <span>Overview</span>
                <p>{project.description}</p>
              </div>
              <div>
                <span>Role</span>
                <p>{project.role}</p>
              </div>
              <div>
                <span>Features</span>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.links}>
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  Demo
                </a>
              </div>
            </div>
          </motion.article>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
