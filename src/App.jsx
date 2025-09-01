import React from 'react'
import Header from './assets/components/header/Header'
import Services from './assets/components/services/Services'
import Contact from './assets/components/contactDetails/Contact'
import ImageCarousel from './assets/components/ImageCarousel/ImageCarousel'
import Experience from './assets/components/experience/Experience'
import AboutUs from './assets/components/about/AboutUs'
import Portfolio from './assets/components/portfolio/Portfolio'
import Footer from './assets/components/footer/Footer'
import Testimonials from './assets/components/testimonials/Testimonials'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from './assets/components/body/Body'
import Career from './assets/components/career/Career'
import WebDevelopment from './assets/components/services/WebDevelopment'
import AppDevelopment from './assets/components/services/AppDev'
import UiUx from './assets/components/services/UiUx'
import DigitalMarketing from './assets/components/services/DigitalMarketing'
import ItConsulting from './assets/components/services/ItConsulting'
import CloudSolutions from './assets/components/services/CloudSolutions'

const App = () => {
    return (
        <Router>
            <div className='bg-[#f8fafc]'>
                <Header />
                

                <Routes>
                    <Route path='/' element={<Body />} />

                    <Route path='/about' element={<AboutUs />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/experience' element={<Experience />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/testimonials' element={<Testimonials />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/career' element={<Career />} />
                    <Route path='/webdev' element={<WebDevelopment />} />
                    <Route path='/appdev' element={<AppDevelopment />} />
                    <Route path='/uiux' element={<UiUx />} />
                    <Route path='/digital' element={<DigitalMarketing />} />
                    <Route path='/it' element={<ItConsulting/>} />
                    <Route path='/cloud' element={<CloudSolutions />} />
                    <Route path='/footer' element={<Footer />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    )
}

export default App
