import React from 'react'
import HomeShoesDetails from './components/HomeShoesDetails'
import CarouselShoes from './components/CarouselShoes'
import PopulerProduct from './components/PopulerProduct'
import NavbarHad from './components/NavbarHad'
import Footer from './components/Footer'

function Home() {
    return (
        <div>
            <NavbarHad />
            <CarouselShoes />
            <PopulerProduct />
            <HomeShoesDetails />
            <Footer />
        </div>
    )
}

export default Home
