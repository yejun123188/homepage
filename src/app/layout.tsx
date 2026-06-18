import type { Metadata, Viewport } from "next";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://kwak-yejun-portfolio.vercel.app"),
  title: {
    default: "곽예준 | Web Publisher / Front-end Developer",
    template: "%s | 곽예준 Portfolio"
  },
  description:
    "웹 퍼블리셔 및 프론트엔드 개발자 곽예준의 취업용 포트폴리오입니다. 퍼블리싱, React, Next.js, Firebase 프로젝트를 확인할 수 있습니다.",
  keywords: ["곽예준", "웹 퍼블리셔", "프론트엔드 개발자", "포트폴리오", "React", "Next.js"],
  authors: [{ name: "곽예준" }],
  openGraph: {
    title: "곽예준 | Web Publisher / Front-end Developer",
    description: "사용자 경험 중심의 웹 퍼블리싱과 프론트엔드 프로젝트 포트폴리오",
    type: "website",
    locale: "ko_KR",
    images: [{ url: "/images/hero-workspace.png", width: 1200, height: 630, alt: "곽예준 포트폴리오" }]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
