import React from "react";
import { motion } from "framer-motion";
import {
    CheckCircle2,
    Code2,
    Smartphone,
    Palette,
    Megaphone,
    Cloud,
    Search,
    Brain,
    Briefcase,
    Users,
    Target,
    TrendingUp,
    Star,
} from "lucide-react";
import CoronialTech from "../../images/coronialTech.jpg";
import {
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    Legend, // ✅ added Legend import
} from "recharts";

const AboutUs = () => {
    const bulletPoints = [
        "Driven by innovation and fueled by creativity in every project we deliver.",
        "Trusted by startups and enterprises for scalable digital solutions.",
        "Strong focus on building long-term client relationships based on transparency.",
        "Blending modern technologies with strategic insights to maximize business growth.",
        "Empowering local businesses in Varanasi while catering to global clients.",
        "Committed to continuous learning, research, and staying ahead in emerging tech trends.",
    ];

    const services = [
        { name: "Web Development", icon: <Code2 className="w-6 h-6 text-indigo-500" /> },
        { name: "App Development", icon: <Smartphone className="w-6 h-6 text-green-500" /> },
        { name: "UI/UX", icon: <Palette className="w-6 h-6 text-pink-500" /> },
        { name: "Digital Marketing", icon: <Megaphone className="w-6 h-6 text-orange-500" /> },
        { name: "IT Consultancy", icon: <Briefcase className="w-6 h-6 text-blue-500" /> },
        { name: "Cloud Solutions", icon: <Cloud className="w-6 h-6 text-sky-500" /> },
        { name: "SEO Optimization", icon: <Search className="w-6 h-6 text-green-600" /> },
        { name: "AI Modules", icon: <Brain className="w-6 h-6 text-purple-600" /> },
    ];

    const pieData = [
        { name: "Web Dev", value: 30 },
        { name: "App Dev", value: 25 },
        { name: "UI/UX", value: 15 },
        { name: "Marketing", value: 20 },
        { name: "Others", value: 10 },
    ];

    const COLORS = ["#4F46E5", "#22C55E", "#EC4899", "#F59E0B", "#6366F1"];

    const barData = [
        { name: "2020", clients: 10, projects: 15 },
        { name: "2021", clients: 25, projects: 30 },
        { name: "2022", clients: 40, projects: 50 },
        { name: "2023", clients: 60, projects: 75 },
        { name: "2024", clients: 85, projects: 110 },
    ];

    return (
        <div className="w-full py-20 px-6 relative bg-gradient-to-br from-green-50 via-white to-indigo-50 overflow-hidden">
            <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center justify-center rounded-3xl bg-white/90 backdrop-blur-xl p-10 shadow-xl border border-gray-200">

                {/* Heading */}
                <motion.h2
                    className="text-5xl font-extrabold text-[#222] cursor-pointer relative inline-block group"
                    whileHover={{ scale: 1.08 }}
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-indigo-600">
                        About Us
                    </span>
                    <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-gradient-to-r from-green-500 to-indigo-600 rounded-full transition-all duration-500 group-hover:w-full"></span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="mb-6 mt-5 text-[#334155] italic tracking-wide font-serif text-lg text-center max-w-2xl"
                >
                    Learn more about <span className="font-semibold text-indigo-600">Coronial Technologies</span> and our journey in the IT industry.
                </motion.p>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-10">
                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-start text-left p-4 md:w-1/2"
                    >
                        <motion.h4
                            className="text-3xl font-bold text-[#222] mb-6 cursor-pointer relative inline-block group"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-indigo-600">
                                Who We Are
                            </span>
                            <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-green-500 to-indigo-600 rounded-full transition-all duration-500 group-hover:w-full"></span>
                        </motion.h4>

                        <p className="text-[#4a4a4a] leading-relaxed text-[1.05rem] mb-6">
                            Founded in <span className="font-semibold text-indigo-500">2020</span>, Coronial Technologies has quickly established itself as a
                            leading IT solutions provider in <span className="font-semibold text-green-600">Varanasi, Uttar Pradesh</span>.
                            With a team of skilled professionals, we deliver innovative and reliable
                            technology solutions to businesses of all sizes.
                            <br /><br />
                            Our mission is to <span className="italic text-green-600">empower businesses through technology</span>, helping them
                            achieve their goals and stay ahead in today's competitive market.
                        </p>

                        <ul className="space-y-3">
                            {bulletPoints.map((point, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 * index, duration: 0.6 }}
                                    className="flex items-start text-[#374151] text-[1rem]"
                                >
                                    <CheckCircle2 className="text-green-500 w-5 h-5 mt-0.5 mr-2" />
                                    {point}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-1/2 rounded-2xl overflow-hidden border-4 border-green-400 relative shadow-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <img
                            className="w-full h-[350px] object-cover rounded-2xl"
                            src={CoronialTech}
                            alt="Coronial Technologies"
                        />
                    </motion.div>
                </div>

                {/* Services Section */}
                <div className="mt-20 w-full relative">
                    <motion.h3
                        className="text-3xl font-bold text-[#222] mb-10 cursor-pointer relative inline-block group text-left"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-indigo-600">
                            What We Offer
                        </span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-green-500 to-indigo-600 rounded-full transition-all duration-500 group-hover:w-full"></span>
                    </motion.h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index, duration: 0.5 }}
                                whileHover={{ scale: 1.07, rotate: 1 }}
                                className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-2xl border hover:shadow-2xl transition"
                            >
                                {service.icon}
                                <p className="mt-3 font-medium text-gray-700">{service.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Dashboard Section */}
                <div className="mt-20 w-full">
                    <motion.h3
                        className="text-3xl font-bold text-[#222] mb-10 cursor-pointer relative inline-block group text-left"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-indigo-600">
                            Dashboard Insights
                        </span>
                        <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-green-500 to-indigo-600 rounded-full transition-all duration-500 group-hover:w-full"></span>
                    </motion.h3>

                    {/* KPI Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        <div className="p-6 bg-green-50 rounded-2xl shadow text-center">
                            <Users className="w-8 h-8 text-green-600 mx-auto" />
                            <h4 className="text-2xl font-bold mt-2">50+</h4>
                            <p className="text-gray-600">Clients Served</p>
                        </div>
                        <div className="p-6 bg-indigo-50 rounded-2xl shadow text-center">
                            <Target className="w-8 h-8 text-indigo-600 mx-auto" />
                            <h4 className="text-2xl font-bold mt-2">100+</h4>
                            <p className="text-gray-600">Projects Completed</p>
                        </div>
                        <div className="p-6 bg-orange-50 rounded-2xl shadow text-center">
                            <TrendingUp className="w-8 h-8 text-orange-600 mx-auto" />
                            <h4 className="text-2xl font-bold mt-2">95%</h4>
                            <p className="text-gray-600">Growth Rate</p>
                        </div>
                        <div className="p-6 bg-purple-50 rounded-2xl shadow text-center">
                            <Star className="w-8 h-8 text-purple-600 mx-auto" />
                            <h4 className="text-2xl font-bold mt-2">4.9/5</h4>
                            <p className="text-gray-600">Avg. Satisfaction</p>
                        </div>
                    </div>

                    {/* Graphs Section */}
                    <div className="mt-20 w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Pie Chart */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg border">
                            <h4 className="text-xl font-bold mb-4 text-gray-800">Service Distribution</h4>
                            <ResponsiveContainer width="100%" height={300}>
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                                        outerRadius={100}
                                        dataKey="value"
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Bar Chart */}
                        <div className="bg-white p-6 rounded-2xl shadow-lg border">
                            <h4 className="text-xl font-bold mb-4 text-gray-800">Clients & Projects Growth</h4>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={barData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="clients" fill="#4F46E5" />
                                    <Bar dataKey="projects" fill="#22C55E" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;