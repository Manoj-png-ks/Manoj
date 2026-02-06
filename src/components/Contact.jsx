import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="container text-center">
                <h2 className="text-3xl font-bold mb-8">Ready to Optimize Your Data?</h2>
                <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
                    <a href="mailto:manojkumar_ca@outlook.com" className="flex items-center justify-center gap-3 text-lg hover:text-cyan-400 transition-colors">
                        <Mail className="text-cyan-400" /> manojkumar_ca@outlook.com
                    </a>
                    <a href="tel:+14376629381" className="flex items-center justify-center gap-3 text-lg hover:text-cyan-400 transition-colors">
                        <Phone className="text-cyan-400" /> +1 (437) 662-9381
                    </a>
                    <span className="flex items-center justify-center gap-3 text-lg text-gray-400">
                        <Linkedin className="text-cyan-400" /> Toronto, Canada
                    </span>
                </div>
                <p className="text-muted text-sm max-w-xl mx-auto">
                    &copy; {new Date().getFullYear()} Manoj Kumar Sekar. Built with React & Data-Driven Design.
                </p>
            </div>
        </section>
    );
};

export default Contact;
