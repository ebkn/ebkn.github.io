import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/home';
import Skills from './pages/skills';
import Works from './pages/works';
import Jobs from './pages/jobs';
import NotFound from './pages/notFound';
import MobileSideBar from './molecules/mobileSideBar';
import PcSideBar from './molecules/pcSideBar';
import Copyright from './molecules/copyright';
import { isMobile } from './utils';

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <StyledContainer>
      {isMobile() ? <MobileSideBar /> : <PcSideBar />}
      <StyledMain>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/works" exact component={Works} />
          <Route path="/jobs" exact component={Jobs} />
          <Route component={NotFound} />
        </Switch>
        <Copyright />
      </StyledMain>
    </StyledContainer>
  </BrowserRouter>
);
const StyledContainer = styled.div`
  display: flex;
  width: 100vw;
`;
const StyledMain = styled.main`
  width: 100%;
  box-sizing: border-box;
  padding: 30px 20px 20px 20px;
  padding-left: {() => isMobile()? '0' : "30%"};
`;
export default App;
