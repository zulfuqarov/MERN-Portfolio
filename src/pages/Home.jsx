import React from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import Service from '../components/Service'
import Portfolio from '../components/Portfolio'
import Experiences from '../components/Experiences'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Section />
            <Service />
            <Portfolio />
            <Experiences />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
