import React from 'react';
import module from './Projects.module.css';
import appOne from './../imgs/11.jpg';
import appTwo from './../imgs/22.jpg';
import appThree from './../imgs/33.jpg';
function Projects() {
    return (
        <div className={module.Projects}>
            <div className={module.ProjectsBox}>
                <img src={appTwo} />
                <a href='#'><i className='fab fa-github'></i> <span className={module.LinkTxt}>github</span></a>
                <a href='#'><i className='fab fa-github'></i> <span className={module.LinkTxt}>github</span></a>
            </div>
            <div className={module.ProjectsBox}>
                <img src={appOne} />
                <a href='#'><i className='fab fa-github'></i> <span className={module.LinkTxt}>github</span></a>
                <a href='#'><i className='fab fa-github'></i> <span className={module.LinkTxt}>github</span></a>
            </div>
            <div className={module.ProjectsBox}>
                <img src={appThree} />
                <p className={module.infoTxt}>Weather app <i className='fa fa-info'></i></p>
                <a href='#'><i className='fab fa-github'></i> <span className={module.LinkTxt}>github</span></a>
                <a href='#'><i className='fab fa-github'></i> <span className={module.LinkTxt}>github</span></a>
            </div>
           
        </div>
    )
}

export default Projects
