import React from "react";
import { motion } from "framer-motion";
import { Search, Share2, TrendingUp, PenTool, BarChart3, Megaphone } from "lucide-react"; // ✅ icons

const DigitalMarketing = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-orange-100 via-orange-50 to-white flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-7xl bg-white/80 backdrop-blur-md border-2 border-orange-200 rounded-3xl shadow-2xl p-6 md:p-12">
                
                {/* ✅ Hero Section */}
                <div className="relative flex flex-col items-center justify-center text-center py-16 px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-extrabold text-orange-900 drop-shadow-sm"
                    >
                        Digital Marketing Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed"
                    >
                        We help businesses grow online with powerful marketing strategies, 
                        data-driven insights, and campaigns that connect with your audience.
                    </motion.p>

                    {/* ✅ Features Grid */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }} // ✅ only animate first time
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl"
                    >
                        <div className="p-6 rounded-2xl bg-orange-50 border border-orange-200 shadow hover:shadow-lg transition">
                            <Search className="text-orange-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-orange-900 text-lg">SEO Optimization</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Improve search rankings and drive organic traffic with proven strategies.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-orange-50 border border-orange-200 shadow hover:shadow-lg transition">
                            <Share2 className="text-orange-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-orange-900 text-lg">Social Media Marketing</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Engage your audience with creative campaigns across all platforms.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-orange-50 border border-orange-200 shadow hover:shadow-lg transition">
                            <TrendingUp className="text-orange-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-orange-900 text-lg">PPC Advertising</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Run targeted ads that maximize ROI and capture leads effectively.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-orange-50 border border-orange-200 shadow hover:shadow-lg transition">
                            <PenTool className="text-orange-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-orange-900 text-lg">Content Marketing</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Create valuable content that builds trust and strengthens brand loyalty.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-orange-50 border border-orange-200 shadow hover:shadow-lg transition">
                            <BarChart3 className="text-orange-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-orange-900 text-lg">Analytics & Insights</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Data-driven strategies to measure success and optimize campaigns.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-orange-50 border border-orange-200 shadow hover:shadow-lg transition">
                            <Megaphone className="text-orange-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-orange-900 text-lg">Brand Awareness</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Strengthen your brand presence and connect with the right audience.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* ✅ Detailed Section */}
                <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }} // ✅ only animate first time
                        className="bg-gradient-to-br from-white to-orange-50 border border-orange-200 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-orange-900 mb-4">
                            Why Choose Us?
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our digital marketing experts combine creativity, technology, and data 
                            to deliver strategies that not only grow your online presence but also 
                            convert traffic into customers.
                        </p>

                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-3"><Search className="text-orange-600 w-5 h-5" /> SEO & Keyword Research</li>
                            <li className="flex items-center gap-3"><Share2 className="text-orange-600 w-5 h-5" /> Social Media Campaigns</li>
                            <li className="flex items-center gap-3"><BarChart3 className="text-orange-600 w-5 h-5" /> Analytics & Conversion Tracking</li>
                            <li className="flex items-center gap-3"><Megaphone className="text-orange-600 w-5 h-5" /> Brand Strategy & Awareness</li>
                        </ul>
                    </motion.div>

                    {/* ✅ Highlight Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }} // ✅ only animate first time
                        className="flex justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="bg-gradient-to-br from-orange-400 to-orange-600 p-12 rounded-2xl shadow-xl text-center"
                        >
                            <TrendingUp className="w-20 h-20 text-white mx-auto" />
                            <h3 className="mt-6 text-2xl font-bold text-white">
                                Grow Smarter, Faster
                            </h3>
                            <p className="text-orange-100 mt-3">
                                Unlock the full potential of digital marketing with strategies 
                                designed for measurable success.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* ✅ Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }} // ✅ only animate first time
                    className="text-center py-16 bg-gradient-to-r from-orange-600 to-orange-800 text-white rounded-2xl shadow-xl border border-orange-500"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Elevate Your Digital Presence?
                    </h2>
                    <p className="max-w-2xl mx-auto mb-6 text-lg text-orange-100">
                        Partner with us to create impactful campaigns, strengthen your brand, 
                        and drive real results.
                    </p>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-white text-orange-700 font-semibold px-8 py-4 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        Let’s Get Started →
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default DigitalMarketing;
