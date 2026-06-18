"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Profile } from "@/types/portfolio";
import styles from "./HeroSection.module.scss";

type HeroSectionProps = {
  profile: Profile;
};

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section id="home" className={styles.hero} aria-labelledby="hero-title">
      <Image
        className={styles.image}
        src="/images/hero-workspace.png"
        alt="포트폴리오 작업 공간"
        fill
        priority
        sizes="100vw"
      />
      <div className={styles.overlay} />
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className={styles.kicker}>Portfolio 2026</p>
        <h1 id="hero-title">
          {profile.name}
          <span>{profile.role}</span>
        </h1>
        <p>{profile.intro}</p>
        <div className={styles.actions}>
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </motion.div>
      <a className={styles.scrollCue} href="#about" aria-label="소개 섹션으로 이동">
        <span>Scroll</span>
        <i />
      </a>
    </section>
  );
}
