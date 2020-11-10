import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className='NavBar'>
                <Link to='/'><h1 className='nav-title'>AirBnZ</h1></Link>
                <Link to='/spaces'><h3>Spaces</h3></Link>
                <Link to='/profile'><h3>Profile</h3></Link>
            </nav>
        </div>
    )
}

export default NavBar
