import React from 'react'
import './Product.css'
import { useStateValue } from '../StateProvider'

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }

  return (
    <div className="product" >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="product__rating">
        {
          Array(rating)
            .fill()
            .map((_) => (
              <span className="fa fa-star checked"></span>
            ))
        }
      </div>
      <div className="product__info">
        <p>{title}</p>
      </div>
      <img src={image} alt="" />
      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <button onClick={addToBasket} >Add to cart</button>
    </div>
  )
}

export default Product
