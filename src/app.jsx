import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import styled from "styled-components";
import Main from "./pages/main";
import AboutMe from "./pages/aboutMe";
import Skills from "./pages/skills";
import Works from "./pages/works";
import Jobs from "./pages/jobs";
import NotFound from "./pages/notFound";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu width="250" styles={menuStyles}>
            <StyledLink to="/">Top</StyledLink>
            <StyledLink to="/aboutme">About me</StyledLink>
            <StyledLink to="/skills">Skills</StyledLink>
            <StyledLink to="/works">Works</StyledLink>
            <StyledLink to="/jobs">Jobs</StyledLink>
          </Menu>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/aboutme" exact component={AboutMe} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/works" exact component={Works} />
            <Route path="/jobs" exact component={Jobs} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const StyledLink = styled(Link)``;
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
    textDecoration: "none",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};
