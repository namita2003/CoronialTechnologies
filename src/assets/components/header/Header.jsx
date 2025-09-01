import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/ct.jpeg";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Portfolio", path: "/portfolio" },
        // { name: "Testimonials", path: "/testimonials" },
        { name: "Contact", path: "/contact" },
        { name: "Career", path: "/career" },
    ];

    return (
        <header className="w-full bg-white shadow-md">
            <nav className="flex items-center justify-between w-full px-6 md:px-12 py-3">
                {/* Logo + Brand */}
                <div className="flex items-center gap-3">
                    <img
                        src={Logo}
                        alt="Coronial Logo"
                        className="w-14 h-14 rounded-full hover:scale-105 transition-transform duration-300 shadow-md"
                    />
                    <div className="flex flex-col leading-tight">
                        <span className="text-xl font-bold text-gray-900">Coronial</span>
                        <span className="text-xl font-bold text-gray-900">Technologies</span>
                    </div>
                </div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-6 items-center">
                    {navItems.map((item, idx) => (
                        <li key={idx} className="relative group">
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `px-3 py-2 rounded-md font-medium transition 
                                    ${
                                        isActive
                                            ? "bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white shadow-md"
                                            : "text-gray-800 hover:text-white hover:bg-gradient-to-r from-green-400 via-teal-500 to-blue-500"
                                    }`
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Nav */}
                <div className="md:hidden relative">
                    <button
                        className="p-2 rounded-md text-gray-700 hover:text-white hover:bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 transition"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    isOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 8h16M4 16h16"
                                }
                            />
                        </svg>
                    </button>

                    {isOpen && (
                        <ul className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg flex flex-col py-2 z-50">
                            {navItems.map((item, idx) => (
                                <li key={idx}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            `block px-4 py-2 rounded-md font-medium transition 
                                            ${
                                                isActive
                                                    ? "bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 text-white"
                                                    : "text-gray-800 hover:bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 hover:text-white"
                                            }`
                                        }
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
