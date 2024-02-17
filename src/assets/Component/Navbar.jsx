import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    return (
        <div className='navbar mb-5'>
            <div className='container navbarchild'>
                <ul>
                    <li><a href="/"> <FontAwesomeIcon icon={faBars} /></a></li>
                    <li><a href="#"><img src="https://cdn.britannica.com/mendel-resources/3-111/images/games/games_nav_logo.png?v=3.111.26" alt="" /></a></li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar