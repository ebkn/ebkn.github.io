import React from "react";
import styled from "styled-components";
import Title from "../atoms/title";

const NotFound = () => (
  <StyledWrapper>
    <Title title="404 NOT FOUND" />
  </StyledWrapper>
);
const StyledWrapper = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default NotFound;
