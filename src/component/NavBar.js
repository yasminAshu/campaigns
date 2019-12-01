import React, { useState } from 'react';

   /**
   * 
   *@discription - This function will render the jsx of Navigation bar
   @param filtercampaigns - Value of campaign
   */

const NavBar = ({ filtercampaigns }) => {
    const [active, setActive] = useState("upcoming")
    
    /**
   * 
   *@discription - This function will handle the click of the navigation bar
   @param filtercampaigns - Value of campaign
   */
    function handleClick(value) {
        filtercampaigns(value)
        setActive(value)
    }
    return (
        <nav className="navbar">
            <ul className="champaigns-navbar">
                <li onClick={() => handleClick("upcoming")} className={`${active === 'upcoming' ? 'active' : ''}`}>Upcoming Champaigns</li>
                <li onClick={() => handleClick("live")} className={`${active === 'live' ? 'active' : ''}`} >Live Champaigns</li>
                <li onClick={() => handleClick("past")} className={`${active === 'past' ? 'active' : ''}`}>Past Champaigns </li>
            </ul>
        </nav>

    )
};

export default NavBar;