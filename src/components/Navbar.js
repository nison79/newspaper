import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">
              <StaticImage src="../images/GEORGE NIKOGLOU 3.png" 
              width={80}
              />
            
            </Link>
          <ul>
              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="about">
                  About
                </Link>
              </li>
            </ul>
      </nav>
    </div>
  )
}

export default Navbar
