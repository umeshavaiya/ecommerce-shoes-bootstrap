import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Login from '../../pages/Login';

function Hed() {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link to="/">
                        <a href="/#" className="navbar-brand">Shoes</a>
                    </Link>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/">
                                    <a href="/#" className="nav-link active" aria-current="page">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shoes/men">
                                    <a href="/#" className="nav-link active" aria-current="page" >Men</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shoes/women">
                                    <a href="/#" className="nav-link active" aria-current="page" >Women</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shoes/kids">
                                    <a href="/#" className="nav-link active" aria-current="page" >Kids</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/#" className="nav-link active" aria-current="page" >Sale</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <div className="icon__color">
                            <Link to='/me1'>
                                <i onClick={() => setButtonPopup(true)} className="fas fa-user"></i>
                            </Link>
                            <Link to="/checkout">
                                <i className="fas fa-shopping-cart"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Login trigger={buttonPopup} fromTo='/me1'></Login>
        </div>
    )
}

export default Hed
