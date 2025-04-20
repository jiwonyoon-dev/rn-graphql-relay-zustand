# rn-graphql-relay-zustand

React Native + GraphQL + Relay + Zustand 상태 관리 학습 프로젝트

## 🎯 프로젝트 목표

- React Native CLI 기반으로 앱 프로젝트를 초기화하고 기본 빌드가 가능한 상태로 구성
- GraphQL & Relay 환경을 설정하고 정적 타입 기반 쿼리 구조 이해
- Zustand를 도입하여 간단한 상태 관리 기능 구현 및 반응성 확인

## 📦 사용 기술

| 기술 | 설명 |
|------|------|
| React Native CLI | 앱 프로젝트 생성 및 실행 |
| Relay | GraphQL 기반의 타입 안전한 데이터 관리 |
| GraphQL | API 데이터 모델링 |
| Zustand | 전역 상태 관리 라이브러리 |
| TypeScript | 정적 타입 기반 개발 |

## 🧠 학습 흐름

### ✅ [chore] React Native 초기 셋업 (#1)

- `npx @react-native-community/cli init` 명령으로 프로젝트 초기화
- iOS / Android 시뮬레이터에서 기본 앱 실행 성공 확인

### ✅ [feature] GraphQL & Relay 환경 설정 (#2)

- `graphql`, `react-relay`, `relay-runtime` 등 핵심 의존성 설치
- `relay.config.json`, `babel.config.js` 설정
- `schema.graphql` 파일 작성 (SDL)
- `yarn relay` 명령으로 `__generated__` 타입 자동 생성
- `TestQueryScreen.tsx`에서 `useLazyLoadQuery`로 mock 데이터 출력

### ✅ [feature] Zustand 상태 관리 환경 설정 (#5)

- `zustand` 설치 및 기본 상태 스토어 생성 (`counterStore.ts`)
- 카운터 상태 (`count`, `increment`, `decrement`, `reset`) 정의
- `TestCounterScreen.tsx`에서 상태 변경 및 버튼 UI 구현


## 🧪 테스트 화면
- React Native 초기 셋업 및 iOS / Android 시뮬레이터에서 기본 앱 실행 성공 화면
  <img width="500" alt="스크린샷 2025-04-20 오후 6 13 44" src="https://github.com/user-attachments/assets/b22f735a-1f95-43d5-98e3-fa5bdc1b8359" />

- `TestQueryScreen`: mock GraphQL 데이터를 가져와 출력하는 Relay 테스트 화면
  <img width="500" alt="스크린샷 2025-04-20 오후 7 13 54" src="https://github.com/user-attachments/assets/e9df5f62-8c43-49d1-b7b6-0e0817dd9fa9" />

- `TestCounterScreen`: zustand를 이용한 간단한 카운터 UI
  
https://github.com/user-attachments/assets/4f6a7197-c990-4e4d-8fa8-d8d3b16b0468




## 📂 디렉토리 구조

```
src/
├── graphql/
│   ├── schema.graphql
│   └── environment.ts
├── screens/
│   ├── TestQueryScreen.tsx
│   └── TestCounterScreen.tsx
├── stores/
│   └── counterStore.ts
```
