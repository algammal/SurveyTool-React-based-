import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../images/logoibm.png';

const Nav = () => {
    return(
        <div className='Nav-main-cont'>
            <NavLink className='logo' exact to='/'>
                <img src={Logo}/>
            </NavLink>
            <ul className="col-xs-12 menu-allitems no-padding">
                <NavLink className='menu-item' exact to='/'>Home</NavLink>
                <NavLink className='menu-item' to='/about'>About</NavLink>
            </ul>
        </div>
    )
}
export default Nav