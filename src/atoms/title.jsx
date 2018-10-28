import React from "react";
import styled from "styled-components";

const Title = ({ title }) => <StyledH1>{title}</StyledH1>;
const StyledH1 = styled.h1`
  margin: 0;
  padding: 25px 0;
  font-size: 26px;
  color: #212121;
  text-align: center;
`;
export default Title;
