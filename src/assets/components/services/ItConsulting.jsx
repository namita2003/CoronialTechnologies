import React from "react";
import { motion } from "framer-motion";
import { Laptop, Server, Cloud, ShieldCheck, Cpu, BarChart } from "lucide-react"; // ✅ icons

const ItConsulting = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-green-100 via-green-50 to-white flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-7xl bg-white/80 backdrop-blur-md border-2 border-green-200 rounded-3xl shadow-2xl p-6 md:p-12">
                
                {/* Hero Section */}
                <div className="relative flex flex-col items-center justify-center text-center py-16 px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-extrabold text-green-900 drop-shadow-sm"
                    >
                        IT Consulting Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed"
                    >
                        We provide expert IT consulting to help businesses optimize operations, 
                        adopt cutting-edge technology, and accelerate digital transformation.
                    </motion.p>

                    {/* ✅ Features Grid */}
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }} // 👈 ensures one-time animation
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl"
                    >
                        <div className="p-6 rounded-2xl bg-green-50 border border-green-200 shadow hover:shadow-lg transition">
                            <Laptop className="text-green-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-green-900 text-lg">IT Strategy & Planning</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Tailored IT strategies that align with your business goals for long-term success.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-green-50 border border-green-200 shadow hover:shadow-lg transition">
                            <Server className="text-green-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-green-900 text-lg">Infrastructure Solutions</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Optimized IT infrastructure for scalability, security, and efficiency.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-green-50 border border-green-200 shadow hover:shadow-lg transition">
                            <Cloud className="text-green-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-green-900 text-lg">Cloud Consulting</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Cloud migration, integration, and management for modern enterprises.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-green-50 border border-green-200 shadow hover:shadow-lg transition">
                            <ShieldCheck className="text-green-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-green-900 text-lg">Cybersecurity</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Proactive security assessments and compliance solutions to protect your data.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-green-50 border border-green-200 shadow hover:shadow-lg transition">
                            <Cpu className="text-green-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-green-900 text-lg">Digital Transformation</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Implementing modern tools & technologies to future-proof your business.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-green-50 border border-green-200 shadow hover:shadow-lg transition">
                            <BarChart className="text-green-600 w-8 h-8 mb-3" />
                            <h3 className="font-semibold text-green-900 text-lg">Data & Analytics</h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Actionable insights through advanced data analytics and BI solutions.
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
                        viewport={{ once: true }} // 👈 one-time scroll animation
                        className="bg-gradient-to-br from-white to-green-50 border border-green-200 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
                            Why Partner With Us?
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our IT consultants bring industry expertise, technical know-how, and a 
                            problem-solving mindset to deliver solutions that truly make a difference.
                        </p>

                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-3"><Laptop className="text-green-600 w-5 h-5" /> Technology Roadmaps & IT Audits</li>
                            <li className="flex items-center gap-3"><Server className="text-green-600 w-5 h-5" /> Infrastructure Modernization</li>
                            <li className="flex items-center gap-3"><Cloud className="text-green-600 w-5 h-5" /> Cloud Strategy & Migrations</li>
                            <li className="flex items-center gap-3"><ShieldCheck className="text-green-600 w-5 h-5" /> Risk Management & Compliance</li>
                        </ul>
                    </motion.div>

                    {/* ✅ Icon-based Highlight Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }} // 👈 only once
                        className="flex justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }} // 👈 only once
                            className="bg-gradient-to-br from-green-300 to-green-500 p-12 rounded-2xl shadow-xl text-center"
                        >
                            <Laptop className="w-20 h-20 text-white mx-auto" />
                            <h3 className="mt-6 text-2xl font-bold text-white">
                                Smarter IT. Better Business.
                            </h3>
                            <p className="text-green-100 mt-3">
                                We bridge technology with strategy to drive efficiency and growth.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }} // 👈 one-time CTA animation
                    className="text-center py-16 bg-gradient-to-r from-green-600 to-green-800 text-white rounded-2xl shadow-xl border border-green-500"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Empower Your Business with IT?
                    </h2>
                    <p className="max-w-2xl mx-auto mb-6 text-lg text-green-100">
                        Let’s build a smarter, more secure, and future-ready IT ecosystem together. 
                        Get in touch with our experts today!
                    </p>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-white text-green-700 font-semibold px-8 py-4 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        Schedule a Consultation →
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default ItConsulting;
