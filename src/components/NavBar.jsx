import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <h3>
            <Link to={'/'}>Massenger</Link>
        </h3>
        <div>
            <Link to={'/registr'}>Registr</Link>
            <Link to={'/login'}>Login</Link>
        </div>
    </nav>
  )
}

export default NavBar