import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { isMobile } from "../utils";

const SideBar = () =>
  isMobile() ? (
    <Menu width="250" styles={menuStyles}>
      <Link to="/">Top</Link>
      <Link to="/aboutme">About me</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/works">Works</Link>
      <Link to="/jobs">Jobs</Link>
    </Menu>
  ) : (
    <StyledMobileMenu>
      <MobileLinkWrapper>
        <MobileStyledLink to="/">Top</MobileStyledLink>
        <MobileStyledLink to="/aboutme">About me</MobileStyledLink>
        <MobileStyledLink to="/skills">Skills</MobileStyledLink>
        <MobileStyledLink to="/works">Works</MobileStyledLink>
        <MobileStyledLink to="/jobs">Jobs</MobileStyledLink>
      </MobileLinkWrapper>
    </StyledMobileMenu>
  );
const menuStyles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px"
  },
  bmBurgerBars: {
    background: "#212121"
  },
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em"
  },
  bmItem: {
    display: "block",
    padding: "10px 0",
    color: "#FAFAFA",
    textDecoration: "none"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};
const StyledMobileMenu = styled.div`
  display: fixed;
  width: 30%;
  height: 100vh;
  box-sizing: border-box;
  padding: 2.5em 1.5em 0;
  border-right: 2px dashed #9E9E9E;
`;
const MobileLinkWrapper = styled.div`
`;
const MobileStyledLink = styled(Link)`
  display: block;
  padding: 10px 0;
  color: #424242;
  text-decoration: none;
`;
export default SideBar;
