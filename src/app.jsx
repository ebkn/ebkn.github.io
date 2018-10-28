import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Main from "./pages/main";
import AboutMe from "./pages/aboutMe";
import Skills from "./pages/skills";
import Works from "./pages/works";
import Jobs from "./pages/jobs";
import NotFound from "./pages/notFound";
import SideBar from "./molecules/sideBar";
import Copyright from "./molecules/copyright";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <GlobalStyledDiv>
          <SideBar />
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
  display: flex;
  width: 100vw;
  background-color: "FAFAFA";
  font-family: "Source Code Pro", sans-serif;
`;
const StyledContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 30px 20px 20px 20px;
  padding-left: {
    ()=>isMobile() ? '0' : "30%";
  };
`;
