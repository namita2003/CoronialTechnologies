import React from "react";
import { motion } from "framer-motion";
import SewaSath from "../../images/sewaSath.png";
import SharpLaboratories from "../../images/sharpLaboratories.png";
import Management from "../../images/Pmis.png";

const Portfolio = () => {
    const projects = [
        {
            img: SewaSath,
            title: "Seva Sath Vikas Foundation",
            desc: "A comprehensive social service website with donation management, event organization, and volunteer coordination features."
        },
        {
            img: SharpLaboratories,
            title: "Sharp Laboratories",
            desc: "A modern laboratory management system with patient records, test results, and integrated billing functionality."
        },
        {
            img: Management,
            title: "PMIS ERP and Website",
            desc: "A comprehensive school management software with student info, attendance tracking, grade management, and administration."
        }
    ];

    return (
        <div className="w-full">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center flex-col py-2 mt-3"
            >
                {/* Title */}
                <h2 className="text-3xl font-bold p-2 text-[#353535] relative group transition-colors duration-500 hover:text-indigo-600">
                    Our Portfolio
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-600 transition-all duration-500 group-hover:w-full"></span>
                </h2>

                {/* Subtitle */}
                <p className="mb-2 mx-2 mt-2 text-[#334155] italic tracking-wide">
                    Explore some of our recent projects and success stories
                </p>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-6 mt-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="bg-gray-100 rounded-2xl shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300"
                        >
                            <div className="p-3">
                                <img
                                    className="rounded-xl object-cover w-full h-56 hover:scale-105 transition-transform duration-500"
                                    src={project.img}
                                    alt={project.title}
                                />
                            </div>
                            <h3 className="text-[#353535] font-bold text-lg text-center relative group px-3">
                                {project.title}
                                <span className="absolute left-1/2 -bottom-1 transform -translate-x-1/2 w-0 h-[2px] bg-indigo-600 transition-all duration-500 group-hover:w-2/3"></span>
                            </h3>
                            <p className="text-[#4a4a4a] px-5 pb-5 text-center text-sm leading-relaxed">
                                {project.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Portfolio;
