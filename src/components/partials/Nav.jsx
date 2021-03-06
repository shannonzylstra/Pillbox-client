import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {
  const handleLogout = e => {
    e.preventDefault()
    // Remove the token from localstorage (or cookies)
    localStorage.removeItem('mernToken')

    // Update the state of the App
    props.updateUser()
  }


  let links = ''

  // If the user is logged in, show profile page and logout links
  if (props.user) {
    links = (
      <span>
        <li>Hello {props.user.firstname}</li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <a href="/" onClick={handleLogout}>Logout</a>
        </li>
      </span>
    )
  }
  else { // Otherwise, show them login/signup
    links = (
      <span>
        <li>
          <Link to="/signin">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </span>
    )
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
              <img src="/img/pills-solid.svg" height="30px" />
              <span> PillBox</span>
          </Link>
        </li>
        {links}
      </ul>
    </nav>
  )
}

export default Nav
