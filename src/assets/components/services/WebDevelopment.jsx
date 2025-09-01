import React from "react";
import { motion } from "framer-motion";
import { Code, ShoppingCart, Database, Globe, Shield, Rocket } from "lucide-react"; // ✅ icons

const WebDevelopment = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-white flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-7xl bg-white/80 backdrop-blur-md border-2 border-blue-200 rounded-3xl shadow-2xl p-6 md:p-12">
                
                {/* Hero Section */}
                <div className="relative flex flex-col items-center justify-center text-center py-16 px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-extrabold text-blue-900 drop-shadow-sm"
                    >
                        Web Development Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed"
                    >
                        We build powerful, scalable, and modern web applications that help your business 
                        grow, engage customers, and stay ahead of the competition.
                    </motion.p>

                    {/* ✅ Features Grid */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}   // ✅ animation only once
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl"
                    >
                        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 shadow hover:shadow-lg transition">
                            <Code className="text-blue-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-blue-900 text-lg">Custom Development</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Tailored websites and applications built with the latest frameworks and best practices.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 shadow hover:shadow-lg transition">
                            <ShoppingCart className="text-blue-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-blue-900 text-lg">E-Commerce Solutions</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Scalable online stores, secure payments, and seamless user experiences.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 shadow hover:shadow-lg transition">
                            <Globe className="text-blue-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-blue-900 text-lg">Global Reach</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Enterprise-grade apps designed to handle global audiences with performance in mind.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 shadow hover:shadow-lg transition">
                            <Database className="text-blue-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-blue-900 text-lg">API & Database</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Powerful backend integrations with secure and optimized databases.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 shadow hover:shadow-lg transition">
                            <Shield className="text-blue-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-blue-900 text-lg">Security First</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Advanced security measures and compliance to keep your data safe.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 shadow hover:shadow-lg transition">
                            <Rocket className="text-blue-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-blue-900 text-lg">Performance Optimized</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Lightning-fast websites with smooth performance across devices.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Detailed Section */}
                <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}   // ✅
                        className="bg-gradient-to-br from-white to-blue-50 border border-blue-200 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                            Why Choose Us?
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            From small startups to enterprise-level applications, our team brings years of 
                            experience in building web solutions that not only look great but also deliver 
                            measurable results. 
                        </p>

                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-3"><Code className="text-blue-600 w-5 h-5" /> Single Page Apps (React, Vue, Angular)</li>
                            <li className="flex items-center gap-3"><Database className="text-blue-600 w-5 h-5" /> API Development & Integrations</li>
                            <li className="flex items-center gap-3"><Globe className="text-blue-600 w-5 h-5" /> SEO & Performance Optimization</li>
                            <li className="flex items-center gap-3"><Shield className="text-blue-600 w-5 h-5" /> Secure Authentication & Role Management</li>
                        </ul>
                    </motion.div>

                    {/* ✅ Icon-based card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}   // ✅
                        className="flex justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}   // ✅
                            className="bg-gradient-to-br from-blue-200 to-blue-400 p-12 rounded-2xl shadow-xl text-center"
                        >
                            <Code className="w-20 h-20 text-white mx-auto" />
                            <h3 className="mt-6 text-2xl font-bold text-white">
                                Built for the Modern Web
                            </h3>
                            <p className="text-blue-100 mt-3">
                                Scalable, secure, and high-performance websites to help your business thrive.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}   // ✅
                    className="text-center py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl shadow-xl border border-blue-500"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your Online Presence?
                    </h2>
                    <p className="max-w-2xl mx-auto mb-6 text-lg text-blue-100">
                        Partner with us to build modern, scalable, and innovative web solutions that
                        give your business a competitive edge.
                    </p>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-white text-blue-700 font-semibold px-8 py-4 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        Get in Touch →
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default WebDevelopment;
