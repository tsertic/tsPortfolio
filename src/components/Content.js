import React from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import module from './Content.module.css';
import AboutMe from './AboutMe/AboutMe';

function Content() {
  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0.4 }}
      atActive={{ opacity: 1 }}
      className={module.switchwrapper}
    >
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/aboutme" component={AboutMe} />
    </AnimatedSwitch>
  );
}

export default Content;
