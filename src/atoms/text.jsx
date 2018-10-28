import React from "react";
import styled from "styled-components";

const Text = ({ text }) => (
  <TextWrapper>
    <StyledP>{text}</StyledP>
  </TextWrapper>
);
const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;
const StyledP = styled.p`
  font-size: 16px;
  line-height: 16px;
  word-break: break-all;
  color: #212121;
`;
export default Text;
