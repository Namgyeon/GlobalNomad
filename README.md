# 🌍 GlobalNomad

> **"누구나 체험을 등록하고, 누구나 함께할 수 있는 문화 공유 플랫폼"**  
> 프론트엔드 팀 프로젝트로, 최신 기술 스택과 효율적인 협업 방식으로 **직관적인 사용자 경험**을 목표로 개발하였습니다.

<br/>

## 📌 프로젝트 개요

- 📆 **진행 기간**: 2025.03.10 ~ 2025.04.17  
- 🌐 **서비스 소개**:  
  GlobalNomad는 누구나 자유롭게 **체험을 등록**하고, 다른 사람들과 **함께 체험을 공유**할 수 있는 플랫폼입니다.  

  사용자는 다음과 같은 기능을 통해 플랫폼을 이용할 수 있습니다:
  - 체험 등록자가 **날짜와 시간대를 지정**해 다양한 체험 업로드
  - 참여자는 원하는 체험을 **선택 및 예약** 가능
  - 예약은 **승인 또는 거절 처리**
  - 체험 완료 후 **리뷰 등록 및 열람 가능**

<br/>

## 🎯 개발 목표 및 차별점

- ⚡ **최신 기술 스택**  
  - `Next.js App Router`, `React Query`, `Zustand` 등 활용  
- 🔍 **실제 사용자 시나리오 기반 기능 설계**  
  - 예약 신청, 후기 작성, 체험 관리 등  
- 🤝 **공통 컴포넌트화 및 코드 컨벤션 공유**  
  - 팀원 간 효율적인 협업 구조 구성

<br/>

## 🔗 배포 링크

