# 곽예준 포트폴리오

Next.js App Router, TypeScript, SCSS Module, Framer Motion으로 제작한 웹 퍼블리셔 및 프론트엔드 개발자 취업용 포트폴리오입니다.

## 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 열어 확인합니다.

## 주요 구조

```text
src/
├── app/
├── components/
├── data/
├── hooks/
├── styles/
└── types/
```

## 콘텐츠 수정

- 프로필, 연락처, 프로젝트, 스킬: `src/data/portfolio.ts`
- 전역 색상과 기본 스타일: `src/styles/globals.scss`
- 섹션 UI: `src/components/sections`

## 포함 기능

- Sticky Header
- 현재 섹션 Active 표시
- 모바일 메뉴
- 부드러운 등장 애니메이션
- 프로젝트 상세 모달
- SEO 메타데이터
- 반응형 레이아웃
- 접근성 고려 마크업
