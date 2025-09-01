import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
    { value: 3, suffix: "+", label: "Years of Experience" },
    { value: 50, suffix: "+", label: "Projects Completed" },
    { value: 40, suffix: "+", label: "Happy Clients" },
    { value: 10, suffix: "+", label: "Team Members" },
];

export default function Experience() {
    const [counts, setCounts] = useState(stats.map(() => 0));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 }); // runs every time

    useEffect(() => {
        if (isInView) {
            setCounts(stats.map(() => 0)); // reset before counting
            stats.forEach((stat, i) => {
                let start = 0;
                const end = stat.value;
                const duration = 1500; // ms
                const stepTime = Math.max(Math.floor(duration / end), 20);

                const timer = setInterval(() => {
                    start += 1;
                    setCounts((prev) => {
                        const newCounts = [...prev];
                        newCounts[i] = start;
                        return newCounts;
                    });
                    if (start === end) clearInterval(timer);
                }, stepTime);
            });
        }
    }, [isInView]);

    return (
        <div ref={ref}>
            <div className="flex items-center justify-evenly bg-[#565656] h-[70%] w-full mt-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        className="flex flex-col justify-center items-center p-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: i * 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <h2 className="text-[#ffffff] text-4xl font-semibold">
                            {counts[i]}
                            {stat.suffix}
                        </h2>
                        <p className="text-[#e2e8f0] p-4 text-xs">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
