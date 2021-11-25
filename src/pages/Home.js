import './Home.css'
import { useState } from 'react'
import Product from './Product'
const Home = () => {
  document.title = "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in"

  const [carts, setCarts] = useState([])

  const cart = [{
    id: "12314",
    title: "SentrySafe SFW123GDC  Metal Gray",
    price: 300.96,
    image: "https://m.media-amazon.com/images/I/61a9RYXjqzL._AC_SL1000_.jpg",
    units: 2
  }]
  const handleAddFunc = (products) => {
    const existingProduct = cart.filter(p => p.id === products.id)
    if (existingProduct.length > 0) {
      const withoutExistingProduct = cart.filter(p => p.id !== products.id);
      const updatedUnitsProduct = {
        ...existingProduct,
        units: existingProduct[0].units + products.units
      };
      setCarts({
        cart: [...withoutExistingProduct, updatedUnitsProduct]
      })
    } else {
      setCarts({
        cart: [products]
      });
    }
  }
  return (
    <div className="home">
      <img className="home__image"
        src="https://sm.pcmag.com/t/pcmag_in/how-to/4/4-ways-to-/4-ways-to-avoid-paying-119-for-amazon-prime-free-shipping_w2f3.1920.jpg"
        alt="" />

      <div className="home__row">
        <Product
          id="12314"
          title="SentrySafe SFW123GDC Fireproof Waterproof Safe with Digital Keypad, 1.23 Cubic Feet, Gun Metal Gray"
          price={300.96}
          image="https://m.media-amazon.com/images/I/61a9RYXjqzL._AC_SL1000_.jpg"
          rating={4}
          addFunc={handleAddFunc}
        />
        <Product
          id="81314"
          title="Yootech Wireless Charger, Qi-Certified 10W Max Fast Wireless Charging Pad Compatible with iPhone"
          price={11.96}
          rating={3}
          image="https://m.media-amazon.com/images/I/5177CYC1XVL._AC_SL1466_.jpg"
          addFunc={handleAddFunc}
        />
        <Product
          id="9814"
          title="Dreamiracle Ice Maker Machine for Countertop, 33 lbs Bullet Ice Cube in 24H"
          price={101.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/71C9KLjYi3L._SL1500_.jpg"
          addFunc={handleAddFunc}
        />
      </div>
      <div className="home__row">
        <Product
          id="109314"
          title="Soundance Laptop Stand, Aluminum Computer Riser, Ergonomic Laptops Elevator for Desk"
          price={25.96}
          rating={2}
          image="https://m.media-amazon.com/images/I/81MN9l2nl2S._AC_SL1500_.jpg"
          addFunc={handleAddFunc}
        />
        <Product
          id="127814"
          title="Ergonomic Office Chair, Tribesigns High Back Desk Chair with Lumbar Support, Breathable Mesh Back"
          price={178.92}
          rating={5}
          image="https://m.media-amazon.com/images/I/711o-GXbvbS._AC_SL1500_.jpg"
          addFunc={handleAddFunc}
        />
        <Product
          id="121319"
          title="Allguest Office Chair Home Computer Chair White High Back Armrest Ergonomic Adjustable Lumbar Support Mesh Nylon AG-876FH-W"
          price={239.74}
          rating={5}
          image="https://m.media-amazon.com/images/I/61yBtZrvDyL._AC_SL1500_.jpg"
          addFunc={handleAddFunc}
        />
        <Product
          id="120214"
          title="SMAGREHO 3-Tier Standing Baker's Racks，Rolling Serving Bar Cart on Wheels with Storage Industrial"
          price={59.99}
          rating={2}
          image="https://m.media-amazon.com/images/I/61kGhLyR+gL._AC_SL1500_.jpg"
          addFunc={handleAddFunc}
        />
      </div>
    </div>
  )
}

export default Home
