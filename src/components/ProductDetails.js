import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductDetails.css'
import yellowShoes from '../images/mensblue.png'
import Login from '../pages/Login';
import { Card, Typography } from 'antd';
import Footer from './Footer';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styled from 'styled-components'
import { CloseOutlined } from '@ant-design/icons';

function ProductDetails() {

    const [buttonPopup, setButtonPopup] = useState(false);
    const { Meta } = Card;
    const { Title } = Typography;
    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <>
            <div className="main__nav">
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
                                <Link to='/shoes/men/Productdetails'>
                                    <i onClick={() => setButtonPopup(true)} className="fas fa-user"></i>
                                </Link>
                                <Link to="/checkout">
                                    <i className="fas fa-shopping-cart"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="pro__img">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={yellowShoes} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={yellowShoes} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={yellowShoes} alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span style={{ fontSize: '50px', color: '#757575', overflow: ' hidden', zIndex: '15' }}> <i className="fa fa-angle-left" aria-hidden="true"></i></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span style={{ fontSize: '50px', color: '#757575', overflow: ' hidden', zIndex: '15' }}> <i className="fa fa-angle-right" aria-hidden="true"></i></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div className="main__productdetails">
                <div className="productdetails__img">
                    <div className="productlink">
                        <h2>Shoes / Men / Shoes Name</h2>
                    </div>
                    <div className="prodetails__img__main">
                        <div className="prodetails__img">
                            <img src={yellowShoes} />
                        </div>
                        <div className="prodetails__img">
                            <img src={yellowShoes} />
                        </div>
                    </div>
                    <div className="prodetails__img__main prodetails__img__main2">
                        <div className="prodetails__img">
                            <img src={yellowShoes} />
                        </div>
                        <div className="prodetails__img">
                            <img src={yellowShoes} />
                        </div>
                    </div>
                    <div className="prodetails__img__main prodetails__img__main2" >
                        <div className="prodetails__img" >
                            <img src={yellowShoes} />
                        </div>
                    </div>
                </div>
                <div className="productdetails__text">
                    <div className="productlink2">
                        <h2>Shoes Name</h2>
                        <h2>Rs: 2100 <span style={{ textDecoration: "line-through", color: '#5d5d5d', fontSize: '25px' }}>Rs.3000</span><span style={{ fontSize: '29px', color: "#a42324" }}> (30% off)</span></h2>
                        <p>(inclusive of all taxes)</p>
                    </div>
                    <hr />
                    <div className="prodetails__size">
                        <h2>Select Size (UK) {' '}<span style={{ color: '#a42324', fontSize: '23px' }}>&nbsp;&nbsp;Size Chart</span></h2>
                        <div className="prodetails__btn">
                            <div className="size__button prodetails__size__btn">
                                <p type="button">3</p>
                                <p type="button">3.5</p>
                                <p type="button">4</p>
                                <p type="button">4.5</p>
                                <p type="button">5</p>
                                <p type="button">5.5</p>
                                <p type="button">6</p>
                            </div>
                            <div className="size__button prodetails__size__btn">
                                <p type="button">6.5</p>
                                <p type="button">7</p>
                                <p type="button">7.5</p>
                                <p type="button">8</p>
                                <p type="button">8.5</p>
                                <p type="button">9</p>
                                <p type="button">9.5</p>
                            </div>
                            <div className="size__button prodetails__size__btn">
                                <p type="button">10</p>
                                <p type="button">10.5</p>
                                <p type="button">11</p>
                                <p type="button">11.5</p>
                                <p type="button">12</p>
                                <p type="button">12.5</p>
                                <p type="button">13</p>
                            </div>
                            <div className="size__button prodetails__size__btn">
                                <p type="button">13.5</p>
                                <p type="button">14</p>
                                <p type="button">14.5</p>
                                <p type="button">15</p>
                                <p type="button">16</p>
                                <p type="button">17</p>
                                <p type="button">17.5</p>
                            </div>
                        </div>
                    </div>
                    <div className="prodetails__color">
                        <h2>Available Color</h2>
                        <div className="prodetails__color1">
                            <div classNameq="prodetails__color__btn">
                                <button className="my-button"></button>
                                <p>Black</p>
                            </div>
                            <div classNameq="prodetails__color__btn">
                                <button className="my-button" style={{ background: "#aa5514" }}></button>
                                <p>Brown</p>
                            </div>
                        </div>
                    </div>
                    <div className="prodetails__purches__button">
                        <button className="prodetails__purches__button1">Add to Cart</button>
                        <button className="prodetails__purches__button2">Buy Now</button>
                    </div>
                    <div className="delivery__option">
                        <h2>Delivery option</h2>
                        <div className="delivery__option__example">
                            <input type="number" maxLength="6" placeholder="Check Pincode" />
                            <button>Check</button>
                        </div>
                        <p>Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                    </div>
                    <div className="product__details">
                        <h2>PRODUCT DETAILS</h2>
                        <p>Special Technology:</p>
                        <ul>
                            <li>SoftFoam+ sockliner: Cushioned footbed and sockliner provides optimal step-in comfort</li>
                        </ul>
                        <p>Design Details:</p>
                        <ul>
                            <li>A pair of round-toe white sneakers, has mid-top styling, lace-up detail</li>
                            <li>Mid-top silhouette</li>
                            <li> Synthetic leather upper with perforated details on vamp</li>
                            <li>Full lace closure with mid-rise lacing option</li>
                            <li>Lace-through TPU cage at side for additonal support</li>
                            <li>IMEVA midsole for soft cushioning and comfort</li>
                            <li>Rubber outsole provides traction and grip</li>
                            <li>Webbing pull loops at heel and tongue</li>
                            <li>Cushioned footbed</li>
                            <li>Textured and patterned outsole</li>
                            <li>Warranty: 3 months</li>
                            <li>Warranty provided by brand/manufacturer</li>
                        </ul>
                    </div>
                    <div className="material">
                        <p>Material & Care</p>
                        <span style={{ fontSize: '20px', color: '#656565' }}>Synthetic Leather</span><br />
                        <span style={{ fontSize: '20px', color: '#656565' }}>Wipe with a clean, dry cloth to remove dust</span>
                    </div>
                </div>
            </div>
            <div className="similer__product">
                <div className="similer__product1">
                    <h2>SIMILER PRODUCTS</h2>
                </div>
                <div className="similer__product__1">
                    <div className="similer__img">
                        <Card
                            className="card__Antds product__card"
                            hoverable
                            style={{ width: 300, transition: "transform 0.4s", borderRadius: '15px' }}
                            cover={<img style={{ borderRadius: '15px', padding: "50px" }} alt="example" src={yellowShoes} />}
                        >
                            <Meta style={{ marginBottom: "8px" }} description="Sport Shoes" />
                            <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>Running Shoes</Title>} />
                            <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>$200</Title>} />
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        </Card>
                        <Card
                            className="card__Antds product__card"
                            hoverable
                            style={{ width: 300, transition: "transform 0.4s", borderRadius: '15px' }}
                            cover={<img style={{ borderRadius: '15px', padding: "50px" }} alt="example" src={yellowShoes} />}
                        >
                            <Meta style={{ marginBottom: "8px" }} description="Sport Shoes" />
                            <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>Running Shoes</Title>} />
                            <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>$200</Title>} />
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        </Card>
                    </div>
                    <div className="similer__img similer__img__1">
                        <Card
                            className="card__Antds product__card"
                            hoverable
                            style={{ width: 300, transition: "transform 0.4s", borderRadius: '15px' }}
                            cover={<img style={{ borderRadius: '15px', padding: "50px" }} alt="example" src={yellowShoes} />}
                        >
                            <Meta style={{ marginBottom: "8px" }} description="Sport Shoes" />
                            <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>Running Shoes</Title>} />
                            <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>$200</Title>} />
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        </Card>
                        <Card
                            className="card__Antds product__card"
                            hoverable
                            style={{ width: 300, transition: "transform 0.4s", borderRadius: '15px' }}
                            cover={<img style={{ borderRadius: '15px', padding: "50px" }} alt="example" src={yellowShoes} />}
                        >
                            <Meta style={{ marginBottom: "8px" }} description="Sport Shoes" />
                            <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>Running Shoes</Title>} />
                            <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>$200</Title>} />
                            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        </Card>
                    </div>
                </div>
            </div>
            <div className="menShoes__footer">
                <Footer />
            </div>
            <div onClick={() => setBurgerStatus(true)} className="menu menu__color">
                <i class="fas fa-bars"></i>
            </div>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper className="user__name">
                    <p>Hello,User</p>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <div className="slider__text">
                    <Link to="/">
                        <button onClick={() => setButtonPopup(true)} className="login__btn" type="button" class="btn btn-secondary">Login</button>
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
            <Login trigger={buttonPopup} fromTo='/shoes/men/Productdetails'></Login>
        </>
    )
}

export default ProductDetails


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
            transform: ${props => props.show ? 'translateX(0%)' : 'translateX(-100%)'};
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