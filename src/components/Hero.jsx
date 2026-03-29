import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Animated Elements */}
            <div className="absolute inset-0 z-0">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-cyan-500 opacity-20"
                        style={{
                            width: Math.random() * 10 + 2 + 'px',
                            height: Math.random() * 10 + 2 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            background: i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-purple)'
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.2, 0.5, 0.2],
                        }}
                        transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
                {/* Grid Overlay */}
                <div style={{
                    backgroundImage: 'linear-gradient(rgba(0, 240, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.05) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)'
                }}></div>
            </div>

            <div className="container relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-cyan mb-4 tracking-widest uppercase font-semibold">Strategic Digital Analytics & Growth Intelligence</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400"
                        style={{ backgroundImage: 'linear-gradient(to right, #fff, #a5b4fc)' }}>
                        MANOJ KUMAR SEKAR
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
                        Transforming complex digital data into actionable insights.
                        <br />
                        Specializing in behavioral analytics, conversion optimization, and ROI growth.
                    </p>

                    <div className="flex justify-center gap-4">
                        <motion.a
                            href="#experience"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-transparent border border-cyan-500 text-cyan-400 rounded-full font-medium hover:bg-cyan-500/10 transition-colors"
                            style={{ borderColor: 'var(--accent-cyan)', color: 'var(--accent-cyan)' }}
                        >
                            View Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 text-white rounded-full font-medium"
                            style={{ background: 'linear-gradient(45deg, var(--accent-purple), var(--accent-cyan))' }}
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
