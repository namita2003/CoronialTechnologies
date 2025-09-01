import React from "react";
import { motion } from "framer-motion";
import { Palette, PenTool, Users, Layout, Smartphone, Eye, Sparkles } from "lucide-react"; // ✅ icons

const UiUx = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-rose-100 via-rose-50 to-white flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-7xl bg-white/80 backdrop-blur-md border-2 border-rose-200 rounded-3xl shadow-2xl p-6 md:p-12">
                
                {/* Hero Section */}
                <div className="relative flex flex-col items-center justify-center text-center py-16 px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-extrabold text-rose-900 drop-shadow-sm"
                    >
                        UI/UX Design Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed"
                    >
                        We design seamless user experiences that combine creativity, usability, and innovation.
                        Our designs captivate users, boost engagement, and drive business growth.
                    </motion.p>

                    {/* ✅ Features Grid */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}   // 👈 only animate once
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl"
                    >
                        <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 shadow hover:shadow-lg transition">
                            <Palette className="text-rose-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-rose-900 text-lg">Creative Visual Design</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Stunning and brand-aligned visuals that leave lasting impressions.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 shadow hover:shadow-lg transition">
                            <PenTool className="text-rose-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-rose-900 text-lg">Interactive Prototyping</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Clickable prototypes to preview and refine user flows effectively.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 shadow hover:shadow-lg transition">
                            <Users className="text-rose-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-rose-900 text-lg">User Research</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Data-driven insights and testing ensure intuitive, user-friendly experiences.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 shadow hover:shadow-lg transition">
                            <Layout className="text-rose-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-rose-900 text-lg">Responsive Layouts</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Designs that adapt beautifully across desktops, tablets, and mobiles.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 shadow hover:shadow-lg transition">
                            <Smartphone className="text-rose-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-rose-900 text-lg">Mobile-First Design</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Optimized mobile experiences for today’s on-the-go users.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 shadow hover:shadow-lg transition">
                            <Eye className="text-rose-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-rose-900 text-lg">Accessibility First</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Inclusive designs that ensure usability for all users.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Detailed Section */}
                <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}   // 👈 only once
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-white to-rose-50 border border-rose-200 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-rose-900 mb-4">
                            Why Choose Us?
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            We merge creativity with functionality to craft designs that delight users
                            and deliver measurable business results.
                        </p>

                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-3"><Sparkles className="text-rose-600 w-5 h-5" /> Human-Centered Design Approach</li>
                            <li className="flex items-center gap-3"><PenTool className="text-rose-600 w-5 h-5" /> Figma-Based Prototyping & Wireframes</li>
                            <li className="flex items-center gap-3"><Users className="text-rose-600 w-5 h-5" /> Research-Driven Insights</li>
                            <li className="flex items-center gap-3"><Layout className="text-rose-600 w-5 h-5" /> Pixel-Perfect Developer Handoff</li>
                        </ul>
                    </motion.div>

                    {/* ✅ Replaced image with icon-based card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}   // 👈 only once
                        transition={{ duration: 0.8 }}
                        className="flex justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}   // 👈 only once
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="bg-gradient-to-br from-rose-300 to-rose-500 p-12 rounded-2xl shadow-xl text-center"
                        >
                            <Palette className="w-20 h-20 text-white mx-auto" />
                            <h3 className="mt-6 text-2xl font-bold text-white">
                                Design That Inspires
                            </h3>
                            <p className="text-rose-100 mt-3">
                                Elegant, functional, and user-focused designs that elevate digital experiences.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}   // 👈 only once
                    transition={{ duration: 0.8 }}
                    className="text-center py-16 bg-gradient-to-r from-rose-700 to-rose-900 text-white rounded-2xl shadow-xl border border-rose-600"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Let’s Build Experiences That Delight!
                    </h2>
                    <p className="max-w-2xl mx-auto mb-6 text-lg text-rose-100">
                        Work with us to create beautiful, functional, and user-friendly designs
                        that engage your audience and boost your business growth.
                    </p>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-white text-rose-700 font-semibold px-8 py-4 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        Start Your Design Journey →
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default UiUx;
