import React from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
    const testimonials = [
        {
            text: "Coronial Technologies delivered an exceptional e-commerce platform that has significantly increased our online sales. Their team was professional, responsive, and truly understood our business needs.",
            name: "Rajesh Kumar",
            role: "CEO, RetailPlus",
            img: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            text: "Working with Coronial Technologies was a game-changer for our healthcare practice. The mobile app they developed has streamlined our operations and improved patient satisfaction.",
            name: "Dr. Priya Sharma",
            role: "Director, MediCare Hospital",
            img: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            text: "The team at Coronial Technologies provided excellent IT consulting services that helped us optimize our technology infrastructure. Their expertise and guidance have been invaluable to our business growth.",
            name: "Amit Patel",
            role: "Founder, TechStart",
            img: "https://randomuser.me/api/portraits/men/67.jpg",
        },
    ];

    return (
        <div className="w-[85%] mx-auto py-8 px-4 bg-white">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 relative inline-block group hover:text-green-600 transition duration-300">
                    Client Testimonials
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500 group-hover:w-full"></span>
                </h2>
                <p className="mt-2 text-gray-600 italic font-serif text-sm">
                    What our clients say about our services
                </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="relative rounded-xl p-[1.5px] bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 shadow-md hover:shadow-lg transition-all"
                    >
                        <div className="bg-white rounded-xl p-4 h-full flex flex-col justify-between">
                            <div>
                                <Quote className="text-green-500 w-7 h-7 mb-2" />
                                <p className="text-gray-700 italic font-serif text-sm mb-4">
                                    "{testimonial.text}"
                                </p>
                            </div>

                            {/* User info with image */}
                            <div className="flex items-center gap-3 mt-2">
                                <img
                                    src={testimonial.img}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full border border-green-400 object-cover"
                                />
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-800">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;

