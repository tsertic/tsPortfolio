import React from 'react';
import module from './Projects.module.css';
import appOne from './../imgs/11.jpg';
import appTwo from './../imgs/22.jpg';
import appThree from './../imgs/33.jpg';
import {Link} from 'react-router-dom';
function Projects() {
    return (
        <div className={module.Projects}>
            <div className={module.ProjectsBox}>
                <img src={appTwo}  alt='project'/>
                <Link to='/'><i className='fab fa-github'></i> <span className={module.LinkTxt}>github</span></Link>
                <Link to='/'><i className='fab fa-github'></i> <span className={module.LinkTxt}>github</span></Link>
            </div>
            <div className={module.ProjectsBox}>
                <img src={appOne}  alt='project'/>
                <Link to='/'><i className='fab fa-github'></i> <span className={module.LinkTxt}>github</span></Link>
                <Link to='/'><i className='fab fa-github'></i> <span className={module.LinkTxt}>github</span></Link>
            </div>
            <div className={module.ProjectsBox}>
                <img src={appThree} alt='project' />
                <p className={module.infoTxt}>Weather app v0.2<i className='fa fa-info'></i></p>
                <Link to='/'><i className='fab fa-github'></i> <span className={module.LinkTxt}>github</span></Link>
                <Link to='/'><i className='fab fa-github'></i> <span className={module.LinkTxt}>github</span></Link>
            </div>
           
        </div>
    )
}

export default Projects
