import React from 'react'
import './Productcard.css'
import { useStateValue } from '../StateProvider'

function Productcard({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    console.log(title, "title");

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }

    return (
        <div className="productcart">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className="productcart__rating">
                {
                    Array(rating)
                        .fill()
                        .map((_) => (
                            <span className="fa fa-star checked"></span>
                        ))
                }
            </div>
            <img className="productcart__image" src={image} alt="productImage" />
            <div className="productcart__info" >
                <p className="productcart__title">{title}</p>
                <p className="productcart__price">${price}</p>
                <button onClick={removeItem}>Remove from the Cart</button>
            </div>
        </div>
    )
}

export default Productcard
