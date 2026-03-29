import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const certs = [
    "Google Analytics 4 (GA4) Certification",
    "Microsoft Certified: Data Analyst Associate (Power BI)",
    "Google Tag Manager Fundamentals",
    "Adobe Analytics Business Practitioner Expert",
    "Optimizely Experimentation Practitioner"
];

const Certifications = () => {
    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {certs.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, borderColor: 'var(--accent-cyan)' }}
                            className="bg-glass p-6 rounded-xl border border-white/5 flex items-center gap-4 max-w-sm w-full"
                        >
                            <div className="p-3 bg-cyan-900/30 rounded-full text-cyan-400">
                                <Award size={24} />
                            </div>
                            <span className="font-medium text-gray-200">{cert}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
