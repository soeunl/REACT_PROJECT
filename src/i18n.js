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
  lng: navigator.language,
  // 알아서 감지해서 바꾼다. 현재 언어에 따라서 코드를 가지고 온다
});
