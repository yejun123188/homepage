import { Section } from "@/components/common/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { skills } from "@/data/portfolio";
import styles from "./SkillsSection.module.scss";

export function SkillsSection() {
  return (
    <Section id="skills" eyebrow="Skills" title="기본기를 바탕으로 서비스 UI를 단단하게 구현합니다.">
      <div className={styles.grid}>
        {skills.map((skill, index) => (
          <FadeIn key={skill.name} delay={index * 0.025} className={styles.card}>
            <div className={styles.top}>
              <span>{skill.category}</span>
              <strong>{skill.level}%</strong>
            </div>
            <h3>{skill.name}</h3>
            <div className={styles.progress} aria-label={`${skill.name} 숙련도 ${skill.level}%`}>
              <i style={{ width: `${skill.level}%` }} />
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
