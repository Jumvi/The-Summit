import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/summit.css'

function Header(props) {
    return (
        <div>
            <header className='header'>
                <nav className='navigation'>
                    <NavLink to ="/thelodge" >THE LODGE</NavLink>
                    <NavLink to ="/ourskirunS" >OUR SKI RUNS</NavLink> 
                    <NavLink to ="/" className="summit">THE SUMMIT</NavLink>   
                    <NavLink to ="/howtogethere" >HOW TO GET</NavLink>
                    <NavLink to ="/contact" >CONTACT</NavLink>
                

                </nav>
            </header>

        </div>
        
    );
}

export default Header;