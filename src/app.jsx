import React, { Component } from 'react';
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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sideBarOpen: false };
  }

  toggleSideBarOpen(e) {
    e.preventDefault();
    this.setState(prevState => ({ sideBarOpen: !prevState.sideBarOpen }));
  }

  render() {
    const { sideBarOpen } = this.state;
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <StyledContainer>
          {isMobile() ? (
            <MobileSideBar
              open={sideBarOpen}
              toggleOpen={e => this.toggleSideBarOpen(e)}
            />
          ) : <PcSideBar />}
          <StyledMain sideBarOpen={sideBarOpen}>
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
  }
}
const StyledContainer = styled.div`
  display: flex;
  width: 100vw;
`;
const StyledMain = styled.main.attrs({
  style: (props => (
    (isMobile() && !props.sideBarOpen) ? ({
      marginLeft: '0',
    }) : ({
      marginLeft: '30%',
    })
  )),
})`
  width: 100%;
  box-sizing: border-box;
  padding: 30px 10px 20px 10px;
`;
