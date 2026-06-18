import { Section } from "@/components/common/Section";
import { FadeIn } from "@/components/motion/FadeIn";
import { activities, education, profile } from "@/data/portfolio";
import styles from "./AboutSection.module.scss";

export function AboutSection() {
  return (
    <Section id="about" eyebrow="About Me" title="브랜드의 결을 읽고 화면의 밀도를 설계합니다.">
      <div className={styles.grid}>
        <FadeIn className={styles.statement}>
          <p>{profile.about}</p>
          <dl>
            <div>
              <dt>Name</dt>
              <dd>{profile.name}</dd>
            </div>
            <div>
              <dt>Position</dt>
              <dd>{profile.role}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Publishing, UI Interaction, Front-end</dd>
            </div>
          </dl>
        </FadeIn>

        <div className={styles.lists}>
          <FadeIn>
            <h3>Education</h3>
            {education.map((item) => (
              <article key={item.title}>
                <span>{item.period}</span>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </FadeIn>

          <FadeIn delay={0.08}>
            <h3>Experience</h3>
            {activities.map((item) => (
              <article key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
