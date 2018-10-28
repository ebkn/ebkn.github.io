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
import Copyright from "./molecules/copyright";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <GlobalStyledDiv>
          <Menu width="250" styles={menuStyles}>
            <Link to="/">Top</Link>
            <Link to="/aboutme">About me</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/works">Works</Link>
            <Link to="/jobs">Jobs</Link>
          </Menu>
          <StyledContainer>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/aboutme" exact component={AboutMe} />
              <Route path="/skills" exact component={Skills} />
              <Route path="/works" exact component={Works} />
              <Route path="/jobs" exact component={Jobs} />
              <Route component={NotFound} />
            </Switch>
            <Copyright />
          </StyledContainer>
        </GlobalStyledDiv>
      </BrowserRouter>
    );
  }
}
const GlobalStyledDiv = styled.div`
  background-color: "FAFAFA";
  font-family: "Source Code Pro", sans-serif;
`;
const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 30px 10px 10px 10px;
`;
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
