import React from 'react'
import {Route,Switch} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import module from './Content.module.css';

function Content() {
    return (
        

        
            <AnimatedSwitch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0.4 }} atActive={{ opacity: 1 }}  className={module.switchwrapper}>
           
               <Route exact path='/' component={Home}/>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/contact' component={Contact}/> 
            
            
            </AnimatedSwitch>
        
        
    )
}


export default Content
