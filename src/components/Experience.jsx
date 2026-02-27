import { useState, useEffect } from 'react';
import { experiences } from '../data/experiences';
import AnimateOnScroll from './AnimateOnScroll';
import { SkeletonCard } from './Skeleton';

/**
 * Experience section displaying professional work history in timeline format
 * @returns {JSX.Element} Experience component
 */
const Experience = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section name="experience" className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 w-full min-h-fit text-slate-800 dark:text-white py-20">
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
                <div className='pb-8 mt-14'>
                    <p className='text-4xl font-bold inline border-b-4 border-indigo-500'>Experience</p>
                    <p className='py-6 text-slate-500 dark:text-gray-400'>My professional journey and roles</p>
                </div>

                {loading ? (
                    <div className='px-4 md:px-12 space-y-6' aria-busy="true">
                        {[1, 2, 3].map(i => <SkeletonCard key={i} lines={4} />)}
                    </div>
                ) : (
                    <div className='relative px-4 md:px-12'>
                        {/* Vertical line for timeline */}
                        <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 to-slate-400 dark:to-gray-600'></div>
                        
                        {experiences.map(({ id, title, company, location, duration, highlights, current }, index) => (
                            <AnimateOnScroll key={id}>
                                <div className={`relative mb-12 md:mb-16 ${index % 2 !== 0 ? 'md:pr-1/2' : 'md:pl-1/2'}`}>
                                    {/* Timeline content */}
                                    <div className={`flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                        {/* Card */}
                                        <div className={`w-full md:w-5/12 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 p-6 rounded-lg shadow-md dark:shadow-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                            {/* Duration badge */}
                                            <div className='flex items-center gap-2 mb-3'>
                                                <span className='inline-block bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full'>
                                                    {duration}
                                                </span>
                                                {current && (
                                                    <span className='inline-block bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded-full'>
                                                        Current
                                                    </span>
                                                )}
                                            </div>
                                            
                                            <h3 className='text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-2'>{title}</h3>
                                            <p className='text-indigo-600 dark:text-indigo-400 font-semibold mb-1 flex items-center'>
                                                <span className='mr-2'>🏢</span>
                                                {company}
                                            </p>
                                            <p className='text-slate-500 dark:text-gray-400 text-sm mb-3 flex items-center'>
                                                <span className='mr-2'>📍</span>
                                                {location}
                                            </p>
                                            
                                            {/* Highlights as bullet points */}
                                            {highlights && highlights.length > 0 && (
                                                <ul className='text-slate-600 dark:text-gray-300 text-sm leading-relaxed space-y-2 mt-4'>
                                                    {highlights.map((highlight, idx) => (
                                                        <li key={idx} className='flex items-start'>
                                                            <span className='text-indigo-500 mr-2 mt-1 flex-shrink-0'>•</span>
                                                            <span>{highlight}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                        
                                        {/* Timeline dot */}
                                        <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg shadow-indigo-500/30'></div>
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
