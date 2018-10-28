import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './mobile/main';
import AboutMe from './mobile/aboutMe';
import Skills from './mobile/skills';
import Works from './mobile/works';
import Jobs from './mobile/jobs';
import NotFound from './mobile/notFound';

export default class MobileApp extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
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
  }
}
