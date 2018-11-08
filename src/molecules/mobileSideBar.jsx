import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MobileSideBar = ({ open, toggleOpen }) => (
  <StyledPcMenu open={open}>
    <IconWrapper onClick={e => toggleOpen(e)}>
      <ToggleIcon type="button">{open ? '<' : '>'}</ToggleIcon>
    </IconWrapper>
    {open ? (
      <div>
        <PcStyledLink to="/">Home</PcStyledLink>
        <PcStyledLink to="/skills">Skills</PcStyledLink>
        <PcStyledLink to="/works">Works</PcStyledLink>
        <PcStyledLink to="/jobs">Jobs</PcStyledLink>
      </div>
    ) : null}
  </StyledPcMenu>
);
const StyledPcMenu = styled.div.attrs({
  style: (props => (
    props.open ? ({
      borderRight: '2px dashed #9E9E9E',
    }) : null
  )),
})`
  position: fixed;
  width: 30%;
  height: 100vh;
  box-sizing: border-box;
  padding: 30px 10px;
`;
const IconWrapper = styled.div`
  width: 100%;
  height: 20px;
  padding: 25px 0;
  display: flex;
  align-items: center;
`;
const ToggleIcon = styled.button`
  font-size: 26px;
  line-height: 40px;
`;
const PcStyledLink = styled(Link)`
  display: block;
  padding: 15px 0;
  color: #424242;
  text-decoration: none;
`;
export default MobileSideBar;
