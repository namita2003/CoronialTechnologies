import React from "react";
import { motion } from "framer-motion";
import { Cloud, Server, ShieldCheck, Database, Layers, Zap } from "lucide-react"; // ✅ icons

const CloudSolutions = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-teal-100 via-cyan-50 to-white flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-7xl bg-white/80 backdrop-blur-md border-2 border-teal-200 rounded-3xl shadow-2xl p-6 md:p-12">
                
                {/* Hero Section */}
                <div className="relative flex flex-col items-center justify-center text-center py-16 px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-extrabold text-teal-900 drop-shadow-sm"
                    >
                        Cloud Solutions Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed"
                    >
                        We empower businesses with scalable, secure, and cost-efficient 
                        cloud solutions designed to boost productivity, enhance security, 
                        and drive digital transformation.
                    </motion.p>

                    {/* ✅ Features Grid */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl"
                    >
                        <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 shadow hover:shadow-lg transition">
                            <Cloud className="text-teal-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-teal-900 text-lg">Cloud Migration</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Seamless migration of your applications and data to the cloud with zero downtime.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 shadow hover:shadow-lg transition">
                            <Server className="text-teal-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-teal-900 text-lg">Infrastructure as a Service</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Scalable cloud infrastructure tailored to your business needs.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 shadow hover:shadow-lg transition">
                            <Database className="text-teal-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-teal-900 text-lg">Cloud Databases</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Fully managed and optimized databases with high availability.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 shadow hover:shadow-lg transition">
                            <ShieldCheck className="text-teal-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-teal-900 text-lg">Enterprise Security</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Advanced cloud security ensuring compliance and data protection.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 shadow hover:shadow-lg transition">
                            <Layers className="text-teal-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-teal-900 text-lg">Multi-Cloud Strategy</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Harness the power of multiple providers for flexibility and resilience.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 shadow hover:shadow-lg transition">
                            <Zap className="text-teal-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-teal-900 text-lg">High Performance</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Optimized cloud performance for fast, reliable business operations.
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
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-white to-teal-50 border border-teal-200 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-teal-900 mb-4">
                            Why Choose Our Cloud Services?
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our team of certified cloud experts ensures your business benefits from 
                            a robust, secure, and future-ready cloud infrastructure. 
                            We focus on scalability, flexibility, and cost efficiency.
                        </p>

                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-3"><Cloud className="text-teal-600 w-5 h-5" /> Cloud Migration & Modernization</li>
                            <li className="flex items-center gap-3"><Database className="text-teal-600 w-5 h-5" /> Data Backup & Recovery</li>
                            <li className="flex items-center gap-3"><ShieldCheck className="text-teal-600 w-5 h-5" /> Identity & Access Management</li>
                            <li className="flex items-center gap-3"><Zap className="text-teal-600 w-5 h-5" /> Cost Optimization Strategies</li>
                        </ul>
                    </motion.div>

                    {/* ✅ Icon-based Highlight Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-br from-teal-500 to-cyan-600 p-12 rounded-2xl shadow-xl text-center"
                        >
                            <Cloud className="w-20 h-20 text-white mx-auto" />
                            <h3 className="mt-6 text-2xl font-bold text-white">
                                Scalable Cloud Solutions
                            </h3>
                            <p className="text-cyan-100 mt-3">
                                Empowering businesses with cloud-native solutions built to scale globally.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center py-16 bg-gradient-to-r from-teal-600 to-cyan-700 text-white rounded-2xl shadow-xl border border-teal-500"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Embrace the Cloud?
                    </h2>
                    <p className="max-w-2xl mx-auto mb-6 text-lg text-cyan-100">
                        Let us design, implement, and manage your cloud infrastructure 
                        for improved agility, security, and business growth.
                    </p>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-white text-teal-700 font-semibold px-8 py-4 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        Get Started →
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default CloudSolutions;
