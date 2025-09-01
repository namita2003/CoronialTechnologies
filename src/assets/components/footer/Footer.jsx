import React from "react";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { IconBrandX } from "@tabler/icons-react"; // <-- Twitter X icon
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    // helper function to scroll and navigate
    const handleNavigation = (path) => {
        window.scrollTo({ top: 0, behavior: "instant" });
        navigate(path);
    };

    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-3">
                        Coronial Technologies
                    </h2>
                    <p className="text-gray-400 leading-relaxed font-serif">
                        Providing innovative IT solutions to businesses since 2020.
                        We are committed to delivering excellence and driving digital transformation.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><button onClick={() => handleNavigation("/")} className="hover:text-orange-400 transition">Home</button></li>
                        <li><button onClick={() => handleNavigation("/about")} className="hover:text-orange-400 transition">About Us</button></li>
                        <li><button onClick={() => handleNavigation("/services")} className="hover:text-orange-400 transition">Services</button></li>
                        <li><button onClick={() => handleNavigation("/portfolio")} className="hover:text-orange-400 transition">Portfolio</button></li>
                        <li><button onClick={() => handleNavigation("/contact")} className="hover:text-orange-400 transition">Contact</button></li>
                        <li><button onClick={() => handleNavigation("/career")} className="hover:text-orange-400 transition">Career</button></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Our Services</h3>
                    <ul className="space-y-2">
                        <li><button onClick={() => handleNavigation("/webdev")} className="hover:text-orange-400 transition">Web Development</button></li>
                        <li><button onClick={() => handleNavigation("/appdev")} className="hover:text-orange-400 transition">Mobile App Development</button></li>
                        <li><button onClick={() => handleNavigation("/uiux")} className="hover:text-orange-400 transition">UI/UX Design</button></li>
                        <li><button onClick={() => handleNavigation("/digital")} className="hover:text-orange-400 transition">Digital Marketing</button></li>
                        <li><button onClick={() => handleNavigation("/it")} className="hover:text-orange-400 transition">IT Consulting</button></li>
                        <li><button onClick={() => handleNavigation("/cloud")} className="hover:text-orange-400 transition">Cloud Solutions</button></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Connect With Us</h3>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IconBrandX className="w-5 h-5" /> {/* Twitter X */}
                        </a>
                        <a
                            href="https://www.linkedin.com/company/coronial-technologies/?fbclid=PAQ0xDSwMZHY9leHRuA2FlbQIxMQABp9XLEm49an14f2XLdSp65qkN4ubQpu9rQA2abgbfNswzwbXSAQBJfrFkZnn__aem_3nkLdPAs3YNg5IlBY6xC2g"
                            className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.instagram.com/coronialtechnologies?igsh=OXQ4OXduM3Fhdzg1"
                            className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="text-center mt-10 border-t border-gray-700 pt-6 text-gray-500 text-sm">
                © {new Date().getFullYear()} Coronial Technologies. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
