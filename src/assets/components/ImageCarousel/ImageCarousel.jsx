import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageCircle, Phone } from "lucide-react";

import Tech from "../../images/tech.jpg";
import AI from "../../images/AI.webp";
import Rectangle2 from "../../images/Rectangle2.png";

const slides = [
    {
        image: Rectangle2,
        title: "Innovative IT Solutions for Your Business",
        description:
            "With over 3 years of experience, Coronial Technologies delivers cutting-edge technology solutions to help your business thrive in the digital era.",
    },
    {
        image: AI,
        title: "Empowering Your Digital Transformation",
        description:
            "We provide scalable and secure solutions that align perfectly with your business goals.",
    },
    {
        image: Tech,
        title: "Your Trusted Technology Partner",
        description:
            "From concept to deployment, we deliver technology that drives results.",
    },
];

export default function ImageCarousel() {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
            {/* Background Image */}
            <img
                src={slides[current].image}
                alt=""
                className="w-full h-full object-cover object-center"
            />

            {/* Overlay with animation */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, { offset }) => {
                        if (offset.x < -100) {
                            nextSlide();
                        } else if (offset.x > 100) {
                            prevSlide();
                        }
                    }}
                    className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 bg-black/40 text-white"
                >
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                        {slides[current].title}
                    </h1>
                    <p className="max-w-2xl mb-6 text-base md:text-lg lg:text-xl">
                        {slides[current].description}
                    </p>

                    {/* Two External Action Buttons */}
                    <div className="flex gap-4">
                        {/* WhatsApp Link */}
                        <a
                            href="https://wa.me/918739094997?text=Hello%20Coronial%20Technologies!" // ✅ replace with your number
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 md:px-8 md:py-4 rounded text-white font-semibold shadow-lg text-base md:text-lg"
                        >
                            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                            WhatsApp
                        </a>

                        {/* Phone Link (Fixed with +) */}
                        <a
                            href="tel:+918739094997" // ✅ corrected format
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 md:px-8 md:py-4 rounded text-white font-semibold shadow-lg text-base md:text-lg"
                        >
                            <Phone className="w-5 h-5 md:w-6 md:h-6" />
                            Call Us
                        </a>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Prev Button */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 md:left-6 -translate-y-1/2 bg-white/70 p-3 md:p-5 rounded-full shadow-lg hover:bg-white"
            >
                <ChevronLeft className="w-6 h-6 md:w-10 md:h-10" />
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 md:right-6 -translate-y-1/2 bg-white/70 p-3 md:p-5 rounded-full shadow-lg hover:bg-white"
            >
                <ChevronRight className="w-6 h-6 md:w-10 md:h-10" />
            </button>
        </div>
    );
}
