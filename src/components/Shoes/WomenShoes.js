import React, { useState, useEffect } from 'react'
import "./MenShoes.css"
import { Link } from 'react-router-dom'
import Login from '../../pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Typography } from 'antd';
import yellowShoes from '../../images/running shoes.png'
import Footer from '../Footer';
import { CloseOutlined } from '@ant-design/icons';
import styled from 'styled-components'

function WomenShoes() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);
    const { Meta } = Card;
    const { Title } = Typography;
    useEffect(() => {
        document.title = "Women's Shoes"
    }, []);

    return (
        <>
            <div className="main__nav">
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
                            <div className="icon__color">
                                <Link to='/shoes/women'>
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
            <div className="shoes__pageMI">
                <div className="shoes__slider">
                    <div className="shoes__slider__0">
                        <h2>Shoes / Women</h2>
                    </div>
                    <div className="shoes__slider__1">
                        <h2>Men Shoes<span style={{ color: '#afafaf' }}> - 500 items</span></h2>
                        <hr />
                        <h5>Categories</h5>
                        <p>Running</p>
                        <p>training & Gym</p>
                        <p>Formal</p>
                        <p>Party</p>
                        <p>Sport</p>
                        <p>Football</p>
                        <p>Walking</p>
                        <p>Ethnic</p>
                        <p>Casual</p>
                        <hr />
                        <div>
                            <h5>Size</h5>
                            <div className="size__button">
                                <p type="button">3</p>
                                <p type="button">3.5</p>
                                <p type="button">4</p>
                                <p type="button">4.5</p>
                                <p type="button">5</p>
                            </div>
                            <div className="size__button">
                                <p type="button">5.5</p>
                                <p type="button">6</p>
                                <p type="button">6.5</p>
                                <p type="button">7</p>
                                <p type="button">7.5</p>
                            </div>
                            <div className="size__button">
                                <p type="button">8</p>
                                <p type="button">8.5</p>
                                <p type="button">9</p>
                                <p type="button">9.5</p>
                                <p type="button">10</p>
                            </div>
                            <div className="size__button">
                                <p type="button">10.5</p>
                                <p type="button">11</p>
                                <p type="button">11.5</p>
                                <p type="button">12</p>
                                <p type="button">12.5</p>
                            </div>
                            <div className="size__button">
                                <p type="button">13</p>
                                <p type="button">13.5</p>
                                <p type="button">14</p>
                                <p type="button">14.5</p>
                                <p type="button">15</p>
                            </div>
                            <div className="size__button size__button__6 ">
                                <p type="button">16</p>
                                <p type="button">17</p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h5>Price</h5>
                            <div className="price__button">
                                <input type="checkbox" name="optiona" id="opta" />
                                <span style={{ paddingLeft: '30px', color: "#afafaf" }} >
                                    Rs. 1000 to Rs.1999
                                </span>
                            </div>
                            <div className="price__button">
                                <input type="checkbox" name="optiona" id="opta" />
                                <span style={{ paddingLeft: '30px', color: "#afafaf" }} >
                                    Rs. 2000 to Rs.2999
                                </span>
                            </div>
                            <div className="price__button">
                                <input type="checkbox" name="optiona" id="opta" />
                                <span style={{ paddingLeft: '30px', color: "#afafaf" }} >
                                    Rs. 3000 to Rs.3999
                                </span>
                            </div>
                            <div className="price__button">
                                <input type="checkbox" name="optiona" id="opta" />
                                <span style={{ paddingLeft: '30px', color: "#afafaf" }} >
                                    Rs. 4000 to Rs.4999
                                </span>
                            </div>
                            <div className="price__button">
                                <input type="checkbox" name="optiona" id="opta" />
                                <span style={{ paddingLeft: '30px', color: "#afafaf" }} >
                                    Rs. 5000 to Rs.5999
                                </span>
                            </div>
                            <div className="price__button">
                                <input type="checkbox" name="optiona" id="opta" />
                                <span style={{ paddingLeft: '30px', color: "#afafaf" }} >
                                    Rs.6000 to Up
                                </span>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h5>Color</h5>
                            <div className="color__button">
                                <div>
                                    <p style={{ borderRadius: "50px", width: "30px", background: "#ff5b5a", color: "#ff5b5a" }} type="button">red</p>
                                    <h6>Red</h6>
                                </div>
                                <div>
                                    <p style={{ borderRadius: "50px", width: "30px", background: "#5b7cff", color: "#5b7cff" }} type="button">Bl</p>
                                    <h6>Blue</h6>
                                </div>
                                <div>
                                    <p style={{ borderRadius: "50px", width: "30px", background: "#010101", color: "#010101" }} type="button">Bl</p>
                                    <h6>Black</h6>
                                </div>
                                <div>
                                    <p style={{ borderRadius: "50px", width: "30px", border: '1px solid black', background: "#ffffff", color: "#ffffff" }} type="button">Bl</p>
                                    <h6>White</h6>
                                </div>
                                <div>
                                    <p style={{ borderRadius: "50px", width: "30px", background: "#818181", color: "#818181" }} type="button">Bl</p>
                                    <h6>Gray</h6>
                                </div>
                            </div>
                            <div className="color__button">
                                <div>
                                    <p style={{ borderRadius: "50px", width: "30px", background: "#45d034", color: "#45d034" }} type="button">red</p>
                                    <h6>Green</h6>
                                </div>
                                <div>
                                    <p style={{ borderRadius: "50px", width: "30px", background: "#e9f52f", color: "#e9f52f" }} type="button">Bl</p>
                                    <h6>Yellow</h6>
                                </div>
                                <div>
                                    <p style={{ borderRadius: "50px", width: "30px", background: "#ececec", color: "#ececec" }} type="button">Bl</p>
                                    <h6>White</h6>
                                </div>
                                <div>
                                    <p style={{ borderRadius: "50px", width: "30px", background: "#aa5514", color: "#aa5514" }} type="button">Bl</p>
                                    <h6>Brown</h6>
                                </div>
                                <div>
                                    <p style={{ borderRadius: "50px", width: "30px", background: "#fe6d2c", color: "#fe6d2c" }} type="button">Bl</p>
                                    <h6 style={{ fontSize: "12px" }}>Orange</h6>
                                </div>
                            </div>
                            <div className="color__button">
                                <div>
                                    <p style={{ borderRadius: "50px", width: "30px", background: "#ff84f8", color: "#ff84f8" }} type="button">red</p>
                                    <h6>Pink</h6>
                                </div>
                                <div>
                                    <p style={{ borderRadius: "50px", width: "30px", background: "#ffe6be", color: "#ffe6be" }} type="button">Bl</p>
                                    <h6>Peach</h6>
                                </div>
                                <div>
                                    <p style={{ borderRadius: "50px", width: "30px", background: "#57166a", color: "#57166a" }} type="button">Bl</p>
                                    <h6>Purple</h6>
                                </div>
                                <div>
                                    <p style={{ borderRadius: "50px", width: "30px", background: "#5ce3ff", color: "#5ce3ff" }} type="button">Bl</p>
                                    <h6>Sky</h6>
                                </div>
                                <div>
                                    <p style={{ borderRadius: "50px", width: "30px", backgroundImage: `linear-gradient(to right, rgba(255, 91, 90, 1), rgba(168, 255, 192, 1))`, color: "rgba(255, 91, 90, 1)" }} type="button">.</p>
                                    <h6>Multi</h6>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h5>Heel Height</h5>
                            <div className="price__button">
                                <input type="checkbox" name="optiona" id="opta" />
                                <span style={{ paddingLeft: '30px', color: "#afafaf" }} >
                                    1
                                </span>
                            </div>
                            <div className="price__button">
                                <input type="checkbox" name="optiona" id="opta" />
                                <span style={{ paddingLeft: '30px', color: "#afafaf" }} >
                                    1.5
                                </span>
                            </div>
                            <div className="price__button">
                                <input type="checkbox" name="optiona" id="opta" />
                                <span style={{ paddingLeft: '30px', color: "#afafaf" }} >
                                    2
                                </span>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h5>Discount Range</h5>
                            <div className="price__button">
                                <input type="checkbox" name="optiona" id="opta" />
                                <span style={{ paddingLeft: '30px', color: "#afafaf" }} >
                                    10% and Above
                                </span>
                            </div>
                            <div className="price__button">
                                <input type="checkbox" name="optiona" id="opta" />
                                <span style={{ paddingLeft: '30px', color: "#afafaf" }} >
                                    20% and Above
                                </span>
                            </div>
                            <div className="price__button">
                                <input type="checkbox" name="optiona" id="opta" />
                                <span style={{ paddingLeft: '30px', color: "#afafaf" }} >
                                    30% and Above
                                </span>
                            </div>
                            <div className="price__button">
                                <input type="checkbox" name="optiona" id="opta" />
                                <span style={{ paddingLeft: '30px', color: "#afafaf" }} >
                                    40% and Above
                                </span>
                            </div>
                            <div className="price__button">
                                <input type="checkbox" name="optiona" id="opta" />
                                <span style={{ paddingLeft: '30px', color: "#afafaf" }} >
                                    50% and Above
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shoes__part">
                    <div className="shoes__part__1">
                        <div className="sort__by size__button ">
                            <p type="button">8.5</p>
                            <select name="cars" id="cars">
                                <p>Hello</p>
                                <option value="">Sort By : Discount</option>
                                <option value="volvo">15%</option>
                                <option value="saab">20%</option>
                                <option value="mercedes">25%</option>
                                <option value="audi">Up to 60%</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="yellow__shoes">
                                <div className="yellow__shoes__0">
                                    <Card
                                        className="card__Antds"
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
                                        className="card__Antds"
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
                                <div className="yellow__shoes__0">
                                    <Card
                                        className="card__Antds"
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
                                        className="card__Antds"
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
                            <div className="yellow__shoes">
                                <div className="yellow__shoes__0">
                                    <Card
                                        className="card__Antds"
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
                                        className="card__Antds"
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
                                <div className="yellow__shoes__0">
                                    <Card
                                        className="card__Antds"
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
                                        className="card__Antds"
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
                            <div className="yellow__shoes">
                                <div className="yellow__shoes__0">
                                    <Card
                                        className="card__Antds"
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
                                        className="card__Antds"
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
                                <div className="yellow__shoes__0">
                                    <Card
                                        className="card__Antds"
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
                                        className="card__Antds"
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
                            <div className="yellow__shoes">
                                <div className="yellow__shoes__0">
                                    <Card
                                        className="card__Antds"
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
                                        className="card__Antds"
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
                                <div className="yellow__shoes__0">
                                    <Card
                                        className="card__Antds"
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
                                        className="card__Antds"
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
                            <div className="yellow__shoes">
                                <div className="yellow__shoes__0">
                                    <Card
                                        className="card__Antds"
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
                                        className="card__Antds"
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
                                <div className="yellow__shoes__0">
                                    <Card
                                        className="card__Antds"
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
                                        className="card__Antds"
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
                            <div className="yellow__shoes">
                                <div className="yellow__shoes__0">
                                    <Card
                                        className="card__Antds"
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
                                        className="card__Antds"
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
                                <div className="yellow__shoes__0">
                                    <Card
                                        className="card__Antds"
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
                                        className="card__Antds"
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
                            <div className="yellow__shoes">
                                <div className="yellow__shoes__0">
                                    <Card
                                        className="card__Antds"
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
                                        className="card__Antds"
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
                                <div className="yellow__shoes__0">
                                    <Card
                                        className="card__Antds"
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
                                        className="card__Antds"
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
                            <div className="yellow__shoes">
                                <div className="yellow__shoes__0">
                                    <Card
                                        className="card__Antds"
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
                                        className="card__Antds"
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
                                <div className="yellow__shoes__0">
                                    <Card
                                        className="card__Antds"
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
                                        className="card__Antds"
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
            <Login trigger={buttonPopup} fromTo='/shoes/men'></Login>
        </ >
    )
}

export default WomenShoes


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