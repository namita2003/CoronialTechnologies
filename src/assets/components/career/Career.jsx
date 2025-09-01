import React from "react";
import { motion } from "framer-motion";

import {
    Code2,
    Smartphone,
    Search,
    Palette,
    Briefcase,
    Megaphone,
    Cloud,
    Brain,
    Home,
    Calendar,
    Clock,
    Users,
    Smile,
    Award,
    Rocket,
    Layers,
    Laptop,
    Coffee,
} from "lucide-react";

const Career = () => {
    // 🔹 Toggle hiring status here
    const isHiring = false; // change to true if hiring

    const roles = [
        { title: "Web Developer", icon: <Code2 className="w-7 h-7 text-blue-500" />, desc: "Build responsive, high-performance websites using modern frameworks." },
        { title: "Mobile App Developer", icon: <Smartphone className="w-7 h-7 text-green-500" />, desc: "Develop cutting-edge Android & iOS applications with seamless UI." },
        { title: "SEO Specialist", icon: <Search className="w-7 h-7 text-yellow-500" />, desc: "Optimize websites to rank higher on search engines and drive traffic." },
        { title: "UI/UX Designer", icon: <Palette className="w-7 h-7 text-pink-500" />, desc: "Design intuitive and visually appealing user experiences." },
        { title: "IT Consultant", icon: <Briefcase className="w-7 h-7 text-purple-500" />, desc: "Provide expert guidance on IT infrastructure and digital strategies." },
        { title: "Digital Marketing Manager", icon: <Megaphone className="w-7 h-7 text-orange-500" />, desc: "Plan and execute campaigns that boost brand presence online." },
        { title: "AI Engineer", icon: <Brain className="w-7 h-7 text-indigo-500" />, desc: "Develop intelligent AI modules and machine learning solutions." },
        { title: "Cloud Solutions Architect", icon: <Cloud className="w-7 h-7 text-cyan-500" />, desc: "Design and deploy secure, scalable cloud-based applications." },
    ];

    const perks = [
        { icon: <Home className="w-6 h-6 text-green-500" />, text: "Work From Home Available" },
        { icon: <Calendar className="w-6 h-6 text-blue-500" />, text: "Saturday & Sunday Off" },
        { icon: <Clock className="w-6 h-6 text-orange-500" />, text: "Flexible Working Hours" },
    ];

    const stats = [
        { icon: <Award className="w-8 h-8 text-yellow-500" />, value: "3+", label: "Years Experience" },
        { icon: <Code2 className="w-8 h-8 text-blue-500" />, value: "50+", label: "Projects Completed" },
        { icon: <Smile className="w-8 h-8 text-green-500" />, value: "40+", label: "Happy Clients" },
        { icon: <Users className="w-8 h-8 text-purple-500" />, value: "10+", label: "Team Members" },
    ];

    const growth = [
        { step: "1. Internships & Training", desc: "Kickstart your journey with real-world projects & mentorship." },
        { step: "2. Junior Developer / Associate", desc: "Work on client projects & improve your expertise." },
        { step: "3. Mid-Level Specialist", desc: "Take ownership of modules & lead small teams." },
        { step: "4. Senior / Team Lead", desc: "Drive innovation, manage teams & contribute to strategy." },
    ];

    const process = [
        { icon: <Laptop className="w-6 h-6 text-indigo-500" />, title: "Apply Online", desc: "Submit your resume & portfolio to our HR team." },
        { icon: <Coffee className="w-6 h-6 text-pink-500" />, title: "HR Interview", desc: "We’ll get to know your passion, skills & aspirations." },
        { icon: <Code2 className="w-6 h-6 text-green-500" />, title: "Technical Round", desc: "Showcase your skills with coding tasks or case studies." },
        { icon: <Rocket className="w-6 h-6 text-orange-500" />, title: "Offer & Onboarding", desc: "Congrats 🎉 Welcome aboard to Coronial Technologies!" },
    ];

    const testimonials = [
        { name: "Amit Sharma", role: "Frontend Developer", feedback: "Working here has helped me grow tremendously. The projects are exciting & the mentorship is top-notch." },
        { name: "Priya Verma", role: "SEO Specialist", feedback: "The culture is supportive and creative. I love how my ideas are valued!" },
    ];

    const techStack = ["React", "Node.js", "Next.js", "Python", "AWS", "Docker", "Figma", "TensorFlow"];

    return (
        <div className="relative min-h-screen overflow-hidden">

            {/* Banner */}
            <div className="relative w-full h-[50vh] z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-center">
                <div className="bg-black bg-opacity-40 p-6 rounded-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white">🚀 Build Your Future With Us</h1>
                    <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl mx-auto">
                        Join <span className="font-semibold text-orange-400">Coronial Technologies</span> and
                        shape the future of Web, Mobile, AI, and Cloud solutions.
                    </p>
                </div>
            </div>

            {/* Roles */}
            <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 max-w-4xl mx-auto py-16 px-6 space-y-6 rounded-xl shadow-md mt-12">
                <h2 className="text-3xl font-bold text-center text-gray-800">💼 Open Positions</h2>

                {!isHiring ? (
                    <div className="text-center py-10">
                        <p className="text-lg font-semibold text-gray-600">❌ We’re not hiring right now. Please check back later!</p>
                        <p className="text-gray-600 max-w-xl mx-auto">
                            But don’t worry 🚀 — we’re always growing, and new opportunities
                            open up often. Stay connected so you’ll be the first to know when
                            we’re hiring again.
                        </p>
                    </div>
                ) : (
                    roles.map((role, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start justify-between bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition"
                        >
                            <div className="flex items-start space-x-4">
                                {role.icon}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">{role.title}</h3>
                                    <p className="text-gray-600 text-sm">{role.desc}</p>
                                </div>
                            </div>
                            <a
                                href="mailto:hr@coronialtech.com"
                                className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium shadow hover:bg-indigo-700 transition"
                            >
                                Apply Now 🚀
                            </a>
                        </motion.div>
                    ))
                )}
            </div>

            {/* Growth Roadmap */}
            <div className="bg-purple-50 max-w-4xl mx-auto mt-16 px-6 py-12 rounded-xl">
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">📈 Career Growth Path</h2>
                <div className="space-y-6">
                    {growth.map((g, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }} viewport={{ once: true }}
                            className="bg-gradient-to-r from-indigo-50 to-purple-100 p-5 rounded-xl shadow">
                            <h3 className="text-lg font-semibold text-indigo-700">{g.step}</h3>
                            <p className="text-gray-600">{g.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Hiring Process */}
            <div className="bg-gray-100 max-w-5xl mx-auto mt-20 px-6 py-12 rounded-xl">
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">📝 Our Hiring Process</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {process.map((p, i) => (
                        <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.2 }} viewport={{ once: true }}
                            className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition">
                            <div className="flex justify-center mb-3">{p.icon}</div>
                            <h3 className="font-semibold text-gray-800">{p.title}</h3>
                            <p className="text-gray-600 text-sm">{p.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Testimonials */}
            <div className="bg-pink-50 max-w-4xl mx-auto mt-20 px-6 py-12 rounded-xl">
                <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">💬 Life at Coronial Tech</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }} viewport={{ once: true }}
                            className="bg-gradient-to-r from-white to-gray-100 p-6 rounded-xl shadow-md">
                            <p className="italic text-gray-700">“{t.feedback}”</p>
                            <h4 className="mt-3 font-semibold text-gray-900">{t.name}</h4>
                            <p className="text-sm text-gray-500">{t.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-blue-50 max-w-4xl mx-auto mt-20 px-6 py-12 text-center rounded-xl">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">⚙️ Tech Stack We Love</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {techStack.map((tech, idx) => (
                        <span key={idx} className="px-4 py-2 bg-indigo-100 text-indigo-700 font-medium rounded-full shadow">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-50 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 px-6 py-12 rounded-xl">
                {stats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
                        {stat.icon}
                        <h3 className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</h3>
                        <p className="text-gray-600 text-sm">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Join Us */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-6 text-center mt-12">
                <h2 className="text-3xl md:text-4xl font-bold">🌟 Ready to Join Us?</h2>
                <p className="text-lg mt-4 mb-6 max-w-2xl mx-auto">
                    Be a part of a passionate team building world-class solutions. Let’s innovate together!
                </p>
            </div>
        </div>
    );
};

export default Career;
