import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import JoinForm from '../components/JoinForm';
import { OuterBox } from '../components/LayoutBox';

const Join = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('회원가입')}</title>
      </Helmet>
      <OuterBox>
        <h1>{t('회원가입')}</h1>
        <JoinForm /> {/* 제목도 비슷하게 쓰기 위해 컴포넌트를 분리함 */}
      </OuterBox>
    </>
  );
};

export default React.memo(Join);
