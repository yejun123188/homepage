"use client";

import { useEffect, useMemo, useState } from "react";
import { navItems } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import styles from "./SiteHeader.module.scss";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace("#", "")), []);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 20);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [isOpen]);

  return (
    <header className={`${styles.header} ${isScrolled || isOpen ? styles.scrolled : ""}`}>
      <a className={styles.logo} href="#home" aria-label="홈으로 이동" onClick={() => setIsOpen(false)}>
        KWAK<span>YEJUN</span>
      </a>

      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`} aria-label="주요 섹션">
        {navItems.map((item) => {
          const sectionId = item.href.replace("#", "");
          return (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === sectionId ? styles.active : ""}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      <button
        className={styles.menuButton}
        type="button"
        aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
