# 설정

## - .prettierrc 설정

```json
{
  "singleQuote": true,
  "semi": true,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all"
}
```

## 의존성

> 필요 라이브러리

- react-router-dom : 리액트 라우터 (페이지 나누는 기능)
- sass, styled-components, classnames : 스타일링 목적
- immer : 불변성 관리
- ract-icons : 리액트에서 제공하는 아이콘 라이브러리
- @loadable / component : 지연로딩
- helmet-async : head 태그 내의 내용을 변경 시

- 의존성 설치

```
yarn add react-router-dom sass styled-components classnames immer react-icons @loadable/component
yarn add react-helmet-async
```

## react-helmet-async 설정

- 사용법

- src/index.js

```jsx
...

import { HelmetProvider } from 'react-helmet-async';

... // 코드 생략

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);

```

## 메세지, 다국어 추리

- 의존성 : i18next, react-i18next
- 의존성 설치

```
yarn add i18next react-i18next
```

- 언어파일 생성

  - src/langs/ko, src/langs/en 폴더 생성
  - 각 폴더별로 공통 문구 - commons.js, 검증 문구 - validations.js, 에러 문구 - errors.js

- 언어파일 통합 : (예) src/langs/ko/index.js

```javascript
import commons from './commons';
import validations from './validations';
import errors from './errors';

const ko = { ...commons, ...validations, ...errors };

export default ko;
```

- 설정 파일 구성 : src/i18n.js

```javascript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './langs/ko'; // index.js는 생략가능
import en from './langs/en'; // index.js는 생략가능

const resources = {
  en: {
    translation: en,
  },
  ko: {
    translation: ko,
  },
};

i18n.use(initReactI18next).init({
  resources, // = resources : resources
  lng: 'ko',
});
```

- 설정 반영 : src/index.js

```javascript
...
import './i18n';
...

```

- 적용하기 : useTranslation 훅 / react-i18next
  - t : 메세지 조회 함수
  - i18n : 편의 기능 객체, changeLanguage(..) : 언어 변경
