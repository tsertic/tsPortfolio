import React from 'react';
import module from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
export default function Navbar() {
    return (
        <div className={module.Navbar} >
            <div className={module.Iconbox}>
                <NavLink exact to='/'>
                <i className='fa fa-home'></i>
                <p>Home</p>
                </NavLink>
                
            </div>
            <div className={module.Iconbox}>
                <NavLink exact to='/projects'>
                <i className='fa fa-hammer'></i>
                <p>Projects</p>
                </NavLink>
                
            </div>
            <div className={module.Iconbox}>
                <NavLink exact to='/contact'>
                    <i className='fas fa-envelope'></i>
                    <p>Contact</p>
                    </NavLink>
                
            </div>
            
        </div>
    )
}
