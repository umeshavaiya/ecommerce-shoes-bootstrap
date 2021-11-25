import React, { useState, useEffect } from 'react'
import './Navbar.css'
import homeShoesimg from '../images/home.jpg'
import styled from 'styled-components'
import { CloseOutlined } from '@ant-design/icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from "react-reveal/Fade";
import { Link } from 'react-router-dom'
import Login from '../pages/Login'




const NavbarHad = ({ match }) => {

    const [burgerStatus, setBurgerStatus] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);
    useEffect(() => {
        document.title = "Welcome to Shoes"
    }, []);


    return (
        <>
            <div className="containers">
                <img src={homeShoesimg} alt="Notebook" />
                <div className="contents">
                    <Fade top>
                        <div className="fixed__nav">
                            <nav className="nav nav__size">
                                <Link to='/'>
                                    <h1>Shoes</h1>
                                </Link>
                                <div className='nav__comp'>
                                    <ul className='nav__comp__ul' >
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/products">Men</Link></li>
                                        <li><Link to="/shoes/women">Women</Link></li>
                                        <li><Link to="/shoes/kids">Kids</Link></li>
                                        <li><Link to="">Sale</Link></li>
                                    </ul>
                                    <Link to='/'>
                                        <i onClick={() => setButtonPopup(true)} className="fas fa-user"></i>
                                    </Link>
                                    <Link to="/cart">
                                        <i className="fas fa-shopping-cart"></i>
                                    </Link>

                                </div>
                            </nav>
                        </div>
                    </Fade>
                    <div className="special__edition">
                        <Fade cascade>
                            <h2>SPECIAL EDITION</h2>
                            <p>Lorem ipsum dolor sit, amet consec</p>
                            <p>adipisicing elit. Incidunt </p>
                        </Fade>
                    </div>
                </div>
            </div>
            <div onClick={() => setBurgerStatus(true)} className="menu">
                <i className="fas fa-bars"></i>
            </div>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper className="user__name">
                    <p>Hello,User</p>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <div className="slider__text">
                    <Link to="/">
                        <button onClick={() => setButtonPopup(true)} className="login__btn" type="button" className="btn btn-secondary">Login</button>
                    </Link>
                    <ul>
                        <li><li>
                            <Link to="/">
                                <a className="menu_hover">Home </a>
                            </Link>
                        </li><li><i className="far fa-angle-right"></i></li></li>
                        <li><li>
                            <Link to="/shoes/men">
                                <a className="menu_hover">Men </a>
                            </Link>
                        </li><li><i className="far fa-angle-right"></i></li></li>
                        <li><li>
                            <Link to="/shoes/women">
                                <a className="menu_hover">Women </a>
                            </Link>
                        </li><li><i className="far fa-angle-right"></i></li></li>
                        <li><li>
                            <Link to="/shoes/kids">
                                <a className="menu_hover">Kides </a>
                            </Link>
                        </li><li><i className="far fa-angle-right"></i></li></li>
                        <li><li>
                            <Link to="/">
                                <a className="menu_hover">Sale </a>
                            </Link>
                        </li><li><i className="far fa-angle-right"></i></li></li>
                    </ul>
                </div>
            </BurgerNav>
            <Login trigger={buttonPopup} fromTo='/'></Login>

        </>
    )
}

export default NavbarHad

const BurgerNav = styled.div`
            position:fixed;
            top:0;
            bottom:0;
            left:0;
            background: #d664f0 !important;
            color:#fff;
            width: 70%;
            z-index: 16;
            list-style: none;
            padding: 30px 30px 0 50px;
            display:flex;
            flex-direction:column;
            text-align: start;
            font-size:20px;
            transform: ${props => props.show ? 'translateX(0%)' : 'translateX(-101%)'};
            transition: transform 0.4s !important;
            `

const CustomClose = styled(CloseOutlined)`
            cursor:pointer;
            `

const CloseWrapper = styled.div`
            display: flex;
            justify-content: flex-end;
            padding-bottom:20px;
            `
