import React from 'react'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Package from '../Package/Package'
import Services from '../Services/Services'

export default function Home() {
    return (
        <>
            <Header />
            <Banner />
            <Services />
            <Package />
            <Footer />
        </>
    )
}
