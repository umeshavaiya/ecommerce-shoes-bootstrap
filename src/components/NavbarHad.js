import React from 'react'
import './Navbar.css'
function NavbarHad() {
    return (
        <>
            <div className="NavbarHad__main">
                <div className="container-fluid">
                    <nav className="nav nav__size">
                        <h1>Shoes</h1>
                        <div className='nav__comp'>
                            <ul className='nav__comp__ul' >
                                <li><a href="">Home</a></li>
                                <li><a href="">Men</a></li>
                                <li><a href="">Women</a></li>
                                <li><a href="">Kids</a></li>
                                <li><a href="">Sale</a></li>
                            </ul>
                            <button className="login__btn" type="button" class="btn btn-secondary">Login</button>
                        </div>
                    </nav>
                    <div className="special__edition">
                        <h2>SPECIAL EDITION</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur </p>
                        <p>adipisicing elit. Incidunt a nemo accusamus</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarHad
