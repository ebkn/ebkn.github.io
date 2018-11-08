import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PcSideBar = () => (
  <StyledPcMenu>
    <div>
      <PcStyledLink to="/">Home</PcStyledLink>
      <PcStyledLink to="/skills">Skills</PcStyledLink>
      <PcStyledLink to="/works">Works</PcStyledLink>
      <PcStyledLink to="/jobs">Jobs</PcStyledLink>
    </div>
  </StyledPcMenu>
);
const StyledPcMenu = styled.div`
  position: fixed;
  width: 30%;
  height: 100vh;
  box-sizing: border-box;
  padding: 2.5em 1.5em 0;
  border-right: 2px dashed #9E9E9E;
`;
const PcStyledLink = styled(Link)`
  display: block;
  padding: 10px 0;
  color: #424242;
  text-decoration: none;
`;
export default PcSideBar;
