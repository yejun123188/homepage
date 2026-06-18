import type { Activity, Education, NavItem, Profile, Project, Skill } from "@/types/portfolio";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export const profile: Profile = {
  name: "곽예준",
  role: "Web Publisher / Front-end Developer",
  intro: "깔끔한 퍼블리싱과 사용자 중심 인터랙션으로 완성도 있는 웹 화면을 구현합니다.",
  about:
    "디자인의 의도를 정확히 읽고, 반응형 레이아웃과 접근성, 유지보수 가능한 구조를 바탕으로 실제 서비스처럼 작동하는 웹을 만드는 데 집중합니다. HTML/CSS 기본기부터 React, Next.js 기반 프론트엔드 구현까지 폭넓게 다룹니다.",
  email: "yejun123188@gmail.com",
  github: "https://github.com/yejun123188",
  pdfUrl: "/portfolio.pdf"
};

export const education: Education[] = [
  {
    title: "프론트엔드 개발 및 웹 퍼블리싱 과정",
    period: "2025 - 2026",
    description: "HTML, CSS, JavaScript, React 기반 UI 구현과 실무형 프로젝트 제작을 학습했습니다."
  },
  {
    title: "개인 포트폴리오 프로젝트 제작",
    period: "2026",
    description: "서비스 분석, 리디자인, API 연동, Firebase 활용 경험을 프로젝트로 정리했습니다."
  }
];

export const activities: Activity[] = [
  {
    title: "반응형 웹 퍼블리싱",
    description: "모바일, 태블릿, PC 환경에서 자연스럽게 읽히는 레이아웃을 설계하고 구현합니다."
  },
  {
    title: "브랜드 리뉴얼 프로젝트",
    description: "기존 서비스의 분위기와 사용 흐름을 분석해 현대적인 UI로 재구성합니다."
  },
  {
    title: "프론트엔드 구현",
    description: "React 기반 컴포넌트 구조와 Git 버전 관리를 활용해 유지보수 가능한 코드를 작성합니다."
  }
];

export const skills: Skill[] = [
  { name: "HTML", level: 92, category: "Markup" },
  { name: "CSS", level: 90, category: "Style" },
  { name: "SCSS", level: 88, category: "Style" },
  { name: "JavaScript", level: 84, category: "Language" },
  { name: "TypeScript", level: 78, category: "Language" },
  { name: "React", level: 82, category: "Framework" },
  { name: "Next.js", level: 76, category: "Framework" },
  { name: "Zustand", level: 72, category: "State" },
  { name: "Firebase", level: 74, category: "Backend" },
  { name: "Git", level: 86, category: "Tool" }
];

export const projects: Project[] = [
  {
    id: "matin-kim",
    title: "MATINKIM",
    summary: "React + Firebase 기반 패션 쇼핑몰 리뉴얼 프로젝트",
    description:
      "패션 브랜드 Matin Kim의 미니멀하고 감각적인 분위기를 참고해 쇼핑몰 UI를 리뉴얼한 프로젝트입니다. 상품 탐색, 상세 정보, 사용자 흐름을 실제 커머스 서비스처럼 구성하고 Firebase를 활용해 데이터 연동 경험을 담았습니다.",
    role: "메인 페이지, 상품 목록, 상세 화면, Firebase 데이터 연동, 반응형 UI 구현",
    techStack: ["React", "Firebase", "SCSS", "JavaScript", "Git"],
    features: ["브랜드 무드 기반 리디자인", "상품 리스트 및 상세 화면", "Firebase 데이터 연동", "반응형 쇼핑몰 레이아웃"],
    githubUrl: "https://github.com/yejun123188/MatinKim",
    demoUrl: "https://github.com/yejun123188/MatinKim",
    accent: "#111111"
  },
  {
    id: "netflix",
    title: "Netflix",
    summary: "TMDB API 기반 OTT 플랫폼 포트폴리오 프로젝트",
    description:
      "Netflix 스타일의 콘텐츠 탐색 경험을 참고해 제작한 OTT 플랫폼 프로젝트입니다. TMDB API 기반 영화/시리즈 데이터를 활용하고, 콘텐츠 목록과 상세 정보, 사용자 리뷰와 커넥트 모드 흐름을 기획했습니다.",
    role: "OTT 메인 UI, 콘텐츠 카드, 상세 정보 화면, API 데이터 렌더링, 리뷰 기능 흐름 기획",
    techStack: ["Next.js", "TypeScript", "TMDB API", "SCSS", "Zustand"],
    features: ["TMDB API 콘텐츠 연동", "OTT 스타일 콘텐츠 탐색 UI", "상세 정보 페이지", "커넥트 모드 및 리뷰 기능 기획"],
    githubUrl: "https://github.com/yejun123188/netflix-portfolio",
    demoUrl: "https://github.com/yejun123188/netflix-portfolio",
    accent: "#e50914"
  }
];
