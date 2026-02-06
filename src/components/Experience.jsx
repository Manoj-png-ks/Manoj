import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Users, Target } from 'lucide-react';

const experiences = [
    {
        company: "CIBC",
        role: "Senior Analyst - Digital Banking",
        period: "09/2023 - Present",
        location: "Toronto, ON",
        achievements: [
            { text: "Optimized media spend & boosted conversion ROI", metric: "+21%" },
            { text: "Improved personal loan form completion via UX", metric: "+18%" },
            { text: "Increased email-to-application conversions", metric: "+12%" },
            { text: "Improved 90-day retention for Smart Accounts", metric: "+14%" },
        ]
    },
    {
        company: "Sun Life Financial",
        role: "Digital Marketing & Analytics Analyst",
        period: "05/2022 - 06/2023",
        location: "Toronto, ON",
        achievements: [
            { text: "Reduced credit card application abandonment", metric: "-17%" },
            { text: "Boosted mobile task completion rate via UI updates", metric: "+22%" },
            { text: "Reduced manual reporting time with Python", metric: "-70%" },
            { text: "Reallocated paid media spend for better ROI", metric: "20%" },
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section-padding bg-opacity-50" style={{ backgroundColor: 'rgba(10, 14, 23, 0.5)' }}>
            <div className="container">
                <h2 className="text-3xl font-bold mb-12 text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500" style={{ backgroundImage: 'linear-gradient(to right, var(--accent-cyan), var(--accent-purple))' }}>
                        Professional Impact
                    </span>
                </h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="bg-glass p-8 relative overflow-hidden group"
                        >
                            {/* Decoration Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-purple-600" style={{ background: 'linear-gradient(to bottom, var(--accent-cyan), var(--accent-purple))' }}></div>

                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                                    <div className="flex items-center gap-4 text-muted text-sm">
                                        <span className="flex items-center gap-1"><Briefcase size={16} /> {exp.company}</span>
                                        <span>|</span>
                                        <span>{exp.period}</span>
                                        <span>|</span>
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                                {exp.achievements.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-black/40 p-4 rounded-lg border border-white/5 hover:border-cyan-500/30 transition-colors"
                                    >
                                        <div className="text-3xl font-bold text-cyan-400 mb-2" style={{ color: 'var(--accent-green)' }}>
                                            {item.metric}
                                        </div>
                                        <p className="text-sm text-gray-300 leading-snug">{item.text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
