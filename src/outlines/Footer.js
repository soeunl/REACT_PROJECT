import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.footer`
  min-height: 250px;
  background: #eddcf3;
`;

const Footer = () => {
  return <FooterBox>푸터</FooterBox>;
};

export default React.memo(Footer);
