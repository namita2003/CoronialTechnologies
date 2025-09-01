import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import Link
import Webdev from "../../images/Webdev.jpg";
import Appdev from "../../images/Appdev.jpg";
import UIUX from "../../images/UIUX.png";
import DigitaLMarketing from "../../images/DigitalMarketing.png";
import Consulting from "../../images/Consulting.png";
import CloudSolutions from "../../images/CloudSolutions.png";

const Services = () => {
    const services = [
        {
            img: Webdev,
            title: "Web Development",
            desc: "Custom website development, e-commerce solutions and web applications tailored to your business requirements.",
            bg: "bg-blue-50",
            link: "/webdev"
        },
        {
            img: Appdev,
            title: "Mobile App Development",
            desc: "Native and cross-platform mobile applications for iOS and Android that enhance engagement and business productivity.",
            bg: "bg-green-50",
            link: "/appdev"
        },
        {
            img: UIUX,
            title: "UI/UX Design",
            desc: "User-centered design solutions that create intuitive, engaging and visually appealing digital experiences.",
            bg: "bg-purple-50",
            link: "/uiux"
        },
        {
            img: DigitaLMarketing,
            title: "Digital Marketing",
            desc: "Comprehensive digital marketing strategies including SEO, social media marketing and content marketing to boost your online presence.",
            bg: "bg-pink-50",
            link: "/digital"
        },
        {
            img: Consulting,
            title: "IT Consulting",
            desc: "Expert advice and strategic guidance to help you leverage technology for business growth and operational efficiency.",
            bg: "bg-yellow-50",
            link: "/it"
        },
        {
            img: CloudSolutions,
            title: "Cloud Solutions",
            desc: "Secure and scalable cloud infrastructure setup, migration and management services to optimize your IT operations.",
            bg: "bg-teal-50",
            link: "/cloud"
        }
    ];

    return (
        <div className="w-full">
            <div className="flex items-center justify-center flex-col py-2 mt-3">
                {/* Title */}
                <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-bold p-2 relative group cursor-pointer transition-all duration-500 hover:scale-105"
                >
                    <span className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r from-pink-500 to-pink-500">
                        Our Services
                    </span>
                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-pink-500 transition-all duration-500 group-hover:w-full"></span>
                </motion.h3>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mb-8 mx-2 mt-2 text-[#334155] italic tracking-wide"
                >
                    We offer a wide range of IT services tailored to meet your business needs.
                </motion.p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full px-6">
                    {services.map((service, i) => (
                        <Link
                            key={i}
                            to={service.link}
                            className="block"
                            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })} // 👈 scrolls to top
                        >
                            <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className={`relative flex flex-col items-center justify-start rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 ${service.bg} text-gray-900 cursor-pointer`}
                            >
                                {/* Glow Effect */}
                                <span className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent 
            bg-gradient-to-r from-yellow-300/50 via-orange-300/50 to-pink-400/50 
            opacity-0 hover:opacity-100 transition-opacity duration-500"></span>

                                {/* Content */}
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <img
                                        src={service.img}
                                        className="w-28 h-28 object-contain mb-4 transition-transform duration-500 hover:scale-110"
                                        alt={service.title}
                                    />
                                    <h3 className="text-xl font-bold relative group">
                                        {service.title}
                                        <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-0 h-[2px] 
                    bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-400 
                    transition-all duration-500 group-hover:w-2/3"></span>
                                    </h3>
                                    <p className="mt-3 text-gray-800 text-sm leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
