import React, { useEffect, useState } from 'react'
import "./MenShoes.css"
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Typography } from 'antd';
import { useStateValue } from '../../StateProvider'
import ProductDetails from '../ProductDetails';
import yellowShoes from "../../images/mensblue.png";
// import  Product  from '../../product';

function Me({ product }) {

    const { Meta } = Card;
    const { Title } = Typography;
    useEffect(() => {
        document.title = "Men's Shoes"
    }, []);
    const [{ basket }, dispatch] = useStateValue()

    // const addToBasket = () => {
    //     dispatch({
    //         type: 'ADD_TO_BASKET',
    //         item: {
    //             id: id,
    //             title: title,
    //             image: image,
    //             price: price,
    //         }
    //     })
    // }
    return (
        <Link to={`/products/${product._id}`}>
            <Card
                className="card__Antds my-3"
                hoverable
                style={{ width: 300, transition: "transform 0.4s", borderRadius: '15px' }}
                cover={<img style={{ borderRadius: '15px', padding: "50px" }} alt="example" src={yellowShoes} />}
            >
                <Meta style={{ marginBottom: "8px" }} description={product.category} />
                <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>{product.name}</Title>} />
                <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>{product.price}</Title>} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Card>
        </Link>
        // </Link>

    )
}

export default Me
