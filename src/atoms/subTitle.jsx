import React from 'react';
import styled from 'styled-components';

const SubTitle = ({ title }) => <StyledH2>{title}</StyledH2>;
const StyledH2 = styled.h2`
  margin: 0;
  padding: 15px 0;
  font-size: 22px;
  color: #212121;
  text-align: center;
`;
export default SubTitle;
