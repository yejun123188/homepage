import type { Profile } from "@/types/portfolio";
import styles from "./ContactSection.module.scss";

type ContactSectionProps = {
  profile: Profile;
};

export function ContactSection({ profile }: ContactSectionProps) {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div>
        <p>Contact</p>
        <h2 id="contact-title">좋은 웹 경험을 함께 만들 준비가 되어 있습니다.</h2>
      </div>
      <address className={styles.links}>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.pdfUrl} download>
          Portfolio PDF
        </a>
      </address>
      <footer>
        <span>© 2026 {profile.name}</span>
        <span>{profile.role}</span>
      </footer>
    </section>
  );
}
