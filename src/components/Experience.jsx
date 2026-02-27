import { useState, useEffect } from 'react';
import { experiences } from '../data/experiences';
import AnimateOnScroll from './AnimateOnScroll';
import { SkeletonCard } from './Skeleton';

/**
 * Experience section displaying professional work history
 * @returns {JSX.Element} Experience component
 */
const Experience = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section name="experience" className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 w-full min-h-fit text-slate-800 dark:text-white py-20">
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-indigo-500'>Experience</p>
                    <p className='py-6 text-slate-500 dark:text-gray-400'>My professional journey and roles</p>
                </div>

                {loading ? (
                    <div className='space-y-6 max-w-3xl mx-auto w-full' aria-busy="true">
                        {[1, 2, 3, 4].map(i => <SkeletonCard key={i} lines={4} />)}
                    </div>
                ) : (
                    <div className='relative max-w-3xl mx-auto w-full'>
                        {/* Vertical timeline line */}
                        <div className='absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-indigo-400 to-slate-300 dark:to-gray-700'></div>

                        {experiences.map(({ id, title, company, location, duration, highlights, current }, index) => (
                            <AnimateOnScroll key={id} delay={index * 150}>
                                <div className='relative pl-12 md:pl-16 pb-16 last:pb-0'>
                                    {/* Timeline dot */}
                                    <div className={`absolute left-2.5 md:left-4 top-1 w-4 h-4 rounded-full border-[3px] ${current
                                        ? 'bg-emerald-400 border-emerald-500 shadow-lg shadow-emerald-500/40'
                                        : 'bg-indigo-400 border-indigo-500 shadow-lg shadow-indigo-500/30'
                                    }`}>
                                        {current && (
                                            <span className='absolute inset-0 rounded-full animate-ping bg-emerald-400 opacity-40'></span>
                                        )}
                                    </div>

                                    {/* Duration & badges */}
                                    <div className='flex flex-wrap items-center gap-2 mb-2'>
                                        <span className='text-xs font-semibold text-slate-500 dark:text-gray-400 tracking-wide uppercase'>
                                            {duration}
                                        </span>
                                        {current && (
                                            <span className='inline-flex items-center gap-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-xs font-semibold px-2 py-0.5 rounded-full'>
                                                <span className='w-1.5 h-1.5 rounded-full bg-emerald-500'></span>
                                                Current
                                            </span>
                                        )}
                                    </div>

                                    {/* Card */}
                                    <div className='bg-white dark:bg-gray-800/60 rounded-xl p-5 md:p-6 border border-gray-200 dark:border-gray-700/80 shadow-sm hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all duration-300'>
                                        <h3 className='text-lg md:text-xl font-bold text-slate-800 dark:text-white leading-snug'>{title}</h3>
                                        <div className='flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 mb-3 text-sm'>
                                            <span className='text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1'>
                                                🏢 {company}
                                            </span>
                                            <span className='text-slate-400 dark:text-gray-500 flex items-center gap-1'>
                                                📍 {location}
                                            </span>
                                        </div>

                                        {/* Highlights */}
                                        {highlights && highlights.length > 0 && (
                                            <ul className='text-slate-600 dark:text-gray-300 text-sm leading-relaxed space-y-1.5'>
                                                {highlights.map((highlight, idx) => (
                                                    <li key={idx} className='flex items-start gap-2'>
                                                        <span className='mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-indigo-400'></span>
                                                        <span>{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Experience;
