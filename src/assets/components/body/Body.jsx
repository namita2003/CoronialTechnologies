import React from 'react'
import AboutUs from '../about/AboutUs'
import Services from '../services/Services'
import Portfolio from '../portfolio/Portfolio'
import Testimonials from '../testimonials/Testimonials'
import Contact from '../contactDetails/Contact'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import Career from '../career/Career'
import Experience from '../experience/Experience'
//import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import CoronialTech from '../../images/coronialTech.jpg';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ use React Router's Link

import Tech from "../../images/tech.jpg";
import AI from "../../images/AI.webp";
import Rectangle2 from "../../images/Rectangle2.png";



const Body = () => {

    const bulletPoints = [
        "Driven by innovation and fueled by creativity in every project we deliver.",
        "Trusted by startups and enterprises for scalable digital solutions.",
        "Strong focus on building long-term client relationships based on transparency.",
        "Blending modern technologies with strategic insights to maximize business growth.",
        "Empowering local businesses in Varanasi while catering to global clients.",
        "Committed to continuous learning, research, and staying ahead in emerging tech trends.",
    ];
    return (
        <div>
            <ImageCarousel
                
            />

            <div className="w-full py-16 px-6 relative bg-gray-50 overflow-hidden">

                {/* Foreground Content */}
                <div className="relative z-10 flex items-center justify-center flex-col py-10 mt-3 rounded-3xl bg-white/90 backdrop-blur-md p-10 border border-gray-200">

                    {/* Animated Heading */}
                    <motion.h2
                        className="text-4xl font-extrabold p-2 text-[#222] cursor-pointer relative inline-block group"
                        whileHover={{ scale: 1.08 }}
                    >
                        <span className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-green-500 to-indigo-500 transition-all duration-500">
                            About Us
                        </span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-gradient-to-r from-green-500 to-indigo-500 rounded-full transition-all duration-500 group-hover:w-full"></span>
                    </motion.h2>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="mb-6 mx-2 mt-3 text-[#334155] italic tracking-wide font-serif text-lg text-center"
                    >
                        Learn more about <span className="font-semibold text-indigo-500">Coronial Technologies</span> and our journey in the IT industry.
                    </motion.p>

                    {/* Content Section */}
                    <div className="flex justify-center items-center flex-wrap md:flex-nowrap gap-12 mt-8">

                        {/* Text Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="flex flex-col items-start text-left p-4 md:w-1/2"
                        >
                            <h4 className="text-[#222] font-bold text-xl mb-4">
                                Who we are
                            </h4>
                            <p className="text-[#4a4a4a] leading-relaxed text-[1.05rem] mb-6">
                                Founded in <span className="font-semibold text-indigo-500">2020</span>, Coronial Technologies has quickly established itself as a
                                leading IT solutions provider in <span className="font-semibold text-green-600">Varanasi, Uttar Pradesh</span>.
                                With a team of skilled professionals, we deliver innovative and reliable
                                technology solutions to businesses of all sizes.
                                <br /><br />
                                Our mission is to <span className="italic text-green-600">empower businesses through technology</span>, helping them
                                achieve their goals and stay ahead in today's competitive market. We pride
                                ourselves on our <span className="font-semibold text-green-600">customer-centric approach</span>, technical expertise, and
                                commitment to excellence.
                                <br /><br />
                                With over <span className="font-semibold text-green-600">3 years</span> of industry experience, we have successfully completed
                                numerous projects across various sectors, earning the trust and satisfaction of
                                our clients.
                            </p>

                            {/* Creative Bullet Points */}
                            <ul className="space-y-3">
                                {bulletPoints.map((point, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 * index, duration: 0.6 }}
                                        className="flex items-start text-[#374151] text-[1rem]"
                                    >
                                        <CheckCircle2 className="text-green-500 w-5 h-5 mt-0.5 mr-2" />
                                        {point}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Image Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="w-full md:w-1/2 mt-6 md:mt-0 rounded-2xl overflow-hidden border-4 border-green-400 relative"
                            whileHover={{ scale: 1.05, rotate: 1 }}
                        >
                            {/* Green Overlay */}
                            <div className="absolute inset-0 bg-green-100 mix-blend-multiply z-10"></div>
                            <img
                                className="w-full h-[350px] object-cover rounded-2xl relative z-20"
                                src={CoronialTech}
                                alt="Coronial Technologies"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
            <Services />
            <Experience />
            <Portfolio />
            {/* <Testimonials /> */}
            <Contact />

        </div>
    )
}

export default Body