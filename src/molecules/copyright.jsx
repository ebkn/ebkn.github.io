import React from 'react';
import styled from 'styled-components';
import Text from '../atoms/text';

const Copyright = () => (
  <StyledWrapper>
    <Text text="&copy; 2018 Ebinuma Kenichi" />
  </StyledWrapper>
);
const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
export default Copyright;
