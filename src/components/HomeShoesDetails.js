import React from 'react'
import './HomeShoesDetails.css'
import HomeDetailsShoes from '../images/running shoes.png'
// import HomeDetailsShoes from './images'
import Fade from "react-reveal/Fade";


function HomeShoesDetails() {
    return (
        <div className="details__container">
            <div className="homeImage__details">
                <div className='BackgroundFilter'>
                    <div className="part__cont">
                        <div className="wi__class1">
                            <div className='running__shoes'>
                                <Fade left>
                                    <img src={HomeDetailsShoes} alt="Home shose" />
                                </Fade>
                                <div className="shoes__circle"></div>
                            </div>
                        </div>
                        <div className="wi__class2">
                            <div className="shoes__details">
                                <Fade bottom>
                                <h1 className="noHover">Shoes Details</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat suscipit temporibus necessitatibus esse cupiditate hic harum nihil! Pariatur quia ad dicta, non sunt rem quod quibusdam nulla id facere corporis!</p>
                                <div style={{ display: 'flex' }}>
                                    <h2>$500</h2>
                                    <button className="button2">Buy Now</button>
                                </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomeShoesDetails