import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/main';
import AboutMe from './pages/aboutMe';
import Skills from './pages/skills';
import Works from './pages/works';
import Jobs from './pages/jobs';
import NotFound from './pages/notFound';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/aboutme" exact component={AboutMe} />
          <Route path="/skills" exact component={Skills} />
          <Route path="/works" exact component={Works} />
          <Route path="/jobs" exact component={Jobs} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
