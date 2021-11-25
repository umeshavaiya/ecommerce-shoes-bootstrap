import React, { useState } from 'react'
import { Link } from "react-router-dom"
import Login from '../../pages/Login';
import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from "react-redux"
import { logout } from '../../redux/action';
import Profile from '../../pages/Profile';


function Hed() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopupDetails, setButtonPopupDetails] = useState(false);

    // database userInfo
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin;
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout())
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <Link to="/">
                        <a href="/#" className="navbar-brand">Shoes</a>
                    </Link>
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
                        {userInfo ? (
                            <NavDropdown title={capitalizeFirstLetter(userInfo.name)} id="username">
                                <LinkContainer to='/products'>
                                    <NavDropdown.Item onClick={() => setButtonPopupDetails(true)}>
                                        Profile
                                    </NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        ) : (
                            <div className="icon__color">
                                <Link to='/products'>
                                    <i onClick={() => setButtonPopup(true)} className="fas fa-user"></i>
                                </Link>
                            </div>
                        )}
                        <div className="icon__color">
                            <Link to="/cart">
                                <i className="fas fa-shopping-cart"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Login trigger={buttonPopup} fromTo='/me1'></Login>
            <Profile trigger={buttonPopupDetails} fromTo="/me1"></Profile>
        </div>
    )
}

export default Hed
