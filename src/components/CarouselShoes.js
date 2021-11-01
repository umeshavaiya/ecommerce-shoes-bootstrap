import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel'
import orangeShoes from '../images/orange.png'
import { useMediaQuery } from 'react-responsive'
import './CarouselShoes.css'


function CarouselShoes() {

    return (
        <div className='main'>
            <div>
                <InfiniteCarousel
                    breakpoints={[
                        { breakpoint: 426, settings: { slidesToShow: 3, slidesToScroll: 3, dots: false }, },
                        { breakpoint: 500, settings: { slidesToShow: 2, slidesToScroll: 2, dots: false }, },
                        { breakpoint: 769, settings: { slidesToShow: 3, slidesToScroll: 3, dots: false }, },
                        { breakpoint: 1025, settings: {dots: false }, },
                    ]}
                    dots={true}
                    showSides={true}
                    // sidesOpacity={.5}
                    sideSize={.1}
                    slidesToScroll={2}
                    slidesToShow={4}
                    scrollOnDevice={true}
                >
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                    <div className="shoesText">
                        <img alt='' src={orangeShoes} />
                        <p>Name of Shoes</p>
                        <p style={{ color: '#f92425' }}>$225</p>
                    </div>
                </InfiniteCarousel>
            </div>
        </div>
    )
}

export default CarouselShoes
