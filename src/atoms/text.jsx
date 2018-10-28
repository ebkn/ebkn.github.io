import React from "react";
import styled from "styled-components";

const Text = ({ text }) => <p>{text}</p>;
export default styled(Text)`
  font-size: 14px;
  line-height: 14px;
  word-break: break-all;
  color: "#212121";
`;
