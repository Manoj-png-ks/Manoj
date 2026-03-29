import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const data = [
    { subject: 'Adobe Analytics / GA4', A: 95, fullMark: 100 },
    { subject: 'Tag Management', A: 90, fullMark: 100 },
    { subject: 'SQL & Python', A: 88, fullMark: 100 },
    { subject: 'A/B & MVT Testing', A: 90, fullMark: 100 },
    { subject: 'BI & Visualization', A: 92, fullMark: 100 },
    { subject: 'Cloud (GCP/AWS/Azure)', A: 82, fullMark: 100 },
];

const SkillsChart = () => {
    return (
        <section className="section-padding relative">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    {/* Text Content */}
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <span style={{ width: '40px', height: '4px', background: 'var(--accent-cyan)', display: 'block' }}></span>
                            Skill Intelligence
                        </h2>
                        <p className="text-muted mb-6 text-lg">
                            My technical arsenal combines advanced data modeling with strategic marketing implementation.
                            I bridge the gap between raw data and business impact.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Adobe Analytics & GA4', val: 'Expert' },
                                { label: 'Power BI, Tableau & Looker', val: 'Advanced' },
                                { label: 'SQL, Python & BigQuery', val: 'Proficient' },
                                { label: 'Adobe Target & Optimizely', val: 'Expert' }
                            ].map((skill, i) => (
                                <div key={i} className="bg-glass p-4">
                                    <h4 className="text-sm text-muted uppercase tracking-wider mb-1">{skill.label}</h4>
                                    <p className="text-lg font-semibold text-white">{skill.val}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="flex-1 w-full h-[400px] bg-glass p-4 flex items-center justify-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                                <PolarGrid stroke="#334155" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                                <Radar
                                    name="Proficiency"
                                    dataKey="A"
                                    stroke="#00f0ff"
                                    strokeWidth={3}
                                    fill="#00f0ff"
                                    fillOpacity={0.3}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#0a0e17', borderColor: '#334155', color: '#fff' }}
                                    itemStyle={{ color: '#00f0ff' }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsChart;
