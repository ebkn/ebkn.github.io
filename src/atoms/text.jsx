import React from "react";
import styled from "styled-components";

const Text = ({ text }) => <StyledP>{text}</StyledP>;
const StyledP = styled.p`
  font-size: 16px;
  line-height: 16px;
  word-break: break-all;
  color: #212121;
`;
export default Text;
