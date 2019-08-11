import React from 'react';
import module from './Home.module.css';
import {Link} from 'react-router-dom';
function Home() {
    return (
        <div className={module.Home}>
            <div className={module.Content}>
               <h1>Tomislav Sertić</h1>
            <p>Front End Web Developer</p>
            <div className={module.SocialBtn}>
                <Link to='/'><i className='fab fa-github'></i> <span className={module.LinkTxt}>github</span></Link>
                <Link to='/'><i className='fab fa-instagram'></i> <span className={module.LinkTxt}>instagram</span></Link>
                <Link to='/'><i className='fab fa-linkedin'></i> <span className={module.LinkTxt}>linkedin</span></Link>
            </div> 
            </div>
            
        </div>
    )
}

export default Home