👉 [GlobalNomad 바로가기](https://your-deploy-link.com)  

<br/>
<br/>
<br/>

# 2. Team Members

|                                                                         남기연                                                                         |                                                                         박준환                                                                         |                                                                                                         이승환                                                                                                         |                                                                            윤혜림                                                                               |                                                                         장보배                                                                         |                                                                          정혜연                                                                         | 
| :----------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/119279127?v=4" alt="남기연" width="150">                                                             | <img src="https://avatars.githubusercontent.com/u/185324327?v=4" alt="박준환" width="150">                                                             | <img src="https://avatars.githubusercontent.com/u/184628834?v=4" alt="이승환" width="150">                                                                                                                             | <img src="https://avatars.githubusercontent.com/u/71241364?s=64&v=4" alt="윤혜림" width="150">                                                                  | <img src="https://avatars.githubusercontent.com/u/185046983?s=64&v=4" alt="장보배" width="150">                                                             | <img src="https://avatars.githubusercontent.com/u/185165581?v=4" alt="정혜연" width="150">                                                             |
|                                                                           FE                                                                           |                                                                           FE                                                                           |                                                                                                           FE                                                                                                           |                                                                               FE                                                                                |                                                                           FE                                                                           |                                                                           FE                                                                           |
|                                                          [GitHub](https://github.com/Namgyeon)                                                         |                                                         [GitHub](https://github.com/park521)                                                           |                                                                                         [GitHub](https://github.com/mynameishwan)                                                                                      |                                                            [GitHub](https://github.com/y5037)                                                                   |                                                         [GitHub](https://github.com/katej0320)                                                          |                                                         [GitHub](https://github.com/yeon0036)                                                          |
|                                                          로그인, 로그아웃                                                         |                                                         체험 상세 페이지                                                          |                                                                                         메인페이지                                                                                      |                                                            내 프로필 - 예약한 체험 관리                                                                   |                                                         내 프로필 - 내가 등록한 체험 관리                                                          |                                                         내 프로필 - 내 정보, 내 체험 예약 관리, 알림                                                          |

<br/>
<br/>

# 3. Key Features

- **회원가입**:

  - 회원가입 시 DB에 유저정보가 등록됩니다.

- **로그인**:

  - 사용자 인증 정보를 통해 로그인합니다.

- **체험 목록 페이지**:

  - 사용자들이 등록한 체험들을 확인할 수 있습니다.
  - 체험을 클릭하면 상세페이지로 이동합니다.

- **체험 상세 페이지**:

  - 체험 정보 및 리뷰를 확인할 수 있습니다.
  - 시간, 인원, 날짜에 맞춰 체험을 신청할 수 있습니다.

- **내 프로필**:
  - **내 정보**
    - 내 프로필을 수정할 수 있습니다.
  - **예약 내역**
    - 내가 신청한 체험을 확인할 수 있습니다.
    - 신청 내용에 대한 업데이트(승인, 완료, 거절)를 확인할 수 있습니다.
  - **내 체험**
    - 내가 등록한 체험을 확인할 수 있습니다.
    - 등록한 체험을 수정하거나 삭제할 수 있습니다.
  - **내 체험 관리**
    - 내가 등록한 체험을 확인할 수 있습니다.
    - 체험에 때른 캘린더로, 받은 신청을 관리할 수 있습니다.


<br/>
<br/>

# 4. Technology Stack

## 🛠️ 주요 기술 스택

| 기술 | 설명 |
|------|------|
| ![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white) | SSR + CSR 혼합 기반의 리액트 프레임워크 |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white) | 타입 안정성과 코드 자동 완성 지원 |
| ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white) | 유틸리티 기반 반응형 CSS 프레임워크 |
| ![React Query](https://img.shields.io/badge/React_Query-ff4154?logo=reactquery&logoColor=white) | 서버 상태 관리 및 데이터 캐싱 |
| ![React Hook Form](https://img.shields.io/badge/React_Hook_Form-ec5990?logo=reacthookform&logoColor=white) | 효율적인 폼 상태 관리 |
| ![Zod](https://img.shields.io/badge/Zod-3b82f6?logo=zod&logoColor=white) | 타입 기반 스키마 유효성 검사 |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white) | API 통신을 위한 HTTP 클라이언트 |
| ![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white) | UI 컴포넌트 문서화 및 독립적 개발 도구 |
| ![React Calendar](https://img.shields.io/badge/React_Calendar-61DAFB?logo=react&logoColor=white) | 예약일 선택을 위한 달력 컴포넌트 |
| ![Kakao Maps](https://img.shields.io/badge/Kakao_Maps-yellow?logo=kakao&logoColor=black) | 체험 위치 기반 지도 시각화 구현 |
| ![Vercel](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=white) | 정적 웹사이트 및 서버리스 기반 클라우드 배포 플랫폼 |


<br/>

- **협업 툴**

## 🤝 협업 툴

<table>
  <tr>
    <td align="center">
      <img src="https://blog.kakaocdn.net/dn/cQhnse/btrE8TmCLle/slobwSEwi4nnMvfnGTQp4k/img.png" width="80"/><br/><b>Prettier</b>
    </td>
    <td align="center">
      <img src="https://blog.kakaocdn.net/dn/XR8jF/btrILfAQFWT/1jLpQkYysDaqHj8OzOlZFk/img.png" width="80"/><br/><b>ESLint</b>
    </td>
    <td align="center">
      <img src="https://blog.kakaocdn.net/dn/997rV/btsIkARkTej/PdtiBI82EnMzFQjgHkbuI1/img.png" width="80"/><br/><b>Storybook</b>
    </td>
    <td align="center">
      <img src="https://velog.velcdn.com/images/zaixu/post/67d77203-8ee7-445e-bb95-4e2bed365c57/image.jpg" width="80"/><br/><b>JSDoc</b>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/483abc38-ed4d-487c-b43a-3963b33430e6" width="80"/><br/><b>Git</b>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/34141eb9-deca-416a-a83f-ff9543cc2f9a" width="80"/><br/><b>Notion</b>
    </td>
    <td align="center">
      <img src="https://i.namu.wiki/i/cAYebt8RyZGac7cdIFcRTJoLftLkBbmXEk0hqRx8V0koKfyQRfxleyZEvOQN_iQ6lrhf44NIA5btYUpb13P8jw.svg" width="80"/><br/><b>Figma</b>
    </td>
    <td align="center">
      <img src="https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ" width="80"/><br/><b>Discord</b>
    </td>
  </tr>
</table>


<br/>

# 5. Project Structure **미완

```plaintext
PROJECT-TEAM2-WINE/
├── .next/                      # Next.js 빌드 결과물
├── node_modules/               # npm 패키지 모듈
├── public/                     # 정적 파일 저장소
│   ├── assets/                 # 정적 리소스 (예: 이미지, 아이콘 등)
│   ├── fonts/                  # 웹 폰트 저장소
├── src/                        # 소스 코드 디렉토리
│   ├── components/             # 재사용 가능한 컴포넌트
│   ├── libs/                   # 유틸리티 및 API 호출 관련 함수
│   ├── pages/                  # Next.js 페이지 폴더 (라우팅 처리)
│   │   ├── myprofile/          # 마이프로필 관련 페이지
│   │   ├── signin/             # 로그인 페이지
│   │   ├── signup/             # 회원가입 페이지
│   │   ├── wines/              # 와인 관련 페이지
│   │   ├── _app.tsx            # Next.js의 글로벌 설정 파일
│   │   ├── _document.tsx       # HTML 문서 구조 설정 파일
│   │   ├── index.tsx           # 메인 페이지
│   ├── styles/                 # 스타일 관련 파일 저장
│   │   ├── Landing.module.css  # 특정 컴포넌트 스타일
├── .env.local                  # 환경 변수 설정 파일
├── .gitignore                  # Git에서 제외할 파일 목록
├── eslint.config.mjs           # ESLint 설정 파일
├── next-env.d.ts               # Next.js 환경 타입 정의
├── next.config.ts              # Next.js 설정 파일
├── package-lock.json           # 종속성 버전 고정 파일
├── package.json                # 프로젝트 종속성 및 스크립트 정의
├── README.md                   # 프로젝트 개요 및 사용법 설명
└── tsconfig.json               # TypeScript 설정 파일


```

<br/>
<br/>

# 6. Development Workflow

## 브랜치 전략 (Branch Strategy)

- Main Branch

  - 배포 가능한 상태의 코드를 유지합니다.
  - 모든 배포는 이 브랜치에서 이루어집니다.

- features Branch

  - 최종 배포 브랜치 전, 마지막 점검 브랜치입니다.
  - 컨플릭 해결 및 테스트 코드 작성 후 배포 브랜치로 병합합니다.

- 페이지/이슈번호/세부작업내용 (ex. signin/30/validation)
  - 가장 하위 개발 브랜치입니다.
  - 모든 기능 개발은 이 브랜치에서 이루어집니다.

<br/>
<br/>

## 커밋 태그

- feat: 새로운 기능을 추가할 때 사용합니다.
  - 예: feat: add login functionality
- fix: 버그를 수정할 때 사용합니다.
  - 예: fix: correct issue with user registration
- docs: 문서와 관련된 변경사항 (README.md, API 문서 등).
  - 예: docs: update API documentation
- style: 코드의 스타일(포맷팅, 세미콜론 누락 등) 변경으로, 기능적 변화는 없는 경우.
  - 예: style: format code to improve readability
- refactor: 코드 리팩토링 (기능 변경 없이 코드 구조 개선).
  - 예: refactor: simplify user validation logic
- test: 테스트 코드의 추가 또는 수정.
  - 예: test: add tests for authentication module
- chore: 빌드, 도구 설정 등 기능적이지 않은 변경사항.
  - 예: chore: update dependencies
- perf: 성능 개선 관련 변경사항.
  - 예: perf: optimize database query performance
- build: 빌드 시스템이나 외부 종속성에 영향을 미치는 변경사항.
  - 예: build: update webpack configuration
- revert: 이전 커밋을 되돌릴 때 사용합니다.
  - 예: revert: revert commit abc123
- hotfix: 긴급하게 버그를 수정할 때 사용합니다.
  - 예: hotfix: fix critical login issue

<br/>
<br/>
