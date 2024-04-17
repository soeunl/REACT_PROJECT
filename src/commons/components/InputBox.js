import React from 'react';
import styled from 'styled-components';

const InputBox = styled.input`
  border: 1px solid #d5d5d5;
  width: 100%;
  height: 40px;
  pading: 0 10px;
  border-radius: 3px;
`;

export default React.memo(InputBox);
