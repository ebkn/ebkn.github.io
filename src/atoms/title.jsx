import React from "react";
import styled from "styled-components";

const Title = ({ title }) => <h1>{title}</h1>;
export default styled(Title)`
  padding: 5px;
  font-size: 18px;
  color: "#212121";
`;
