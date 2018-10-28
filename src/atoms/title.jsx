import React from "react";
import styled from "styled-components";

const Title = ({ title }) => <StyledH1>{title}</StyledH1>;
const StyledH1 = styled.h1`
  margin: 0;
  padding: 5px;
  font-size: 24px;
  color: "#212121";
  text-align: center;
`;
export default Title;
