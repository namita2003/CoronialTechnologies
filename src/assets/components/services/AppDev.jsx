import React from "react";
import { motion } from "framer-motion";
import { Smartphone, ShoppingBag, Cloud, ShieldCheck, Cpu, Layers } from "lucide-react"; // ✅ icons

const AppDevelopment = () => {
    const features = [
        {
            icon: <Smartphone className="w-10 h-10 text-purple-600" />,
            title: "Native Development",
            desc: "High-performance apps for iOS & Android built with platform-specific tools.",
        },
        {
            icon: <Layers className="w-10 h-10 text-purple-600" />,
            title: "Cross-Platform Apps",
            desc: "One codebase, multiple platforms using React Native & Flutter.",
        },
        {
            icon: <ShoppingBag className="w-10 h-10 text-purple-600" />,
            title: "mCommerce Solutions",
            desc: "Custom mobile apps for retail, e-commerce & digital marketplaces.",
        },
        {
            icon: <Cpu className="w-10 h-10 text-purple-600" />,
            title: "AI-Powered Apps",
            desc: "Smart applications leveraging AI & ML to enhance user experience.",
        },
        {
            icon: <Cloud className="w-10 h-10 text-purple-600" />,
            title: "Cloud Integration",
            desc: "Apps seamlessly connected to cloud for scalability & performance.",
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-purple-600" />,
            title: "Secure Architecture",
            desc: "Enterprise-grade security ensuring safe transactions & data privacy.",
        },
    ];

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white flex items-center justify-center py-10 px-4">
            <div className="w-full max-w-7xl bg-white/80 backdrop-blur-md border-2 border-purple-200 rounded-3xl shadow-2xl p-6 md:p-12">
                
                {/* Hero Section */}
                <div className="relative flex flex-col items-center justify-center text-center py-16 px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-extrabold text-purple-900 drop-shadow-sm"
                    >
                        App Development Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed"
                    >
                        We design and build intuitive, scalable, and high-performance mobile applications
                        that help businesses connect with their customers anytime, anywhere.
                    </motion.p>
                </div>

                {/* ✅ Feature Cards Section */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 py-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}   // ✅ animation only once
                            className="bg-white border border-purple-200 shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition"
                        >
                            <div className="flex justify-center mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-purple-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-sm">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Detailed Description Section */}
                <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}   // ✅
                        className="bg-gradient-to-br from-white to-purple-50 border border-purple-200 shadow-lg rounded-2xl p-8 hover:shadow-2xl transition"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">
                            Why Choose Our App Development Services?
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Our team of expert developers and designers build mobile apps that are fast,
                            secure, and user-friendly. Whether you need native iOS/Android apps or
                            cross-platform solutions, we provide end-to-end services from idea to launch.
                        </p>

                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-3">
                                <Smartphone className="text-purple-600 w-5 h-5" /> Native iOS & Android Development
                            </li>
                            <li className="flex items-center gap-3">
                                <ShoppingBag className="text-purple-600 w-5 h-5" /> Mobile Commerce & Retail Apps
                            </li>
                            <li className="flex items-center gap-3">
                                <Cloud className="text-purple-600 w-5 h-5" /> Cloud-Integrated Mobile Applications
                            </li>
                            <li className="flex items-center gap-3">
                                <ShieldCheck className="text-purple-600 w-5 h-5" /> Secure & Scalable Architecture
                            </li>
                            <li className="flex items-center gap-3">
                                <Cpu className="text-purple-600 w-5 h-5" /> AI & ML Powered Apps
                            </li>
                            <li className="flex items-center gap-3">
                                <Layers className="text-purple-600 w-5 h-5" /> Cross-Platform Solutions (React Native, Flutter)
                            </li>
                        </ul>
                    </motion.div>

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
                            className="bg-gradient-to-br from-purple-200 to-purple-400 p-12 rounded-2xl shadow-xl text-center"
                        >
                            <Smartphone className="w-20 h-20 text-white mx-auto" />
                            <h3 className="mt-6 text-2xl font-bold text-white">
                                Mobile First, User Focused
                            </h3>
                            <p className="text-purple-100 mt-3">
                                Deliver seamless experiences across devices with our innovative app solutions.
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
                    className="text-center py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-2xl shadow-xl border border-purple-500"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Launch Your Next Big App?
                    </h2>
                    <p className="max-w-2xl mx-auto mb-6 text-lg text-purple-100">
                        Let’s build mobile solutions that connect, engage, and inspire your users
                        while growing your business.
                    </p>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-white text-purple-700 font-semibold px-8 py-4 rounded-full shadow-md hover:bg-gray-100 transition"
                    >
                        Start Your Project →
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default AppDevelopment;
