import React from 'react';
import Hero from './components/Hero';
import SkillsChart from './components/SkillsChart';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Certifications from './components/Certifications';

function App() {
    return (
        <div className="min-h-screen bg-[#0a0e17] text-white">
            <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-[#0a0e17]/80 backdrop-blur-md border-b border-white/5">
                <div className="container flex justify-between items-center">
                    <span className="font-bold text-xl tracking-tighter text-cyan-400">MKS</span>
                    <div className="flex gap-6 text-sm text-gray-300">
                        <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
                        <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
                    </div>
                </div>
            </nav>

            <main>
                <Hero />
                <SkillsChart />
                <Experience />
                <Certifications />

                {/* Education Section */}
                <section className="py-16 bg-black/20 border-t border-white/5">
                    <div className="container text-center">
                        <h3 className="text-sm tex-muted mb-2 uppercase tracking-widest text-gray-500">Education</h3>
                        <h4 className="text-2xl font-bold text-white mb-1">Bachelor of Commerce, Information Technology</h4>
                        <p className="text-cyan-400">Dr. G R Damodaran College of Science, India</p>
                    </div>
                </section>

                <Contact />
            </main>
        </div>
    );
}

export default App;
