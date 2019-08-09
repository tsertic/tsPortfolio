import React from 'react';
import module from './Home.module.css';
function Home() {
    return (
        <div className={module.Home}>
            <div className={module.Content}>
               <h1>Tomislav Sertić</h1>
            <p>Front End Web Developer</p>
            <div className={module.SocialBtn}>
                <a href='#'><i className='fab fa-github'></i> <span className={module.LinkTxt}>github</span></a>
                <a href='#'><i className='fab fa-instagram'></i> <span className={module.LinkTxt}>instagram</span></a>
                <a href='#'><i className='fab fa-linkedin'></i> <span className={module.LinkTxt}>linkedin</span></a>
            </div> 
            </div>
            
        </div>
    )
}

export default Home
