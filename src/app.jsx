import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/home';
import Skills from './pages/skills';
import Works from './pages/works';
import Jobs from './pages/jobs';
import NotFound from './pages/notFound';
import SideBar from './molecules/sideBar';
import Copyright from './molecules/copyright';

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <GlobalStyledDiv>
      <SideBar />
      <StyledContainer>
        <Switch>
          <Route path="/" exact component={Home} />
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
export default App;
const GlobalStyledDiv = styled.div`
  display: flex;
  width: 100vw;
  background-color: "FAFAFA";
  font-family: "Source Code Pro", sans-serif;
`;
const StyledContainer = styled.main`
  width: 100%;
  box-sizing: border-box;
  padding: 30px 20px 20px 20px;
  padding-left: {() => isMobile()? '0' : "30%"};
`;
