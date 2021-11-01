import React from 'react'
import './PopulerProduct.css'
import { Card, Typography } from 'antd';
import 'antd/dist/antd.css'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';



const { Meta } = Card;
const { Title } = Typography;

function PopulerProduct() {
    return (
        <div className='populerProduct'>
            <div className="populerProduct__text">
                <Zoom cascade>
                    <p>OUR  POPULER  PRODUCTS</p>
                </Zoom>
            </div>
            <div className="populerProduct__card ">
                <Fade left>
                    <Card
                        className="card__Antd"
                        hoverable
                        style={{ width: 300, transition: "transform 0.4s", borderRadius: '15px' }}
                        cover={<img style={{ borderRadius: '15px' }} alt="example" src="https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=" />}
                    >
                        <Meta style={{ marginBottom: "8px" }} description="Sport Shoes" />
                        <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>Running Shoes</Title>} />
                        <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>$200</Title>} />
                        {/* <Meta style={{ marginBottom: "8px" }} title="$200" /> */}
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>

                        <button className="button1">Buy Now</button>
                    </Card>
                </Fade>
                <Fade top>
                    <Card
                        className="card__Antd"
                        hoverable
                        style={{ width: 300, transition: "transform 0.4s", borderRadius: '15px' }}
                        cover={<img style={{ borderRadius: '15px' }} alt="example" src="https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=" />}
                    >
                        <Meta style={{ marginBottom: "8px" }} description="Sport Shoes" />
                        <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>Running Shoes</Title>} />
                        <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>$200</Title>} />
                        {/* <Meta style={{ marginBottom: "8px" }} title="$200" /> */}
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>

                        <button className="button1"><span className="button__text">Buy Now</span></button>
                    </Card>
                </Fade>
                <Fade right>
                    <Card
                        className="card__Antd"
                        hoverable
                        style={{ width: 300, transition: "transform 0.4s", borderRadius: '15px' }}
                        cover={<img style={{ borderRadius: '15px' }} alt="example" src="https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=" />}
                    >
                        <Meta style={{ marginBottom: "8px" }} description="Sport Shoes" />
                        <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>Running Shoes</Title>} />
                        <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>$200</Title>} />
                        {/* <Meta style={{ marginBottom: "8px" }} title="$200" /> */}
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <button className="button1"><span className="button__text">Buy Now</span></button>
                    </Card>
                </Fade>
            </div>
            <div className="populerProduct__card populerProduct__card2 ">
                <Fade left>
                    <Card
                        className="card__Antd"
                        hoverable
                        style={{ width: 300, transition: "transform 0.4s", borderRadius: '15px' }}
                        cover={<img style={{ borderRadius: '15px' }} alt="example" src="https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=" />}
                    >
                        <Meta style={{ marginBottom: "8px" }} description="Sport Shoes" />
                        <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>Running Shoes</Title>} />
                        <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>$200</Title>} />
                        {/* <Meta style={{ marginBottom: "8px" }} title="$200" /> */}
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>

                        <button className="button1"><span className="button__text">Buy Now</span></button>
                    </Card>
                </Fade>
                <Fade bottom>

                    <Card
                        className="card__Antd"
                        hoverable
                        style={{ width: 300, transition: "transform 0.4s", borderRadius: '15px' }}
                        cover={<img style={{ borderRadius: '15px' }} alt="example" src="https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=" />}
                    >
                        <Meta style={{ marginBottom: "8px" }} description="Sport Shoes" />
                        <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>Running Shoes</Title>} />
                        <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>$200</Title>} />
                        {/* <Meta style={{ marginBottom: "8px" }} title="$200" /> */}
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <button className="button1"><span className="button__text">Buy Now</span></button>
                    </Card>
                </Fade>
                <Fade right>
                    <Card
                        className="card__Antd"
                        hoverable
                        style={{ width: 300, transition: "transform 0.4s", borderRadius: '15px' }}
                        cover={<img style={{ borderRadius: '15px' }} alt="example" src="https://media.istockphoto.com/photos/running-shoes-picture-id1249496770?b=1&k=20&m=1249496770&s=170667a&w=0&h=_SUv4odBqZIzcXvdK9rqhPBIenbyBspPFiQOSDRi-RI=" />}
                    >
                        <Meta style={{ marginBottom: "8px" }} description="Sport Shoes" />
                        <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>Running Shoes</Title>} />
                        <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>$200</Title>} />
                        {/* <Meta style={{ marginBottom: "8px" }} title="$200" /> */}
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>
                        <span className="fa fa-star checked" style={{ fontSize: '20px', marginRight: '7px' }}></span>

                        <button className="button1"><span className="button__text">Buy Now</span></button>
                    </Card>
                </Fade>
            </div>
        </div >
    )
}

export default PopulerProduct
