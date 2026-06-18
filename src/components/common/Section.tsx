import type { ReactNode } from "react";
import styles from "./Section.module.scss";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${className}`} aria-labelledby={`${id}-title`}>
      <div className={styles.heading}>
        <p>{eyebrow}</p>
        <h2 id={`${id}-title`}>{title}</h2>
      </div>
      {children}
    </section>
  );
}
