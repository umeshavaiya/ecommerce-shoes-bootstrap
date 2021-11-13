import React, { useEffect } from 'react'
import "./MenShoes.css"
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Typography } from 'antd';
import { useStateValue } from '../../StateProvider'
import ProductDetails from '../ProductDetails';

function Me({ id, title, price, image, PR }) {

    const { Meta } = Card;
    const { Title } = Typography;
    useEffect(() => {
        document.title = "Men's Shoes"
    }, []);

    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
            }
        })
    }
    return (
        <Link to={PR ? PR : "/"}>
            <Card
                onClick={addToBasket}
                className="card__Antds"
                hoverable
                style={{ width: 300, transition: "transform 0.4s", borderRadius: '15px' }}
                cover={<img style={{ borderRadius: '15px', padding: "50px" }} alt="example" src={image} />}
            >
                <Meta style={{ marginBottom: "8px" }} description="Sport Shoes" />
                <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>{title}</Title>} />
                <Meta style={{ marginBottom: "8px", fontSize: '25px' }} title={<Title level={3} style={{ fontWeight: '700' }}>${price}</Title>} />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </Card>
        </Link>

    )
}

export default Me
