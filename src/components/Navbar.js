import React from 'react'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className="navbar-text">
                <div className="logo"> <img src="img/logo.png" alt="logo"/> </div>
                <ul className='navbar__ul'><li>  <a href=''>Home</a>  </li>
                    <li>  <a href=''>Menu</a>  </li>
                    <li>  <a href=''>About</a>  </li>
                    <li>  <a href=''>Contact</a>  </li>
                    <li>  <a href=''>Shop</a> </li>
                    <li>  <a href=''>Contact</a> </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar